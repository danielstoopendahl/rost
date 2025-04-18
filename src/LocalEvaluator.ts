import * as fs from 'fs';
import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from 'antlr4ng';
import { RostLexer } from './parser/grammar/RostLexer';
import { RostParser } from './parser/grammar/RostParser';
import { go } from './RostVM';
import { check_type } from './TypeChecker';
import { RostJSONBuilder } from "./TreeBuilder";


export class RostEvaluator{
    private visitor: RostJSONBuilder = new RostJSONBuilder();

    evaluate() {
        try {
            // Create the lexer and parser
            const chunk = fs.readFileSync(0, 'utf-8'); // 0 refers to stdin

            const inputStream = CharStream.fromString(chunk);
            const lexer = new RostLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new RostParser(tokenStream);
            // Parse the input
            const tree = parser.prog();
            
            // Create JSON parse tree
            const json_program = this.visitor.visit(tree);
            console.log(`JSON tree: ${JSON.stringify(json_program)}`);

            const program_type = check_type(json_program)
            console.log(`Program type: ${program_type}`)
            
            console.log(`${go(json_program, 400)}`);

            
        }  catch (error) {
            // Handle errors and send them to the REPL
            if (error instanceof Error) {
                console.log(`Error: ${error.message}`);
            } else {
                console.log(`Error: ${String(error)}`);
            }
        }
    }
}