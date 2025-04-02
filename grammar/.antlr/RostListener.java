// Generated from c:/Users/nilsa/Documents/NUS/CS4215/rost/grammar/Rost.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link RostParser}.
 */
public interface RostListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link RostParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(RostParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(RostParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(RostParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(RostParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(RostParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(RostParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#sequence}.
	 * @param ctx the parse tree
	 */
	void enterSequence(RostParser.SequenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#sequence}.
	 * @param ctx the parse tree
	 */
	void exitSequence(RostParser.SequenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#letStmt}.
	 * @param ctx the parse tree
	 */
	void enterLetStmt(RostParser.LetStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#letStmt}.
	 * @param ctx the parse tree
	 */
	void exitLetStmt(RostParser.LetStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#mutable}.
	 * @param ctx the parse tree
	 */
	void enterMutable(RostParser.MutableContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#mutable}.
	 * @param ctx the parse tree
	 */
	void exitMutable(RostParser.MutableContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#assignment}.
	 * @param ctx the parse tree
	 */
	void enterAssignment(RostParser.AssignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#assignment}.
	 * @param ctx the parse tree
	 */
	void exitAssignment(RostParser.AssignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#funDecl}.
	 * @param ctx the parse tree
	 */
	void enterFunDecl(RostParser.FunDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#funDecl}.
	 * @param ctx the parse tree
	 */
	void exitFunDecl(RostParser.FunDeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#paramList}.
	 * @param ctx the parse tree
	 */
	void enterParamList(RostParser.ParamListContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#paramList}.
	 * @param ctx the parse tree
	 */
	void exitParamList(RostParser.ParamListContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#param}.
	 * @param ctx the parse tree
	 */
	void enterParam(RostParser.ParamContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#param}.
	 * @param ctx the parse tree
	 */
	void exitParam(RostParser.ParamContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(RostParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(RostParser.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#ifStmt}.
	 * @param ctx the parse tree
	 */
	void enterIfStmt(RostParser.IfStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#ifStmt}.
	 * @param ctx the parse tree
	 */
	void exitIfStmt(RostParser.IfStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#whileStmt}.
	 * @param ctx the parse tree
	 */
	void enterWhileStmt(RostParser.WhileStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#whileStmt}.
	 * @param ctx the parse tree
	 */
	void exitWhileStmt(RostParser.WhileStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#breakStatement}.
	 * @param ctx the parse tree
	 */
	void enterBreakStatement(RostParser.BreakStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#breakStatement}.
	 * @param ctx the parse tree
	 */
	void exitBreakStatement(RostParser.BreakStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#continueStmt}.
	 * @param ctx the parse tree
	 */
	void enterContinueStmt(RostParser.ContinueStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#continueStmt}.
	 * @param ctx the parse tree
	 */
	void exitContinueStmt(RostParser.ContinueStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(RostParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(RostParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#functionCallExpression}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCallExpression(RostParser.FunctionCallExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#functionCallExpression}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCallExpression(RostParser.FunctionCallExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link RostParser#argList}.
	 * @param ctx the parse tree
	 */
	void enterArgList(RostParser.ArgListContext ctx);
	/**
	 * Exit a parse tree produced by {@link RostParser#argList}.
	 * @param ctx the parse tree
	 */
	void exitArgList(RostParser.ArgListContext ctx);
}