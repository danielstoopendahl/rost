// **********************
// using arrays as stacks
// **********************/

// add values destructively to the end of 
// given array; return the array
const push = (array, ...items) => {
    // fixed by Liew Zhao Wei, see Discussion 5
    for (let item of items) {
        array.push(item)
    }
    return array 
}

// return the last element of given array
// without changing the array
const peek = (array, address) =>
    array.slice(-1 - address)[0]

// *************************
// HEAP
// *************************/

// HEAP is an array of bytes (JS ArrayBuffer)

const word_size = 8

// heap_make allocates a heap of given size 
// (in bytes) and returns a DataView of that, 
// see https://www.javascripture.com/DataView
const heap_make = words => {
    const data = new ArrayBuffer(words * word_size)
    const view = new DataView(data)
    return view
}

// for convenience, HEAP is global variable
// initialized in initialize_machine()
let HEAP 
let heap_size

// free is the next free index in the free list
let free 

// for debugging: display all bits of the heap
const heap_display = (s, conductor) => {
    conductor.sendOutput("heap")
    for (let i = 0; i < heap_size; i++) {
        conductor.sendOutput(i, word_to_string(heap_get(i)) + " " +
                JSON.stringify(heap_get(i)))
    }
}

const mark = (r) => {
        if (heap_get_byte_at_offset(r, 7) !== 1) {
            heap_set_byte_at_offset(r, 7, 1)
            let nbr_children = heap_get_number_of_children(r)
            for (let i = 0; i <= nbr_children; i++) {
                let child = heap_get_child(r, i)
                mark(child)
            }
        }
}

const sweep = () => {
    let addr = heap_size - node_size
    while (addr > 5 * node_size) {
        if (heap_get_byte_at_offset(addr, 7) !== 1){
            heap_set(addr, free)
            free = addr
        }else{
            heap_set_byte_at_offset(addr, 7, 0)
        }
        addr = addr - node_size
    }
}

const mark_and_sweep = () => {
    mark(E)
    for (let i = 0; i < RTS.length; i++){
        let r = RTS[i];
        mark(r)
    }
    sweep()
}
// heap_allocate allocates a given number of words 
// on the heap and marks the first word with a 1-byte tag.
// the last two bytes of the first word indicate the number
// of children (addresses) that follow the tag word:
// [1 byte tag, 4 bytes payload (depending on node type), 
//  2 bytes #children, 1 byte unused] 
// Note: payload depends on the type of node

const size_offset = 5

const node_size = 10

const heap_allocate = (tag, size) => {
        if (size > node_size) {
            throw new Error("limitation: nodes cannot be larger than 10 words")
        }
	// a value of -1 in free indicates the
	// end of the free list
	    
        if (free === -1) {
            mark_and_sweep()
            if(free === -1){
                throw new Error("heap memory exhausted")
            }
        }
        const address = free 
        free = heap_get(free)
        HEAP.setInt8(address * word_size, tag)
        HEAP.setUint16(address * word_size + 
                       size_offset,
                       size)
        return address
    }


// get and set a word in heap at given address
const heap_get = address =>
    HEAP.getFloat64(address * word_size)

const heap_set = (address, x) =>
    HEAP.setFloat64(address * word_size, x)

// child index starts at 0
const heap_get_child = (address, child_index) =>
    heap_get(address + 1 + child_index)

const heap_set_child = (address, child_index, value) =>
    heap_set(address + 1 + child_index, value)

const heap_get_tag = address => 
    HEAP.getInt8(address * word_size)

const heap_get_size = address => 
    HEAP.getUint16(address * word_size + 
                              size_offset)

// the number of children is one less than the size 
// except for number nodes:
//                 they have size 2 but no children
const heap_get_number_of_children = address =>
    heap_get_tag(address) === Number_tag
    ? 0
    : heap_get_size(address) - 1

// access byte in heap, using address and offset
const heap_set_byte_at_offset =
    (address, offset, value) => 
    HEAP.setUint8(address * word_size + offset, value)
        
const heap_get_byte_at_offset =
    (address, offset) => 
    HEAP.getUint8(address * word_size + offset)
     
// access byte in heap, using address and offset
const heap_set_2_bytes_at_offset =
    (address, offset, value) => 
    HEAP.setUint16(address * word_size + offset, value)
        
const heap_get_2_bytes_at_offset =
    (address, offset) => 
    HEAP.getUint16(address * word_size + offset)

