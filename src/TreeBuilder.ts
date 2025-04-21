import { AbstractParseTreeVisitor } from 'antlr4ng';
import { ProgContext, LetStmtContext, ExpressionContext, SequenceContext, AssignmentContext, WhileStmtContext, BreakStmtContext, IfStmtContext, BlockContext, FunDeclContext, ParamListContext, ReturnStatementContext, ContinueStmtContext, FunctionCallExpressionContext, ExpressionStatementContext } from './parser/grammar/RostParser';
import { RostVisitor } from './parser/grammar/RostVisitor';
/**
 * A visitor class that converts a parse tree into a JSON representation of the program.
 */
export class RostJSONBuilder extends AbstractParseTreeVisitor<object> implements RostVisitor<object> {

    /**
     * Visits the root program node.
     * @param ctx - The program context.
     * @returns A JSON object representing the program.
     */
    visitProg(ctx: ProgContext): object {
        return {tag: "blk", body: this.visit(ctx.sequence())};
    }

    /**
     * Visits a sequence of statements.
     * @param ctx - The sequence context.
     * @returns A JSON object representing the sequence of statements.
     */
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

    /**
     * Visits a let statement.
     * @param ctx - The let statement context.
     * @returns A JSON object representing the let statement.
     */
    visitLetStmt(ctx: LetStmtContext): object {
        return {
            tag: "let",
            sym: ctx.IDENTIFIER().getText(),
            type: ctx.TYPE().getText(),
            expr: this.visit(ctx.expression() as ExpressionContext)
        }
    }

    /**
     * Visits an assignment statement.
     * @param ctx - The assignment context.
     * @returns A JSON object representing the assignment statement.
     */
    visitAssignment(ctx: AssignmentContext): object {
        return {
            tag: "assmt",
            sym: ctx.IDENTIFIER().getText(),
            expr: this.visit(ctx.expression() as ExpressionContext)
        }
    }

    /**
     * Visits an expression.
     * Handles function calls, literals, unary and binary operations, and identifiers.
     * @param ctx - The expression context.
     * @returns A JSON object representing the expression.
     */
    visitExpression(ctx: ExpressionContext): object {
        if (ctx.functionCallExpression() != null){
            const nctx = ctx.getChild(0) as FunctionCallExpressionContext
            const fun = {"tag": "nam", "sym": nctx.IDENTIFIER().getText()}
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
                    isBorrow: false,
                    sym: ctx.getText()
                }
            }
            if (ctx.INT() != null){
                return {
                    tag: "lit",
                    type: "i32",
                    val: parseInt(ctx.getText())
                }
            }
            else if (ctx.BOOL() != null){
                return {
                    tag: "lit",
                    type: "bool",
                    val: ctx.getText() === "sant"
                }
            }else{
                throw new Error("Invalid literal")
            }
            

        } else if (ctx.getChildCount() === 2) {
            if (ctx.IDENTIFIER() != null){
                return {
                    tag: "nam", 
                    isBorrow: true,
                    sym: ctx.getChild(1).getText()
                }
            }
            // Unary operator case

            return {
                tag: "unop",
                sym: ctx.getChild(0).getText() === '!'? '!' : '-unary',
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

    /**
     * Visits a while statement.
     * @param ctx - The while statement context.
     * @returns A JSON object representing the while statement.
     */
    visitWhileStmt(ctx: WhileStmtContext): object{
        return {
            tag: "while",
            pred: this.visit(ctx.expression()),
            body: this.visit(ctx.block())
        }   
    }

    /**
     * Visits a break statement.
     * @param ctx - The break statement context.
     * @returns A JSON object representing the break statement.
     */
    visitBreakStmt(ctx: BreakStmtContext): object{
        return {
            tag: "break"
        }
    }
    
    /**
     * Visits a continue statement.
     * @param ctx - The continue statement context.
     * @returns A JSON object representing the continue statement.
     */
    visitContinueStmt(ctx: ContinueStmtContext) : object{
        return {
            tag: "cont"
        }
    }

    /**
     * Visits an if statement.
     * @param ctx - The if statement context.
     * @returns A JSON object representing the if statement.
     */
    visitIfStmt(ctx: IfStmtContext): object{
        return {
            tag: "cond", 
            pred: this.visit(ctx.expression() as ExpressionContext),
            cons: this.visit(ctx.block(0) as BlockContext),
            alt: this.visit(ctx.block(1) as BlockContext)
        }

    }

    /**
     * Visits an expression statement.
     * @param ctx - The expression statement context.
     * @returns A JSON object representing the expression statement.
     */
    visitExpressionStatement(ctx: ExpressionStatementContext): object{
        return {
            tag: "expr_stmt",
            expr: this.visit(ctx.expression() as ExpressionContext)
        }

    }

    /**
     * Visits a block of statements.
     * @param ctx - The block context.
     * @returns A JSON object representing the block.
     */
    visitBlock(ctx: BlockContext): object{
        return {
            tag: "blk",
            body: this.visit(ctx.sequence())
        }
    }

    /**
     * Visits a function declaration.
     * @param ctx - The function declaration context.
     * @returns A JSON object representing the function declaration.
     */
    visitFunDecl(ctx: FunDeclContext): object {
        let params = []
        let funType = {
            tag: "fun",
            res: ctx.TYPE().getText(),
            args: []
        }

         // Iterate through all statement children
        if (ctx.paramList() !== null){
            for (let i = 0; i < ctx.paramList().param().length; i++) {
                params.push(ctx.paramList().param(i).IDENTIFIER().getText());
                funType.args.push(ctx.paramList().param(i).TYPE().getText());
            }
        }
        return {
            tag: "fun",
            sym: ctx.IDENTIFIER().getText(),
            type: funType,
            mut: false,
            prms: params,
            body: this.visit(ctx.block()),
        }
    }

    /**
     * Visits a return statement.
     * @param ctx - The return statement context.
     * @returns A JSON object representing the return statement.
     */
    visitReturnStatement(ctx: ReturnStatementContext): object{
        return {
            tag: "ret",
            expr: this.visit(ctx.expression())
        }
    }

}