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
	public static readonly FUNCTION_KW = 11;
	public static readonly RETURN_KW = 12;
	public static readonly END_OF_EXPR = 13;
	public static readonly OPERATOR_SYMBOLS = 14;
	public static readonly ASSERT_NAME = 15;
	public static readonly NAME = 16;
	public static readonly TYPE = 17;
	public static readonly STRING = 18;
	public static readonly CHAR = 19;
	public static readonly NUMBER = 20;
	public static readonly DIGITS = 21;
	public static readonly VERY_POSITIV_NUMBER = 22;
	public static readonly VERY_NEGATIVE_NUMBER = 23;
	public static readonly FLOATING_NUMBER = 24;
	public static readonly SPLITED_NUMBER = 25;
	public static readonly WS = 26;
	public static readonly RULE_program = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_variable = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_args_row = 5;
	public static readonly RULE_block = 6;
	public static readonly RULE_function_statement = 7;
	public static readonly RULE_return_statement = 8;
	public static readonly RULE_type_cast = 9;
	public static readonly RULE_operator_statement = 10;
	public static readonly RULE_variable_define = 11;
	public static readonly RULE_rounded_breaket = 12;
	public static readonly RULE_squared_breaket = 13;
	public static readonly RULE_list_base = 14;
	public static readonly RULE_everything = 15;
	public static readonly RULE_type_indentify = 16;
	public static readonly RULE_sti = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "variable", "expression", "statement", "args_row", 
		"block", "function_statement", "return_statement", "type_cast", "operator_statement", 
		"variable_define", "rounded_breaket", "squared_breaket", "list_base", 
		"everything", "type_indentify", "sti",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "','", "')'", "'{'", "'}'", "'->'", "'['", "']'", "'&'", 
		"'~'", "'function'", "'return'", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "FUNCTION_KW", "RETURN_KW", 
		"END_OF_EXPR", "OPERATOR_SYMBOLS", "ASSERT_NAME", "NAME", "TYPE", "STRING", 
		"CHAR", "NUMBER", "DIGITS", "VERY_POSITIV_NUMBER", "VERY_NEGATIVE_NUMBER", 
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
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sosParser.T__0) {
				{
				{
				this.state = 36;
				this.line();
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 42;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.expression();
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 45;
				this.match(sosParser.END_OF_EXPR);
				}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === sosParser.END_OF_EXPR);
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
			this.state = 50;
			this.variable_define();
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sosParser.OPERATOR_SYMBOLS) {
				{
				this.state = 51;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, sosParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.function_statement();
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
		this.enterRule(_localctx, 10, sosParser.RULE_args_row);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(sosParser.T__0);
			this.state = 59;
			this.variable_define();
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sosParser.T__1) {
				{
				{
				this.state = 60;
				this.match(sosParser.T__1);
				this.state = 61;
				this.variable_define();
				this.state = 62;
				this.match(sosParser.NAME);
				}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 69;
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
		this.enterRule(_localctx, 12, sosParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(sosParser.T__3);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sosParser.T__0) {
				{
				this.state = 74;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 72;
					this.return_statement();
					}
					break;

				case 2:
					{
					this.state = 73;
					this.line();
					}
					break;
				}
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 79;
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
		this.enterRule(_localctx, 14, sosParser.RULE_function_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.args_row();
			this.state = 82;
			this.match(sosParser.T__5);
			this.state = 83;
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
	public return_statement(): Return_statementContext {
		let _localctx: Return_statementContext = new Return_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, sosParser.RULE_return_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.expression();
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
		this.enterRule(_localctx, 18, sosParser.RULE_type_cast);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(sosParser.T__0);
			this.state = 88;
			this.type_indentify();
			this.state = 89;
			this.match(sosParser.T__2);
			this.state = 90;
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
		this.enterRule(_localctx, 20, sosParser.RULE_operator_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(sosParser.OPERATOR_SYMBOLS);
			this.state = 93;
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
		this.enterRule(_localctx, 22, sosParser.RULE_variable_define);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.type_indentify();
			this.state = 96;
			this.match(sosParser.NAME);
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
		this.enterRule(_localctx, 24, sosParser.RULE_rounded_breaket);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(sosParser.T__0);
			this.state = 99;
			this.list_base();
			this.state = 100;
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
		this.enterRule(_localctx, 26, sosParser.RULE_squared_breaket);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(sosParser.T__6);
			this.state = 103;
			this.list_base();
			this.state = 104;
			this.match(sosParser.T__7);
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
		this.enterRule(_localctx, 28, sosParser.RULE_list_base);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.everything();
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sosParser.T__1) {
				{
				{
				this.state = 107;
				this.match(sosParser.T__1);
				this.state = 108;
				this.everything();
				}
				}
				this.state = 113;
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
	public everything(): EverythingContext {
		let _localctx: EverythingContext = new EverythingContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, sosParser.RULE_everything);
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sosParser.TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 114;
				this.type_indentify();
				}
				break;
			case sosParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 115;
				this.match(sosParser.STRING);
				}
				break;
			case sosParser.CHAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 116;
				this.match(sosParser.CHAR);
				}
				break;
			case sosParser.NUMBER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 117;
				this.match(sosParser.NUMBER);
				}
				break;
			case sosParser.NAME:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 118;
				this.match(sosParser.NAME);
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
	public type_indentify(): Type_indentifyContext {
		let _localctx: Type_indentifyContext = new Type_indentifyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, sosParser.RULE_type_indentify);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(sosParser.TYPE);
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sosParser.T__8 || _la === sosParser.T__9) {
				{
				this.state = 122;
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
		this.enterRule(_localctx, 34, sosParser.RULE_sti);
		try {
			this.state = 128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sosParser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.match(sosParser.T__8);
				}
				break;
			case sosParser.T__9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.match(sosParser.T__9);
				this.state = 127;
				this.expression();
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\x85\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x07\x02(\n\x02\f\x02\x0E\x02+\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x06\x031\n\x03\r\x03\x0E\x032\x03\x04\x03\x04\x05\x04" +
		"7\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x07\x07C\n\x07\f\x07\x0E\x07F\v\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x07\bM\n\b\f\b\x0E\bP\v\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10p\n\x10\f\x10\x0E\x10s\v\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11z\n\x11\x03\x12\x03\x12\x05" +
		"\x12~\n\x12\x03\x13\x03\x13\x03\x13\x05\x13\x83\n\x13\x03\x13\x02\x02" +
		"\x02\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02" +
		"\x02\x02\x7F\x02)\x03\x02\x02\x02\x04.\x03\x02\x02\x02\x064\x03\x02\x02" +
		"\x02\b8\x03\x02\x02\x02\n:\x03\x02\x02\x02\f<\x03\x02\x02\x02\x0EI\x03" +
		"\x02\x02\x02\x10S\x03\x02\x02\x02\x12W\x03\x02\x02\x02\x14Y\x03\x02\x02" +
		"\x02\x16^\x03\x02\x02\x02\x18a\x03\x02\x02\x02\x1Ad\x03\x02\x02\x02\x1C" +
		"h\x03\x02\x02\x02\x1El\x03\x02\x02\x02 y\x03\x02\x02\x02\"{\x03\x02\x02" +
		"\x02$\x82\x03\x02\x02\x02&(\x05\x04\x03\x02\'&\x03\x02\x02\x02(+\x03\x02" +
		"\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*,\x03\x02\x02\x02+)\x03" +
		"\x02\x02\x02,-\x07\x02\x02\x03-\x03\x03\x02\x02\x02.0\x05\b\x05\x02/1" +
		"\x07\x0F\x02\x020/\x03\x02\x02\x0212\x03\x02\x02\x0220\x03\x02\x02\x02" +
		"23\x03\x02\x02\x023\x05\x03\x02\x02\x0246\x05\x18\r\x0257\x05\x16\f\x02" +
		"65\x03\x02\x02\x0267\x03\x02\x02\x027\x07\x03\x02\x02\x0289\x05\n\x06" +
		"\x029\t\x03\x02\x02\x02:;\x05\x10\t\x02;\v\x03\x02\x02\x02<=\x07\x03\x02" +
		"\x02=D\x05\x18\r\x02>?\x07\x04\x02\x02?@\x05\x18\r\x02@A\x07\x12\x02\x02" +
		"AC\x03\x02\x02\x02B>\x03\x02\x02\x02CF\x03\x02\x02\x02DB\x03\x02\x02\x02" +
		"DE\x03\x02\x02\x02EG\x03\x02\x02\x02FD\x03\x02\x02\x02GH\x07\x05\x02\x02" +
		"H\r\x03\x02\x02\x02IN\x07\x06\x02\x02JM\x05\x12\n\x02KM\x05\x04\x03\x02" +
		"LJ\x03\x02\x02\x02LK\x03\x02\x02\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02" +
		"NO\x03\x02\x02\x02OQ\x03\x02\x02\x02PN\x03\x02\x02\x02QR\x07\x07\x02\x02" +
		"R\x0F\x03\x02\x02\x02ST\x05\f\x07\x02TU\x07\b\x02\x02UV\x05\x0E\b\x02" +
		"V\x11\x03\x02\x02\x02WX\x05\b\x05\x02X\x13\x03\x02\x02\x02YZ\x07\x03\x02" +
		"\x02Z[\x05\"\x12\x02[\\\x07\x05\x02\x02\\]\x05\x1A\x0E\x02]\x15\x03\x02" +
		"\x02\x02^_\x07\x10\x02\x02_`\x05\n\x06\x02`\x17\x03\x02\x02\x02ab\x05" +
		"\"\x12\x02bc\x07\x12\x02\x02c\x19\x03\x02\x02\x02de\x07\x03\x02\x02ef" +
		"\x05\x1E\x10\x02fg\x07\x05\x02\x02g\x1B\x03\x02\x02\x02hi\x07\t\x02\x02" +
		"ij\x05\x1E\x10\x02jk\x07\n\x02\x02k\x1D\x03\x02\x02\x02lq\x05 \x11\x02" +
		"mn\x07\x04\x02\x02np\x05 \x11\x02om\x03\x02\x02\x02ps\x03\x02\x02\x02" +
		"qo\x03\x02\x02\x02qr\x03\x02\x02\x02r\x1F\x03\x02\x02\x02sq\x03\x02\x02" +
		"\x02tz\x05\"\x12\x02uz\x07\x14\x02\x02vz\x07\x15\x02\x02wz\x07\x16\x02" +
		"\x02xz\x07\x12\x02\x02yt\x03\x02\x02\x02yu\x03\x02\x02\x02yv\x03\x02\x02" +
		"\x02yw\x03\x02\x02\x02yx\x03\x02\x02\x02z!\x03\x02\x02\x02{}\x07\x13\x02" +
		"\x02|~\x05$\x13\x02}|\x03\x02\x02\x02}~\x03\x02\x02\x02~#\x03\x02\x02" +
		"\x02\x7F\x83\x07\v\x02\x02\x80\x81\x07\f\x02\x02\x81\x83\x05\b\x05\x02" +
		"\x82\x7F\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83%\x03\x02\x02\x02" +
		"\f)26DLNqy}\x82";
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
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


export class StatementContext extends ParserRuleContext {
	public function_statement(): Function_statementContext {
		return this.getRuleContext(0, Function_statementContext);
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
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(sosParser.NAME);
		} else {
			return this.getToken(sosParser.NAME, i);
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


export class Return_statementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public NAME(): TerminalNode { return this.getToken(sosParser.NAME, 0); }
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


export class EverythingContext extends ParserRuleContext {
	public type_indentify(): Type_indentifyContext | undefined {
		return this.tryGetRuleContext(0, Type_indentifyContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sosParser.STRING, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(sosParser.CHAR, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(sosParser.NUMBER, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(sosParser.NAME, 0); }
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
	public TYPE(): TerminalNode { return this.getToken(sosParser.TYPE, 0); }
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
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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