// for debugging: return a string that shows the bits
// of a given word
const word_to_string = word => {
    const buf = new ArrayBuffer(8);
    const view = new DataView(buf);
    view.setFloat64(0, word);
    let binStr = '';
    for (let i = 0; i < 8; i++) {
        binStr += ('00000000' + 
                   view.getUint8(i).toString(2)).slice(-8) + 
                   ' ';
    }
    return binStr
}

// values 

// All values are allocated on the heap as nodes. The first 
// word of the node is a header, and the first byte of the 
// header is a tag that identifies the type of node

// a little trick: tags are all negative so that we can use
// the first 4 bytes of the header as forwarding address
// in garbage collection: If the (signed) Int32 is
// non-negative, the node has been forwarded already.

const False_tag          = 0
const True_tag           = 1
const Number_tag         = 2
const Null_tag           = 3
const Unassigned_tag     = 4
const Undefined_tag      = 5
const Blockframe_tag     = 6
const Callframe_tag      = 7
const Closure_tag        = 8
const Frame_tag          = 9  // 0000 1001
const Environment_tag    = 10 // 0000 1010


// all values (including literals) are allocated on the heap.

// We allocate canonical values for 
// true, false, undefined, null, and unassigned
// and make sure no such values are created at runtime

// boolean values carry their value (0 for false, 1 for true)
// in the byte following the tag

let False
const is_False = address => 
    heap_get_tag(address) === False_tag
let True
const is_True = address => 
    heap_get_tag(address) === True_tag

const is_Boolean = address => 
    is_True(address) || is_False(address)

let Null
const is_Null = address => 
    heap_get_tag(address) === Null_tag

let Unassigned
const is_Unassigned = address =>
    heap_get_tag(address) === Unassigned_tag

let Undefined
const is_Undefined = address =>
    heap_get_tag(address) === Undefined_tag

// closure
// [1 byte tag, 1 byte arity, 2 bytes pc, 1 byte unused, 
//  2 bytes #children, 1 byte unused] 
// followed by the address of env
// note: currently bytes at offset 4 and 7 are not used;
//   they could be used to increase pc and #children range

const heap_allocate_Closure = (arity, pc, env) => {
    const address = heap_allocate(Closure_tag, 2)
    heap_set_byte_at_offset(address, 1, arity)
    heap_set_2_bytes_at_offset(address, 2, pc)
    heap_set(address + 1, env)
    return address
}

const heap_get_Closure_pc = address =>
heap_get_2_bytes_at_offset(address, 2)

const heap_get_Closure_environment = address =>
heap_get_child(address, 0)

const is_Closure = address =>
heap_get_tag(address) === Closure_tag

// block frame 
// [1 byte tag, 4 bytes unused, 
//  2 bytes #children, 1 byte unused] 

const heap_allocate_Blockframe = env => {
    const address = heap_allocate(Blockframe_tag, 2)
    heap_set(address + 1, env)
    return address
}

const heap_get_Blockframe_environment = address =>
heap_get_child(address, 0)


// call frame 
// [1 byte tag, 1 byte unused, 2 bytes pc, 
//  1 byte unused, 2 bytes #children, 1 byte unused] 
// followed by the address of env

const heap_allocate_Callframe = (env, pc) => {
    const address = heap_allocate(Callframe_tag, 2)
    heap_set_2_bytes_at_offset(address, 2, pc)
    heap_set(address + 1, env)
    return address
}

const heap_get_Callframe_environment = address =>
heap_get_child(address, 0)

const heap_get_Callframe_pc = address =>
heap_get_2_bytes_at_offset(address, 2)

const is_Callframe = address => 
heap_get_tag(address) === Callframe_tag

// environment frame
// [1 byte tag, 4 bytes unused, 
//  2 bytes #children, 1 byte unused] 
// followed by the addresses of its values

const heap_allocate_Frame = number_of_values => 
heap_allocate(Frame_tag, number_of_values + 1)

const heap_Frame_display = (address, conductor) => {
    conductor.sendOutput("", "Frame:")
    const size = heap_get_number_of_children(address)
    conductor.sendOutput(size, "frame size:")
    for (let i = 0; i < size; i++) {
        conductor.sendOutput(i, "value address:")
        const value = 
              heap_get_child(address, i)
        conductor.sendOutput(value, "value:")
        conductor.sendOutput(word_to_string(value), "value word:")
    }
}
    
