// Typed Source abuses multiplications
// to denote lists of argument types
// example: number * number > bool
// is the type of a function that takes
// two number arguments and returns a bool
const transform_types = t => 
    t.tag === 'binop' && t.sym === '*'
    ? [...transform_types(t.frst),
       ...transform_types(t.scnd)]
    : [transform_type(t)]

// the token null is used to denote an 
// empty list of argument types
// example: null > number
// is the type of a nullary function
// that returns a number
const transform_types_or_null = t =>
    (t.tag === 'lit' && t.val === null)
    ? []
    : transform_types(t)

// transform_type takes a Source expression
// and returns the corresponding type
// Example: 
// transform_type(ast_to_json(parse(
//.   "number * number > bool;")));
// returns
// {"tag": "fun", 
//  "args": ["number", "number"], 
//  "res": "bool"}
const transform_type = t =>
    t.tag === 'nam' &&
    (t.sym === 'number' ||
     t.sym === 'bool' ||
     t.sym === 'undefined')
    ? t.sym
    : t.tag === 'binop' && t.sym === '>'
    ? {tag:'fun',
       args: transform_types_or_null(t.frst),
       res: transform_type(t.scnd)}
    : Error('illegal type expression')

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
    typeof t == "string"
    ? t 
    : // t is function type
     "(" + unparse_types(t.args) + " > " + 
     unparse_type(t.res) + ")"

const equal_types = (ts1, ts2) =>
   unparse_types(ts1) === unparse_types(ts2)
   
const equal_type = (t1, t2) =>
   unparse_type(t1) === unparse_type(t2)

// combine type and subsequent variable declarations
// into type-annotated variable declarations
const annotate_sequence = (seq) => {
    const len = seq.length
    const result = []
    let j = 0 // write pointer into result array
    // loop through array
    // use each type declaration ('assmt')
    // as a type annotation for the subsequent
    // constant declaration
    for (let i = 0; i < len; i++) {
        if (seq[i].tag === 'assmt') {
           const sym = seq[i].sym
           const t = transform_type(seq[i].expr)
           const next = seq[++i]
           if (next.tag === 'const' && 
                 next.sym === sym) {
               next.type = t
               next.expr = annotate(next.expr)
               result[j++] = next
           } else if (next.tag === 'fun' &&
                 next.sym === sym) {
               next.type = t
               next.body = annotate(next.body)
               result[j++] = next                
           } else {
               Error(
                   'declaration of name ' + sym +
                   ' expected after its type declaration')
           }
        } else if (seq[i].tag === 'const') {
            Error(
               'type declaration of name ' + seq[i].sym +
               ' before declaration missing')
        } else {
           result[j++] = annotate(seq[i])
        }
    }
    return result
}

// display(cmd, "CMD:");

// annotate_comp has the annotation
// functions for each component tag
const annotate_comp = {
lit:
    comp => comp,
nam:
    comp => comp,
unop:
    comp => ({tag: 'unop',
               sym: comp.sym,
               frst: annotate(comp.frst)}),
binop:
    comp => ({tag: 'binop',
              sym: comp.sym,
              frst: annotate(comp.frst),
              scnd: annotate(comp.scnd)}),
log:
    comp => annotate(comp.sym == '&&' 
                ? {tag: 'cond_expr', 
                   pred: comp.frst, 
                   cons: comp.scnd,
                   alt: {tag: 'lit', val: false}}
                : {tag: 'cond_expr',  
                   pred: comp.frst,
                   cons: {tag: 'lit', val: true}, 
                   alt: comp.scnd}),
cond_expr: 
    comp => ({tag: 'cond_expr', 
              pred: annotate(comp.pred), 
              cons: annotate(comp.cons),
              alt: annotate(comp.alt)}),
cond_stmt: 
    comp => ({tag: 'cond_stmt', 
              pred: annotate(comp.pred), 
              cons: annotate(comp.cons),
              alt: annotate(comp.alt)}),
app:
    comp => ({tag: 'app',
              fun: annotate(comp.fun),
              args: comp.args.map(annotate)}),
seq: 
    comp => ({tag: 'seq',
              stmts: annotate_sequence(comp.stmts)}),
blk:
    comp => ({tag: 'blk',
              body: annotate(comp.body)}),
ret:
    comp => ({tag: 'ret',
              expr: annotate(comp.expr)}),
fun:
    comp => annotate({tag:  'fun',
                       sym:  comp.sym,
                       expr: {tag: 'lam', 
                       prms: comp.prms, 
                       body: comp.body}})
}

// annotate declarations with
// the preceding type declaration
const annotate = comp =>
    annotate_comp[comp.tag](comp)

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
    ? Error("unbound name: " + x)
    : e[0].hasOwnProperty(x) 
    ? e[0][x]
    : lookup_type(x, e[1])

const extend_type_environment = (xs, ts, e) => {
    if (ts.length > xs.length) 
        Error('too few parameters in function declaration')
    if (ts.length < xs.length) 
        Error('too many parameters in function declaration')
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
                  ? "number"
                  : typeof comp.val === "boolean" 
                  ? "bool"
                  : typeof comp.val === "undefined" 
                  ? "undefined"
                  : Error("unknown literal: " + comp.val),
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
cond_expr: 
    (comp, te) => {
        const t0 = type(comp.pred, te)
        if (t0 !== "bool") 
            Error("expected predicate type: bool, " +
                  "actual predicate type: " + 
                  unparse_type(t0))
        const t1 = type(comp.cons, te)
        const t2 = type(comp.alt, te)
        if (equal_type(t1, t2)) {
            return t1
        } else {
            Error("types of branches not matching; " +
                  "consequent type: " + 
                  unparse_type(t1) + ", " +
                  "alternative type: " + 
                  unparse_type(t2))
        }
    },
// outside of function bodies,
// conditional statements are 
// treated as conditional expressions
cond_stmt: 
    (comp, te) => {
        comp.tag = "cond_expr"
        return type(comp, te)
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
            Error("type Error in function declaration; " +
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
            Error("type Error in application; function " +
                      "expression must have function type; " +
                      "actual type: " + unparse_type(fun_type))
        const expected_arg_types = fun_type.args
        const actual_arg_types = comp.args.map(e => type(e, te))
        if (equal_types(actual_arg_types, expected_arg_types)) {
            return fun_type.res
        } else {
            Error("type Error in application; " +
                  "expected argument types: " + 
                  unparse_types(expected_arg_types) + ", " +
                  "actual argument types: " + 
                  unparse_types(actual_arg_types))
        }
    },
"const":
    (comp, te) => {
        const declared_type = lookup_type(comp.sym, te)
        const actual_type = type(comp.expr, te)
        if (equal_type(actual_type, declared_type)) {
            return "undefined"
        } else {
            Error("type Error in constant declaration; " + 
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
                         comp => comp.tag === "const" ||
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
cond_stmt: 
    (comp, te) => {
        const t0 = type(comp.pred, te)
        if (t0 !== "bool") 
            Error("expected predicate type: bool, " +
                  "actual predicate type: " + 
                  unparse_type(t0))
        const t1 = type_fun_body(comp.cons, te)
        const t2 = type_fun_body(comp.alt, te)
        if (equal_type(t1, t2)) {
            return t1
        } else {
            Error("types of branches not matching; " +
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
                         comp => comp.tag === "const")
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
    try {
         return unparse_type(type(annotate(json_program), global_type_environment))
    } catch(x) {
        throw new Error(`Type Error: ${x}`)
    }
}
