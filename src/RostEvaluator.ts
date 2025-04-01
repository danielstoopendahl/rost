import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from 'antlr4ng';
import { RostLexer } from './parser/grammar/RostLexer';
import { ProgContext, RostParser , LetStmtContext} from './parser/grammar/RostParser';
import { RostVisitor } from './parser/grammar/RostVisitor';

class RostEvaluatorVisitor extends AbstractParseTreeVisitor<object> implements RostVisitor<object> {

    visitProg(ctx: ProgContext): object {
        return {tag: "blk", body: this.visit(ctx.sequence())};
    }

    visitLetStmt(ctx: LetStmtContext): object {
        return {
            tag: "let",
            id: ctx._id,
            expr: this.visit(ctx._expr)
        }
    }


}

export class RostEvaluator extends BasicEvaluator {
    private executionCount: number;
    private visitor: RostEvaluatorVisitor;

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
        this.visitor = new RostEvaluatorVisitor();
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

            // TODO: generate microcode

            // TODO run microcode
            
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