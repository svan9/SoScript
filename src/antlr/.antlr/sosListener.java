// Generated from e:/sosou/GITHUB/SoScript/src/antlr/sos.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link sosParser}.
 */
public interface sosListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link sosParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(sosParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(sosParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#line}.
	 * @param ctx the parse tree
	 */
	void enterLine(sosParser.LineContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#line}.
	 * @param ctx the parse tree
	 */
	void exitLine(sosParser.LineContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(sosParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(sosParser.VariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(sosParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(sosParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(sosParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(sosParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#args_row}.
	 * @param ctx the parse tree
	 */
	void enterArgs_row(sosParser.Args_rowContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#args_row}.
	 * @param ctx the parse tree
	 */
	void exitArgs_row(sosParser.Args_rowContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(sosParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(sosParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#function_statement}.
	 * @param ctx the parse tree
	 */
	void enterFunction_statement(sosParser.Function_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#function_statement}.
	 * @param ctx the parse tree
	 */
	void exitFunction_statement(sosParser.Function_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#define_statement}.
	 * @param ctx the parse tree
	 */
	void enterDefine_statement(sosParser.Define_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#define_statement}.
	 * @param ctx the parse tree
	 */
	void exitDefine_statement(sosParser.Define_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#macros_statement}.
	 * @param ctx the parse tree
	 */
	void enterMacros_statement(sosParser.Macros_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#macros_statement}.
	 * @param ctx the parse tree
	 */
	void exitMacros_statement(sosParser.Macros_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#macros_body}.
	 * @param ctx the parse tree
	 */
	void enterMacros_body(sosParser.Macros_bodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#macros_body}.
	 * @param ctx the parse tree
	 */
	void exitMacros_body(sosParser.Macros_bodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#return_statement}.
	 * @param ctx the parse tree
	 */
	void enterReturn_statement(sosParser.Return_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#return_statement}.
	 * @param ctx the parse tree
	 */
	void exitReturn_statement(sosParser.Return_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#type_cast}.
	 * @param ctx the parse tree
	 */
	void enterType_cast(sosParser.Type_castContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#type_cast}.
	 * @param ctx the parse tree
	 */
	void exitType_cast(sosParser.Type_castContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#operator_statement}.
	 * @param ctx the parse tree
	 */
	void enterOperator_statement(sosParser.Operator_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#operator_statement}.
	 * @param ctx the parse tree
	 */
	void exitOperator_statement(sosParser.Operator_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#variable_define}.
	 * @param ctx the parse tree
	 */
	void enterVariable_define(sosParser.Variable_defineContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#variable_define}.
	 * @param ctx the parse tree
	 */
	void exitVariable_define(sosParser.Variable_defineContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#rounded_breaket}.
	 * @param ctx the parse tree
	 */
	void enterRounded_breaket(sosParser.Rounded_breaketContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#rounded_breaket}.
	 * @param ctx the parse tree
	 */
	void exitRounded_breaket(sosParser.Rounded_breaketContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#squared_breaket}.
	 * @param ctx the parse tree
	 */
	void enterSquared_breaket(sosParser.Squared_breaketContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#squared_breaket}.
	 * @param ctx the parse tree
	 */
	void exitSquared_breaket(sosParser.Squared_breaketContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#list_base}.
	 * @param ctx the parse tree
	 */
	void enterList_base(sosParser.List_baseContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#list_base}.
	 * @param ctx the parse tree
	 */
	void exitList_base(sosParser.List_baseContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#assert_name}.
	 * @param ctx the parse tree
	 */
	void enterAssert_name(sosParser.Assert_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#assert_name}.
	 * @param ctx the parse tree
	 */
	void exitAssert_name(sosParser.Assert_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#insert_var_value}.
	 * @param ctx the parse tree
	 */
	void enterInsert_var_value(sosParser.Insert_var_valueContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#insert_var_value}.
	 * @param ctx the parse tree
	 */
	void exitInsert_var_value(sosParser.Insert_var_valueContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#everything}.
	 * @param ctx the parse tree
	 */
	void enterEverything(sosParser.EverythingContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#everything}.
	 * @param ctx the parse tree
	 */
	void exitEverything(sosParser.EverythingContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#type_indentify}.
	 * @param ctx the parse tree
	 */
	void enterType_indentify(sosParser.Type_indentifyContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#type_indentify}.
	 * @param ctx the parse tree
	 */
	void exitType_indentify(sosParser.Type_indentifyContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#sti}.
	 * @param ctx the parse tree
	 */
	void enterSti(sosParser.StiContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#sti}.
	 * @param ctx the parse tree
	 */
	void exitSti(sosParser.StiContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#comments}.
	 * @param ctx the parse tree
	 */
	void enterComments(sosParser.CommentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#comments}.
	 * @param ctx the parse tree
	 */
	void exitComments(sosParser.CommentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link sosParser#comment_multiline}.
	 * @param ctx the parse tree
	 */
	void enterComment_multiline(sosParser.Comment_multilineContext ctx);
	/**
	 * Exit a parse tree produced by {@link sosParser#comment_multiline}.
	 * @param ctx the parse tree
	 */
	void exitComment_multiline(sosParser.Comment_multilineContext ctx);
}