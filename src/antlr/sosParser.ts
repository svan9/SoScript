// Generated from ./src/antlr/sos.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { sosListener } from "./sosListener";
import { sosVisitor } from "./sosVisitor";


export class sosParser extends Parser {
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
	public static readonly FUNCTION_KW = 18;
	public static readonly RETURN_KW = 19;
	public static readonly END_OF_EXPR = 20;
	public static readonly MACROS_KW = 21;
	public static readonly DEFINE_KW = 22;
	public static readonly OPERATOR_SYMBOLS = 23;
	public static readonly ASSERT_NAME = 24;
	public static readonly STRING = 25;
	public static readonly CHAR = 26;
	public static readonly NUMBER = 27;
	public static readonly DIGITS = 28;
	public static readonly VERY_POSITIV_NUMBER = 29;
	public static readonly VERY_NEGATIVE_NUMBER = 30;
	public static readonly FLOATING_NUMBER = 31;
	public static readonly SPLITED_NUMBER = 32;
	public static readonly WS = 33;
	public static readonly RULE_program = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_variable = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_compiler_instr = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_args_row = 6;
	public static readonly RULE_block = 7;
	public static readonly RULE_function_statement = 8;
	public static readonly RULE_define_statement = 9;
	public static readonly RULE_macros_statement = 10;
	public static readonly RULE_macros_body = 11;
	public static readonly RULE_return_statement = 12;
	public static readonly RULE_type_cast = 13;
	public static readonly RULE_operator_statement = 14;
	public static readonly RULE_variable_define = 15;
	public static readonly RULE_rounded_breaket = 16;
	public static readonly RULE_squared_breaket = 17;
	public static readonly RULE_list_base = 18;
	public static readonly RULE_assert_name = 19;
	public static readonly RULE_assert_short_name = 20;
	public static readonly RULE_insert_var_value = 21;
	public static readonly RULE_everything = 22;
	public static readonly RULE_type_indentify = 23;
	public static readonly RULE_sti = 24;
	public static readonly RULE_comments = 25;
	public static readonly RULE_comment_singleline = 26;
	public static readonly RULE_comment_multiline = 27;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "variable", "expression", "compiler_instr", "statement", 
		"args_row", "block", "function_statement", "define_statement", "macros_statement", 
		"macros_body", "return_statement", "type_cast", "operator_statement", 
		"variable_define", "rounded_breaket", "squared_breaket", "list_base", 
		"assert_name", "assert_short_name", "insert_var_value", "everything", 
		"type_indentify", "sti", "comments", "comment_singleline", "comment_multiline",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "','", "')'", "'{'", "'}'", "'->'", "'as'", "'['", "']'", 
		"'.'", "'%'", "'&'", "'~'", "'//'", "'\n'", "'\r'", "'***'", "'function'", 
		"'return'", "';'", "'@macros'", "'@define'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "FUNCTION_KW", "RETURN_KW", 
		"END_OF_EXPR", "MACROS_KW", "DEFINE_KW", "OPERATOR_SYMBOLS", "ASSERT_NAME", 
		"STRING", "CHAR", "NUMBER", "DIGITS", "VERY_POSITIV_NUMBER", "VERY_NEGATIVE_NUMBER", 
		"FLOATING_NUMBER", "SPLITED_NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(sosParser._LITERAL_NAMES, sosParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return sosParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "sos.g4"; }

