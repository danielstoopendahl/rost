

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



/* ********
* compiler
* ********/

// wc: write counter
let wc
// instrs: instruction array
let instrs

// scanning out the declarations from (possibly nested)
// sequences of statements, ignoring blocks
const scan = comp => 
    comp.tag === 'seq'
    ? comp.stmts.reduce((acc, x) => acc.concat(scan(x)),
                        [])
    : ['let', 'const', 'fun'].includes(comp.tag)
    ? [comp.sym]
    : []

const compile_sequence = seq => {
    if (seq.length === 0) 
        return instrs[wc++] = {tag: "LDC", val: undefined}
    let first = true
    for (let comp of seq) {
        first ? first = false
            : instrs[wc++] = {tag: 'POP'}
        compile(comp)
    }
}

const compile_comp = {
lit:
    comp => {
        instrs[wc++] = { tag: "LDC", val: comp.val }
    },
nam:
    comp => {
        instrs[wc++] = { tag: "LD", sym: comp.sym }
    },
unop:
    comp => {
        compile(comp.frst)
        instrs[wc++] = {tag: 'UNOP', sym: comp.sym}
    },
binop:
    comp => {
        compile(comp.frst)
        compile(comp.scnd)
        instrs[wc++] = {tag: 'BINOP', sym: comp.sym}
    },
log:
    comp => {
        compile(comp.sym == '&&' 
                ? {tag: 'cond_expr', 
                pred: comp.frst, 
                cons: {tag: 'lit', val: true},
                alt: comp.scnd}
                : {tag: 'cond_expr',  
                pred: comp.frst,
                cons: comp.scnd, 
                alt: {tag: 'lit', val: false}})
    },
cond: 
    comp => {
        compile(comp.pred)
        const jump_on_false_instruction = {tag: 'JOF'}
        instrs[wc++] = jump_on_false_instruction
        compile(comp.cons)
        const goto_instruction = { tag: 'GOTO' }
        instrs[wc++] = goto_instruction;
        const alternative_address = wc;
        //jump_on_false_instruction.addr = alternative_address;
        compile(comp.alt)
       // goto_instruction.addr = wc
    },
app: 
    comp => {
        compile(comp.fun)
        for (let arg of comp.args) {
            compile(arg)
        }
        instrs[wc++] = {tag: 'CALL', arity: comp.args.length}
    },
assmt: 
    comp => {
        compile(comp.expr)
        instrs[wc++] = {tag: 'ASSIGN', sym: comp.sym}
    },
lam:
    comp => {
        instrs[wc++] = {tag: 'LDF', prms: comp.prms, addr: wc + 1};
        // jump over the body of the lambda expression
        const goto_instruction = {tag: 'GOTO'}
        instrs[wc++] = goto_instruction
        compile(comp.body)
        instrs[wc++] = {tag: 'LDC', val: undefined}
        instrs[wc++] = {tag: 'RESET'}
       //goto_instruction.addr = wc;
    },
seq: 
    comp => compile_sequence(comp.stmts),
blk:
    comp => {
        const locals = scan(comp.body)
        instrs[wc++] = {tag: 'ENTER_SCOPE', syms: locals}
        compile(comp.body)
        instrs[wc++] = {tag: 'EXIT_SCOPE'}
    },
let: 
    comp => {
        compile(comp.expr)
        instrs[wc++] = {tag: 'ASSIGN', sym: comp.sym}
    },
const:
    comp => {
        compile(comp.expr)
        instrs[wc++] = {tag: 'ASSIGN', sym: comp.sym}
    },
ret:
    comp => {
        compile(comp.expr)
        if (comp.expr.tag === 'app') {
            // tail call: turn CALL into TAILCALL
            instrs[wc - 1].tag = 'TAIL_CALL'
        } else {
            instrs[wc++] = {tag: 'RESET'}
        }
    },
fun:
    comp => {
        compile(
            {tag:  'const',
            sym:  comp.sym,
            expr: {tag: 'lam', prms: comp.prms, body: comp.body}})
    }
}

// compile component into instruction array instrs, 
// starting at wc (write counter)
const compile = comp => {
    compile_comp[comp.tag](comp)
    instrs[wc] = {tag: 'DONE'}
} 

// compile program into instruction array instrs, 
// after initializing wc and instrs
const compile_program = program => {
    wc = 0
    instrs = []
    compile(program)
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
    '+': (x, y)   => (is_number(x) && is_number(y)) ? x + y : 
                     (is_string(x) && is_string(y)) ? x + y : 
                     Error(`+ expects two numbers or two strings, got: ${typeof x} ${typeof y}`),
    // todo: add error handling to JS for the following, too
    '*':   (x, y) => x * y,
    '-':   (x, y) => x - y,
    '/':   (x, y) => x / y,
    '%':   (x, y) => x % y,
    '<':   (x, y) => x < y,
    '<=':  (x, y) => x <= y,
    '>=':  (x, y) => x >= y,
    '>':   (x, y) => x > y,
    '===': (x, y) => x === y,
    '!==': (x, y) => x !== y
}

// v2 is popped before v1
const apply_binop = (op, v2, v1) => binop_microcode[op](v1, v2)

const unop_microcode = {
    '-unary': x => - x,
    '!'     : x => is_boolean(x) 
                ? ! x 
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
        push(RTS, {tag: 'BLOCK_FRAME', env: E})
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
        push(OS, {tag: 'CLOSURE', prms: instr.prms, 
                addr: instr.addr, env: E})
    },
CALL: 
    instr => {
        const arity = instr.arity
        let args = []
        for (let i = arity - 1; i >= 0; i--)
            args[i] = OS.pop()
        const sf = OS.pop()
       
        push(RTS, {tag: 'CALL_FRAME', addr: PC + 1, env: E})
        E = extend(sf.prms, args, sf.env)
        PC = sf.addr
    },
RESET : 
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
    while (! (instrs[PC].tag === 'DONE')) {
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

export function go(json, conductor){
    compile_program(json)
    conductor.sendOutput(JSON.stringify(instrs));
    const result = run(conductor)
    return result
}