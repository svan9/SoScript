// Generated from ./src/antlr/sos.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./sosParser";
import { LineContext } from "./sosParser";
import { VariableContext } from "./sosParser";
import { ExpressionContext } from "./sosParser";
import { StatementContext } from "./sosParser";
import { Args_rowContext } from "./sosParser";
import { BlockContext } from "./sosParser";
import { Function_statementContext } from "./sosParser";
import { Return_statementContext } from "./sosParser";
import { Type_castContext } from "./sosParser";
import { Operator_statementContext } from "./sosParser";
import { Variable_defineContext } from "./sosParser";
import { Rounded_breaketContext } from "./sosParser";
import { Squared_breaketContext } from "./sosParser";
import { List_baseContext } from "./sosParser";
import { EverythingContext } from "./sosParser";
import { Type_indentifyContext } from "./sosParser";
import { StiContext } from "./sosParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `sosParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface sosVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `sosParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.args_row`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs_row?: (ctx: Args_rowContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.function_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_statement?: (ctx: Function_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.return_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_statement?: (ctx: Return_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.type_cast`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_cast?: (ctx: Type_castContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.operator_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator_statement?: (ctx: Operator_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.variable_define`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_define?: (ctx: Variable_defineContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.rounded_breaket`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRounded_breaket?: (ctx: Rounded_breaketContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.squared_breaket`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSquared_breaket?: (ctx: Squared_breaketContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.list_base`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_base?: (ctx: List_baseContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.everything`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEverything?: (ctx: EverythingContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.type_indentify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_indentify?: (ctx: Type_indentifyContext) => Result;

	/**
	 * Visit a parse tree produced by `sosParser.sti`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSti?: (ctx: StiContext) => Result;
}

