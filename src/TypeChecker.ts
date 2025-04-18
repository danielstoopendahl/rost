// turn a given type into a string
// Example:
// unparse_type({"tag": "fun", 
//               "args": ["number", "number"], 
//               "res": "bool"})
// returns
// "(number, number > bool)"
const unparse_types = ts =>
   ts.length === 0 
   ? "null"
   : ts.reduce((s, t) => s === "" 
                         ? unparse_type(t) 
                         : s + ", " + unparse_type(t), "")
const unparse_type = t =>
    typeof t === "string"
    ? t 
    : // t is function type
     "(" + unparse_types(t.args) + " -> " + 
     unparse_type(t.res) + ")"

const equal_types = (ts1, ts2) =>
   unparse_types(ts1) === unparse_types(ts2)
   
const equal_type = (t1, t2) =>
   unparse_type(t1) === unparse_type(t2)



const error = (msg: string) => {
    throw new Error(msg)
}
/* *****************
 * type environments
 * *****************/

// Type frames are JavaScript objects that map 
// symbols (strings) to types.
const unary_arith_type =
    { tag: "fun", args: ["number"], 
      res: "number" }
    
const binary_arith_type =
    { tag: "fun", args: ["number", "number"], 
      res: "number" }

const number_comparison_type =
    { tag: "fun", args: ["number", "number"], 
      res: "bool" }

const binary_bool_type =
    { tag: "fun", args: ["bool"], 
      res: "bool" }
      
const unary_bool_type =
    { tag: "fun", args: ["bool"], 
      res: "bool" }
      
const global_type_frame = {
    "undefined": "undefined",
    "+": binary_arith_type,
    "-": binary_arith_type,
    "*": binary_arith_type,
    "/": binary_arith_type,
    "<": number_comparison_type,
    ">": number_comparison_type,
    "<=": number_comparison_type,
    ">=": number_comparison_type,
    "===": number_comparison_type,
    "&&": binary_bool_type,
    "||": binary_bool_type,
    "-unary": unary_arith_type,
    "!": unary_bool_type
}

// A type environment is null or a pair 
// whose head is a frame and whose tail 
// is a type environment.
const empty_type_environment = null
const global_type_environment = [global_type_frame, empty_type_environment]

const lookup_type = (x, e) =>
    e === null
    ? error("unbound name: " + x)
    : e[0].hasOwnProperty(x) 
    ? e[0][x]
    : lookup_type(x, e[1])

const extend_type_environment = (xs, ts, e) => {
    if (ts.length > xs.length) 
        error('too few parameters in function declaration')
    if (ts.length < xs.length) 
        error('too many parameters in function declaration')
    const new_frame = {}
    for (let i = 0; i < xs.length; i++) 
        new_frame[xs[i]] = ts[i]
    return [new_frame, e]
}

