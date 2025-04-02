import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from 'antlr4ng';
import { RostLexer } from './parser/grammar/RostLexer';
import { ProgContext, RostParser , LetStmtContext, ExpressionContext, SequenceContext, AssignmentContext, WhileStmtContext, BreakStatementContext, IfStmtContext, BlockContext, FunDeclContext, ParamListContext, ReturnStatementContext, ContinueStmtContext, FunctionCallExpressionContext } from './parser/grammar/RostParser';
import { RostVisitor } from './parser/grammar/RostVisitor';
import { go } from './RostVM'

class RostEvaluatorVisitor extends AbstractParseTreeVisitor<object> implements RostVisitor<object> {

    private conductor: IRunnerPlugin

    constructor(conductor: IRunnerPlugin) {
        super()
        // Added this for debugging
        this.conductor = conductor
    }

    visitProg(ctx: ProgContext): object {
        return {tag: "blk", body: this.visit(ctx.sequence())};
    }

    visitSequence(ctx: SequenceContext): object {
        let stmts = []

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
        return {
            tag: "let",
            sym: ctx.IDENTIFIER().getText(),
            expr: this.visit(ctx.expression() as ExpressionContext)
        }
    }

    visitAssignment(ctx: AssignmentContext): object {
        return {
            tag: "assmt",
            sym: ctx.IDENTIFIER().getText(),
            expr: this.visit(ctx.expression() as ExpressionContext)
        }
    }

    visitExpression(ctx: ExpressionContext): object {
        if (ctx.functionCallExpression() != null){
            const nctx = ctx.getChild(0) as FunctionCallExpressionContext
            const fun = {"tag": nctx.IDENTIFIER().getText(), "sym": "is_function"}
            let argList = []
            if (nctx.argList() != null){
                for (let i = 0; i < nctx.argList().expression().length; i++) {
                    argList.push(this.visit(nctx.argList().expression(i)));
                }
            }
            return {
                tag: "app",
                fun: fun,
                args: argList
            }
        }else if (ctx.getChildCount() === 1) {
            if (ctx.IDENTIFIER() != null){
                return {
                    tag: "nam", 
                    sym: ctx.getText()
                }
            }
            return {
                tag: "lit",
                val: ctx.getText(),
            }
        } else if (ctx.getChildCount() === 2) {
            // Unary operator case
            return {
                tag: "unop",
                sym: ctx.getChild(0).getText(),
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
                    sym: ctx.getChild(1).getText(),
                    frst: this.visit(ctx.getChild(0) as ExpressionContext),
                    scnd: this.visit(ctx.getChild(2) as ExpressionContext)
                }
              
            }
        }
    }

    visitWhileStmt(ctx: WhileStmtContext): object{
        return {
            tag: "while",
            pred: this.visit(ctx.expression()),
            body: this.visit(ctx.block())
        }   
    }

    visitBreakStmt(ctx: BreakStatementContext): object{
        return {
            tag: "break"
        }
    }
    
    visitContinueStmt(ctx: ContinueStmtContext) : object{
        return {
            tag: "cont"
        }
    }

    visitIfStmt(ctx: IfStmtContext): object{
        return {
            tag: "cond", 
            pred: this.visit(ctx.expression() as ExpressionContext),
            cons: this.visit(ctx.block(0) as BlockContext),
            alt: this.visit(ctx.block(1) as BlockContext)
        }

    }
    visitBlock(ctx: BlockContext): object{
        return {
            tag: "blk",
            body: this.visit(ctx.sequence())
        }
    }

    visitFunDecl(ctx: FunDeclContext): object {
        let params = []

         // Iterate through all statement children
        for (let i = 0; i < ctx.paramList().param().length; i++) {
            params.push(ctx.paramList().param(i).getText());
        }
        return {
            tag: "fun",
            sym: ctx.IDENTIFIER().getText(),
            prms: params,
            body: this.visit(ctx.block()),
        }
    }

    visitReturnStatement(ctx: ReturnStatementContext): object{
        return {
            tag: "ret",
            expr: this.visit(ctx.expression())
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
            // Parse the input
            const tree = parser.prog();
            
            // Create JSON parse tree
            const json_program = this.visitor.visit(tree);
            this.conductor.sendOutput(`JSON tree: ${JSON.stringify(json_program)}`);

            // TODO: generate microcode
            
            this.conductor.sendOutput(`Program result ${go(json_program)}`);

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