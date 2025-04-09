

/* **********************
* using arrays as stacks
* **********************/

// add values destructively to the end of 
// given array; return the array
const push = (array, ...items) => {
    array.splice(array.length, 0, ...items)
    return array
}

// return the last element of given array
// without changing the array
const peek = array =>
    array.slice(-1)[0]

// ************************
// compile-time environment
// ************************/
 
// a compile-time environment is an array of 
// compile-time frames, and a compile-time frame 
// is an array of symbols

// find the position [frame-index, value-index] 
// of a given symbol x
const compile_time_environment_position = (env, x) => {
    let frame_index = env.length
    while (value_index(env[--frame_index], x) === -1) {}
    return [frame_index, 
            value_index(env[frame_index], x)]
}

const value_index = (frame, x) => {
  for (let i = 0; i < frame.length; i++) {
    if (frame[i] === x) return i
  }
  return -1;
}


const compile_time_environment_extend = (vs, e) => {
    //  make shallow copy of e
    return push([...e], vs)
}

// compile-time frames only need synbols (keys), no values

const global_compile_environment = []

/* ********
* compiler
* ********/

// wc: write counter
let wc
// instrs: instruction array
let instrs

// scanning out the declarations from (possibly nested)
// sequences of statements, ignoring blocks
const scan_for_locals = comp =>
    comp.tag === 'seq'
        ? comp.stmts.reduce((acc, x) => acc.concat(scan_for_locals(x)),
            [])
        : ['let', 'const', 'fun'].includes(comp.tag)
            ? [comp.sym]
            : []

const compile_sequence = (seq, ce) => {
    if (seq.length === 0) 
        return instrs[wc++] = {tag: "LDC", val: undefined}
    let first = true
    for (let comp of seq) {
        first ? first = false
                : instrs[wc++] = {tag: 'POP'}
        compile(comp, ce)
    }
}

const compile_comp = {
    lit:
        (comp, ce) => {
            instrs[wc++] = { tag: "LDC", 
                             val: comp.val
            }
        },
    nam:
        // store precomputed position information in LD instruction
        (comp, ce) => {
            instrs[wc++] = { tag: "LD", 
                             sym: comp.sym,
                             pos: compile_time_environment_position(
                                      ce, comp.sym)
                            }
        },
    unop:
        (comp, ce) => {
            compile(comp.frst, ce)
            instrs[wc++] = {tag: 'UNOP', sym: comp.sym}
        },
    binop:
        (comp, ce) => {
            compile(comp.frst, ce)
            compile(comp.scnd, ce)
            instrs[wc++] = {tag: 'BINOP', sym: comp.sym}
        },
    log:
        (comp, ce) => {
            compile(comp.sym == '||' 
                    ? {tag: 'cond_expr', 
                       pred: comp.frst, 
                       cons: {tag: 'lit', val: true},
                       alt: comp.scnd}
                    : {tag: 'cond_expr',  
                       pred: comp.frst,
                       cons: comp.scnd, 
                       alt: {tag: 'lit', val: false}},
                    ce)
        },
    cond: 
        (comp, ce) => {
            compile(comp.pred, ce)
            const jump_on_false_instruction = {tag: 'JOF', addr:-1}
            instrs[wc++] = jump_on_false_instruction
            compile(comp.cons, ce)
            const goto_instruction = { tag: 'GOTO', addr:-1 }
            instrs[wc++] = goto_instruction;
            const alternative_address = wc;
            jump_on_false_instruction.addr = alternative_address;
            compile(comp.alt, ce)
            goto_instruction.addr = wc
        },
    while:
        (comp, ce) => {
            const loop_start = wc
            compile(comp.pred, ce)
            const jump_on_false_instruction = {tag: 'JOF', addr:-1}
            instrs[wc++] = jump_on_false_instruction
            compile(comp.body, ce)
            instrs[wc++] = {tag: 'POP'}
            instrs[wc++] = {tag: 'GOTO', addr: loop_start}
            jump_on_false_instruction.addr = wc
            instrs[wc++] = {tag: 'LDC', val: undefined}
        }, 
    app:
        (comp, ce) => {
            compile(comp.fun, ce)
            for (let arg of comp.args) {
                compile(arg, ce)
            }
            instrs[wc++] = {tag: 'CALL', arity: comp.args.length}
        },
    assmt:
        // store precomputed position info in ASSIGN instruction
        (comp, ce) => {
            compile(comp.expr, ce)
            instrs[wc++] = {tag: 'ASSIGN', 
                            pos: compile_time_environment_position(
                                     ce, comp.sym)}
        },
    lam:
        (comp, ce) => {
            instrs[wc++] = {tag: 'LDF', 
                            arity: comp.arity, 
                            addr: wc + 1};
            // jump over the body of the lambda expression
            const goto_instruction = {tag: 'GOTO', addr:-1}
            instrs[wc++] = goto_instruction
            // extend compile-time environment
            compile(comp.body,
                    compile_time_environment_extend(
                        comp.prms, ce))
            instrs[wc++] = {tag: 'LDC', val: undefined}
            instrs[wc++] = {tag: 'RESET'}
            goto_instruction.addr = wc;
        },
    seq: 
        (comp, ce) => compile_sequence(comp.stmts, ce),
    blk:
        (comp, ce) => {
            const locals = scan_for_locals(comp.body)
            instrs[wc++] = {tag: 'ENTER_SCOPE', num: locals.length}
            compile(comp.body,
                    // extend compile-time environment
                    compile_time_environment_extend(
                        locals, ce))     
            instrs[wc++] = {tag: 'EXIT_SCOPE'}
        },
    let: 
        (comp, ce) => {
            compile(comp.expr, ce)
            instrs[wc++] = {tag: 'ASSIGN', 
                            pos: compile_time_environment_position(
                                     ce, comp.sym)}
        },
    const:
        (comp, ce) => {
            compile(comp.expr, ce)
            instrs[wc++] = {tag: 'ASSIGN', 
                            pos: compile_time_environment_position(
                                     ce, comp.sym)}
        },
    ret:
        (comp, ce) => {
            compile(comp.expr, ce)
            if (comp.expr.tag === 'app') {
                // tail call: turn CALL into TAILCALL
                instrs[wc - 1].tag = 'TAIL_CALL'
            } else {
                instrs[wc++] = {tag: 'RESET'}
            }
        },
    fun:
        (comp, ce) => {
            compile(
                {tag:  'const',
                 sym:  comp.sym,
                 expr: {tag: 'lam', 
                        prms: comp.prms, 
                        body: comp.body}},
                ce)
        }
    }

