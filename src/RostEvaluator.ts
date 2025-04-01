import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from 'antlr4ng';
import { RostLexer } from './parser/grammar/RostLexer';
import { ProgContext, RostParser , LetStmtContext, ExpressionContext, SequenceContext } from './parser/grammar/RostParser';
import { RostVisitor } from './parser/grammar/RostVisitor';

class RostEvaluatorVisitor extends AbstractParseTreeVisitor<object> implements RostVisitor<object> {

    private conductor: IRunnerPlugin
    constructor(conductor: IRunnerPlugin) {
        super()
        this.conductor = conductor
    }

    visitProg(ctx: ProgContext): object {
        this.conductor.sendOutput(`in prog`);
        return {tag: "blk", body: this.visit(ctx.sequence())};
    }

    visitSequence(ctx: SequenceContext): object {
        let stmts = []
        this.conductor.sendOutput(`in statement`);

         // Iterate through all statement children
        for (let i = 0; i < ctx.statement().length; i++) {
            stmts.push(this.visit(ctx.statement(i)));
        }

        return {
            tag: "seq",
            stmts: stmts
        }
    }

    visitLetStmt(ctx: LetStmtContext): object {
        this.conductor.sendOutput(`in let`);
        return {
            tag: "let",
            id: ctx.IDENTIFIER().getText(),
            expr: this.visit(ctx.expression() as ExpressionContext)
        }
    }

    visitExpression(ctx: ExpressionContext): object {
        this.conductor.sendOutput(`in expression`);

        if (ctx.getChildCount() === 1) {
            // Literal case
            return {
                tag: "lit",
                val: ctx.getText(),
            }
        } else if (ctx.getChildCount() === 2) {
            // Unary operator case
            return {
                tag: "unop",
                sym: ctx.getChild(0),
                frst: this.visit(ctx.getChild(1) as ExpressionContext)
            }
        } else if (ctx.getChildCount() === 3) {
            if (ctx.getChild(0).getText() === '(' && ctx.getChild(2).getText() === ')') {
                // Parenthesized expression
                return this.visit(ctx.getChild(1) as ExpressionContext);
            } else {
                // Binary operation
                return {
                    tag: "binop",
                    sym: ctx.getChild(1),
                    frst: this.visit(ctx.getChild(0) as ExpressionContext),
                    scnd: this.visit(ctx.getChild(2) as ExpressionContext)
                }
              
            }
        }
    }


}

export class RostEvaluator extends BasicEvaluator {
    private executionCount: number;
    private visitor: RostEvaluatorVisitor;

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
        this.visitor = new RostEvaluatorVisitor(conductor);
    }

    async evaluateChunk(chunk: string): Promise<void> {
        this.executionCount++;
        try {
            // Create the lexer and parser
            const inputStream = CharStream.fromString(chunk);
            const lexer = new RostLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new RostParser(tokenStream);
            this.conductor.sendOutput(`first2`);
            // Parse the input
            const tree = parser.prog();
            
            // Create JSON parse tree
            const json_program = this.visitor.visit(tree);
            this.conductor.sendOutput(`JSON tree: ${JSON.stringify(json_program)}`);

            // TODO: generate microcode

            // TODO run microcode
            
            // Send the result to the REPL
            //this.conductor.sendOutput(`Result of expression: ${result}`);
        }  catch (error) {
            // Handle errors and send them to the REPL
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error1: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error2: ${String(error)}`);
            }
        }
    }
}