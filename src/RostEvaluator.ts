import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from 'antlr4ng';
import { RostLexer } from './parser/grammar/RostLexer';
import { RostParser } from './parser/grammar/RostParser';
import { RostVisitor } from './parser/grammar/RostVisitor';
import { go } from './RostVM';
import { check_type } from './TypeChecker';
import { RostJSONBuilder } from "./TreeBuilder";


export class RostEvaluator extends BasicEvaluator {
    private executionCount: number;
    private visitor: RostJSONBuilder;

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
        this.visitor = new RostJSONBuilder();
    }

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
            
            this.conductor.sendOutput(`${go(json_program, 400, this.conductor)}`);

            
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