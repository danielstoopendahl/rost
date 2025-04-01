// Generated from grammar/Rost.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./RostParser.js";
import { StatementContext } from "./RostParser.js";
import { BlockContext } from "./RostParser.js";
import { SequenceContext } from "./RostParser.js";
import { LetStmtContext } from "./RostParser.js";
import { MutableContext } from "./RostParser.js";
import { AssignmentContext } from "./RostParser.js";
import { FunDeclContext } from "./RostParser.js";
import { ParamListContext } from "./RostParser.js";
import { ParamContext } from "./RostParser.js";
import { ReturnStatementContext } from "./RostParser.js";
import { IfStmtContext } from "./RostParser.js";
import { ElseBranchContext } from "./RostParser.js";
import { WhileStmtContext } from "./RostParser.js";
import { BreakStatementContext } from "./RostParser.js";
import { ExpressionContext } from "./RostParser.js";
import { ExpressionStatementContext } from "./RostParser.js";
import { FunctionCallExpressionContext } from "./RostParser.js";
import { ArgListContext } from "./RostParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RostParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class RostVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `RostParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.sequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequence?: (ctx: SequenceContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.letStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetStmt?: (ctx: LetStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.mutable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMutable?: (ctx: MutableContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.funDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunDecl?: (ctx: FunDeclContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.paramList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamList?: (ctx: ParamListContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam?: (ctx: ParamContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.returnStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.ifStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStmt?: (ctx: IfStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.elseBranch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElseBranch?: (ctx: ElseBranchContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.whileStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStmt?: (ctx: WhileStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.breakStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakStatement?: (ctx: BreakStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.expressionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.functionCallExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RostParser.argList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgList?: (ctx: ArgListContext) => Result;
}