	// @Override
	public get ruleNames(): string[] { return sosParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return sosParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(sosParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, sosParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sosParser.T__0) | (1 << sosParser.T__13) | (1 << sosParser.T__16) | (1 << sosParser.MACROS_KW) | (1 << sosParser.DEFINE_KW) | (1 << sosParser.ASSERT_NAME) | (1 << sosParser.STRING) | (1 << sosParser.CHAR) | (1 << sosParser.NUMBER))) !== 0)) {
				{
				{
				this.state = 56;
				this.line();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 62;
			this.match(sosParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, sosParser.RULE_line);
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sosParser.T__0:
			case sosParser.MACROS_KW:
			case sosParser.DEFINE_KW:
			case sosParser.ASSERT_NAME:
			case sosParser.STRING:
			case sosParser.CHAR:
			case sosParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				this.expression();
				}
				break;
			case sosParser.T__13:
			case sosParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 65;
				this.comments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, sosParser.RULE_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.variable_define();
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sosParser.OPERATOR_SYMBOLS) {
				{
				this.state = 69;
				this.operator_statement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, sosParser.RULE_expression);
		let _la: number;
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sosParser.T__0:
			case sosParser.ASSERT_NAME:
			case sosParser.STRING:
			case sosParser.CHAR:
			case sosParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 72;
				this.statement();
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 73;
					this.match(sosParser.END_OF_EXPR);
					}
					}
					this.state = 76;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === sosParser.END_OF_EXPR);
				}
				break;
			case sosParser.MACROS_KW:
			case sosParser.DEFINE_KW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 78;
				this.compiler_instr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compiler_instr(): Compiler_instrContext {
		let _localctx: Compiler_instrContext = new Compiler_instrContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, sosParser.RULE_compiler_instr);
		try {
			this.state = 83;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sosParser.MACROS_KW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.macros_statement();
				}
				break;
			case sosParser.DEFINE_KW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 82;
				this.define_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, sosParser.RULE_statement);
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
				this.function_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.variable();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 87;
				this.everything();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public args_row(): Args_rowContext {
		let _localctx: Args_rowContext = new Args_rowContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, sosParser.RULE_args_row);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(sosParser.T__0);
			this.state = 91;
			this.variable_define();
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sosParser.T__1) {
				{
				{
				this.state = 92;
				this.match(sosParser.T__1);
				this.state = 93;
				this.variable_define();
				this.state = 94;
				this.assert_name();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 101;
			this.match(sosParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, sosParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(sosParser.T__3);
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sosParser.T__0) | (1 << sosParser.T__13) | (1 << sosParser.T__16) | (1 << sosParser.MACROS_KW) | (1 << sosParser.DEFINE_KW) | (1 << sosParser.ASSERT_NAME) | (1 << sosParser.STRING) | (1 << sosParser.CHAR) | (1 << sosParser.NUMBER))) !== 0)) {
				{
				this.state = 106;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 104;
					this.return_statement();
					}
					break;

				case 2:
					{
					this.state = 105;
					this.line();
					}
					break;
				}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 111;
			this.match(sosParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_statement(): Function_statementContext {
		let _localctx: Function_statementContext = new Function_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, sosParser.RULE_function_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.args_row();
			this.state = 114;
			this.match(sosParser.T__5);
			this.state = 115;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public define_statement(): Define_statementContext {
		let _localctx: Define_statementContext = new Define_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, sosParser.RULE_define_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(sosParser.DEFINE_KW);
			this.state = 118;
			this.assert_name();
			this.state = 119;
			this.match(sosParser.T__6);
			this.state = 120;
			this.assert_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macros_statement(): Macros_statementContext {
		let _localctx: Macros_statementContext = new Macros_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, sosParser.RULE_macros_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(sosParser.MACROS_KW);
			this.state = 123;
			this.assert_name();
			this.state = 124;
			this.macros_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macros_body(): Macros_bodyContext {
		let _localctx: Macros_bodyContext = new Macros_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, sosParser.RULE_macros_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(sosParser.T__3);
			this.state = 127;
			this.rounded_breaket();
			this.state = 128;
			this.match(sosParser.T__5);
			this.state = 129;
			this.block();
			this.state = 130;
			this.match(sosParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_statement(): Return_statementContext {
		let _localctx: Return_statementContext = new Return_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, sosParser.RULE_return_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_cast(): Type_castContext {
		let _localctx: Type_castContext = new Type_castContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, sosParser.RULE_type_cast);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(sosParser.T__0);
			this.state = 135;
			this.type_indentify();
			this.state = 136;
			this.match(sosParser.T__2);
			this.state = 137;
			this.rounded_breaket();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator_statement(): Operator_statementContext {
		let _localctx: Operator_statementContext = new Operator_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, sosParser.RULE_operator_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.match(sosParser.OPERATOR_SYMBOLS);
			this.state = 140;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable_define(): Variable_defineContext {
		let _localctx: Variable_defineContext = new Variable_defineContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, sosParser.RULE_variable_define);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.type_indentify();
			this.state = 143;
			this.assert_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rounded_breaket(): Rounded_breaketContext {
		let _localctx: Rounded_breaketContext = new Rounded_breaketContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, sosParser.RULE_rounded_breaket);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(sosParser.T__0);
			this.state = 146;
			this.list_base();
			this.state = 147;
			this.match(sosParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public squared_breaket(): Squared_breaketContext {
		let _localctx: Squared_breaketContext = new Squared_breaketContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, sosParser.RULE_squared_breaket);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(sosParser.T__7);
			this.state = 150;
			this.list_base();
			this.state = 151;
			this.match(sosParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_base(): List_baseContext {
		let _localctx: List_baseContext = new List_baseContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, sosParser.RULE_list_base);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.everything();
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sosParser.T__1) {
				{
				{
				this.state = 154;
				this.match(sosParser.T__1);
				this.state = 155;
				this.everything();
				}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assert_name(): Assert_nameContext {
		let _localctx: Assert_nameContext = new Assert_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, sosParser.RULE_assert_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 161;
			this.assert_short_name();
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sosParser.T__9) {
				{
				{
				this.state = 162;
				this.match(sosParser.T__9);
				this.state = 163;
				this.assert_short_name();
				}
				}
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assert_short_name(): Assert_short_nameContext {
		let _localctx: Assert_short_nameContext = new Assert_short_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, sosParser.RULE_assert_short_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sosParser.ASSERT_NAME) | (1 << sosParser.STRING) | (1 << sosParser.CHAR))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insert_var_value(): Insert_var_valueContext {
		let _localctx: Insert_var_valueContext = new Insert_var_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, sosParser.RULE_insert_var_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(sosParser.T__10);
			this.state = 172;
			this.assert_name();
			this.state = 173;
			this.match(sosParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public everything(): EverythingContext {
		let _localctx: EverythingContext = new EverythingContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, sosParser.RULE_everything);
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 175;
				this.type_indentify();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 176;
				this.match(sosParser.STRING);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 177;
				this.match(sosParser.CHAR);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 178;
				this.match(sosParser.NUMBER);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 179;
				this.match(sosParser.ASSERT_NAME);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_indentify(): Type_indentifyContext {
		let _localctx: Type_indentifyContext = new Type_indentifyContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, sosParser.RULE_type_indentify);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(sosParser.ASSERT_NAME);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sosParser.T__11 || _la === sosParser.T__12) {
				{
				this.state = 183;
				this.sti();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sti(): StiContext {
		let _localctx: StiContext = new StiContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, sosParser.RULE_sti);
		try {
			this.state = 195;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sosParser.T__11:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 186;
				this.match(sosParser.T__11);
				}
				break;
			case sosParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 187;
				this.match(sosParser.T__12);
				this.state = 193;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sosParser.NUMBER:
					{
					this.state = 188;
					this.match(sosParser.NUMBER);
					}
					break;
				case sosParser.T__0:
					{
					{
					this.state = 189;
					this.match(sosParser.T__0);
					this.state = 190;
					this.statement();
					this.state = 191;
					this.match(sosParser.T__2);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comments(): CommentsContext {
		let _localctx: CommentsContext = new CommentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, sosParser.RULE_comments);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sosParser.T__16:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 197;
				this.comment_multiline();
				}
				break;
			case sosParser.T__13:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
				this.comment_singleline();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment_singleline(): Comment_singlelineContext {
		let _localctx: Comment_singlelineContext = new Comment_singlelineContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, sosParser.RULE_comment_singleline);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(sosParser.T__13);
			this.state = 205;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 202;
					_la = this._input.LA(1);
					if (_la <= 0 || (_la === sosParser.T__14 || _la === sosParser.T__15)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment_multiline(): Comment_multilineContext {
		let _localctx: Comment_multilineContext = new Comment_multilineContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, sosParser.RULE_comment_multiline);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 208;
			this.match(sosParser.T__16);
			}
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sosParser.T__0) | (1 << sosParser.T__1) | (1 << sosParser.T__2) | (1 << sosParser.T__3) | (1 << sosParser.T__4) | (1 << sosParser.T__5) | (1 << sosParser.T__6) | (1 << sosParser.T__7) | (1 << sosParser.T__8) | (1 << sosParser.T__9) | (1 << sosParser.T__10) | (1 << sosParser.T__11) | (1 << sosParser.T__12) | (1 << sosParser.T__13) | (1 << sosParser.T__14) | (1 << sosParser.T__15) | (1 << sosParser.FUNCTION_KW) | (1 << sosParser.RETURN_KW) | (1 << sosParser.END_OF_EXPR) | (1 << sosParser.MACROS_KW) | (1 << sosParser.DEFINE_KW) | (1 << sosParser.OPERATOR_SYMBOLS) | (1 << sosParser.ASSERT_NAME) | (1 << sosParser.STRING) | (1 << sosParser.CHAR) | (1 << sosParser.NUMBER) | (1 << sosParser.DIGITS) | (1 << sosParser.VERY_POSITIV_NUMBER) | (1 << sosParser.VERY_NEGATIVE_NUMBER) | (1 << sosParser.FLOATING_NUMBER))) !== 0) || _la === sosParser.SPLITED_NUMBER || _la === sosParser.WS) {
				{
				{
				this.state = 209;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === sosParser.T__16)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			{
			this.state = 215;
			this.match(sosParser.T__16);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#\xDC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x03\x02\x07\x02<\n\x02\f\x02\x0E\x02?\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x05\x03E\n\x03\x03\x04\x03\x04\x05\x04I\n\x04\x03\x05" +
		"\x03\x05\x06\x05M\n\x05\r\x05\x0E\x05N\x03\x05\x05\x05R\n\x05\x03\x06" +
		"\x03\x06\x05\x06V\n\x06\x03\x07\x03\x07\x03\x07\x05\x07[\n\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x07\bc\n\b\f\b\x0E\bf\v\b\x03\b\x03\b\x03\t" +
		"\x03\t\x03\t\x07\tm\n\t\f\t\x0E\tp\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x07" +
		"\x14\x9F\n\x14\f\x14\x0E\x14\xA2\v\x14\x03\x15\x03\x15\x03\x15\x07\x15" +
		"\xA7\n\x15\f\x15\x0E\x15\xAA\v\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\xB7\n\x18" +
		"\x03\x19\x03\x19\x05\x19\xBB\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\xC4\n\x1A\x05\x1A\xC6\n\x1A\x03\x1B\x03\x1B" +
		"\x05\x1B\xCA\n\x1B\x03\x1C\x03\x1C\x07\x1C\xCE\n\x1C\f\x1C\x0E\x1C\xD1" +
		"\v\x1C\x03\x1D\x03\x1D\x07\x1D\xD5\n\x1D\f\x1D\x0E\x1D\xD8\v\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x02\x02\x02\x1E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		"\x02\x05\x03\x02\x1A\x1C\x03\x02\x11\x12\x03\x02\x13\x13\x02\xD6\x02=" +
		"\x03\x02\x02\x02\x04D\x03\x02\x02\x02\x06F\x03\x02\x02\x02\bQ\x03\x02" +
		"\x02\x02\nU\x03\x02\x02\x02\fZ\x03\x02\x02\x02\x0E\\\x03\x02\x02\x02\x10" +
		"i\x03\x02\x02\x02\x12s\x03\x02\x02\x02\x14w\x03\x02\x02\x02\x16|\x03\x02" +
		"\x02\x02\x18\x80\x03\x02\x02\x02\x1A\x86\x03\x02\x02\x02\x1C\x88\x03\x02" +
		"\x02\x02\x1E\x8D\x03\x02\x02\x02 \x90\x03\x02\x02\x02\"\x93\x03\x02\x02" +
		"\x02$\x97\x03\x02\x02\x02&\x9B\x03\x02\x02\x02(\xA3\x03\x02\x02\x02*\xAB" +
		"\x03\x02\x02\x02,\xAD\x03\x02\x02\x02.\xB6\x03\x02\x02\x020\xB8\x03\x02" +
		"\x02\x022\xC5\x03\x02\x02\x024\xC9\x03\x02\x02\x026\xCB\x03\x02\x02\x02" +
		"8\xD2\x03\x02\x02\x02:<\x05\x04\x03\x02;:\x03\x02\x02\x02<?\x03\x02\x02" +
		"\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>@\x03\x02\x02\x02?=\x03\x02\x02" +
		"\x02@A\x07\x02\x02\x03A\x03\x03\x02\x02\x02BE\x05\b\x05\x02CE\x054\x1B" +
		"\x02DB\x03\x02\x02\x02DC\x03\x02\x02\x02E\x05\x03\x02\x02\x02FH\x05 \x11" +
		"\x02GI\x05\x1E\x10\x02HG\x03\x02\x02\x02HI\x03\x02\x02\x02I\x07\x03\x02" +
		"\x02\x02JL\x05\f\x07\x02KM\x07\x16\x02\x02LK\x03\x02\x02\x02MN\x03\x02" +
		"\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OR\x03\x02\x02\x02PR\x05\n" +
		"\x06\x02QJ\x03\x02\x02\x02QP\x03\x02\x02\x02R\t\x03\x02\x02\x02SV\x05" +
		"\x16\f\x02TV\x05\x14\v\x02US\x03\x02\x02\x02UT\x03\x02\x02\x02V\v\x03" +
		"\x02\x02\x02W[\x05\x12\n\x02X[\x05\x06\x04\x02Y[\x05.\x18\x02ZW\x03\x02" +
		"\x02\x02ZX\x03\x02\x02\x02ZY\x03\x02\x02\x02[\r\x03\x02\x02\x02\\]\x07" +
		"\x03\x02\x02]d\x05 \x11\x02^_\x07\x04\x02\x02_`\x05 \x11\x02`a\x05(\x15" +
		"\x02ac\x03\x02\x02\x02b^\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02" +
		"\x02de\x03\x02\x02\x02eg\x03\x02\x02\x02fd\x03\x02\x02\x02gh\x07\x05\x02" +
		"\x02h\x0F\x03\x02\x02\x02in\x07\x06\x02\x02jm\x05\x1A\x0E\x02km\x05\x04" +
		"\x03\x02lj\x03\x02\x02\x02lk\x03\x02\x02\x02mp\x03\x02\x02\x02nl\x03\x02" +
		"\x02\x02no\x03\x02\x02\x02oq\x03\x02\x02\x02pn\x03\x02\x02\x02qr\x07\x07" +
		"\x02\x02r\x11\x03\x02\x02\x02st\x05\x0E\b\x02tu\x07\b\x02\x02uv\x05\x10" +
		"\t\x02v\x13\x03\x02\x02\x02wx\x07\x18\x02\x02xy\x05(\x15\x02yz\x07\t\x02" +
		"\x02z{\x05(\x15\x02{\x15\x03\x02\x02\x02|}\x07\x17\x02\x02}~\x05(\x15" +
		"\x02~\x7F\x05\x18\r\x02\x7F\x17\x03\x02\x02\x02\x80\x81\x07\x06\x02\x02" +
		"\x81\x82\x05\"\x12\x02\x82\x83\x07\b\x02\x02\x83\x84\x05\x10\t\x02\x84" +
		"\x85\x07\x07\x02\x02\x85\x19\x03\x02\x02\x02\x86\x87\x05\f\x07\x02\x87" +
		"\x1B\x03\x02\x02\x02\x88\x89\x07\x03\x02\x02\x89\x8A\x050\x19\x02\x8A" +
		"\x8B\x07\x05\x02\x02\x8B\x8C\x05\"\x12\x02\x8C\x1D\x03\x02\x02\x02\x8D" +
		"\x8E\x07\x19\x02\x02\x8E\x8F\x05\f\x07\x02\x8F\x1F\x03\x02\x02\x02\x90" +
		"\x91\x050\x19\x02\x91\x92\x05(\x15\x02\x92!\x03\x02\x02\x02\x93\x94\x07" +
		"\x03\x02\x02\x94\x95\x05&\x14\x02\x95\x96\x07\x05\x02\x02\x96#\x03\x02" +
		"\x02\x02\x97\x98\x07\n\x02\x02\x98\x99\x05&\x14\x02\x99\x9A\x07\v\x02" +
		"\x02\x9A%\x03\x02\x02\x02\x9B\xA0\x05.\x18\x02\x9C\x9D\x07\x04\x02\x02" +
		"\x9D\x9F\x05.\x18\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02" +
		"\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\'\x03\x02\x02\x02" +
		"\xA2\xA0\x03\x02\x02\x02\xA3\xA8\x05*\x16\x02\xA4\xA5\x07\f\x02\x02\xA5" +
		"\xA7\x05*\x16\x02\xA6\xA4\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8" +
		"\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9)\x03\x02\x02\x02\xAA" +
		"\xA8\x03\x02\x02\x02\xAB\xAC\t\x02\x02\x02\xAC+\x03\x02\x02\x02\xAD\xAE" +
		"\x07\r\x02\x02\xAE\xAF\x05(\x15\x02\xAF\xB0\x07\r\x02\x02\xB0-\x03\x02" +
		"\x02\x02\xB1\xB7\x050\x19\x02\xB2\xB7\x07\x1B\x02\x02\xB3\xB7\x07\x1C" +
		"\x02\x02\xB4\xB7\x07\x1D\x02\x02\xB5\xB7\x07\x1A\x02\x02\xB6\xB1\x03\x02" +
		"\x02\x02\xB6\xB2\x03\x02\x02\x02\xB6\xB3\x03\x02\x02\x02\xB6\xB4\x03\x02" +
		"\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7/\x03\x02\x02\x02\xB8\xBA\x07\x1A" +
		"\x02\x02\xB9\xBB\x052\x1A\x02\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03\x02" +
		"\x02\x02\xBB1\x03\x02\x02\x02\xBC\xC6\x07\x0E\x02\x02\xBD\xC3\x07\x0F" +
		"\x02\x02\xBE\xC4\x07\x1D\x02\x02\xBF\xC0\x07\x03\x02\x02\xC0\xC1\x05\f" +
		"\x07\x02\xC1\xC2\x07\x05\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xBE\x03\x02" +
		"\x02\x02\xC3\xBF\x03\x02\x02\x02\xC4\xC6\x03\x02\x02\x02\xC5\xBC\x03\x02" +
		"\x02\x02\xC5\xBD\x03\x02\x02\x02\xC63\x03\x02\x02\x02\xC7\xCA\x058\x1D" +
		"\x02\xC8\xCA\x056\x1C\x02\xC9\xC7\x03\x02\x02\x02\xC9\xC8\x03\x02\x02" +
		"\x02\xCA5\x03\x02\x02\x02\xCB\xCF\x07\x10\x02\x02\xCC\xCE\n\x03\x02\x02" +
		"\xCD\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02" +
		"\xCF\xD0\x03\x02\x02\x02\xD07\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02" +
		"\xD2\xD6\x07\x13\x02\x02\xD3\xD5\n\x04\x02\x02\xD4\xD3\x03\x02\x02\x02" +
		"\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02" +
		"\xD7\xD9\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDA\x07\x13\x02\x02" +
		"\xDA9\x03\x02\x02\x02\x15=DHNQUZdln\xA0\xA8\xB6\xBA\xC3\xC5\xC9\xCF\xD6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!sosParser.__ATN) {
			sosParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(sosParser._serializedATN));
		}

		return sosParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(sosParser.EOF, 0); }
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_program; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public comments(): CommentsContext | undefined {
		return this.tryGetRuleContext(0, CommentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_line; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public variable_define(): Variable_defineContext {
		return this.getRuleContext(0, Variable_defineContext);
	}
	public operator_statement(): Operator_statementContext | undefined {
		return this.tryGetRuleContext(0, Operator_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_variable; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public END_OF_EXPR(): TerminalNode[];
	public END_OF_EXPR(i: number): TerminalNode;
	public END_OF_EXPR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sosParser.END_OF_EXPR);
		} else {
			return this.getToken(sosParser.END_OF_EXPR, i);
		}
	}
	public compiler_instr(): Compiler_instrContext | undefined {
		return this.tryGetRuleContext(0, Compiler_instrContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_expression; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compiler_instrContext extends ParserRuleContext {
	public macros_statement(): Macros_statementContext | undefined {
		return this.tryGetRuleContext(0, Macros_statementContext);
	}
	public define_statement(): Define_statementContext | undefined {
		return this.tryGetRuleContext(0, Define_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_compiler_instr; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterCompiler_instr) {
			listener.enterCompiler_instr(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitCompiler_instr) {
			listener.exitCompiler_instr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitCompiler_instr) {
			return visitor.visitCompiler_instr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public function_statement(): Function_statementContext | undefined {
		return this.tryGetRuleContext(0, Function_statementContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public everything(): EverythingContext | undefined {
		return this.tryGetRuleContext(0, EverythingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_statement; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Args_rowContext extends ParserRuleContext {
	public variable_define(): Variable_defineContext[];
	public variable_define(i: number): Variable_defineContext;
	public variable_define(i?: number): Variable_defineContext | Variable_defineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Variable_defineContext);
		} else {
			return this.getRuleContext(i, Variable_defineContext);
		}
	}
	public assert_name(): Assert_nameContext[];
	public assert_name(i: number): Assert_nameContext;
	public assert_name(i?: number): Assert_nameContext | Assert_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Assert_nameContext);
		} else {
			return this.getRuleContext(i, Assert_nameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_args_row; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterArgs_row) {
			listener.enterArgs_row(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitArgs_row) {
			listener.exitArgs_row(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitArgs_row) {
			return visitor.visitArgs_row(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public return_statement(): Return_statementContext[];
	public return_statement(i: number): Return_statementContext;
	public return_statement(i?: number): Return_statementContext | Return_statementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Return_statementContext);
		} else {
			return this.getRuleContext(i, Return_statementContext);
		}
	}
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_block; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_statementContext extends ParserRuleContext {
	public args_row(): Args_rowContext {
		return this.getRuleContext(0, Args_rowContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_function_statement; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterFunction_statement) {
			listener.enterFunction_statement(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitFunction_statement) {
			listener.exitFunction_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitFunction_statement) {
			return visitor.visitFunction_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Define_statementContext extends ParserRuleContext {
	public DEFINE_KW(): TerminalNode { return this.getToken(sosParser.DEFINE_KW, 0); }
	public assert_name(): Assert_nameContext[];
	public assert_name(i: number): Assert_nameContext;
	public assert_name(i?: number): Assert_nameContext | Assert_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Assert_nameContext);
		} else {
			return this.getRuleContext(i, Assert_nameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_define_statement; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterDefine_statement) {
			listener.enterDefine_statement(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitDefine_statement) {
			listener.exitDefine_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitDefine_statement) {
			return visitor.visitDefine_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Macros_statementContext extends ParserRuleContext {
	public MACROS_KW(): TerminalNode { return this.getToken(sosParser.MACROS_KW, 0); }
	public assert_name(): Assert_nameContext {
		return this.getRuleContext(0, Assert_nameContext);
	}
	public macros_body(): Macros_bodyContext {
		return this.getRuleContext(0, Macros_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_macros_statement; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterMacros_statement) {
			listener.enterMacros_statement(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitMacros_statement) {
			listener.exitMacros_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitMacros_statement) {
			return visitor.visitMacros_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Macros_bodyContext extends ParserRuleContext {
	public rounded_breaket(): Rounded_breaketContext {
		return this.getRuleContext(0, Rounded_breaketContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_macros_body; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterMacros_body) {
			listener.enterMacros_body(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitMacros_body) {
			listener.exitMacros_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitMacros_body) {
			return visitor.visitMacros_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_return_statement; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterReturn_statement) {
			listener.enterReturn_statement(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitReturn_statement) {
			listener.exitReturn_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitReturn_statement) {
			return visitor.visitReturn_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_castContext extends ParserRuleContext {
	public type_indentify(): Type_indentifyContext {
		return this.getRuleContext(0, Type_indentifyContext);
	}
	public rounded_breaket(): Rounded_breaketContext {
		return this.getRuleContext(0, Rounded_breaketContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_type_cast; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterType_cast) {
			listener.enterType_cast(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitType_cast) {
			listener.exitType_cast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitType_cast) {
			return visitor.visitType_cast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operator_statementContext extends ParserRuleContext {
	public OPERATOR_SYMBOLS(): TerminalNode { return this.getToken(sosParser.OPERATOR_SYMBOLS, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_operator_statement; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterOperator_statement) {
			listener.enterOperator_statement(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitOperator_statement) {
			listener.exitOperator_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitOperator_statement) {
			return visitor.visitOperator_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_defineContext extends ParserRuleContext {
	public type_indentify(): Type_indentifyContext {
		return this.getRuleContext(0, Type_indentifyContext);
	}
	public assert_name(): Assert_nameContext {
		return this.getRuleContext(0, Assert_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_variable_define; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterVariable_define) {
			listener.enterVariable_define(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitVariable_define) {
			listener.exitVariable_define(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitVariable_define) {
			return visitor.visitVariable_define(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rounded_breaketContext extends ParserRuleContext {
	public list_base(): List_baseContext {
		return this.getRuleContext(0, List_baseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_rounded_breaket; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterRounded_breaket) {
			listener.enterRounded_breaket(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitRounded_breaket) {
			listener.exitRounded_breaket(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitRounded_breaket) {
			return visitor.visitRounded_breaket(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Squared_breaketContext extends ParserRuleContext {
	public list_base(): List_baseContext {
		return this.getRuleContext(0, List_baseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_squared_breaket; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterSquared_breaket) {
			listener.enterSquared_breaket(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitSquared_breaket) {
			listener.exitSquared_breaket(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitSquared_breaket) {
			return visitor.visitSquared_breaket(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_baseContext extends ParserRuleContext {
	public everything(): EverythingContext[];
	public everything(i: number): EverythingContext;
	public everything(i?: number): EverythingContext | EverythingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EverythingContext);
		} else {
			return this.getRuleContext(i, EverythingContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_list_base; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterList_base) {
			listener.enterList_base(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitList_base) {
			listener.exitList_base(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitList_base) {
			return visitor.visitList_base(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assert_nameContext extends ParserRuleContext {
	public assert_short_name(): Assert_short_nameContext[];
	public assert_short_name(i: number): Assert_short_nameContext;
	public assert_short_name(i?: number): Assert_short_nameContext | Assert_short_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Assert_short_nameContext);
		} else {
			return this.getRuleContext(i, Assert_short_nameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_assert_name; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterAssert_name) {
			listener.enterAssert_name(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitAssert_name) {
			listener.exitAssert_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitAssert_name) {
			return visitor.visitAssert_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assert_short_nameContext extends ParserRuleContext {
	public ASSERT_NAME(): TerminalNode | undefined { return this.tryGetToken(sosParser.ASSERT_NAME, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sosParser.STRING, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(sosParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_assert_short_name; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterAssert_short_name) {
			listener.enterAssert_short_name(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitAssert_short_name) {
			listener.exitAssert_short_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitAssert_short_name) {
			return visitor.visitAssert_short_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Insert_var_valueContext extends ParserRuleContext {
	public assert_name(): Assert_nameContext {
		return this.getRuleContext(0, Assert_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_insert_var_value; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterInsert_var_value) {
			listener.enterInsert_var_value(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitInsert_var_value) {
			listener.exitInsert_var_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitInsert_var_value) {
			return visitor.visitInsert_var_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EverythingContext extends ParserRuleContext {
	public type_indentify(): Type_indentifyContext | undefined {
		return this.tryGetRuleContext(0, Type_indentifyContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sosParser.STRING, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(sosParser.CHAR, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(sosParser.NUMBER, 0); }
	public ASSERT_NAME(): TerminalNode | undefined { return this.tryGetToken(sosParser.ASSERT_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_everything; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterEverything) {
			listener.enterEverything(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitEverything) {
			listener.exitEverything(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitEverything) {
			return visitor.visitEverything(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_indentifyContext extends ParserRuleContext {
	public ASSERT_NAME(): TerminalNode { return this.getToken(sosParser.ASSERT_NAME, 0); }
	public sti(): StiContext | undefined {
		return this.tryGetRuleContext(0, StiContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_type_indentify; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterType_indentify) {
			listener.enterType_indentify(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitType_indentify) {
			listener.exitType_indentify(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitType_indentify) {
			return visitor.visitType_indentify(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StiContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(sosParser.NUMBER, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_sti; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterSti) {
			listener.enterSti(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitSti) {
			listener.exitSti(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitSti) {
			return visitor.visitSti(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentsContext extends ParserRuleContext {
	public comment_multiline(): Comment_multilineContext | undefined {
		return this.tryGetRuleContext(0, Comment_multilineContext);
	}
	public comment_singleline(): Comment_singlelineContext | undefined {
		return this.tryGetRuleContext(0, Comment_singlelineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_comments; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterComments) {
			listener.enterComments(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitComments) {
			listener.exitComments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitComments) {
			return visitor.visitComments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comment_singlelineContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_comment_singleline; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterComment_singleline) {
			listener.enterComment_singleline(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitComment_singleline) {
			listener.exitComment_singleline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitComment_singleline) {
			return visitor.visitComment_singleline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comment_multilineContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sosParser.RULE_comment_multiline; }
	// @Override
	public enterRule(listener: sosListener): void {
		if (listener.enterComment_multiline) {
			listener.enterComment_multiline(this);
		}
	}
	// @Override
	public exitRule(listener: sosListener): void {
		if (listener.exitComment_multiline) {
			listener.exitComment_multiline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sosVisitor<Result>): Result {
		if (visitor.visitComment_multiline) {
			return visitor.visitComment_multiline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