// compile component into instruction array instrs, 
// starting at wc (write counter)
const compile = (comp, ce) => {
    compile_comp[comp.tag](comp, ce)
} 

// compile program into instruction array instrs, 
// after initializing wc and instrs
const compile_program = program => {
    wc = 0
    instrs = []    
    compile(program, global_compile_environment)
    instrs[wc] = {tag: 'DONE'}
} 

/* *************************
* values of the machine
* *************************/

// for numbers, strings, booleans, undefined, null
// we use the value directly

// closures aka function values
const is_closure = x =>
    x !== null &&
    typeof x === "object" &&
    x.tag === 'CLOSURE'

const is_builtin = x =>
    x !== null &&
    typeof x === "object" &&
    x.tag == 'BUILTIN'

// catching closure and builtins to get short displays
const value_to_string = x =>
    is_closure(x)
        ? '<closure>'
        : is_builtin(x)
            ? '<builtin: ' + x.sym + '>'
            : String(x)

/* **********************
* operators and builtins
* **********************/

const is_string = x => typeof x === 'string'
const is_number = x => typeof x === 'number'
const is_boolean = x => typeof x === 'boolean'

const binop_microcode = {
    '+': (x, y) => (is_number(x) && is_number(y)) ? x + y :
        (is_string(x) && is_string(y)) ? x + y :
            Error(`+ expects two numbers or two strings, got: ${typeof x} ${typeof y}`),
    // todo: add error handling to JS for the following, too
    '*': (x, y) => x * y,
    '-': (x, y) => x - y,
    '/': (x, y) => x / y,
    '%': (x, y) => x % y,
    '<': (x, y) => x < y,
    '<=': (x, y) => x <= y,
    '>=': (x, y) => x >= y,
    '>': (x, y) => x > y,
    '===': (x, y) => x === y,
    '!==': (x, y) => x !== y
}

// v2 is popped before v1
const apply_binop = (op, v2, v1) => binop_microcode[op](v1, v2)

const unop_microcode = {
    '-unary': x => - x,
    '!': x => is_boolean(x)
        ? !x
        : Error(`! expects boolean, found: ${x}`)
}

const apply_unop = (op, v) => unop_microcode[op](v)



/* ************
* environments
* ************/
function pair(first: any, second: any): [any, any] {
    return [first, second];
}

