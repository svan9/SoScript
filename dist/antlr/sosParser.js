"use strict";
// Generated from ./src/antlr/sos.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment_multilineContext = exports.CommentsContext = exports.StiContext = exports.Type_indentifyContext = exports.EverythingContext = exports.Insert_var_valueContext = exports.Assert_nameContext = exports.List_baseContext = exports.Squared_breaketContext = exports.Rounded_breaketContext = exports.Variable_defineContext = exports.Operator_statementContext = exports.Type_castContext = exports.Return_statementContext = exports.Macros_bodyContext = exports.Macros_statementContext = exports.Function_statementContext = exports.BlockContext = exports.Args_rowContext = exports.StatementContext = exports.ExpressionContext = exports.VariableContext = exports.LineContext = exports.ProgramContext = exports.sosParser = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class sosParser extends Parser_1.Parser {
    static T__0 = 1;
    static T__1 = 2;
    static T__2 = 3;
    static T__3 = 4;
    static T__4 = 5;
    static T__5 = 6;
    static T__6 = 7;
    static T__7 = 8;
    static T__8 = 9;
    static T__9 = 10;
    static T__10 = 11;
    static T__11 = 12;
    static FUNCTION_KW = 13;
    static RETURN_KW = 14;
    static END_OF_EXPR = 15;
    static MACROS_KW = 16;
    static OPERATOR_SYMBOLS = 17;
    static ASSERT_NAME = 18;
    static STRING = 19;
    static CHAR = 20;
    static NUMBER = 21;
    static DIGITS = 22;
    static VERY_POSITIV_NUMBER = 23;
    static VERY_NEGATIVE_NUMBER = 24;
    static FLOATING_NUMBER = 25;
    static SPLITED_NUMBER = 26;
    static WS = 27;
    static COMMENT_SINGLELINE = 28;
    static RULE_program = 0;
    static RULE_line = 1;
    static RULE_variable = 2;
    static RULE_expression = 3;
    static RULE_statement = 4;
    static RULE_args_row = 5;
    static RULE_block = 6;
    static RULE_function_statement = 7;
    static RULE_macros_statement = 8;
    static RULE_macros_body = 9;
    static RULE_return_statement = 10;
    static RULE_type_cast = 11;
    static RULE_operator_statement = 12;
    static RULE_variable_define = 13;
    static RULE_rounded_breaket = 14;
    static RULE_squared_breaket = 15;
    static RULE_list_base = 16;
    static RULE_assert_name = 17;
    static RULE_insert_var_value = 18;
    static RULE_everything = 19;
    static RULE_type_indentify = 20;
    static RULE_sti = 21;
    static RULE_comments = 22;
    static RULE_comment_multiline = 23;
    // tslint:disable:no-trailing-whitespace
    static ruleNames = [
        "program", "line", "variable", "expression", "statement", "args_row",
        "block", "function_statement", "macros_statement", "macros_body", "return_statement",
        "type_cast", "operator_statement", "variable_define", "rounded_breaket",
        "squared_breaket", "list_base", "assert_name", "insert_var_value", "everything",
        "type_indentify", "sti", "comments", "comment_multiline",
    ];
    static _LITERAL_NAMES = [
        undefined, "'('", "','", "')'", "'{'", "'}'", "'->'", "'['", "']'", "'%'",
        "'&'", "'~'", "'***'", "'function'", "'return'", "';'", "'@macros'",
    ];
    static _SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "FUNCTION_KW",
        "RETURN_KW", "END_OF_EXPR", "MACROS_KW", "OPERATOR_SYMBOLS", "ASSERT_NAME",
        "STRING", "CHAR", "NUMBER", "DIGITS", "VERY_POSITIV_NUMBER", "VERY_NEGATIVE_NUMBER",
        "FLOATING_NUMBER", "SPLITED_NUMBER", "WS", "COMMENT_SINGLELINE",
    ];
    static VOCABULARY = new VocabularyImpl_1.VocabularyImpl(sosParser._LITERAL_NAMES, sosParser._SYMBOLIC_NAMES, []);
    // @Override
    // @NotNull
    get vocabulary() {
        return sosParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "sos.g4"; }
    // @Override
    get ruleNames() { return sosParser.ruleNames; }
    // @Override
    get serializedATN() { return sosParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(sosParser._ATN, this);
    }
    // @RuleVersion(0)
    program() {
        let _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, sosParser.RULE_program);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 51;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sosParser.T__0) | (1 << sosParser.T__11) | (1 << sosParser.MACROS_KW) | (1 << sosParser.COMMENT_SINGLELINE))) !== 0)) {
                    {
                        {
                            this.state = 48;
                            this.line();
                        }
                    }
                    this.state = 53;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 54;
                this.match(sosParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    line() {
        let _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, sosParser.RULE_line);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 56;
                this.expression();
                this.state = 58;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 57;
                            this.match(sosParser.END_OF_EXPR);
                        }
                    }
                    this.state = 60;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === sosParser.END_OF_EXPR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable() {
        let _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, sosParser.RULE_variable);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 62;
                this.variable_define();
                this.state = 64;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === sosParser.OPERATOR_SYMBOLS) {
                    {
                        this.state = 63;
                        this.operator_statement();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression() {
        let _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, sosParser.RULE_expression);
        try {
            this.state = 68;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sosParser.T__0:
                case sosParser.MACROS_KW:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 66;
                        this.statement();
                    }
                    break;
                case sosParser.T__11:
                case sosParser.COMMENT_SINGLELINE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 67;
                        this.comments();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, sosParser.RULE_statement);
        try {
            this.state = 72;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sosParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 70;
                        this.function_statement();
                    }
                    break;
                case sosParser.MACROS_KW:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 71;
                        this.macros_statement();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    args_row() {
        let _localctx = new Args_rowContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, sosParser.RULE_args_row);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 74;
                this.match(sosParser.T__0);
                this.state = 75;
                this.variable_define();
                this.state = 82;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === sosParser.T__1) {
                    {
                        {
                            this.state = 76;
                            this.match(sosParser.T__1);
                            this.state = 77;
                            this.variable_define();
                            this.state = 78;
                            this.assert_name();
                        }
                    }
                    this.state = 84;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 85;
                this.match(sosParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, sosParser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                this.match(sosParser.T__3);
                this.state = 92;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sosParser.T__0) | (1 << sosParser.T__11) | (1 << sosParser.MACROS_KW) | (1 << sosParser.COMMENT_SINGLELINE))) !== 0)) {
                    {
                        this.state = 90;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                            case 1:
                                {
                                    this.state = 88;
                                    this.return_statement();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 89;
                                    this.line();
                                }
                                break;
                        }
                    }
                    this.state = 94;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 95;
                this.match(sosParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    function_statement() {
        let _localctx = new Function_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, sosParser.RULE_function_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 97;
                this.args_row();
                this.state = 98;
                this.match(sosParser.T__5);
                this.state = 99;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    macros_statement() {
        let _localctx = new Macros_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, sosParser.RULE_macros_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this.match(sosParser.MACROS_KW);
                this.state = 102;
                this.assert_name();
                this.state = 103;
                this.macros_body();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    macros_body() {
        let _localctx = new Macros_bodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, sosParser.RULE_macros_body);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 105;
                this.match(sosParser.T__3);
                this.state = 106;
                this.rounded_breaket();
                this.state = 107;
                this.match(sosParser.T__5);
                this.state = 108;
                this.block();
                this.state = 109;
                this.match(sosParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    return_statement() {
        let _localctx = new Return_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, sosParser.RULE_return_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 111;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type_cast() {
        let _localctx = new Type_castContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, sosParser.RULE_type_cast);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this.match(sosParser.T__0);
                this.state = 114;
                this.type_indentify();
                this.state = 115;
                this.match(sosParser.T__2);
                this.state = 116;
                this.rounded_breaket();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    operator_statement() {
        let _localctx = new Operator_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, sosParser.RULE_operator_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 118;
                this.match(sosParser.OPERATOR_SYMBOLS);
                this.state = 119;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable_define() {
        let _localctx = new Variable_defineContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, sosParser.RULE_variable_define);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 121;
                this.type_indentify();
                this.state = 122;
                this.assert_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rounded_breaket() {
        let _localctx = new Rounded_breaketContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, sosParser.RULE_rounded_breaket);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 124;
                this.match(sosParser.T__0);
                this.state = 125;
                this.list_base();
                this.state = 126;
                this.match(sosParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    squared_breaket() {
        let _localctx = new Squared_breaketContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, sosParser.RULE_squared_breaket);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 128;
                this.match(sosParser.T__6);
                this.state = 129;
                this.list_base();
                this.state = 130;
                this.match(sosParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list_base() {
        let _localctx = new List_baseContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, sosParser.RULE_list_base);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 132;
                this.everything();
                this.state = 137;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === sosParser.T__1) {
                    {
                        {
                            this.state = 133;
                            this.match(sosParser.T__1);
                            this.state = 134;
                            this.everything();
                        }
                    }
                    this.state = 139;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assert_name() {
        let _localctx = new Assert_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, sosParser.RULE_assert_name);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sosParser.ASSERT_NAME) | (1 << sosParser.STRING) | (1 << sosParser.CHAR))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    insert_var_value() {
        let _localctx = new Insert_var_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, sosParser.RULE_insert_var_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 142;
                this.match(sosParser.T__8);
                this.state = 143;
                this.assert_name();
                this.state = 144;
                this.match(sosParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    everything() {
        let _localctx = new EverythingContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, sosParser.RULE_everything);
        try {
            this.state = 151;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 146;
                        this.type_indentify();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 147;
                        this.match(sosParser.STRING);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 148;
                        this.match(sosParser.CHAR);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 149;
                        this.match(sosParser.NUMBER);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 150;
                        this.match(sosParser.ASSERT_NAME);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type_indentify() {
        let _localctx = new Type_indentifyContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, sosParser.RULE_type_indentify);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                this.assert_name();
                this.state = 155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === sosParser.T__9 || _la === sosParser.T__10) {
                    {
                        this.state = 154;
                        this.sti();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    sti() {
        let _localctx = new StiContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, sosParser.RULE_sti);
        try {
            this.state = 160;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sosParser.T__9:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 157;
                        this.match(sosParser.T__9);
                    }
                    break;
                case sosParser.T__10:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 158;
                        this.match(sosParser.T__10);
                        this.state = 159;
                        this.expression();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    comments() {
        let _localctx = new CommentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, sosParser.RULE_comments);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sosParser.T__11:
                        {
                            this.state = 162;
                            this.comment_multiline();
                        }
                        break;
                    case sosParser.COMMENT_SINGLELINE:
                        {
                            this.state = 163;
                            this.match(sosParser.COMMENT_SINGLELINE);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    comment_multiline() {
        let _localctx = new Comment_multilineContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, sosParser.RULE_comment_multiline);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 166;
                    this.match(sosParser.T__11);
                }
                this.state = 170;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sosParser.T__0) | (1 << sosParser.T__1) | (1 << sosParser.T__2) | (1 << sosParser.T__3) | (1 << sosParser.T__4) | (1 << sosParser.T__5) | (1 << sosParser.T__6) | (1 << sosParser.T__7) | (1 << sosParser.T__8) | (1 << sosParser.T__9) | (1 << sosParser.T__10) | (1 << sosParser.FUNCTION_KW) | (1 << sosParser.RETURN_KW) | (1 << sosParser.END_OF_EXPR) | (1 << sosParser.MACROS_KW) | (1 << sosParser.OPERATOR_SYMBOLS) | (1 << sosParser.ASSERT_NAME) | (1 << sosParser.STRING) | (1 << sosParser.CHAR) | (1 << sosParser.NUMBER) | (1 << sosParser.DIGITS) | (1 << sosParser.VERY_POSITIV_NUMBER) | (1 << sosParser.VERY_NEGATIVE_NUMBER) | (1 << sosParser.FLOATING_NUMBER) | (1 << sosParser.SPLITED_NUMBER) | (1 << sosParser.WS) | (1 << sosParser.COMMENT_SINGLELINE))) !== 0)) {
                    {
                        {
                            this.state = 167;
                            _la = this._input.LA(1);
                            if (_la <= 0 || (_la === sosParser.T__11)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 172;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                {
                    this.state = 173;
                    this.match(sosParser.T__11);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static _serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1E\xB2\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x03\x02\x07\x024\n\x02\f\x02\x0E\x027\v\x02\x03" +
        "\x02\x03\x02\x03\x03\x03\x03\x06\x03=\n\x03\r\x03\x0E\x03>\x03\x04\x03" +
        "\x04\x05\x04C\n\x04\x03\x05\x03\x05\x05\x05G\n\x05\x03\x06\x03\x06\x05" +
        "\x06K\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07S\n" +
        "\x07\f\x07\x0E\x07V\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\b]\n\b" +
        "\f\b\x0E\b`\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n" +
        "\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
        "\x03\x12\x07\x12\x8A\n\x12\f\x12\x0E\x12\x8D\v\x12\x03\x13\x03\x13\x03" +
        "\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05" +
        "\x15\x9A\n\x15\x03\x16\x03\x16\x05\x16\x9E\n\x16\x03\x17\x03\x17\x03\x17" +
        "\x05\x17\xA3\n\x17\x03\x18\x03\x18\x05\x18\xA7\n\x18\x03\x19\x03\x19\x07" +
        "\x19\xAB\n\x19\f\x19\x0E\x19\xAE\v\x19\x03\x19\x03\x19\x03\x19\x02\x02" +
        "\x02\x1A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
        "\x02(\x02*\x02,\x02.\x020\x02\x02\x04\x03\x02\x14\x16\x03\x02\x0E\x0E" +
        "\x02\xAA\x025\x03\x02\x02\x02\x04:\x03\x02\x02\x02\x06@\x03\x02\x02\x02" +
        "\bF\x03\x02\x02\x02\nJ\x03\x02\x02\x02\fL\x03\x02\x02\x02\x0EY\x03\x02" +
        "\x02\x02\x10c\x03\x02\x02\x02\x12g\x03\x02\x02\x02\x14k\x03\x02\x02\x02" +
        "\x16q\x03\x02\x02\x02\x18s\x03\x02\x02\x02\x1Ax\x03\x02\x02\x02\x1C{\x03" +
        "\x02\x02\x02\x1E~\x03\x02\x02\x02 \x82\x03\x02\x02\x02\"\x86\x03\x02\x02" +
        "\x02$\x8E\x03\x02\x02\x02&\x90\x03\x02\x02\x02(\x99\x03\x02\x02\x02*\x9B" +
        "\x03\x02\x02\x02,\xA2\x03\x02\x02\x02.\xA6\x03\x02\x02\x020\xA8\x03\x02" +
        "\x02\x0224\x05\x04\x03\x0232\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02" +
        "\x02\x0256\x03\x02\x02\x0268\x03\x02\x02\x0275\x03\x02\x02\x0289\x07\x02" +
        "\x02\x039\x03\x03\x02\x02\x02:<\x05\b\x05\x02;=\x07\x11\x02\x02<;\x03" +
        "\x02\x02\x02=>\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?\x05" +
        "\x03\x02\x02\x02@B\x05\x1C\x0F\x02AC\x05\x1A\x0E\x02BA\x03\x02\x02\x02" +
        "BC\x03\x02\x02\x02C\x07\x03\x02\x02\x02DG\x05\n\x06\x02EG\x05.\x18\x02" +
        "FD\x03\x02\x02\x02FE\x03\x02\x02\x02G\t\x03\x02\x02\x02HK\x05\x10\t\x02" +
        "IK\x05\x12\n\x02JH\x03\x02\x02\x02JI\x03\x02\x02\x02K\v\x03\x02\x02\x02" +
        "LM\x07\x03\x02\x02MT\x05\x1C\x0F\x02NO\x07\x04\x02\x02OP\x05\x1C\x0F\x02" +
        "PQ\x05$\x13\x02QS\x03\x02\x02\x02RN\x03\x02\x02\x02SV\x03\x02\x02\x02" +
        "TR\x03\x02\x02\x02TU\x03\x02\x02\x02UW\x03\x02\x02\x02VT\x03\x02\x02\x02" +
        "WX\x07\x05\x02\x02X\r\x03\x02\x02\x02Y^\x07\x06\x02\x02Z]\x05\x16\f\x02" +
        "[]\x05\x04\x03\x02\\Z\x03\x02\x02\x02\\[\x03\x02\x02\x02]`\x03\x02\x02" +
        "\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_a\x03\x02\x02\x02`^\x03\x02" +
        "\x02\x02ab\x07\x07\x02\x02b\x0F\x03\x02\x02\x02cd\x05\f\x07\x02de\x07" +
        "\b\x02\x02ef\x05\x0E\b\x02f\x11\x03\x02\x02\x02gh\x07\x12\x02\x02hi\x05" +
        "$\x13\x02ij\x05\x14\v\x02j\x13\x03\x02\x02\x02kl\x07\x06\x02\x02lm\x05" +
        "\x1E\x10\x02mn\x07\b\x02\x02no\x05\x0E\b\x02op\x07\x07\x02\x02p\x15\x03" +
        "\x02\x02\x02qr\x05\b\x05\x02r\x17\x03\x02\x02\x02st\x07\x03\x02\x02tu" +
        "\x05*\x16\x02uv\x07\x05\x02\x02vw\x05\x1E\x10\x02w\x19\x03\x02\x02\x02" +
        "xy\x07\x13\x02\x02yz\x05\n\x06\x02z\x1B\x03\x02\x02\x02{|\x05*\x16\x02" +
        "|}\x05$\x13\x02}\x1D\x03\x02\x02\x02~\x7F\x07\x03\x02\x02\x7F\x80\x05" +
        "\"\x12\x02\x80\x81\x07\x05\x02\x02\x81\x1F\x03\x02\x02\x02\x82\x83\x07" +
        "\t\x02\x02\x83\x84\x05\"\x12\x02\x84\x85\x07\n\x02\x02\x85!\x03\x02\x02" +
        "\x02\x86\x8B\x05(\x15\x02\x87\x88\x07\x04\x02\x02\x88\x8A\x05(\x15\x02" +
        "\x89\x87\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02" +
        "\x8B\x8C\x03\x02\x02\x02\x8C#\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02" +
        "\x8E\x8F\t\x02\x02\x02\x8F%\x03\x02\x02\x02\x90\x91\x07\v\x02\x02\x91" +
        "\x92\x05$\x13\x02\x92\x93\x07\v\x02\x02\x93\'\x03\x02\x02\x02\x94\x9A" +
        "\x05*\x16\x02\x95\x9A\x07\x15\x02\x02\x96\x9A\x07\x16\x02\x02\x97\x9A" +
        "\x07\x17\x02\x02\x98\x9A\x07\x14\x02\x02\x99\x94\x03\x02\x02\x02\x99\x95" +
        "\x03\x02\x02\x02\x99\x96\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x98" +
        "\x03\x02\x02\x02\x9A)\x03\x02\x02\x02\x9B\x9D\x05$\x13\x02\x9C\x9E\x05" +
        ",\x17\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E+\x03\x02" +
        "\x02\x02\x9F\xA3\x07\f\x02\x02\xA0\xA1\x07\r\x02\x02\xA1\xA3\x05\b\x05" +
        "\x02\xA2\x9F\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3-\x03\x02\x02" +
        "\x02\xA4\xA7\x050\x19\x02\xA5\xA7\x07\x1E\x02\x02\xA6\xA4\x03\x02\x02" +
        "\x02\xA6\xA5\x03\x02\x02\x02\xA7/\x03\x02\x02\x02\xA8\xAC\x07\x0E\x02" +
        "\x02\xA9\xAB\n\x03\x02\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAE\x03\x02\x02" +
        "\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAF\x03\x02\x02" +
        "\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB0\x07\x0E\x02\x02\xB01\x03\x02\x02" +
        "\x02\x105>BFJT\\^\x8B\x99\x9D\xA2\xA6\xAC";
    static __ATN;
    static get _ATN() {
        if (!sosParser.__ATN) {
            sosParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(sosParser._serializedATN));
        }
        return sosParser.__ATN;
    }
}
exports.sosParser = sosParser;
class ProgramContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(sosParser.EOF, 0); }
    line(i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_program; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgramContext = ProgramContext;
class LineContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    END_OF_EXPR(i) {
        if (i === undefined) {
            return this.getTokens(sosParser.END_OF_EXPR);
        }
        else {
            return this.getToken(sosParser.END_OF_EXPR, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_line; }
    // @Override
    enterRule(listener) {
        if (listener.enterLine) {
            listener.enterLine(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLine) {
            listener.exitLine(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLine) {
            return visitor.visitLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LineContext = LineContext;
class VariableContext extends ParserRuleContext_1.ParserRuleContext {
    variable_define() {
        return this.getRuleContext(0, Variable_defineContext);
    }
    operator_statement() {
        return this.tryGetRuleContext(0, Operator_statementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_variable; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable) {
            listener.enterVariable(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable) {
            listener.exitVariable(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableContext = VariableContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    statement() {
        return this.tryGetRuleContext(0, StatementContext);
    }
    comments() {
        return this.tryGetRuleContext(0, CommentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    function_statement() {
        return this.tryGetRuleContext(0, Function_statementContext);
    }
    macros_statement() {
        return this.tryGetRuleContext(0, Macros_statementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class Args_rowContext extends ParserRuleContext_1.ParserRuleContext {
    variable_define(i) {
        if (i === undefined) {
            return this.getRuleContexts(Variable_defineContext);
        }
        else {
            return this.getRuleContext(i, Variable_defineContext);
        }
    }
    assert_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Assert_nameContext);
        }
        else {
            return this.getRuleContext(i, Assert_nameContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_args_row; }
    // @Override
    enterRule(listener) {
        if (listener.enterArgs_row) {
            listener.enterArgs_row(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArgs_row) {
            listener.exitArgs_row(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArgs_row) {
            return visitor.visitArgs_row(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Args_rowContext = Args_rowContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    return_statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(Return_statementContext);
        }
        else {
            return this.getRuleContext(i, Return_statementContext);
        }
    }
    line(i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_block; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class Function_statementContext extends ParserRuleContext_1.ParserRuleContext {
    args_row() {
        return this.getRuleContext(0, Args_rowContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_function_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunction_statement) {
            listener.enterFunction_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunction_statement) {
            listener.exitFunction_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunction_statement) {
            return visitor.visitFunction_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Function_statementContext = Function_statementContext;
class Macros_statementContext extends ParserRuleContext_1.ParserRuleContext {
    MACROS_KW() { return this.getToken(sosParser.MACROS_KW, 0); }
    assert_name() {
        return this.getRuleContext(0, Assert_nameContext);
    }
    macros_body() {
        return this.getRuleContext(0, Macros_bodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_macros_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterMacros_statement) {
            listener.enterMacros_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMacros_statement) {
            listener.exitMacros_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMacros_statement) {
            return visitor.visitMacros_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Macros_statementContext = Macros_statementContext;
class Macros_bodyContext extends ParserRuleContext_1.ParserRuleContext {
    rounded_breaket() {
        return this.getRuleContext(0, Rounded_breaketContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_macros_body; }
    // @Override
    enterRule(listener) {
        if (listener.enterMacros_body) {
            listener.enterMacros_body(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMacros_body) {
            listener.exitMacros_body(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMacros_body) {
            return visitor.visitMacros_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Macros_bodyContext = Macros_bodyContext;
class Return_statementContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_return_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterReturn_statement) {
            listener.enterReturn_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReturn_statement) {
            listener.exitReturn_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReturn_statement) {
            return visitor.visitReturn_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Return_statementContext = Return_statementContext;
class Type_castContext extends ParserRuleContext_1.ParserRuleContext {
    type_indentify() {
        return this.getRuleContext(0, Type_indentifyContext);
    }
    rounded_breaket() {
        return this.getRuleContext(0, Rounded_breaketContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_type_cast; }
    // @Override
    enterRule(listener) {
        if (listener.enterType_cast) {
            listener.enterType_cast(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType_cast) {
            listener.exitType_cast(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitType_cast) {
            return visitor.visitType_cast(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Type_castContext = Type_castContext;
class Operator_statementContext extends ParserRuleContext_1.ParserRuleContext {
    OPERATOR_SYMBOLS() { return this.getToken(sosParser.OPERATOR_SYMBOLS, 0); }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_operator_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterOperator_statement) {
            listener.enterOperator_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOperator_statement) {
            listener.exitOperator_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOperator_statement) {
            return visitor.visitOperator_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Operator_statementContext = Operator_statementContext;
class Variable_defineContext extends ParserRuleContext_1.ParserRuleContext {
    type_indentify() {
        return this.getRuleContext(0, Type_indentifyContext);
    }
    assert_name() {
        return this.getRuleContext(0, Assert_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_variable_define; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable_define) {
            listener.enterVariable_define(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable_define) {
            listener.exitVariable_define(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariable_define) {
            return visitor.visitVariable_define(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Variable_defineContext = Variable_defineContext;
class Rounded_breaketContext extends ParserRuleContext_1.ParserRuleContext {
    list_base() {
        return this.getRuleContext(0, List_baseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_rounded_breaket; }
    // @Override
    enterRule(listener) {
        if (listener.enterRounded_breaket) {
            listener.enterRounded_breaket(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRounded_breaket) {
            listener.exitRounded_breaket(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRounded_breaket) {
            return visitor.visitRounded_breaket(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Rounded_breaketContext = Rounded_breaketContext;
class Squared_breaketContext extends ParserRuleContext_1.ParserRuleContext {
    list_base() {
        return this.getRuleContext(0, List_baseContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_squared_breaket; }
    // @Override
    enterRule(listener) {
        if (listener.enterSquared_breaket) {
            listener.enterSquared_breaket(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSquared_breaket) {
            listener.exitSquared_breaket(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSquared_breaket) {
            return visitor.visitSquared_breaket(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Squared_breaketContext = Squared_breaketContext;
class List_baseContext extends ParserRuleContext_1.ParserRuleContext {
    everything(i) {
        if (i === undefined) {
            return this.getRuleContexts(EverythingContext);
        }
        else {
            return this.getRuleContext(i, EverythingContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_list_base; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_base) {
            listener.enterList_base(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_base) {
            listener.exitList_base(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList_base) {
            return visitor.visitList_base(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.List_baseContext = List_baseContext;
class Assert_nameContext extends ParserRuleContext_1.ParserRuleContext {
    ASSERT_NAME() { return this.tryGetToken(sosParser.ASSERT_NAME, 0); }
    STRING() { return this.tryGetToken(sosParser.STRING, 0); }
    CHAR() { return this.tryGetToken(sosParser.CHAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_assert_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssert_name) {
            listener.enterAssert_name(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssert_name) {
            listener.exitAssert_name(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssert_name) {
            return visitor.visitAssert_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Assert_nameContext = Assert_nameContext;
class Insert_var_valueContext extends ParserRuleContext_1.ParserRuleContext {
    assert_name() {
        return this.getRuleContext(0, Assert_nameContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_insert_var_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterInsert_var_value) {
            listener.enterInsert_var_value(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInsert_var_value) {
            listener.exitInsert_var_value(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInsert_var_value) {
            return visitor.visitInsert_var_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Insert_var_valueContext = Insert_var_valueContext;
class EverythingContext extends ParserRuleContext_1.ParserRuleContext {
    type_indentify() {
        return this.tryGetRuleContext(0, Type_indentifyContext);
    }
    STRING() { return this.tryGetToken(sosParser.STRING, 0); }
    CHAR() { return this.tryGetToken(sosParser.CHAR, 0); }
    NUMBER() { return this.tryGetToken(sosParser.NUMBER, 0); }
    ASSERT_NAME() { return this.tryGetToken(sosParser.ASSERT_NAME, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_everything; }
    // @Override
    enterRule(listener) {
        if (listener.enterEverything) {
            listener.enterEverything(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEverything) {
            listener.exitEverything(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEverything) {
            return visitor.visitEverything(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EverythingContext = EverythingContext;
class Type_indentifyContext extends ParserRuleContext_1.ParserRuleContext {
    assert_name() {
        return this.getRuleContext(0, Assert_nameContext);
    }
    sti() {
        return this.tryGetRuleContext(0, StiContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_type_indentify; }
    // @Override
    enterRule(listener) {
        if (listener.enterType_indentify) {
            listener.enterType_indentify(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType_indentify) {
            listener.exitType_indentify(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitType_indentify) {
            return visitor.visitType_indentify(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Type_indentifyContext = Type_indentifyContext;
class StiContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_sti; }
    // @Override
    enterRule(listener) {
        if (listener.enterSti) {
            listener.enterSti(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSti) {
            listener.exitSti(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSti) {
            return visitor.visitSti(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StiContext = StiContext;
class CommentsContext extends ParserRuleContext_1.ParserRuleContext {
    comment_multiline() {
        return this.tryGetRuleContext(0, Comment_multilineContext);
    }
    COMMENT_SINGLELINE() { return this.tryGetToken(sosParser.COMMENT_SINGLELINE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_comments; }
    // @Override
    enterRule(listener) {
        if (listener.enterComments) {
            listener.enterComments(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComments) {
            listener.exitComments(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitComments) {
            return visitor.visitComments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CommentsContext = CommentsContext;
class Comment_multilineContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return sosParser.RULE_comment_multiline; }
    // @Override
    enterRule(listener) {
        if (listener.enterComment_multiline) {
            listener.enterComment_multiline(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComment_multiline) {
            listener.exitComment_multiline(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitComment_multiline) {
            return visitor.visitComment_multiline(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Comment_multilineContext = Comment_multilineContext;
//# sourceMappingURL=sosParser.js.map