// environment
// [1 byte tag, 4 bytes unused, 
//  2 bytes #children, 1 byte unused] 
// followed by the addresses of its frames

const heap_allocate_Environment = number_of_frames => 
   heap_allocate(Environment_tag, number_of_frames + 1)

// access environment given by address 
// using a "position", i.e. a pair of 
// frame index and value index
const heap_get_Environment_value = 
(env_address, position) => {
    const [frame_index, value_index] = position
    const frame_address =
        heap_get_child(env_address, frame_index)
    return heap_get_child(
               frame_address, value_index)
}

const heap_set_Environment_value =
(env_address, position, value) => {
    const [frame_index, value_index] = position
    const frame_address =
        heap_get_child(env_address, frame_index)
    heap_set_child(
        frame_address, value_index, value)
}


// extend a given environment by a new frame: 
// create a new environment that is bigger by 1
// frame slot than the given environment.
// copy the frame Addresses of the given 
// environment to the new environment.
// enter the address of the new frame to end 
// of the new environment
const heap_Environment_extend =
    (frame_address, env_address) => {
        const old_size = 
            heap_get_size(env_address)
        const new_env_address =
            heap_allocate_Environment(old_size)
        let i
        for (i = 0; i < old_size - 1; i++) {
            heap_set_child(
                new_env_address, i,
                heap_get_child(env_address, i))
        }
        heap_set_child(new_env_address, i, frame_address)
        return new_env_address
    }

// for debuggging: display environment
const heap_Environment_display = (env_address, conductor) => {
        const size = heap_get_number_of_children(
                         env_address)
        conductor.sendOutput("", "Environment:")
        conductor.sendOutput(size, "environment size:")
        for (let i = 0; i < size; i++) {
            conductor.sendOutput(i, "frame index:")
            const frame = heap_get_child(env_address, i)
            heap_Frame_display(frame, conductor)
        }
    }
    

// number
// [1 byte tag, 4 bytes unused, 
//  2 bytes #children, 1 byte unused] 
// followed by the number, one word
// note: #children is 0

const heap_allocate_Number = n => {
        const number_address = heap_allocate(Number_tag, 2)
        heap_set(number_address + 1, n)
        return number_address
    }

const is_Number = address => 
    heap_get_tag(address) === Number_tag

//
// conversions between addresses and JS_value
//

const address_to_JS_value = x => 
    is_Boolean(x)
    ? (is_True(x) ? true : false)
    : is_Number(x)
    ? heap_get(x + 1)
    : is_Undefined(x)
    ? undefined
    : is_Unassigned(x) 
    ? "<unassigned>" 
    : is_Null(x) 
    ? null 
    : is_Closure(x)
    ? "<closure>"
    : "unknown word tag: " + word_to_string(x)

const JS_value_to_address = x => 
    typeof x == "boolean"
    ? (x ? True : False)
    : typeof x == "number"
    ? heap_allocate_Number(x)
    : typeof x == "undefined"
    ? Undefined
    : "unknown word tag: " + word_to_string(x)

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

// ********
// compiler
// ********

