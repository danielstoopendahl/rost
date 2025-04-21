import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from 'antlr4ng';
import { RostLexer } from './parser/grammar/RostLexer';
import { RostParser } from './parser/grammar/RostParser';
import { go } from './RostVM';
import { check_type } from './TypeChecker';
import { RostJSONBuilder } from "./TreeBuilder";

/**
 * The `RostEvaluator` class is responsible for evaluating Rost code chunks.
 * It parses the input, generates a JSON representation of the program,
 * performs type checking, and executes the program using the Rost virtual machine.
 */
export class RostEvaluator extends BasicEvaluator {
    private executionCount: number;
    private visitor: RostJSONBuilder;

    /**
     * Constructs a new `RostEvaluator` instance.
     * @param conductor - The conductor plugin used for communication with the REPL.
     */
    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
        this.visitor = new RostJSONBuilder();
    }

    /**
     * Evaluates a chunk of Rost code.
     * This involves parsing the input, generating a JSON parse tree,
     * performing type checking, and executing the program.
     * @param chunk - The Rost code to evaluate.
     * @returns A promise that resolves when evaluation is complete.
     */
    async evaluateChunk(chunk: string): Promise<void> {
        this.executionCount++;
        try {
            // Create the lexer and parser
            const inputStream = CharStream.fromString(chunk);
            const lexer = new RostLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new RostParser(tokenStream);
            // Parse the input
            const tree = parser.prog();
            
            // Create JSON parse tree
            const json_program = this.visitor.visit(tree);
            this.conductor.sendOutput(`JSON tree: ${JSON.stringify(json_program)}`);

            const program_type = check_type(json_program)
            this.conductor.sendOutput(`Program type: ${program_type}`)
            
            this.conductor.sendOutput(`${go(json_program, 400)}`);

            
            // Send the result to the REPL
            //this.conductor.sendOutput(`Result of expression: ${result}`);
        }  catch (error) {
            // Handle errors and send them to the REPL
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}