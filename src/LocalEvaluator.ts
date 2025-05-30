import { CharStream, CommonTokenStream } from 'antlr4ng';
import { RostLexer } from './parser/grammar/RostLexer';
import { RostParser } from './parser/grammar/RostParser';
import { go } from './RostVM';
import { check_type } from './TypeChecker';
import { RostJSONBuilder } from "./TreeBuilder";


export function evaluate(chunk: string) {
        const visitor: RostJSONBuilder = new RostJSONBuilder();


        const inputStream = CharStream.fromString(chunk);
        const lexer = new RostLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new RostParser(tokenStream);
        // Parse the input
        const tree = parser.prog();
        
        // Create JSON parse tree
        const json_program = visitor.visit(tree);
        //console.log(`JSON tree: ${JSON.stringify(json_program)}`);

        const program_type = check_type(json_program)
        //console.log(`Program type: ${program_type}`)
        
        return go(json_program, 1600)

        

}