// type_comp has the typing
// functions for each component tag
const type_comp = {
lit:
    (comp, te) => typeof comp.val === "number" 
                  ? "i32"
                  : typeof comp.val === "boolean" 
                  ? "bool"
                  : typeof comp.val === "undefined" 
                  ? "undefined"
                  : error("unknown literal: " + comp.val),
nam:
    (comp, te) => lookup_type(comp.sym, te),
unop:
    (comp, te) => type({tag: 'app',
                        fun: {tag: 'nam', sym: comp.sym},
                        args: [comp.frst]}, te),
binop:
    (comp, te) => type({tag: 'app',
                        fun: {tag: 'nam', sym: comp.sym},
                        args: [comp.frst, comp.scnd]}, te),
log:
    (comp, te) => type({tag: 'app',
                        fun: {tag: 'nam', sym: comp.sym},
                        args: [comp.frst, comp.scnd]}, te),
cond: 
    (comp, te) => {
        const t0 = type(comp.pred, te)
        if (t0 !== "bool") 
            error("expected predicate type: bool, " +
                  "actual predicate type: " + 
                  unparse_type(t0))
        const t1 = type(comp.cons, te)
        const t2 = type(comp.alt, te)
        if (equal_type(t1, t2)) {
            return t1
        } else {
            error("types of branches not matching; " +
                  "consequent type: " + 
                  unparse_type(t1) + ", " +
                  "alternative type: " + 
                  unparse_type(t2))
        }
    },

fun:
    (comp, te) => {
        const extended_te = extend_type_environment(
                         comp.prms,
                         comp.type.args,
                         te)
        const body_type = type_fun_body(comp.body, extended_te)
        if (equal_type(body_type, comp.type.res)) {
            return "undefined"
        } else {
            error("type Error in function declaration; " +
                      "declared return type: " +
                      unparse_type(comp.type.res) + ", " +
                      "actual return type: " + 
                      unparse_type(body_type))
        }
    },
app:
    (comp, te) => {
        const fun_type = type(comp.fun, te)
        if (fun_type.tag !== "fun") 
            error("type Error in application; function " +
                      "expression must have function type; " +
                      "actual type: " + unparse_type(fun_type))
        const expected_arg_types = fun_type.args
        const actual_arg_types = comp.args.map(e => type(e, te))
        if (equal_types(actual_arg_types, expected_arg_types)) {
            return fun_type.res
        } else {
            error("type Error in application; " +
                  "expected argument types: " + 
                  unparse_types(expected_arg_types) + ", " +
                  "actual argument types: " + 
                  unparse_types(actual_arg_types))
        }
    },
let:
    (comp, te) => {
        const declared_type = lookup_type(comp.sym, te)
        const actual_type = type(comp.expr, te)
        if (equal_type(actual_type, declared_type)) {
            return actual_type
        } else {
            error("type Error in constant declaration; " + 
                      "declared type: " +
                      unparse_type(declared_type) + ", " +
                      "actual type: " + 
                      unparse_type(actual_type))
        }
    },
seq: 
    (comp, te) => {
        const component_types = comp.stmts.map(
                                    s => type(s, te))
        return component_types.length === 0
               ? "undefined"
               : component_types[component_types.length - 1]
    },
blk:
    (comp, te) => {
        // scan out declarations
        const decls = comp.body.stmts.filter(
                         comp => comp.tag === "let" ||
                                 comp.tag === "fun")
        const extended_te = extend_type_environment(
                         decls.map(comp => comp.sym),
                         decls.map(comp => comp.type),
                         te)
        return type(comp.body, extended_te)
    },
ret:
    (comp, te) => comp
}

const type = (comp, te) =>
    type_comp[comp.tag](comp, te)

// type_fun_body_stmt has the typing
// functions for function body statements
// for each component tag
const type_fun_body_stmt = {
cond: 
    (comp, te) => {
        const t0 = type(comp.pred, te)
        if (t0 !== "bool") 
            error("expected predicate type: bool, " +
                  "actual predicate type: " + 
                  unparse_type(t0))
        const t1 = type_fun_body(comp.cons, te)
        const t2 = type_fun_body(comp.alt, te)
        if (equal_type(t1, t2)) {
            return t1
        } else {
            error("types of branches not matching; " +
                  "consequent type: " + 
                  unparse_type(t1) + ", " +
                  "alternative type: " + 
                  unparse_type(t2))
        }
    },
seq: 
    (comp, te) => {
        for (const stmt of comp.stmts) {
             const stmt_type = type_fun_body(stmt, te)
             if (equal_type(stmt_type, "undefined")) {
             } else {
                 return stmt_type
             }
        }
        return "undefined"
    },
blk:
    (comp, te) => {
        // scan out declarations
        const decls = comp.body.stmts.filter(
                         comp => comp.tag === "let")
        const extended_te = extend_type_environment(
                         decls.map(comp => comp.sym),
                         decls.map(comp => comp.type),
                         te)
        return type_fun_body(comp.body, extended_te)
    },
ret:
    (comp, te) => type(comp.expr, te)
}

const type_fun_body = (comp, te) => {
    const handler = type_fun_body_stmt[comp.tag]
    if (handler) {
        return handler(comp, te)
    } else {
        type(comp, te)
        return "undefined"
    }
}


export const check_type = (json_program) => {
    return unparse_type(type(json_program, global_type_environment))
    
}
