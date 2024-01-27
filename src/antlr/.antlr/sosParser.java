// Generated from e:/sosou/GITHUB/SoScript/src/antlr/sos.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class sosParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, FUNCTION_KW=14, RETURN_KW=15, END_OF_EXPR=16, 
		MACROS_KW=17, DEFINE_KW=18, OPERATOR_SYMBOLS=19, ASSERT_NAME=20, STRING=21, 
		CHAR=22, NUMBER=23, DIGITS=24, VERY_POSITIV_NUMBER=25, VERY_NEGATIVE_NUMBER=26, 
		FLOATING_NUMBER=27, SPLITED_NUMBER=28, WS=29, COMMENT_SINGLELINE=30;
	public static final int
		RULE_program = 0, RULE_line = 1, RULE_variable = 2, RULE_expression = 3, 
		RULE_statement = 4, RULE_args_row = 5, RULE_block = 6, RULE_function_statement = 7, 
		RULE_define_statement = 8, RULE_macros_statement = 9, RULE_macros_body = 10, 
		RULE_return_statement = 11, RULE_type_cast = 12, RULE_operator_statement = 13, 
		RULE_variable_define = 14, RULE_rounded_breaket = 15, RULE_squared_breaket = 16, 
		RULE_list_base = 17, RULE_assert_name = 18, RULE_insert_var_value = 19, 
		RULE_everything = 20, RULE_type_indentify = 21, RULE_sti = 22, RULE_comments = 23, 
		RULE_comment_multiline = 24;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "line", "variable", "expression", "statement", "args_row", 
			"block", "function_statement", "define_statement", "macros_statement", 
			"macros_body", "return_statement", "type_cast", "operator_statement", 
			"variable_define", "rounded_breaket", "squared_breaket", "list_base", 
			"assert_name", "insert_var_value", "everything", "type_indentify", "sti", 
			"comments", "comment_multiline"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "','", "')'", "'{'", "'}'", "'->'", "'as'", "'['", "']'", 
			"'%'", "'&'", "'~'", "'***'", "'function'", "'return'", "';'", "'@macros'", 
			"'@define'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "FUNCTION_KW", "RETURN_KW", "END_OF_EXPR", "MACROS_KW", "DEFINE_KW", 
			"OPERATOR_SYMBOLS", "ASSERT_NAME", "STRING", "CHAR", "NUMBER", "DIGITS", 
			"VERY_POSITIV_NUMBER", "VERY_NEGATIVE_NUMBER", "FLOATING_NUMBER", "SPLITED_NUMBER", 
			"WS", "COMMENT_SINGLELINE"
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
	public String getGrammarFileName() { return "sos.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public sosParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(sosParser.EOF, 0); }
		public List<LineContext> line() {
			return getRuleContexts(LineContext.class);
		}
		public LineContext line(int i) {
			return getRuleContext(LineContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitProgram(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1073881090L) != 0)) {
				{
				{
				setState(50);
				line();
				}
				}
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(56);
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
	public static class LineContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<TerminalNode> END_OF_EXPR() { return getTokens(sosParser.END_OF_EXPR); }
		public TerminalNode END_OF_EXPR(int i) {
			return getToken(sosParser.END_OF_EXPR, i);
		}
		public LineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_line; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterLine(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitLine(this);
		}
	}

	public final LineContext line() throws RecognitionException {
		LineContext _localctx = new LineContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_line);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(58);
			expression();
			setState(60); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(59);
				match(END_OF_EXPR);
				}
				}
				setState(62); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==END_OF_EXPR );
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
	public static class VariableContext extends ParserRuleContext {
		public Variable_defineContext variable_define() {
			return getRuleContext(Variable_defineContext.class,0);
		}
		public Operator_statementContext operator_statement() {
			return getRuleContext(Operator_statementContext.class,0);
		}
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterVariable(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitVariable(this);
		}
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_variable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			variable_define();
			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPERATOR_SYMBOLS) {
				{
				setState(65);
				operator_statement();
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
	public static class ExpressionContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public CommentsContext comments() {
			return getRuleContext(CommentsContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitExpression(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_expression);
		try {
			setState(70);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case MACROS_KW:
				enterOuterAlt(_localctx, 1);
				{
				setState(68);
				statement();
				}
				break;
			case T__12:
			case COMMENT_SINGLELINE:
				enterOuterAlt(_localctx, 2);
				{
				setState(69);
				comments();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		public Function_statementContext function_statement() {
			return getRuleContext(Function_statementContext.class,0);
		}
		public Macros_statementContext macros_statement() {
			return getRuleContext(Macros_statementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_statement);
		try {
			setState(74);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(72);
				function_statement();
				}
				break;
			case MACROS_KW:
				enterOuterAlt(_localctx, 2);
				{
				setState(73);
				macros_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class Args_rowContext extends ParserRuleContext {
		public List<Variable_defineContext> variable_define() {
			return getRuleContexts(Variable_defineContext.class);
		}
		public Variable_defineContext variable_define(int i) {
			return getRuleContext(Variable_defineContext.class,i);
		}
		public List<Assert_nameContext> assert_name() {
			return getRuleContexts(Assert_nameContext.class);
		}
		public Assert_nameContext assert_name(int i) {
			return getRuleContext(Assert_nameContext.class,i);
		}
		public Args_rowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_args_row; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterArgs_row(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitArgs_row(this);
		}
	}

	public final Args_rowContext args_row() throws RecognitionException {
		Args_rowContext _localctx = new Args_rowContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_args_row);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			match(T__0);
			setState(77);
			variable_define();
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(78);
				match(T__1);
				setState(79);
				variable_define();
				setState(80);
				assert_name();
				}
				}
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(87);
			match(T__2);
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
		public List<Return_statementContext> return_statement() {
			return getRuleContexts(Return_statementContext.class);
		}
		public Return_statementContext return_statement(int i) {
			return getRuleContext(Return_statementContext.class,i);
		}
		public List<LineContext> line() {
			return getRuleContexts(LineContext.class);
		}
		public LineContext line(int i) {
			return getRuleContext(LineContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitBlock(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			match(T__3);
			setState(94);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1073881090L) != 0)) {
				{
				setState(92);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(90);
					return_statement();
					}
					break;
				case 2:
					{
					setState(91);
					line();
					}
					break;
				}
				}
				setState(96);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(97);
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
	public static class Function_statementContext extends ParserRuleContext {
		public Args_rowContext args_row() {
			return getRuleContext(Args_rowContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Function_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterFunction_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitFunction_statement(this);
		}
	}

	public final Function_statementContext function_statement() throws RecognitionException {
		Function_statementContext _localctx = new Function_statementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_function_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			args_row();
			setState(100);
			match(T__5);
			setState(101);
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
	public static class Define_statementContext extends ParserRuleContext {
		public TerminalNode DEFINE_KW() { return getToken(sosParser.DEFINE_KW, 0); }
		public List<Assert_nameContext> assert_name() {
			return getRuleContexts(Assert_nameContext.class);
		}
		public Assert_nameContext assert_name(int i) {
			return getRuleContext(Assert_nameContext.class,i);
		}
		public Define_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_define_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterDefine_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitDefine_statement(this);
		}
	}

	public final Define_statementContext define_statement() throws RecognitionException {
		Define_statementContext _localctx = new Define_statementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_define_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(DEFINE_KW);
			setState(104);
			assert_name();
			setState(105);
			match(T__6);
			setState(106);
			assert_name();
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
	public static class Macros_statementContext extends ParserRuleContext {
		public TerminalNode MACROS_KW() { return getToken(sosParser.MACROS_KW, 0); }
		public Assert_nameContext assert_name() {
			return getRuleContext(Assert_nameContext.class,0);
		}
		public Macros_bodyContext macros_body() {
			return getRuleContext(Macros_bodyContext.class,0);
		}
		public Macros_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_macros_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterMacros_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitMacros_statement(this);
		}
	}

	public final Macros_statementContext macros_statement() throws RecognitionException {
		Macros_statementContext _localctx = new Macros_statementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_macros_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			match(MACROS_KW);
			setState(109);
			assert_name();
			setState(110);
			macros_body();
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
	public static class Macros_bodyContext extends ParserRuleContext {
		public Rounded_breaketContext rounded_breaket() {
			return getRuleContext(Rounded_breaketContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Macros_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_macros_body; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterMacros_body(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitMacros_body(this);
		}
	}

	public final Macros_bodyContext macros_body() throws RecognitionException {
		Macros_bodyContext _localctx = new Macros_bodyContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_macros_body);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			match(T__3);
			setState(113);
			rounded_breaket();
			setState(114);
			match(T__5);
			setState(115);
			block();
			setState(116);
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
	public static class Return_statementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Return_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_return_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterReturn_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitReturn_statement(this);
		}
	}

	public final Return_statementContext return_statement() throws RecognitionException {
		Return_statementContext _localctx = new Return_statementContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_return_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			expression();
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
	public static class Type_castContext extends ParserRuleContext {
		public Type_indentifyContext type_indentify() {
			return getRuleContext(Type_indentifyContext.class,0);
		}
		public Rounded_breaketContext rounded_breaket() {
			return getRuleContext(Rounded_breaketContext.class,0);
		}
		public Type_castContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_cast; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterType_cast(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitType_cast(this);
		}
	}

	public final Type_castContext type_cast() throws RecognitionException {
		Type_castContext _localctx = new Type_castContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_type_cast);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			match(T__0);
			setState(121);
			type_indentify();
			setState(122);
			match(T__2);
			setState(123);
			rounded_breaket();
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
	public static class Operator_statementContext extends ParserRuleContext {
		public TerminalNode OPERATOR_SYMBOLS() { return getToken(sosParser.OPERATOR_SYMBOLS, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public Operator_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operator_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterOperator_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitOperator_statement(this);
		}
	}

	public final Operator_statementContext operator_statement() throws RecognitionException {
		Operator_statementContext _localctx = new Operator_statementContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_operator_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			match(OPERATOR_SYMBOLS);
			setState(126);
			statement();
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
	public static class Variable_defineContext extends ParserRuleContext {
		public Type_indentifyContext type_indentify() {
			return getRuleContext(Type_indentifyContext.class,0);
		}
		public Assert_nameContext assert_name() {
			return getRuleContext(Assert_nameContext.class,0);
		}
		public Variable_defineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable_define; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterVariable_define(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitVariable_define(this);
		}
	}

	public final Variable_defineContext variable_define() throws RecognitionException {
		Variable_defineContext _localctx = new Variable_defineContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_variable_define);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			type_indentify();
			setState(129);
			assert_name();
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
	public static class Rounded_breaketContext extends ParserRuleContext {
		public List_baseContext list_base() {
			return getRuleContext(List_baseContext.class,0);
		}
		public Rounded_breaketContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rounded_breaket; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterRounded_breaket(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitRounded_breaket(this);
		}
	}

	public final Rounded_breaketContext rounded_breaket() throws RecognitionException {
		Rounded_breaketContext _localctx = new Rounded_breaketContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_rounded_breaket);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			match(T__0);
			setState(132);
			list_base();
			setState(133);
			match(T__2);
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
	public static class Squared_breaketContext extends ParserRuleContext {
		public List_baseContext list_base() {
			return getRuleContext(List_baseContext.class,0);
		}
		public Squared_breaketContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_squared_breaket; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterSquared_breaket(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitSquared_breaket(this);
		}
	}

	public final Squared_breaketContext squared_breaket() throws RecognitionException {
		Squared_breaketContext _localctx = new Squared_breaketContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_squared_breaket);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			match(T__7);
			setState(136);
			list_base();
			setState(137);
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
	public static class List_baseContext extends ParserRuleContext {
		public List<EverythingContext> everything() {
			return getRuleContexts(EverythingContext.class);
		}
		public EverythingContext everything(int i) {
			return getRuleContext(EverythingContext.class,i);
		}
		public List_baseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list_base; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterList_base(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitList_base(this);
		}
	}

	public final List_baseContext list_base() throws RecognitionException {
		List_baseContext _localctx = new List_baseContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_list_base);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			everything();
			setState(144);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(140);
				match(T__1);
				setState(141);
				everything();
				}
				}
				setState(146);
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
	public static class Assert_nameContext extends ParserRuleContext {
		public TerminalNode ASSERT_NAME() { return getToken(sosParser.ASSERT_NAME, 0); }
		public TerminalNode STRING() { return getToken(sosParser.STRING, 0); }
		public TerminalNode CHAR() { return getToken(sosParser.CHAR, 0); }
		public Assert_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assert_name; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterAssert_name(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitAssert_name(this);
		}
	}

	public final Assert_nameContext assert_name() throws RecognitionException {
		Assert_nameContext _localctx = new Assert_nameContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_assert_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 7340032L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
	public static class Insert_var_valueContext extends ParserRuleContext {
		public Assert_nameContext assert_name() {
			return getRuleContext(Assert_nameContext.class,0);
		}
		public Insert_var_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insert_var_value; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterInsert_var_value(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitInsert_var_value(this);
		}
	}

	public final Insert_var_valueContext insert_var_value() throws RecognitionException {
		Insert_var_valueContext _localctx = new Insert_var_valueContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_insert_var_value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			match(T__9);
			setState(150);
			assert_name();
			setState(151);
			match(T__9);
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
	public static class EverythingContext extends ParserRuleContext {
		public Type_indentifyContext type_indentify() {
			return getRuleContext(Type_indentifyContext.class,0);
		}
		public TerminalNode STRING() { return getToken(sosParser.STRING, 0); }
		public TerminalNode CHAR() { return getToken(sosParser.CHAR, 0); }
		public TerminalNode NUMBER() { return getToken(sosParser.NUMBER, 0); }
		public TerminalNode ASSERT_NAME() { return getToken(sosParser.ASSERT_NAME, 0); }
		public EverythingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_everything; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterEverything(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitEverything(this);
		}
	}

	public final EverythingContext everything() throws RecognitionException {
		EverythingContext _localctx = new EverythingContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_everything);
		try {
			setState(158);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(153);
				type_indentify();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(154);
				match(STRING);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(155);
				match(CHAR);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(156);
				match(NUMBER);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(157);
				match(ASSERT_NAME);
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
	public static class Type_indentifyContext extends ParserRuleContext {
		public Assert_nameContext assert_name() {
			return getRuleContext(Assert_nameContext.class,0);
		}
		public StiContext sti() {
			return getRuleContext(StiContext.class,0);
		}
		public Type_indentifyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_indentify; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterType_indentify(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitType_indentify(this);
		}
	}

	public final Type_indentifyContext type_indentify() throws RecognitionException {
		Type_indentifyContext _localctx = new Type_indentifyContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_type_indentify);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(160);
			assert_name();
			setState(162);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__10 || _la==T__11) {
				{
				setState(161);
				sti();
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
	public static class StiContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StiContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sti; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterSti(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitSti(this);
		}
	}

	public final StiContext sti() throws RecognitionException {
		StiContext _localctx = new StiContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_sti);
		try {
			setState(167);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__10:
				enterOuterAlt(_localctx, 1);
				{
				setState(164);
				match(T__10);
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 2);
				{
				setState(165);
				match(T__11);
				setState(166);
				expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class CommentsContext extends ParserRuleContext {
		public Comment_multilineContext comment_multiline() {
			return getRuleContext(Comment_multilineContext.class,0);
		}
		public TerminalNode COMMENT_SINGLELINE() { return getToken(sosParser.COMMENT_SINGLELINE, 0); }
		public CommentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comments; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterComments(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitComments(this);
		}
	}

	public final CommentsContext comments() throws RecognitionException {
		CommentsContext _localctx = new CommentsContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_comments);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__12:
				{
				setState(169);
				comment_multiline();
				}
				break;
			case COMMENT_SINGLELINE:
				{
				setState(170);
				match(COMMENT_SINGLELINE);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class Comment_multilineContext extends ParserRuleContext {
		public Comment_multilineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment_multiline; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).enterComment_multiline(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof sosListener ) ((sosListener)listener).exitComment_multiline(this);
		}
	}

	public final Comment_multilineContext comment_multiline() throws RecognitionException {
		Comment_multilineContext _localctx = new Comment_multilineContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_comment_multiline);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(173);
			match(T__12);
			}
			setState(177);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2147475454L) != 0)) {
				{
				{
				setState(174);
				_la = _input.LA(1);
				if ( _la <= 0 || (_la==T__12) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(179);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			{
			setState(180);
			match(T__12);
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

	public static final String _serializedATN =
		"\u0004\u0001\u001e\u00b7\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007"+
		"\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007"+
		"\u0018\u0001\u0000\u0005\u00004\b\u0000\n\u0000\f\u00007\t\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0004\u0001=\b\u0001\u000b"+
		"\u0001\f\u0001>\u0001\u0002\u0001\u0002\u0003\u0002C\b\u0002\u0001\u0003"+
		"\u0001\u0003\u0003\u0003G\b\u0003\u0001\u0004\u0001\u0004\u0003\u0004"+
		"K\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0005\u0005S\b\u0005\n\u0005\f\u0005V\t\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006]\b\u0006"+
		"\n\u0006\f\u0006`\t\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0005\u0011\u008f\b\u0011\n"+
		"\u0011\f\u0011\u0092\t\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0003\u0014\u009f\b\u0014\u0001\u0015\u0001\u0015\u0003"+
		"\u0015\u00a3\b\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u00a8"+
		"\b\u0016\u0001\u0017\u0001\u0017\u0003\u0017\u00ac\b\u0017\u0001\u0018"+
		"\u0001\u0018\u0005\u0018\u00b0\b\u0018\n\u0018\f\u0018\u00b3\t\u0018\u0001"+
		"\u0018\u0001\u0018\u0001\u0018\u0000\u0000\u0019\u0000\u0002\u0004\u0006"+
		"\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,."+
		"0\u0000\u0002\u0001\u0000\u0014\u0016\u0001\u0000\r\r\u00ae\u00005\u0001"+
		"\u0000\u0000\u0000\u0002:\u0001\u0000\u0000\u0000\u0004@\u0001\u0000\u0000"+
		"\u0000\u0006F\u0001\u0000\u0000\u0000\bJ\u0001\u0000\u0000\u0000\nL\u0001"+
		"\u0000\u0000\u0000\fY\u0001\u0000\u0000\u0000\u000ec\u0001\u0000\u0000"+
		"\u0000\u0010g\u0001\u0000\u0000\u0000\u0012l\u0001\u0000\u0000\u0000\u0014"+
		"p\u0001\u0000\u0000\u0000\u0016v\u0001\u0000\u0000\u0000\u0018x\u0001"+
		"\u0000\u0000\u0000\u001a}\u0001\u0000\u0000\u0000\u001c\u0080\u0001\u0000"+
		"\u0000\u0000\u001e\u0083\u0001\u0000\u0000\u0000 \u0087\u0001\u0000\u0000"+
		"\u0000\"\u008b\u0001\u0000\u0000\u0000$\u0093\u0001\u0000\u0000\u0000"+
		"&\u0095\u0001\u0000\u0000\u0000(\u009e\u0001\u0000\u0000\u0000*\u00a0"+
		"\u0001\u0000\u0000\u0000,\u00a7\u0001\u0000\u0000\u0000.\u00ab\u0001\u0000"+
		"\u0000\u00000\u00ad\u0001\u0000\u0000\u000024\u0003\u0002\u0001\u0000"+
		"32\u0001\u0000\u0000\u000047\u0001\u0000\u0000\u000053\u0001\u0000\u0000"+
		"\u000056\u0001\u0000\u0000\u000068\u0001\u0000\u0000\u000075\u0001\u0000"+
		"\u0000\u000089\u0005\u0000\u0000\u00019\u0001\u0001\u0000\u0000\u0000"+
		":<\u0003\u0006\u0003\u0000;=\u0005\u0010\u0000\u0000<;\u0001\u0000\u0000"+
		"\u0000=>\u0001\u0000\u0000\u0000><\u0001\u0000\u0000\u0000>?\u0001\u0000"+
		"\u0000\u0000?\u0003\u0001\u0000\u0000\u0000@B\u0003\u001c\u000e\u0000"+
		"AC\u0003\u001a\r\u0000BA\u0001\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000"+
		"C\u0005\u0001\u0000\u0000\u0000DG\u0003\b\u0004\u0000EG\u0003.\u0017\u0000"+
		"FD\u0001\u0000\u0000\u0000FE\u0001\u0000\u0000\u0000G\u0007\u0001\u0000"+
		"\u0000\u0000HK\u0003\u000e\u0007\u0000IK\u0003\u0012\t\u0000JH\u0001\u0000"+
		"\u0000\u0000JI\u0001\u0000\u0000\u0000K\t\u0001\u0000\u0000\u0000LM\u0005"+
		"\u0001\u0000\u0000MT\u0003\u001c\u000e\u0000NO\u0005\u0002\u0000\u0000"+
		"OP\u0003\u001c\u000e\u0000PQ\u0003$\u0012\u0000QS\u0001\u0000\u0000\u0000"+
		"RN\u0001\u0000\u0000\u0000SV\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000"+
		"\u0000TU\u0001\u0000\u0000\u0000UW\u0001\u0000\u0000\u0000VT\u0001\u0000"+
		"\u0000\u0000WX\u0005\u0003\u0000\u0000X\u000b\u0001\u0000\u0000\u0000"+
		"Y^\u0005\u0004\u0000\u0000Z]\u0003\u0016\u000b\u0000[]\u0003\u0002\u0001"+
		"\u0000\\Z\u0001\u0000\u0000\u0000\\[\u0001\u0000\u0000\u0000]`\u0001\u0000"+
		"\u0000\u0000^\\\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_a\u0001"+
		"\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000ab\u0005\u0005\u0000\u0000"+
		"b\r\u0001\u0000\u0000\u0000cd\u0003\n\u0005\u0000de\u0005\u0006\u0000"+
		"\u0000ef\u0003\f\u0006\u0000f\u000f\u0001\u0000\u0000\u0000gh\u0005\u0012"+
		"\u0000\u0000hi\u0003$\u0012\u0000ij\u0005\u0007\u0000\u0000jk\u0003$\u0012"+
		"\u0000k\u0011\u0001\u0000\u0000\u0000lm\u0005\u0011\u0000\u0000mn\u0003"+
		"$\u0012\u0000no\u0003\u0014\n\u0000o\u0013\u0001\u0000\u0000\u0000pq\u0005"+
		"\u0004\u0000\u0000qr\u0003\u001e\u000f\u0000rs\u0005\u0006\u0000\u0000"+
		"st\u0003\f\u0006\u0000tu\u0005\u0005\u0000\u0000u\u0015\u0001\u0000\u0000"+
		"\u0000vw\u0003\u0006\u0003\u0000w\u0017\u0001\u0000\u0000\u0000xy\u0005"+
		"\u0001\u0000\u0000yz\u0003*\u0015\u0000z{\u0005\u0003\u0000\u0000{|\u0003"+
		"\u001e\u000f\u0000|\u0019\u0001\u0000\u0000\u0000}~\u0005\u0013\u0000"+
		"\u0000~\u007f\u0003\b\u0004\u0000\u007f\u001b\u0001\u0000\u0000\u0000"+
		"\u0080\u0081\u0003*\u0015\u0000\u0081\u0082\u0003$\u0012\u0000\u0082\u001d"+
		"\u0001\u0000\u0000\u0000\u0083\u0084\u0005\u0001\u0000\u0000\u0084\u0085"+
		"\u0003\"\u0011\u0000\u0085\u0086\u0005\u0003\u0000\u0000\u0086\u001f\u0001"+
		"\u0000\u0000\u0000\u0087\u0088\u0005\b\u0000\u0000\u0088\u0089\u0003\""+
		"\u0011\u0000\u0089\u008a\u0005\t\u0000\u0000\u008a!\u0001\u0000\u0000"+
		"\u0000\u008b\u0090\u0003(\u0014\u0000\u008c\u008d\u0005\u0002\u0000\u0000"+
		"\u008d\u008f\u0003(\u0014\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008f"+
		"\u0092\u0001\u0000\u0000\u0000\u0090\u008e\u0001\u0000\u0000\u0000\u0090"+
		"\u0091\u0001\u0000\u0000\u0000\u0091#\u0001\u0000\u0000\u0000\u0092\u0090"+
		"\u0001\u0000\u0000\u0000\u0093\u0094\u0007\u0000\u0000\u0000\u0094%\u0001"+
		"\u0000\u0000\u0000\u0095\u0096\u0005\n\u0000\u0000\u0096\u0097\u0003$"+
		"\u0012\u0000\u0097\u0098\u0005\n\u0000\u0000\u0098\'\u0001\u0000\u0000"+
		"\u0000\u0099\u009f\u0003*\u0015\u0000\u009a\u009f\u0005\u0015\u0000\u0000"+
		"\u009b\u009f\u0005\u0016\u0000\u0000\u009c\u009f\u0005\u0017\u0000\u0000"+
		"\u009d\u009f\u0005\u0014\u0000\u0000\u009e\u0099\u0001\u0000\u0000\u0000"+
		"\u009e\u009a\u0001\u0000\u0000\u0000\u009e\u009b\u0001\u0000\u0000\u0000"+
		"\u009e\u009c\u0001\u0000\u0000\u0000\u009e\u009d\u0001\u0000\u0000\u0000"+
		"\u009f)\u0001\u0000\u0000\u0000\u00a0\u00a2\u0003$\u0012\u0000\u00a1\u00a3"+
		"\u0003,\u0016\u0000\u00a2\u00a1\u0001\u0000\u0000\u0000\u00a2\u00a3\u0001"+
		"\u0000\u0000\u0000\u00a3+\u0001\u0000\u0000\u0000\u00a4\u00a8\u0005\u000b"+
		"\u0000\u0000\u00a5\u00a6\u0005\f\u0000\u0000\u00a6\u00a8\u0003\u0006\u0003"+
		"\u0000\u00a7\u00a4\u0001\u0000\u0000\u0000\u00a7\u00a5\u0001\u0000\u0000"+
		"\u0000\u00a8-\u0001\u0000\u0000\u0000\u00a9\u00ac\u00030\u0018\u0000\u00aa"+
		"\u00ac\u0005\u001e\u0000\u0000\u00ab\u00a9\u0001\u0000\u0000\u0000\u00ab"+
		"\u00aa\u0001\u0000\u0000\u0000\u00ac/\u0001\u0000\u0000\u0000\u00ad\u00b1"+
		"\u0005\r\u0000\u0000\u00ae\u00b0\b\u0001\u0000\u0000\u00af\u00ae\u0001"+
		"\u0000\u0000\u0000\u00b0\u00b3\u0001\u0000\u0000\u0000\u00b1\u00af\u0001"+
		"\u0000\u0000\u0000\u00b1\u00b2\u0001\u0000\u0000\u0000\u00b2\u00b4\u0001"+
		"\u0000\u0000\u0000\u00b3\u00b1\u0001\u0000\u0000\u0000\u00b4\u00b5\u0005"+
		"\r\u0000\u0000\u00b51\u0001\u0000\u0000\u0000\u000e5>BFJT\\^\u0090\u009e"+
		"\u00a2\u00a7\u00ab\u00b1";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}