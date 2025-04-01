// Generated from grammar/Rost.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `RostParser`.
 */
export class RostListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `RostParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.sequence`.
     * @param ctx the parse tree
     */
    enterSequence?: (ctx: SequenceContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.sequence`.
     * @param ctx the parse tree
     */
    exitSequence?: (ctx: SequenceContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.letStmt`.
     * @param ctx the parse tree
     */
    enterLetStmt?: (ctx: LetStmtContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.letStmt`.
     * @param ctx the parse tree
     */
    exitLetStmt?: (ctx: LetStmtContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.mutable`.
     * @param ctx the parse tree
     */
    enterMutable?: (ctx: MutableContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.mutable`.
     * @param ctx the parse tree
     */
    exitMutable?: (ctx: MutableContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.assignment`.
     * @param ctx the parse tree
     */
    enterAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.assignment`.
     * @param ctx the parse tree
     */
    exitAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.funDecl`.
     * @param ctx the parse tree
     */
    enterFunDecl?: (ctx: FunDeclContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.funDecl`.
     * @param ctx the parse tree
     */
    exitFunDecl?: (ctx: FunDeclContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.paramList`.
     * @param ctx the parse tree
     */
    enterParamList?: (ctx: ParamListContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.paramList`.
     * @param ctx the parse tree
     */
    exitParamList?: (ctx: ParamListContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.param`.
     * @param ctx the parse tree
     */
    enterParam?: (ctx: ParamContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.param`.
     * @param ctx the parse tree
     */
    exitParam?: (ctx: ParamContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.returnStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.returnStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.ifStmt`.
     * @param ctx the parse tree
     */
    enterIfStmt?: (ctx: IfStmtContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.ifStmt`.
     * @param ctx the parse tree
     */
    exitIfStmt?: (ctx: IfStmtContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.elseBranch`.
     * @param ctx the parse tree
     */
    enterElseBranch?: (ctx: ElseBranchContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.elseBranch`.
     * @param ctx the parse tree
     */
    exitElseBranch?: (ctx: ElseBranchContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.whileStmt`.
     * @param ctx the parse tree
     */
    enterWhileStmt?: (ctx: WhileStmtContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.whileStmt`.
     * @param ctx the parse tree
     */
    exitWhileStmt?: (ctx: WhileStmtContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.breakStatement`.
     * @param ctx the parse tree
     */
    enterBreakStatement?: (ctx: BreakStatementContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.breakStatement`.
     * @param ctx the parse tree
     */
    exitBreakStatement?: (ctx: BreakStatementContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.expressionStatement`.
     * @param ctx the parse tree
     */
    enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.expressionStatement`.
     * @param ctx the parse tree
     */
    exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.functionCallExpression`.
     * @param ctx the parse tree
     */
    enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.functionCallExpression`.
     * @param ctx the parse tree
     */
    exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RostParser.argList`.
     * @param ctx the parse tree
     */
    enterArgList?: (ctx: ArgListContext) => void;
    /**
     * Exit a parse tree produced by `RostParser.argList`.
     * @param ctx the parse tree
     */
    exitArgList?: (ctx: ArgListContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

