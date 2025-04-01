// Generated from /home/daniel/l/PLI/rost/grammar/Rost.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class RostParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, IDENTIFIER=31, 
		TYPE=32, BOOL=33, INT=34, WS=35;
	public static final int
		RULE_prog = 0, RULE_statement = 1, RULE_block = 2, RULE_sequence = 3, 
		RULE_letStmt = 4, RULE_mutable = 5, RULE_assignment = 6, RULE_funDecl = 7, 
		RULE_paramList = 8, RULE_param = 9, RULE_returnStatement = 10, RULE_ifStmt = 11, 
		RULE_elseBranch = 12, RULE_whileStmt = 13, RULE_breakStatement = 14, RULE_expression = 15, 
		RULE_expressionStatement = 16, RULE_functionCallExpression = 17, RULE_argList = 18;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "statement", "block", "sequence", "letStmt", "mutable", "assignment", 
			"funDecl", "paramList", "param", "returnStatement", "ifStmt", "elseBranch", 
			"whileStmt", "breakStatement", "expression", "expressionStatement", "functionCallExpression", 
			"argList"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'{'", "'}'", "'l\\u00E5t'", "'='", "';'", "'mut'", "'fn'", "'('", 
			"')'", "'->'", "','", "':'", "'returnera'", "'om'", "'annars'", "'medan'", 
			"'bryt'", "'+'", "'-'", "'*'", "'/'", "'&&'", "'||'", "'=='", "'!='", 
			"'<='", "'>='", "'<'", "'>'", "'!'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, "IDENTIFIER", "TYPE", "BOOL", 
			"INT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Rost.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public RostParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public SequenceContext sequence() {
			return getRuleContext(SequenceContext.class,0);
		}
		public TerminalNode EOF() { return getToken(RostParser.EOF, 0); }
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			sequence();
			setState(39);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public LetStmtContext letStmt() {
			return getRuleContext(LetStmtContext.class,0);
		}
		public FunDeclContext funDecl() {
			return getRuleContext(FunDeclContext.class,0);
		}
		public IfStmtContext ifStmt() {
			return getRuleContext(IfStmtContext.class,0);
		}
		public WhileStmtContext whileStmt() {
			return getRuleContext(WhileStmtContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(50);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(41);
				letStmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(42);
				funDecl();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(43);
				ifStmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(44);
				whileStmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(45);
				block();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(46);
				assignment();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(47);
				returnStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(48);
				breakStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(49);
				expressionStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public SequenceContext sequence() {
			return getRuleContext(SequenceContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			match(T__0);
			setState(53);
			sequence();
			setState(54);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SequenceContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public SequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sequence; }
	}

	public final SequenceContext sequence() throws RecognitionException {
		SequenceContext _localctx = new SequenceContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_sequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 28991775114L) != 0)) {
				{
				{
				setState(56);
				statement();
				}
				}
				setState(61);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LetStmtContext extends ParserRuleContext {
		public Token id;
		public ExpressionContext expr;
		public TerminalNode IDENTIFIER() { return getToken(RostParser.IDENTIFIER, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LetStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letStmt; }
	}

	public final LetStmtContext letStmt() throws RecognitionException {
		LetStmtContext _localctx = new LetStmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_letStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(T__2);
			setState(63);
			((LetStmtContext)_localctx).id = match(IDENTIFIER);
			setState(64);
			match(T__3);
			setState(65);
			((LetStmtContext)_localctx).expr = expression(0);
			setState(66);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MutableContext extends ParserRuleContext {
		public MutableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mutable; }
	}

	public final MutableContext mutable() throws RecognitionException {
		MutableContext _localctx = new MutableContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_mutable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(RostParser.IDENTIFIER, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			match(IDENTIFIER);
			setState(71);
			match(T__3);
			setState(72);
			expression(0);
			setState(73);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunDeclContext extends ParserRuleContext {
		public Token id;
		public Token type;
		public BlockContext body;
		public TerminalNode IDENTIFIER() { return getToken(RostParser.IDENTIFIER, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public TerminalNode TYPE() { return getToken(RostParser.TYPE, 0); }
		public FunDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funDecl; }
	}

	public final FunDeclContext funDecl() throws RecognitionException {
		FunDeclContext _localctx = new FunDeclContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_funDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(T__6);
			setState(76);
			((FunDeclContext)_localctx).id = match(IDENTIFIER);
			setState(77);
			match(T__7);
			setState(79);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(78);
				paramList();
				}
			}

			setState(81);
			match(T__8);
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__9) {
				{
				setState(82);
				match(T__9);
				setState(83);
				((FunDeclContext)_localctx).type = match(TYPE);
				}
			}

			setState(86);
			((FunDeclContext)_localctx).body = block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParamListContext extends ParserRuleContext {
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public ParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramList; }
	}

	public final ParamListContext paramList() throws RecognitionException {
		ParamListContext _localctx = new ParamListContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_paramList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			param();
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__10) {
				{
				{
				setState(89);
				match(T__10);
				setState(90);
				param();
				}
				}
				setState(95);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParamContext extends ParserRuleContext {
		public Token id;
		public Token type;
		public TerminalNode IDENTIFIER() { return getToken(RostParser.IDENTIFIER, 0); }
		public TerminalNode TYPE() { return getToken(RostParser.TYPE, 0); }
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			((ParamContext)_localctx).id = match(IDENTIFIER);
			setState(97);
			match(T__11);
			setState(98);
			((ParamContext)_localctx).type = match(TYPE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_returnStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			match(T__12);
			setState(102);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 28991553792L) != 0)) {
				{
				setState(101);
				expression(0);
				}
			}

			setState(104);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStmtContext extends ParserRuleContext {
		public ExpressionContext cond;
		public BlockContext cons;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ElseBranchContext elseBranch() {
			return getRuleContext(ElseBranchContext.class,0);
		}
		public IfStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStmt; }
	}

	public final IfStmtContext ifStmt() throws RecognitionException {
		IfStmtContext _localctx = new IfStmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_ifStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			match(T__13);
			setState(107);
			((IfStmtContext)_localctx).cond = expression(0);
			setState(108);
			((IfStmtContext)_localctx).cons = block();
			setState(110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__14) {
				{
				setState(109);
				elseBranch();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElseBranchContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public IfStmtContext ifStmt() {
			return getRuleContext(IfStmtContext.class,0);
		}
		public ElseBranchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseBranch; }
	}

	public final ElseBranchContext elseBranch() throws RecognitionException {
		ElseBranchContext _localctx = new ElseBranchContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_elseBranch);
		try {
			setState(116);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(112);
				match(T__14);
				setState(113);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(114);
				match(T__14);
				setState(115);
				ifStmt();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhileStmtContext extends ParserRuleContext {
		public ExpressionContext cond;
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public WhileStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStmt; }
	}

	public final WhileStmtContext whileStmt() throws RecognitionException {
		WhileStmtContext _localctx = new WhileStmtContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_whileStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			match(T__15);
			setState(119);
			((WhileStmtContext)_localctx).cond = expression(0);
			setState(120);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BreakStatementContext extends ParserRuleContext {
		public BreakStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStatement; }
	}

	public final BreakStatementContext breakStatement() throws RecognitionException {
		BreakStatementContext _localctx = new BreakStatementContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(T__16);
			setState(123);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public FunctionCallExpressionContext functionCallExpression() {
			return getRuleContext(FunctionCallExpressionContext.class,0);
		}
		public TerminalNode INT() { return getToken(RostParser.INT, 0); }
		public TerminalNode BOOL() { return getToken(RostParser.BOOL, 0); }
		public TerminalNode IDENTIFIER() { return getToken(RostParser.IDENTIFIER, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 30;
		enterRecursionRule(_localctx, 30, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(126);
				match(T__7);
				setState(127);
				expression(0);
				setState(128);
				match(T__8);
				}
				break;
			case 2:
				{
				setState(130);
				((ExpressionContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==T__18 || _la==T__29) ) {
					((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(131);
				expression(5);
				}
				break;
			case 3:
				{
				setState(132);
				functionCallExpression();
				}
				break;
			case 4:
				{
				setState(133);
				match(INT);
				}
				break;
			case 5:
				{
				setState(134);
				match(BOOL);
				}
				break;
			case 6:
				{
				setState(135);
				match(IDENTIFIER);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(149);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(147);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(138);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(139);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3932160L) != 0)) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(140);
						expression(9);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(141);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(142);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__21 || _la==T__22) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(143);
						expression(8);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(144);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(145);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1056964608L) != 0)) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(146);
						expression(7);
						}
						break;
					}
					} 
				}
				setState(151);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			expression(0);
			setState(153);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallExpressionContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(RostParser.IDENTIFIER, 0); }
		public ArgListContext argList() {
			return getRuleContext(ArgListContext.class,0);
		}
		public FunctionCallExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCallExpression; }
	}

	public final FunctionCallExpressionContext functionCallExpression() throws RecognitionException {
		FunctionCallExpressionContext _localctx = new FunctionCallExpressionContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_functionCallExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			match(IDENTIFIER);
			setState(156);
			match(T__7);
			setState(158);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 28991553792L) != 0)) {
				{
				setState(157);
				argList();
				}
			}

			setState(160);
			match(T__8);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ArgListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argList; }
	}

	public final ArgListContext argList() throws RecognitionException {
		ArgListContext _localctx = new ArgListContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_argList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			expression(0);
			setState(167);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__10) {
				{
				{
				setState(163);
				match(T__10);
				setState(164);
				expression(0);
				}
				}
				setState(169);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 15:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 6);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001#\u00ab\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0003\u00013\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0005\u0003:\b\u0003\n\u0003\f\u0003=\t\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007P\b\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007U\b\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0005\b\\\b\b\n\b\f\b_\t\b\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0003\ng\b\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000bo\b\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0003\fu\b\f\u0001\r\u0001\r\u0001\r"+
		"\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u0089\b\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0005\u000f\u0094\b\u000f\n\u000f\f\u000f\u0097\t\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0003\u0011\u009f\b\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0005\u0012\u00a6\b\u0012\n\u0012\f\u0012\u00a9\t\u0012\u0001"+
		"\u0012\u0000\u0001\u001e\u0013\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010"+
		"\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$\u0000\u0004\u0002\u0000"+
		"\u0013\u0013\u001e\u001e\u0001\u0000\u0012\u0015\u0001\u0000\u0016\u0017"+
		"\u0001\u0000\u0018\u001d\u00b0\u0000&\u0001\u0000\u0000\u0000\u00022\u0001"+
		"\u0000\u0000\u0000\u00044\u0001\u0000\u0000\u0000\u0006;\u0001\u0000\u0000"+
		"\u0000\b>\u0001\u0000\u0000\u0000\nD\u0001\u0000\u0000\u0000\fF\u0001"+
		"\u0000\u0000\u0000\u000eK\u0001\u0000\u0000\u0000\u0010X\u0001\u0000\u0000"+
		"\u0000\u0012`\u0001\u0000\u0000\u0000\u0014d\u0001\u0000\u0000\u0000\u0016"+
		"j\u0001\u0000\u0000\u0000\u0018t\u0001\u0000\u0000\u0000\u001av\u0001"+
		"\u0000\u0000\u0000\u001cz\u0001\u0000\u0000\u0000\u001e\u0088\u0001\u0000"+
		"\u0000\u0000 \u0098\u0001\u0000\u0000\u0000\"\u009b\u0001\u0000\u0000"+
		"\u0000$\u00a2\u0001\u0000\u0000\u0000&\'\u0003\u0006\u0003\u0000\'(\u0005"+
		"\u0000\u0000\u0001(\u0001\u0001\u0000\u0000\u0000)3\u0003\b\u0004\u0000"+
		"*3\u0003\u000e\u0007\u0000+3\u0003\u0016\u000b\u0000,3\u0003\u001a\r\u0000"+
		"-3\u0003\u0004\u0002\u0000.3\u0003\f\u0006\u0000/3\u0003\u0014\n\u0000"+
		"03\u0003\u001c\u000e\u000013\u0003 \u0010\u00002)\u0001\u0000\u0000\u0000"+
		"2*\u0001\u0000\u0000\u00002+\u0001\u0000\u0000\u00002,\u0001\u0000\u0000"+
		"\u00002-\u0001\u0000\u0000\u00002.\u0001\u0000\u0000\u00002/\u0001\u0000"+
		"\u0000\u000020\u0001\u0000\u0000\u000021\u0001\u0000\u0000\u00003\u0003"+
		"\u0001\u0000\u0000\u000045\u0005\u0001\u0000\u000056\u0003\u0006\u0003"+
		"\u000067\u0005\u0002\u0000\u00007\u0005\u0001\u0000\u0000\u00008:\u0003"+
		"\u0002\u0001\u000098\u0001\u0000\u0000\u0000:=\u0001\u0000\u0000\u0000"+
		";9\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<\u0007\u0001\u0000"+
		"\u0000\u0000=;\u0001\u0000\u0000\u0000>?\u0005\u0003\u0000\u0000?@\u0005"+
		"\u001f\u0000\u0000@A\u0005\u0004\u0000\u0000AB\u0003\u001e\u000f\u0000"+
		"BC\u0005\u0005\u0000\u0000C\t\u0001\u0000\u0000\u0000DE\u0005\u0006\u0000"+
		"\u0000E\u000b\u0001\u0000\u0000\u0000FG\u0005\u001f\u0000\u0000GH\u0005"+
		"\u0004\u0000\u0000HI\u0003\u001e\u000f\u0000IJ\u0005\u0005\u0000\u0000"+
		"J\r\u0001\u0000\u0000\u0000KL\u0005\u0007\u0000\u0000LM\u0005\u001f\u0000"+
		"\u0000MO\u0005\b\u0000\u0000NP\u0003\u0010\b\u0000ON\u0001\u0000\u0000"+
		"\u0000OP\u0001\u0000\u0000\u0000PQ\u0001\u0000\u0000\u0000QT\u0005\t\u0000"+
		"\u0000RS\u0005\n\u0000\u0000SU\u0005 \u0000\u0000TR\u0001\u0000\u0000"+
		"\u0000TU\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000\u0000VW\u0003\u0004"+
		"\u0002\u0000W\u000f\u0001\u0000\u0000\u0000X]\u0003\u0012\t\u0000YZ\u0005"+
		"\u000b\u0000\u0000Z\\\u0003\u0012\t\u0000[Y\u0001\u0000\u0000\u0000\\"+
		"_\u0001\u0000\u0000\u0000][\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000"+
		"\u0000^\u0011\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000\u0000`a\u0005"+
		"\u001f\u0000\u0000ab\u0005\f\u0000\u0000bc\u0005 \u0000\u0000c\u0013\u0001"+
		"\u0000\u0000\u0000df\u0005\r\u0000\u0000eg\u0003\u001e\u000f\u0000fe\u0001"+
		"\u0000\u0000\u0000fg\u0001\u0000\u0000\u0000gh\u0001\u0000\u0000\u0000"+
		"hi\u0005\u0005\u0000\u0000i\u0015\u0001\u0000\u0000\u0000jk\u0005\u000e"+
		"\u0000\u0000kl\u0003\u001e\u000f\u0000ln\u0003\u0004\u0002\u0000mo\u0003"+
		"\u0018\f\u0000nm\u0001\u0000\u0000\u0000no\u0001\u0000\u0000\u0000o\u0017"+
		"\u0001\u0000\u0000\u0000pq\u0005\u000f\u0000\u0000qu\u0003\u0004\u0002"+
		"\u0000rs\u0005\u000f\u0000\u0000su\u0003\u0016\u000b\u0000tp\u0001\u0000"+
		"\u0000\u0000tr\u0001\u0000\u0000\u0000u\u0019\u0001\u0000\u0000\u0000"+
		"vw\u0005\u0010\u0000\u0000wx\u0003\u001e\u000f\u0000xy\u0003\u0004\u0002"+
		"\u0000y\u001b\u0001\u0000\u0000\u0000z{\u0005\u0011\u0000\u0000{|\u0005"+
		"\u0005\u0000\u0000|\u001d\u0001\u0000\u0000\u0000}~\u0006\u000f\uffff"+
		"\uffff\u0000~\u007f\u0005\b\u0000\u0000\u007f\u0080\u0003\u001e\u000f"+
		"\u0000\u0080\u0081\u0005\t\u0000\u0000\u0081\u0089\u0001\u0000\u0000\u0000"+
		"\u0082\u0083\u0007\u0000\u0000\u0000\u0083\u0089\u0003\u001e\u000f\u0005"+
		"\u0084\u0089\u0003\"\u0011\u0000\u0085\u0089\u0005\"\u0000\u0000\u0086"+
		"\u0089\u0005!\u0000\u0000\u0087\u0089\u0005\u001f\u0000\u0000\u0088}\u0001"+
		"\u0000\u0000\u0000\u0088\u0082\u0001\u0000\u0000\u0000\u0088\u0084\u0001"+
		"\u0000\u0000\u0000\u0088\u0085\u0001\u0000\u0000\u0000\u0088\u0086\u0001"+
		"\u0000\u0000\u0000\u0088\u0087\u0001\u0000\u0000\u0000\u0089\u0095\u0001"+
		"\u0000\u0000\u0000\u008a\u008b\n\b\u0000\u0000\u008b\u008c\u0007\u0001"+
		"\u0000\u0000\u008c\u0094\u0003\u001e\u000f\t\u008d\u008e\n\u0007\u0000"+
		"\u0000\u008e\u008f\u0007\u0002\u0000\u0000\u008f\u0094\u0003\u001e\u000f"+
		"\b\u0090\u0091\n\u0006\u0000\u0000\u0091\u0092\u0007\u0003\u0000\u0000"+
		"\u0092\u0094\u0003\u001e\u000f\u0007\u0093\u008a\u0001\u0000\u0000\u0000"+
		"\u0093\u008d\u0001\u0000\u0000\u0000\u0093\u0090\u0001\u0000\u0000\u0000"+
		"\u0094\u0097\u0001\u0000\u0000\u0000\u0095\u0093\u0001\u0000\u0000\u0000"+
		"\u0095\u0096\u0001\u0000\u0000\u0000\u0096\u001f\u0001\u0000\u0000\u0000"+
		"\u0097\u0095\u0001\u0000\u0000\u0000\u0098\u0099\u0003\u001e\u000f\u0000"+
		"\u0099\u009a\u0005\u0005\u0000\u0000\u009a!\u0001\u0000\u0000\u0000\u009b"+
		"\u009c\u0005\u001f\u0000\u0000\u009c\u009e\u0005\b\u0000\u0000\u009d\u009f"+
		"\u0003$\u0012\u0000\u009e\u009d\u0001\u0000\u0000\u0000\u009e\u009f\u0001"+
		"\u0000\u0000\u0000\u009f\u00a0\u0001\u0000\u0000\u0000\u00a0\u00a1\u0005"+
		"\t\u0000\u0000\u00a1#\u0001\u0000\u0000\u0000\u00a2\u00a7\u0003\u001e"+
		"\u000f\u0000\u00a3\u00a4\u0005\u000b\u0000\u0000\u00a4\u00a6\u0003\u001e"+
		"\u000f\u0000\u00a5\u00a3\u0001\u0000\u0000\u0000\u00a6\u00a9\u0001\u0000"+
		"\u0000\u0000\u00a7\u00a5\u0001\u0000\u0000\u0000\u00a7\u00a8\u0001\u0000"+
		"\u0000\u0000\u00a8%\u0001\u0000\u0000\u0000\u00a9\u00a7\u0001\u0000\u0000"+
		"\u0000\r2;OT]fnt\u0088\u0093\u0095\u009e\u00a7";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}