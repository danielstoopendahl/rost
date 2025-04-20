// Generated from grammar/Rost.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { RostListener } from "./RostListener.js";
import { RostVisitor } from "./RostVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class RostParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly TYPE = 32;
    public static readonly BOOL = 33;
    public static readonly INT = 34;
    public static readonly IDENTIFIER = 35;
    public static readonly WS = 36;
    public static readonly RULE_prog = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_block = 2;
    public static readonly RULE_sequence = 3;
    public static readonly RULE_letStmt = 4;
    public static readonly RULE_assignment = 5;
    public static readonly RULE_funDecl = 6;
    public static readonly RULE_paramList = 7;
    public static readonly RULE_param = 8;
    public static readonly RULE_returnStatement = 9;
    public static readonly RULE_ifStmt = 10;
    public static readonly RULE_whileStmt = 11;
    public static readonly RULE_breakStmt = 12;
    public static readonly RULE_continueStmt = 13;
    public static readonly RULE_expression = 14;
    public static readonly RULE_expressionStatement = 15;
    public static readonly RULE_functionCallExpression = 16;
    public static readonly RULE_argList = 17;

    public static readonly literalNames = [
        null, "'{'", "'}'", "'l\\u00E5t'", "':'", "'='", "';'", "'fn'", 
        "'('", "')'", "'->'", "','", "'returnera'", "'om'", "'annars'", 
        "'medan'", "'bryt'", "'forts\\u00E4tt'", "'*'", "'/'", "'+'", "'-'", 
        "'&&'", "'||'", "'=='", "'!='", "'<='", "'>='", "'<'", "'>'", "'!'", 
        "'&'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, "TYPE", 
        "BOOL", "INT", "IDENTIFIER", "WS"
    ];
    public static readonly ruleNames = [
        "prog", "statement", "block", "sequence", "letStmt", "assignment", 
        "funDecl", "paramList", "param", "returnStatement", "ifStmt", "whileStmt", 
        "breakStmt", "continueStmt", "expression", "expressionStatement", 
        "functionCallExpression", "argList",
    ];

    public get grammarFileName(): string { return "Rost.g4"; }
    public get literalNames(): (string | null)[] { return RostParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return RostParser.symbolicNames; }
    public get ruleNames(): string[] { return RostParser.ruleNames; }
    public get serializedATN(): number[] { return RostParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, RostParser._ATN, RostParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, RostParser.RULE_prog);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 36;
            this.sequence();
            this.state = 37;
            this.match(RostParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 2, RostParser.RULE_statement);
        try {
            this.state = 49;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 39;
                this.letStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 40;
                this.funDecl();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 41;
                this.ifStmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 42;
                this.whileStmt();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 43;
                this.block();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 44;
                this.assignment();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 45;
                this.returnStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 46;
                this.continueStmt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 47;
                this.breakStmt();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 48;
                this.expressionStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 4, RostParser.RULE_block);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 51;
            this.match(RostParser.T__0);
            this.state = 52;
            this.sequence();
            this.state = 53;
            this.match(RostParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sequence(): SequenceContext {
        let localContext = new SequenceContext(this.context, this.state);
        this.enterRule(localContext, 6, RostParser.RULE_sequence);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 58;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3223564682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0)) {
                {
                {
                this.state = 55;
                this.statement();
                }
                }
                this.state = 60;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public letStmt(): LetStmtContext {
        let localContext = new LetStmtContext(this.context, this.state);
        this.enterRule(localContext, 8, RostParser.RULE_letStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 61;
            this.match(RostParser.T__2);
            this.state = 62;
            localContext._id = this.match(RostParser.IDENTIFIER);
            this.state = 63;
            this.match(RostParser.T__3);
            this.state = 64;
            localContext._type_ = this.match(RostParser.TYPE);
            this.state = 65;
            this.match(RostParser.T__4);
            this.state = 66;
            localContext._expr = this.expression(0);
            this.state = 67;
            this.match(RostParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignment(): AssignmentContext {
        let localContext = new AssignmentContext(this.context, this.state);
        this.enterRule(localContext, 10, RostParser.RULE_assignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 69;
            this.match(RostParser.IDENTIFIER);
            this.state = 70;
            this.match(RostParser.T__4);
            this.state = 71;
            this.expression(0);
            this.state = 72;
            this.match(RostParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public funDecl(): FunDeclContext {
        let localContext = new FunDeclContext(this.context, this.state);
        this.enterRule(localContext, 12, RostParser.RULE_funDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 74;
            this.match(RostParser.T__6);
            this.state = 75;
            localContext._id = this.match(RostParser.IDENTIFIER);
            this.state = 76;
            this.match(RostParser.T__7);
            this.state = 78;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
                this.state = 77;
                this.paramList();
                }
            }

            this.state = 80;
            this.match(RostParser.T__8);
            this.state = 81;
            this.match(RostParser.T__9);
            this.state = 82;
            localContext._type_ = this.match(RostParser.TYPE);
            this.state = 83;
            localContext._body = this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public paramList(): ParamListContext {
        let localContext = new ParamListContext(this.context, this.state);
        this.enterRule(localContext, 14, RostParser.RULE_paramList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 85;
            this.param();
            this.state = 90;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 11) {
                {
                {
                this.state = 86;
                this.match(RostParser.T__10);
                this.state = 87;
                this.param();
                }
                }
                this.state = 92;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public param(): ParamContext {
        let localContext = new ParamContext(this.context, this.state);
        this.enterRule(localContext, 16, RostParser.RULE_param);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 93;
            localContext._id = this.match(RostParser.IDENTIFIER);
            this.state = 94;
            this.match(RostParser.T__3);
            this.state = 95;
            localContext._type_ = this.match(RostParser.TYPE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnStatement(): ReturnStatementContext {
        let localContext = new ReturnStatementContext(this.context, this.state);
        this.enterRule(localContext, 18, RostParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 97;
            this.match(RostParser.T__11);
            this.state = 98;
            this.expression(0);
            this.state = 99;
            this.match(RostParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifStmt(): IfStmtContext {
        let localContext = new IfStmtContext(this.context, this.state);
        this.enterRule(localContext, 20, RostParser.RULE_ifStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 101;
            this.match(RostParser.T__12);
            this.state = 102;
            localContext._cond = this.expression(0);
            this.state = 103;
            localContext._cons = this.block();
            this.state = 104;
            this.match(RostParser.T__13);
            this.state = 105;
            localContext._alt = this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileStmt(): WhileStmtContext {
        let localContext = new WhileStmtContext(this.context, this.state);
        this.enterRule(localContext, 22, RostParser.RULE_whileStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 107;
            this.match(RostParser.T__14);
            this.state = 108;
            localContext._cond = this.expression(0);
            this.state = 109;
            localContext._body = this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public breakStmt(): BreakStmtContext {
        let localContext = new BreakStmtContext(this.context, this.state);
        this.enterRule(localContext, 24, RostParser.RULE_breakStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 111;
            this.match(RostParser.T__15);
            this.state = 112;
            this.match(RostParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public continueStmt(): ContinueStmtContext {
        let localContext = new ContinueStmtContext(this.context, this.state);
        this.enterRule(localContext, 26, RostParser.RULE_continueStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 114;
            this.match(RostParser.T__16);
            this.state = 115;
            this.match(RostParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 28;
        this.enterRecursionRule(localContext, 28, RostParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 130;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
            case 1:
                {
                this.state = 118;
                this.match(RostParser.T__7);
                this.state = 119;
                this.expression(0);
                this.state = 120;
                this.match(RostParser.T__8);
                }
                break;
            case 2:
                {
                this.state = 122;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 21 || _la === 30)) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 123;
                this.expression(6);
                }
                break;
            case 3:
                {
                this.state = 124;
                this.functionCallExpression();
                }
                break;
            case 4:
                {
                this.state = 125;
                this.match(RostParser.INT);
                }
                break;
            case 5:
                {
                this.state = 126;
                this.match(RostParser.BOOL);
                }
                break;
            case 6:
                {
                this.state = 127;
                this.match(RostParser.IDENTIFIER);
                }
                break;
            case 7:
                {
                this.state = 128;
                this.match(RostParser.T__30);
                this.state = 129;
                this.match(RostParser.IDENTIFIER);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 146;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 144;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RostParser.RULE_expression);
                        this.state = 132;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 133;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 18 || _la === 19)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 134;
                        this.expression(11);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RostParser.RULE_expression);
                        this.state = 135;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 136;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 20 || _la === 21)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 137;
                        this.expression(10);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RostParser.RULE_expression);
                        this.state = 138;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 139;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 22 || _la === 23)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 140;
                        this.expression(9);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RostParser.RULE_expression);
                        this.state = 141;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 142;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1056964608) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 143;
                        this.expression(8);
                        }
                        break;
                    }
                    }
                }
                this.state = 148;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 30, RostParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 149;
            this.expression(0);
            this.state = 150;
            this.match(RostParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionCallExpression(): FunctionCallExpressionContext {
        let localContext = new FunctionCallExpressionContext(this.context, this.state);
        this.enterRule(localContext, 32, RostParser.RULE_functionCallExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 152;
            this.match(RostParser.IDENTIFIER);
            this.state = 153;
            this.match(RostParser.T__7);
            this.state = 155;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 247472129) !== 0)) {
                {
                this.state = 154;
                this.argList();
                }
            }

            this.state = 157;
            this.match(RostParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argList(): ArgListContext {
        let localContext = new ArgListContext(this.context, this.state);
        this.enterRule(localContext, 34, RostParser.RULE_argList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 159;
            this.expression(0);
            this.state = 164;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 11) {
                {
                {
                this.state = 160;
                this.match(RostParser.T__10);
                this.state = 161;
                this.expression(0);
                }
                }
                this.state = 166;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 14:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 10);
        case 1:
            return this.precpred(this.context, 9);
        case 2:
            return this.precpred(this.context, 8);
        case 3:
            return this.precpred(this.context, 7);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,36,168,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,50,8,1,1,2,1,2,1,2,1,2,1,3,5,3,57,
        8,3,10,3,12,3,60,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,
        1,5,1,5,1,6,1,6,1,6,1,6,3,6,79,8,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,
        7,5,7,89,8,7,10,7,12,7,92,9,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,
        10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,
        13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
        14,1,14,1,14,3,14,131,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
        14,1,14,1,14,1,14,1,14,5,14,145,8,14,10,14,12,14,148,9,14,1,15,1,
        15,1,15,1,16,1,16,1,16,3,16,156,8,16,1,16,1,16,1,17,1,17,1,17,5,
        17,163,8,17,10,17,12,17,166,9,17,1,17,0,1,28,18,0,2,4,6,8,10,12,
        14,16,18,20,22,24,26,28,30,32,34,0,5,2,0,21,21,30,30,1,0,18,19,1,
        0,20,21,1,0,22,23,1,0,24,29,173,0,36,1,0,0,0,2,49,1,0,0,0,4,51,1,
        0,0,0,6,58,1,0,0,0,8,61,1,0,0,0,10,69,1,0,0,0,12,74,1,0,0,0,14,85,
        1,0,0,0,16,93,1,0,0,0,18,97,1,0,0,0,20,101,1,0,0,0,22,107,1,0,0,
        0,24,111,1,0,0,0,26,114,1,0,0,0,28,130,1,0,0,0,30,149,1,0,0,0,32,
        152,1,0,0,0,34,159,1,0,0,0,36,37,3,6,3,0,37,38,5,0,0,1,38,1,1,0,
        0,0,39,50,3,8,4,0,40,50,3,12,6,0,41,50,3,20,10,0,42,50,3,22,11,0,
        43,50,3,4,2,0,44,50,3,10,5,0,45,50,3,18,9,0,46,50,3,26,13,0,47,50,
        3,24,12,0,48,50,3,30,15,0,49,39,1,0,0,0,49,40,1,0,0,0,49,41,1,0,
        0,0,49,42,1,0,0,0,49,43,1,0,0,0,49,44,1,0,0,0,49,45,1,0,0,0,49,46,
        1,0,0,0,49,47,1,0,0,0,49,48,1,0,0,0,50,3,1,0,0,0,51,52,5,1,0,0,52,
        53,3,6,3,0,53,54,5,2,0,0,54,5,1,0,0,0,55,57,3,2,1,0,56,55,1,0,0,
        0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,7,1,0,0,0,60,58,1,
        0,0,0,61,62,5,3,0,0,62,63,5,35,0,0,63,64,5,4,0,0,64,65,5,32,0,0,
        65,66,5,5,0,0,66,67,3,28,14,0,67,68,5,6,0,0,68,9,1,0,0,0,69,70,5,
        35,0,0,70,71,5,5,0,0,71,72,3,28,14,0,72,73,5,6,0,0,73,11,1,0,0,0,
        74,75,5,7,0,0,75,76,5,35,0,0,76,78,5,8,0,0,77,79,3,14,7,0,78,77,
        1,0,0,0,78,79,1,0,0,0,79,80,1,0,0,0,80,81,5,9,0,0,81,82,5,10,0,0,
        82,83,5,32,0,0,83,84,3,4,2,0,84,13,1,0,0,0,85,90,3,16,8,0,86,87,
        5,11,0,0,87,89,3,16,8,0,88,86,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,
        0,90,91,1,0,0,0,91,15,1,0,0,0,92,90,1,0,0,0,93,94,5,35,0,0,94,95,
        5,4,0,0,95,96,5,32,0,0,96,17,1,0,0,0,97,98,5,12,0,0,98,99,3,28,14,
        0,99,100,5,6,0,0,100,19,1,0,0,0,101,102,5,13,0,0,102,103,3,28,14,
        0,103,104,3,4,2,0,104,105,5,14,0,0,105,106,3,4,2,0,106,21,1,0,0,
        0,107,108,5,15,0,0,108,109,3,28,14,0,109,110,3,4,2,0,110,23,1,0,
        0,0,111,112,5,16,0,0,112,113,5,6,0,0,113,25,1,0,0,0,114,115,5,17,
        0,0,115,116,5,6,0,0,116,27,1,0,0,0,117,118,6,14,-1,0,118,119,5,8,
        0,0,119,120,3,28,14,0,120,121,5,9,0,0,121,131,1,0,0,0,122,123,7,
        0,0,0,123,131,3,28,14,6,124,131,3,32,16,0,125,131,5,34,0,0,126,131,
        5,33,0,0,127,131,5,35,0,0,128,129,5,31,0,0,129,131,5,35,0,0,130,
        117,1,0,0,0,130,122,1,0,0,0,130,124,1,0,0,0,130,125,1,0,0,0,130,
        126,1,0,0,0,130,127,1,0,0,0,130,128,1,0,0,0,131,146,1,0,0,0,132,
        133,10,10,0,0,133,134,7,1,0,0,134,145,3,28,14,11,135,136,10,9,0,
        0,136,137,7,2,0,0,137,145,3,28,14,10,138,139,10,8,0,0,139,140,7,
        3,0,0,140,145,3,28,14,9,141,142,10,7,0,0,142,143,7,4,0,0,143,145,
        3,28,14,8,144,132,1,0,0,0,144,135,1,0,0,0,144,138,1,0,0,0,144,141,
        1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,29,1,
        0,0,0,148,146,1,0,0,0,149,150,3,28,14,0,150,151,5,6,0,0,151,31,1,
        0,0,0,152,153,5,35,0,0,153,155,5,8,0,0,154,156,3,34,17,0,155,154,
        1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,157,158,5,9,0,0,158,33,1,
        0,0,0,159,164,3,28,14,0,160,161,5,11,0,0,161,163,3,28,14,0,162,160,
        1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,35,1,
        0,0,0,166,164,1,0,0,0,9,49,58,78,90,130,144,146,155,164
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!RostParser.__ATN) {
            RostParser.__ATN = new antlr.ATNDeserializer().deserialize(RostParser._serializedATN);
        }

        return RostParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(RostParser.literalNames, RostParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return RostParser.vocabulary;
    }

    private static readonly decisionsToDFA = RostParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sequence(): SequenceContext {
        return this.getRuleContext(0, SequenceContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(RostParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_prog;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public letStmt(): LetStmtContext | null {
        return this.getRuleContext(0, LetStmtContext);
    }
    public funDecl(): FunDeclContext | null {
        return this.getRuleContext(0, FunDeclContext);
    }
    public ifStmt(): IfStmtContext | null {
        return this.getRuleContext(0, IfStmtContext);
    }
    public whileStmt(): WhileStmtContext | null {
        return this.getRuleContext(0, WhileStmtContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public assignment(): AssignmentContext | null {
        return this.getRuleContext(0, AssignmentContext);
    }
    public returnStatement(): ReturnStatementContext | null {
        return this.getRuleContext(0, ReturnStatementContext);
    }
    public continueStmt(): ContinueStmtContext | null {
        return this.getRuleContext(0, ContinueStmtContext);
    }
    public breakStmt(): BreakStmtContext | null {
        return this.getRuleContext(0, BreakStmtContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_statement;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sequence(): SequenceContext {
        return this.getRuleContext(0, SequenceContext)!;
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_block;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SequenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_sequence;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterSequence) {
             listener.enterSequence(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitSequence) {
             listener.exitSequence(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitSequence) {
            return visitor.visitSequence(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LetStmtContext extends antlr.ParserRuleContext {
    public _id?: Token | null;
    public _type_?: Token | null;
    public _expr?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RostParser.IDENTIFIER, 0)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RostParser.TYPE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_letStmt;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterLetStmt) {
             listener.enterLetStmt(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitLetStmt) {
             listener.exitLetStmt(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitLetStmt) {
            return visitor.visitLetStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RostParser.IDENTIFIER, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_assignment;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterAssignment) {
             listener.enterAssignment(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitAssignment) {
             listener.exitAssignment(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunDeclContext extends antlr.ParserRuleContext {
    public _id?: Token | null;
    public _type_?: Token | null;
    public _body?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RostParser.IDENTIFIER, 0)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RostParser.TYPE, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public paramList(): ParamListContext | null {
        return this.getRuleContext(0, ParamListContext);
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_funDecl;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterFunDecl) {
             listener.enterFunDecl(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitFunDecl) {
             listener.exitFunDecl(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitFunDecl) {
            return visitor.visitFunDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public param(): ParamContext[];
    public param(i: number): ParamContext | null;
    public param(i?: number): ParamContext[] | ParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }

        return this.getRuleContext(i, ParamContext);
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_paramList;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterParamList) {
             listener.enterParamList(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitParamList) {
             listener.exitParamList(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamContext extends antlr.ParserRuleContext {
    public _id?: Token | null;
    public _type_?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RostParser.IDENTIFIER, 0)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(RostParser.TYPE, 0)!;
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_param;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterParam) {
             listener.enterParam(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitParam) {
             listener.exitParam(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_returnStatement;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterReturnStatement) {
             listener.enterReturnStatement(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitReturnStatement) {
             listener.exitReturnStatement(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfStmtContext extends antlr.ParserRuleContext {
    public _cond?: ExpressionContext;
    public _cons?: BlockContext;
    public _alt?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public block(): BlockContext[];
    public block(i: number): BlockContext | null;
    public block(i?: number): BlockContext[] | BlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }

        return this.getRuleContext(i, BlockContext);
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_ifStmt;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterIfStmt) {
             listener.enterIfStmt(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitIfStmt) {
             listener.exitIfStmt(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitIfStmt) {
            return visitor.visitIfStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileStmtContext extends antlr.ParserRuleContext {
    public _cond?: ExpressionContext;
    public _body?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_whileStmt;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterWhileStmt) {
             listener.enterWhileStmt(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitWhileStmt) {
             listener.exitWhileStmt(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitWhileStmt) {
            return visitor.visitWhileStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BreakStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_breakStmt;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterBreakStmt) {
             listener.enterBreakStmt(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitBreakStmt) {
             listener.exitBreakStmt(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitBreakStmt) {
            return visitor.visitBreakStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContinueStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_continueStmt;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterContinueStmt) {
             listener.enterContinueStmt(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitContinueStmt) {
             listener.exitContinueStmt(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitContinueStmt) {
            return visitor.visitContinueStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public functionCallExpression(): FunctionCallExpressionContext | null {
        return this.getRuleContext(0, FunctionCallExpressionContext);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(RostParser.INT, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(RostParser.BOOL, 0);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RostParser.IDENTIFIER, 0);
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_expression;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_expressionStatement;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterExpressionStatement) {
             listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitExpressionStatement) {
             listener.exitExpressionStatement(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionCallExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RostParser.IDENTIFIER, 0)!;
    }
    public argList(): ArgListContext | null {
        return this.getRuleContext(0, ArgListContext);
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_functionCallExpression;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterFunctionCallExpression) {
             listener.enterFunctionCallExpression(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitFunctionCallExpression) {
             listener.exitFunctionCallExpression(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitFunctionCallExpression) {
            return visitor.visitFunctionCallExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_argList;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterArgList) {
             listener.enterArgList(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitArgList) {
             listener.exitArgList(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitArgList) {
            return visitor.visitArgList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