// scanning out the declarations from (possibly nested)
// sequences of statements, ignoring blocks
const scan_for_locals = comp => 
    comp.tag === 'seq'
    ? comp.stmts.reduce((acc, x) => 
                        acc.concat(scan_for_locals(x)),
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

// wc: write counter
let wc
// instrs: instruction array
let instrs
    
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
        const goto_instruction = { tag: 'GOTO', addr:-1}
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
        
        instrs[wc++] = {tag: 'RESET'}
        
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

// **********************
// operators and builtins
// **********************/

const binop_microcode = {
    '+': (x, y)   => (typeof x == "number" && typeof y == "number")
                    ? x + y
                    : (typeof x == "string" && typeof y == "string")  
                    ? x + y 
                    : new Error("+ expects two numbers" + 
                                    " or two strings, got: " + x + " " + y),
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
const apply_binop = (op, v2, v1) => 
    JS_value_to_address(binop_microcode[op]
                        (address_to_JS_value(v1),
                         address_to_JS_value(v2)))
	 
const unop_microcode = {
    '-unary': x => - x,
    '!'     : x => ! x
}

const apply_unop = (op, v) => 
    JS_value_to_address(unop_microcode[op]
                        (address_to_JS_value(v)))

// *******
// machine
// *******

// machine registers
let OS   // JS array (stack) of words (Addresses,
//        word-encoded literals, numbers)
let PC   // JS number
let E    // heap Address
let RTS  // JS array (stack) of Addresses
HEAP // (declared above already)

const microcode = {
LDC:
    instr => 
    push(OS, JS_value_to_address(instr.val)),
UNOP:
    instr =>
    push(OS, apply_unop(instr.sym, OS.pop())),
BINOP:
    instr =>
    push(OS, 
    apply_binop(instr.sym, OS.pop(), OS.pop())),
POP: 
    instr =>
    OS.pop(),
JOF: 
    instr => 
    PC = is_True(OS.pop()) ? PC : instr.addr,
GOTO:
    instr => 
    PC = instr.addr,
ENTER_SCOPE: 
    instr => {
    push(RTS, heap_allocate_Blockframe(E))
    const frame_address = heap_allocate_Frame(instr.num)
    E = heap_Environment_extend(frame_address, E)
    for (let i = 0; i < instr.num; i++) {
        heap_set_child(frame_address, i, Unassigned)
    }
    },
EXIT_SCOPE:
    instr => 
    E = heap_get_Blockframe_environment(RTS.pop()),
LD: 
    instr => {
    const val = heap_get_Environment_value(E, instr.pos)
    if (is_Unassigned(val)) 
    throw new Error("access of unassigned variable")
    push(OS, val)
    },
ASSIGN: 
    instr =>
    heap_set_Environment_value(E, instr.pos, peek(OS,0)),
LDF: 
    instr => {
    const closure_address = 
            heap_allocate_Closure(
                instr.arity, instr.addr, E)
    push(OS, closure_address)
    },
CALL: 
    instr => {
    const arity = instr.arity
    const fun = peek(OS, arity)
    const new_PC = heap_get_Closure_pc(fun)
    const new_frame = heap_allocate_Frame(arity)
    for (let i = arity - 1; i >= 0; i--) {
    heap_set_child(new_frame, i, OS.pop())
    }
    OS.pop() // pop fun
    push(RTS, heap_allocate_Callframe(E, PC))
    E = heap_Environment_extend(
        new_frame, 
        heap_get_Closure_environment(fun))
    PC = new_PC
    },
RESET: 
    instr => {
    // keep popping...
    const top_frame = RTS.pop()
    if (is_Callframe(top_frame)) {
    // ...until top frame is a call frame
    PC = heap_get_Callframe_pc(top_frame)
    E = heap_get_Callframe_environment(top_frame)
    } else {
    PC--
    }    
    }
}

// running the machine

// set up registers, including free list
function initialize_machine(heapsize_words) {
    OS = []
    PC = 0
    RTS = []
    HEAP = heap_make(heapsize_words)
    heap_size = heapsize_words
    // initialize free list:
    // every free node carries the address
    // of the next free node as its first word
    let i = 0
    for (i = 0; i <= heapsize_words - node_size; i = i + node_size) {
        heap_set(i, i + node_size)
    }
    // the empty free list is represented by -1
    heap_set(i - node_size, -1)
    free = 0
    PC = 0
    E = heap_allocate_Environment(0)
}

function run(conductor, heapsize_words) {
    initialize_machine(heapsize_words)
    //print_code(instrs)
    while (!(instrs[PC].tag === 'DONE')) {
        conductor.sendOutput("next instruction: ")
        conductor.sendOutput(instrs[PC].tag, "instr: ")
        conductor.sendOutput(PC, "PC: ")
        print_OS("\noperands:            ", conductor);
        print_RTS("\nRTS:            ", conductor);
        const instr = instrs[PC++]
        microcode[instr.tag](instr)
    }
    return address_to_JS_value(peek(OS, 0))
}

export function go(json, heapsize_words, conductor) {
    compile_program(json)
    conductor.sendOutput(JSON.stringify(instrs));
    const result = run(conductor, heapsize_words)
    return result
}

const print_RTS = (x, conductor) => {
    for (let i = 0; i < RTS.length; i = i + 1) {
        const f = RTS[i]
        conductor.sendOutput("", i + ": " + JSON.stringify(f))
    }
}

const print_OS = (x, conductor) => {
    conductor.sendOutput("", x)
    for (let i = 0; i < OS.length; i = i + 1) {
        const val = OS[i]
        conductor.sendOutput("", JSON.stringify(i) + ": " +
                    address_to_JS_value(val) 
                    )
    }
}