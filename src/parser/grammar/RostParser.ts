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
    public static readonly IDENTIFIER = 30;
    public static readonly TYPE = 31;
    public static readonly BOOL = 32;
    public static readonly INT = 33;
    public static readonly WS = 34;
    public static readonly RULE_prog = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_block = 2;
    public static readonly RULE_sequence = 3;
    public static readonly RULE_letStmt = 4;
    public static readonly RULE_mutable = 5;
    public static readonly RULE_assignment = 6;
    public static readonly RULE_funDecl = 7;
    public static readonly RULE_paramList = 8;
    public static readonly RULE_param = 9;
    public static readonly RULE_returnStatement = 10;
    public static readonly RULE_ifStmt = 11;
    public static readonly RULE_whileStmt = 12;
    public static readonly RULE_breakStatement = 13;
    public static readonly RULE_expression = 14;
    public static readonly RULE_functionCallExpression = 15;
    public static readonly RULE_argList = 16;

    public static readonly literalNames = [
        null, "'{'", "'}'", "'l\\u00E5t'", "'='", "';'", "'mut'", "'fn'", 
        "'('", "')'", "'->'", "','", "':'", "'returnera'", "'om'", "'medan'", 
        "'bryt'", "'+'", "'-'", "'*'", "'/'", "'&&'", "'||'", "'=='", "'!='", 
        "'<='", "'>='", "'<'", "'>'", "'!'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, "IDENTIFIER", "TYPE", 
        "BOOL", "INT", "WS"
    ];
    public static readonly ruleNames = [
        "prog", "statement", "block", "sequence", "letStmt", "mutable", 
        "assignment", "funDecl", "paramList", "param", "returnStatement", 
        "ifStmt", "whileStmt", "breakStatement", "expression", "functionCallExpression", 
        "argList",
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
            this.state = 34;
            this.sequence();
            this.state = 35;
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
            this.state = 45;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RostParser.T__2:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 37;
                this.letStmt();
                }
                break;
            case RostParser.T__6:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 38;
                this.funDecl();
                }
                break;
            case RostParser.T__13:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 39;
                this.ifStmt();
                }
                break;
            case RostParser.T__14:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 40;
                this.whileStmt();
                }
                break;
            case RostParser.T__0:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 41;
                this.block();
                }
                break;
            case RostParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 42;
                this.assignment();
                }
                break;
            case RostParser.T__12:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 43;
                this.returnStatement();
                }
                break;
            case RostParser.T__15:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 44;
                this.breakStatement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
            this.state = 47;
            this.match(RostParser.T__0);
            this.state = 48;
            this.sequence();
            this.state = 49;
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
            this.state = 54;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073864842) !== 0)) {
                {
                {
                this.state = 51;
                this.statement();
                }
                }
                this.state = 56;
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
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 57;
            this.match(RostParser.T__2);
            this.state = 59;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 58;
                this.mutable();
                }
            }

            this.state = 61;
            localContext._id = this.match(RostParser.IDENTIFIER);
            this.state = 62;
            this.match(RostParser.T__3);
            this.state = 63;
            localContext._expr = this.expression(0);
            this.state = 64;
            this.match(RostParser.T__4);
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
    public mutable(): MutableContext {
        let localContext = new MutableContext(this.context, this.state);
        this.enterRule(localContext, 10, RostParser.RULE_mutable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 66;
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
        this.enterRule(localContext, 12, RostParser.RULE_assignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 68;
            this.match(RostParser.IDENTIFIER);
            this.state = 69;
            this.match(RostParser.T__3);
            this.state = 70;
            this.expression(0);
            this.state = 71;
            this.match(RostParser.T__4);
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
        this.enterRule(localContext, 14, RostParser.RULE_funDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 73;
            this.match(RostParser.T__6);
            this.state = 74;
            localContext._id = this.match(RostParser.IDENTIFIER);
            this.state = 75;
            this.match(RostParser.T__7);
            this.state = 77;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 30) {
                {
                this.state = 76;
                this.paramList();
                }
            }

            this.state = 79;
            this.match(RostParser.T__8);
            this.state = 82;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 80;
                this.match(RostParser.T__9);
                this.state = 81;
                localContext._type_ = this.match(RostParser.TYPE);
                }
            }

            this.state = 84;
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
        this.enterRule(localContext, 16, RostParser.RULE_paramList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 86;
            this.param();
            this.state = 91;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 11) {
                {
                {
                this.state = 87;
                this.match(RostParser.T__10);
                this.state = 88;
                this.param();
                }
                }
                this.state = 93;
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
        this.enterRule(localContext, 18, RostParser.RULE_param);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 94;
            localContext._id = this.match(RostParser.IDENTIFIER);
            this.state = 95;
            this.match(RostParser.T__11);
            this.state = 96;
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
        this.enterRule(localContext, 20, RostParser.RULE_returnStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 98;
            this.match(RostParser.T__12);
            this.state = 100;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 56624129) !== 0)) {
                {
                this.state = 99;
                this.expression(0);
                }
            }

            this.state = 102;
            this.match(RostParser.T__4);
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
        this.enterRule(localContext, 22, RostParser.RULE_ifStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 104;
            this.match(RostParser.T__13);
            this.state = 105;
            localContext._cond = this.expression(0);
            this.state = 106;
            localContext._cons = this.block();
            this.state = 107;
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
        this.enterRule(localContext, 24, RostParser.RULE_whileStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 109;
            this.match(RostParser.T__14);
            this.state = 110;
            localContext._cond = this.expression(0);
            this.state = 111;
            this.block();
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
    public breakStatement(): BreakStatementContext {
        let localContext = new BreakStatementContext(this.context, this.state);
        this.enterRule(localContext, 26, RostParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 113;
            this.match(RostParser.T__15);
            this.state = 114;
            this.match(RostParser.T__4);
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
            this.state = 127;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                {
                this.state = 117;
                this.match(RostParser.T__7);
                this.state = 118;
                this.expression(0);
                this.state = 119;
                this.match(RostParser.T__8);
                }
                break;
            case 2:
                {
                this.state = 121;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 18 || _la === 29)) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 122;
                this.expression(5);
                }
                break;
            case 3:
                {
                this.state = 123;
                this.functionCallExpression();
                }
                break;
            case 4:
                {
                this.state = 124;
                this.match(RostParser.INT);
                }
                break;
            case 5:
                {
                this.state = 125;
                this.match(RostParser.BOOL);
                }
                break;
            case 6:
                {
                this.state = 126;
                this.match(RostParser.IDENTIFIER);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 140;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 138;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RostParser.RULE_expression);
                        this.state = 129;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 130;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1966080) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 131;
                        this.expression(9);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RostParser.RULE_expression);
                        this.state = 132;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 133;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 21 || _la === 22)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 134;
                        this.expression(8);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, RostParser.RULE_expression);
                        this.state = 135;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 136;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 528482304) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 137;
                        this.expression(7);
                        }
                        break;
                    }
                    }
                }
                this.state = 142;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
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
    public functionCallExpression(): FunctionCallExpressionContext {
        let localContext = new FunctionCallExpressionContext(this.context, this.state);
        this.enterRule(localContext, 30, RostParser.RULE_functionCallExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 143;
            this.match(RostParser.IDENTIFIER);
            this.state = 144;
            this.match(RostParser.T__7);
            this.state = 146;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 56624129) !== 0)) {
                {
                this.state = 145;
                this.argList();
                }
            }

            this.state = 148;
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
        this.enterRule(localContext, 32, RostParser.RULE_argList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 150;
            this.expression(0);
            this.state = 155;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 11) {
                {
                {
                this.state = 151;
                this.match(RostParser.T__10);
                this.state = 152;
                this.expression(0);
                }
                }
                this.state = 157;
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
            return this.precpred(this.context, 8);
        case 1:
            return this.precpred(this.context, 7);
        case 2:
            return this.precpred(this.context, 6);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,34,159,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,3,1,46,8,1,1,2,1,2,1,2,1,2,1,3,5,3,53,8,3,10,3,12,3,56,
        9,3,1,4,1,4,3,4,60,8,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,
        6,1,6,1,7,1,7,1,7,1,7,3,7,78,8,7,1,7,1,7,1,7,3,7,83,8,7,1,7,1,7,
        1,8,1,8,1,8,5,8,90,8,8,10,8,12,8,93,9,8,1,9,1,9,1,9,1,9,1,10,1,10,
        3,10,101,8,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,
        1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
        1,14,1,14,3,14,128,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
        1,14,5,14,139,8,14,10,14,12,14,142,9,14,1,15,1,15,1,15,3,15,147,
        8,15,1,15,1,15,1,16,1,16,1,16,5,16,154,8,16,10,16,12,16,157,9,16,
        1,16,0,1,28,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,4,
        2,0,18,18,29,29,1,0,17,20,1,0,21,22,1,0,23,28,164,0,34,1,0,0,0,2,
        45,1,0,0,0,4,47,1,0,0,0,6,54,1,0,0,0,8,57,1,0,0,0,10,66,1,0,0,0,
        12,68,1,0,0,0,14,73,1,0,0,0,16,86,1,0,0,0,18,94,1,0,0,0,20,98,1,
        0,0,0,22,104,1,0,0,0,24,109,1,0,0,0,26,113,1,0,0,0,28,127,1,0,0,
        0,30,143,1,0,0,0,32,150,1,0,0,0,34,35,3,6,3,0,35,36,5,0,0,1,36,1,
        1,0,0,0,37,46,3,8,4,0,38,46,3,14,7,0,39,46,3,22,11,0,40,46,3,24,
        12,0,41,46,3,4,2,0,42,46,3,12,6,0,43,46,3,20,10,0,44,46,3,26,13,
        0,45,37,1,0,0,0,45,38,1,0,0,0,45,39,1,0,0,0,45,40,1,0,0,0,45,41,
        1,0,0,0,45,42,1,0,0,0,45,43,1,0,0,0,45,44,1,0,0,0,46,3,1,0,0,0,47,
        48,5,1,0,0,48,49,3,6,3,0,49,50,5,2,0,0,50,5,1,0,0,0,51,53,3,2,1,
        0,52,51,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,7,1,
        0,0,0,56,54,1,0,0,0,57,59,5,3,0,0,58,60,3,10,5,0,59,58,1,0,0,0,59,
        60,1,0,0,0,60,61,1,0,0,0,61,62,5,30,0,0,62,63,5,4,0,0,63,64,3,28,
        14,0,64,65,5,5,0,0,65,9,1,0,0,0,66,67,5,6,0,0,67,11,1,0,0,0,68,69,
        5,30,0,0,69,70,5,4,0,0,70,71,3,28,14,0,71,72,5,5,0,0,72,13,1,0,0,
        0,73,74,5,7,0,0,74,75,5,30,0,0,75,77,5,8,0,0,76,78,3,16,8,0,77,76,
        1,0,0,0,77,78,1,0,0,0,78,79,1,0,0,0,79,82,5,9,0,0,80,81,5,10,0,0,
        81,83,5,31,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,84,1,0,0,0,84,85,3,
        4,2,0,85,15,1,0,0,0,86,91,3,18,9,0,87,88,5,11,0,0,88,90,3,18,9,0,
        89,87,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,17,1,
        0,0,0,93,91,1,0,0,0,94,95,5,30,0,0,95,96,5,12,0,0,96,97,5,31,0,0,
        97,19,1,0,0,0,98,100,5,13,0,0,99,101,3,28,14,0,100,99,1,0,0,0,100,
        101,1,0,0,0,101,102,1,0,0,0,102,103,5,5,0,0,103,21,1,0,0,0,104,105,
        5,14,0,0,105,106,3,28,14,0,106,107,3,4,2,0,107,108,3,4,2,0,108,23,
        1,0,0,0,109,110,5,15,0,0,110,111,3,28,14,0,111,112,3,4,2,0,112,25,
        1,0,0,0,113,114,5,16,0,0,114,115,5,5,0,0,115,27,1,0,0,0,116,117,
        6,14,-1,0,117,118,5,8,0,0,118,119,3,28,14,0,119,120,5,9,0,0,120,
        128,1,0,0,0,121,122,7,0,0,0,122,128,3,28,14,5,123,128,3,30,15,0,
        124,128,5,33,0,0,125,128,5,32,0,0,126,128,5,30,0,0,127,116,1,0,0,
        0,127,121,1,0,0,0,127,123,1,0,0,0,127,124,1,0,0,0,127,125,1,0,0,
        0,127,126,1,0,0,0,128,140,1,0,0,0,129,130,10,8,0,0,130,131,7,1,0,
        0,131,139,3,28,14,9,132,133,10,7,0,0,133,134,7,2,0,0,134,139,3,28,
        14,8,135,136,10,6,0,0,136,137,7,3,0,0,137,139,3,28,14,7,138,129,
        1,0,0,0,138,132,1,0,0,0,138,135,1,0,0,0,139,142,1,0,0,0,140,138,
        1,0,0,0,140,141,1,0,0,0,141,29,1,0,0,0,142,140,1,0,0,0,143,144,5,
        30,0,0,144,146,5,8,0,0,145,147,3,32,16,0,146,145,1,0,0,0,146,147,
        1,0,0,0,147,148,1,0,0,0,148,149,5,9,0,0,149,31,1,0,0,0,150,155,3,
        28,14,0,151,152,5,11,0,0,152,154,3,28,14,0,153,151,1,0,0,0,154,157,
        1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,33,1,0,0,0,157,155,1,
        0,0,0,12,45,54,59,77,82,91,100,127,138,140,146,155
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
    public breakStatement(): BreakStatementContext | null {
        return this.getRuleContext(0, BreakStatementContext);
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
    public _expr?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RostParser.IDENTIFIER, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public mutable(): MutableContext | null {
        return this.getRuleContext(0, MutableContext);
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


export class MutableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_mutable;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterMutable) {
             listener.enterMutable(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitMutable) {
             listener.exitMutable(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitMutable) {
            return visitor.visitMutable(this);
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
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public paramList(): ParamListContext | null {
        return this.getRuleContext(0, ParamListContext);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(RostParser.TYPE, 0);
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
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
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
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
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


export class BreakStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return RostParser.RULE_breakStatement;
    }
    public override enterRule(listener: RostListener): void {
        if(listener.enterBreakStatement) {
             listener.enterBreakStatement(this);
        }
    }
    public override exitRule(listener: RostListener): void {
        if(listener.exitBreakStatement) {
             listener.exitBreakStatement(this);
        }
    }
    public override accept<Result>(visitor: RostVisitor<Result>): Result | null {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
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