// Returns the first element of the pair
function head(pair: [any, any]): any {
    return pair[0];
}

// Returns the second element of the pair
function tail(pair: [any, any]): any {
    return pair[1];
}

// Checks if the value is null (empty list or null value)
function is_null(value: any): boolean {
    return value === null;
}

// Frames are objects that map symbols (strings) to values.

const global_frame = {}


// An environment is null or a pair whose head is a frame 
// and whose tail is an environment.
const empty_environment = null
const global_environment = pair(global_frame, empty_environment)

const lookup = (x, e) => {
    if (is_null(e))
        Error(`unbound name: ${x}`)
    if (head(e).hasOwnProperty(x)) {
        const v = head(e)[x]
        if (is_unassigned(v))
            Error(`unassigned name:`)
        return v
    }
    return lookup(x, tail(e))
}

const assign_value = (x, v, e) => {
    if (is_null(e))
        Error(`unbound name: ${x}`)
    if (head(e).hasOwnProperty(x)) {
        head(e)[x] = v
    } else {
        assign_value(x, v, tail(e))
    }
}

const extend = (xs, vs, e) => {
    if (vs.length > xs.length) Error('too many arguments')
    if (vs.length < xs.length) Error('too few arguments')
    const new_frame = {}
    for (let i = 0; i < xs.length; i++)
        new_frame[xs[i]] = vs[i]
    return pair(new_frame, e)
}

// At the start of executing a block, local 
// variables refer to unassigned values.
const unassigned = { tag: 'unassigned' }

const is_unassigned = v => {
    return v !== null &&
        typeof v === "object" &&
        v.hasOwnProperty('tag') &&
        v.tag === 'unassigned'
}

/* *******
* machine
* *******/

let OS
let PC
let E
let RTS

const microcode = {
    LDC:
        instr => {
            PC++
            push(OS, instr.val);
        },
    UNOP:
        instr => {
            PC++
            push(OS, apply_unop(instr.sym, OS.pop()))
        },
    BINOP:
        instr => {
            PC++
            push(OS, apply_binop(instr.sym, OS.pop(), OS.pop()))
        },
    POP:
        instr => {
            PC++
            OS.pop()
        },
    JOF:
        instr => {
            PC = OS.pop() ? PC + 1 : instr.addr
        },
    GOTO:
        instr => {
            PC = instr.addr
        },
    ENTER_SCOPE:
        instr => {
            PC++
            push(RTS, { tag: 'BLOCK_FRAME', env: E })
            const locals = instr.syms
            const unassigneds = locals.map(_ => unassigned)
            E = extend(locals, unassigneds, E)
        },
    EXIT_SCOPE:
        instr => {
            PC++
            E = RTS.pop().env
        },
    LD:
        instr => {
            PC++
            push(OS, lookup(instr.sym, E))
        },
    ASSIGN:
        instr => {
            PC++
            assign_value(instr.sym, peek(OS), E)
        },
    LDF:
        instr => {
            PC++
            push(OS, {
                tag: 'CLOSURE', prms: instr.prms,
                addr: instr.addr, env: E
            })
        },
    CALL:
        instr => {
            const arity = instr.arity
            let args = []
            for (let i = arity - 1; i >= 0; i--)
                args[i] = OS.pop()
            const sf = OS.pop()

            push(RTS, { tag: 'CALL_FRAME', addr: PC + 1, env: E })
            E = extend(sf.prms, args, sf.env)
            PC = sf.addr
        },
    RESET:
        instr => {
            // keep popping...
            const top_frame = RTS.pop()
            if (top_frame.tag === 'CALL_FRAME') {
                // ...until top frame is a call frame
                PC = top_frame.addr
                E = top_frame.env
            }
        }
}

function run(conductor) {
    OS = []
    PC = 0
    E = global_environment
    RTS = []
    //print_code(instrs)
    while (!(instrs[PC].tag === 'DONE')) {
        conductor.sendOutput("next instruction: ")
        conductor.sendOutput(instrs[PC].tag, "instr: ")
        conductor.sendOutput(PC, "PC: ")
        //print_OS("\noperands:            ");
        //print_RTS("\nRTS:            ");
        const instr = instrs[PC]
        microcode[instr.tag](instr)
    }
    return peek(OS)
}

export function go(json, conductor) {
    compile_program(json)
    conductor.sendOutput(JSON.stringify(instrs));
    const result = run(conductor)
    return result
}