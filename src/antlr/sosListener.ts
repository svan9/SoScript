// Generated from ./src/antlr/sos.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./sosParser";
import { LineContext } from "./sosParser";
import { VariableContext } from "./sosParser";
import { ExpressionContext } from "./sosParser";
import { Compiler_instrContext } from "./sosParser";
import { StatementContext } from "./sosParser";
import { Args_rowContext } from "./sosParser";
import { BlockContext } from "./sosParser";
import { Function_statementContext } from "./sosParser";
import { Define_statementContext } from "./sosParser";
import { Macros_statementContext } from "./sosParser";
import { Macros_bodyContext } from "./sosParser";
import { Return_statementContext } from "./sosParser";
import { Type_castContext } from "./sosParser";
import { Operator_statementContext } from "./sosParser";
import { Variable_defineContext } from "./sosParser";
import { Rounded_breaketContext } from "./sosParser";
import { Squared_breaketContext } from "./sosParser";
import { List_baseContext } from "./sosParser";
import { Assert_nameContext } from "./sosParser";
import { Assert_short_nameContext } from "./sosParser";
import { Insert_var_valueContext } from "./sosParser";
import { EverythingContext } from "./sosParser";
import { Type_indentifyContext } from "./sosParser";
import { StiContext } from "./sosParser";
import { CommentsContext } from "./sosParser";
import { Comment_singlelineContext } from "./sosParser";
import { Comment_multilineContext } from "./sosParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `sosParser`.
 */
export interface sosListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `sosParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.compiler_instr`.
	 * @param ctx the parse tree
	 */
	enterCompiler_instr?: (ctx: Compiler_instrContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.compiler_instr`.
	 * @param ctx the parse tree
	 */
	exitCompiler_instr?: (ctx: Compiler_instrContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.args_row`.
	 * @param ctx the parse tree
	 */
	enterArgs_row?: (ctx: Args_rowContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.args_row`.
	 * @param ctx the parse tree
	 */
	exitArgs_row?: (ctx: Args_rowContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.function_statement`.
	 * @param ctx the parse tree
	 */
	enterFunction_statement?: (ctx: Function_statementContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.function_statement`.
	 * @param ctx the parse tree
	 */
	exitFunction_statement?: (ctx: Function_statementContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.define_statement`.
	 * @param ctx the parse tree
	 */
	enterDefine_statement?: (ctx: Define_statementContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.define_statement`.
	 * @param ctx the parse tree
	 */
	exitDefine_statement?: (ctx: Define_statementContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.macros_statement`.
	 * @param ctx the parse tree
	 */
	enterMacros_statement?: (ctx: Macros_statementContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.macros_statement`.
	 * @param ctx the parse tree
	 */
	exitMacros_statement?: (ctx: Macros_statementContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.macros_body`.
	 * @param ctx the parse tree
	 */
	enterMacros_body?: (ctx: Macros_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.macros_body`.
	 * @param ctx the parse tree
	 */
	exitMacros_body?: (ctx: Macros_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.type_cast`.
	 * @param ctx the parse tree
	 */
	enterType_cast?: (ctx: Type_castContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.type_cast`.
	 * @param ctx the parse tree
	 */
	exitType_cast?: (ctx: Type_castContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.operator_statement`.
	 * @param ctx the parse tree
	 */
	enterOperator_statement?: (ctx: Operator_statementContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.operator_statement`.
	 * @param ctx the parse tree
	 */
	exitOperator_statement?: (ctx: Operator_statementContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.variable_define`.
	 * @param ctx the parse tree
	 */
	enterVariable_define?: (ctx: Variable_defineContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.variable_define`.
	 * @param ctx the parse tree
	 */
	exitVariable_define?: (ctx: Variable_defineContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.rounded_breaket`.
	 * @param ctx the parse tree
	 */
	enterRounded_breaket?: (ctx: Rounded_breaketContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.rounded_breaket`.
	 * @param ctx the parse tree
	 */
	exitRounded_breaket?: (ctx: Rounded_breaketContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.squared_breaket`.
	 * @param ctx the parse tree
	 */
	enterSquared_breaket?: (ctx: Squared_breaketContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.squared_breaket`.
	 * @param ctx the parse tree
	 */
	exitSquared_breaket?: (ctx: Squared_breaketContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.list_base`.
	 * @param ctx the parse tree
	 */
	enterList_base?: (ctx: List_baseContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.list_base`.
	 * @param ctx the parse tree
	 */
	exitList_base?: (ctx: List_baseContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.assert_name`.
	 * @param ctx the parse tree
	 */
	enterAssert_name?: (ctx: Assert_nameContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.assert_name`.
	 * @param ctx the parse tree
	 */
	exitAssert_name?: (ctx: Assert_nameContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.assert_short_name`.
	 * @param ctx the parse tree
	 */
	enterAssert_short_name?: (ctx: Assert_short_nameContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.assert_short_name`.
	 * @param ctx the parse tree
	 */
	exitAssert_short_name?: (ctx: Assert_short_nameContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.insert_var_value`.
	 * @param ctx the parse tree
	 */
	enterInsert_var_value?: (ctx: Insert_var_valueContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.insert_var_value`.
	 * @param ctx the parse tree
	 */
	exitInsert_var_value?: (ctx: Insert_var_valueContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.everything`.
	 * @param ctx the parse tree
	 */
	enterEverything?: (ctx: EverythingContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.everything`.
	 * @param ctx the parse tree
	 */
	exitEverything?: (ctx: EverythingContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.type_indentify`.
	 * @param ctx the parse tree
	 */
	enterType_indentify?: (ctx: Type_indentifyContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.type_indentify`.
	 * @param ctx the parse tree
	 */
	exitType_indentify?: (ctx: Type_indentifyContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.sti`.
	 * @param ctx the parse tree
	 */
	enterSti?: (ctx: StiContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.sti`.
	 * @param ctx the parse tree
	 */
	exitSti?: (ctx: StiContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.comments`.
	 * @param ctx the parse tree
	 */
	enterComments?: (ctx: CommentsContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.comments`.
	 * @param ctx the parse tree
	 */
	exitComments?: (ctx: CommentsContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.comment_singleline`.
	 * @param ctx the parse tree
	 */
	enterComment_singleline?: (ctx: Comment_singlelineContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.comment_singleline`.
	 * @param ctx the parse tree
	 */
	exitComment_singleline?: (ctx: Comment_singlelineContext) => void;

	/**
	 * Enter a parse tree produced by `sosParser.comment_multiline`.
	 * @param ctx the parse tree
	 */
	enterComment_multiline?: (ctx: Comment_multilineContext) => void;
	/**
	 * Exit a parse tree produced by `sosParser.comment_multiline`.
	 * @param ctx the parse tree
	 */
	exitComment_multiline?: (ctx: Comment_multilineContext) => void;
}

