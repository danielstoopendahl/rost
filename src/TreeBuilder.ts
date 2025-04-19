import { AbstractParseTreeVisitor } from 'antlr4ng';
import { ProgContext, LetStmtContext, ExpressionContext, SequenceContext, AssignmentContext, WhileStmtContext, BreakStmtContext, IfStmtContext, BlockContext, FunDeclContext, ParamListContext, ReturnStatementContext, ContinueStmtContext, FunctionCallExpressionContext, ExpressionStatementContext } from './parser/grammar/RostParser';
import { RostVisitor } from './parser/grammar/RostVisitor';

export class RostJSONBuilder extends AbstractParseTreeVisitor<object> implements RostVisitor<object> {

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
            type: ctx.TYPE().getText(),
            mut: ctx.mutable() !== null,
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

    visitBreakStmt(ctx: BreakStmtContext): object{
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

    visitExpressionStatement(ctx: ExpressionStatementContext): object{
        return {
            tag: "expr_stmt",
            expr: this.visit(ctx.expression() as ExpressionContext)
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
        let funType = {
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

    visitReturnStatement(ctx: ReturnStatementContext): object{
        return {
            tag: "ret",
            expr: this.visit(ctx.expression())
        }
    }

}