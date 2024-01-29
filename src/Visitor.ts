import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ProgramContext, LineContext, VariableContext, ExpressionContext, Compiler_instrContext, StatementContext, Args_rowContext, BlockContext, Function_statementContext, Define_statementContext, Macros_statementContext, Macros_bodyContext, Return_statementContext, Type_castContext, Operator_statementContext, Variable_defineContext, Rounded_breaketContext, Squared_breaketContext, List_baseContext, Assert_nameContext, Assert_short_nameContext, Insert_var_valueContext, EverythingContext, Type_indentifyContext, StiContext, CommentsContext, Comment_singlelineContext, Comment_multilineContext } from "./antlr/sosParser";
import { sosVisitor } from "./antlr/sosVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'

export default class Visitor extends AbstractParseTreeVisitor<Object> implements sosVisitor<Object> {
  protected defaultResult(): object {
    return {};
  }
  
  visitComments(ctx: CommentsContext): Object {
    return {};
  }

  // visitStatement(ctx: StatementContext): Object {
  //   let everything_ = ctx.everything();
    
  //   let value_type: string = "undef";
  //   let value: object = {};

  //   if (everything_ != undefined) {
  //     console.log(this.visit(everything_));
  //   }
  //   return {};
  // }

  visitProgram(ctx: ProgramContext): Object {
    return {};
  }

  visitAssert_short_name(ctx: Assert_short_nameContext): Object {
    let value: string = "";
    if (ctx.ASSERT_NAME() != void 0) {
      value = ctx.ASSERT_NAME()!.text;
    } else if (ctx.STRING() != void 0) {
      value = ctx.STRING()!.text;
    } else if (ctx.CHAR() != void 0) {
      value = ctx.CHAR()!.text;
    }
    return value;
  }

  visitAssert_name(ctx: Assert_nameContext): Object {
    if (ctx.assert_short_name().length == 1) {
      const val_ = ctx.assert_short_name()[0];
      let value = this.visit(val_);
      return {type: "simple", value};
    }
    return {};
  }


  visitVariable_define(ctx: Variable_defineContext): Object {
    const type_ = this.visit(ctx.type_indentify());
    const name_ = this.visit(ctx.assert_name());
    return {type_name: type_, name: name_};
  }

  visitVariable(ctx: VariableContext): Object {
    const obj 
      = this.visit(ctx.variable_define()) as { var_type: string, name: string};

    if (ctx.operator_statement() != undefined) {
      const operator_ = this.visit(ctx.operator_statement()!);
      return {var_type: obj.var_type, name: obj.name, operator: operator_};
    }

    return {var_type: obj.var_type, name: obj.name};
  }

  visitEverything(ctx: EverythingContext): Object {
    let value_type: string = "undef";
    let value: string = "";

    if (ctx.NUMBER() != undefined) {
      value = ctx.NUMBER()!.text;
      value_type = "number";
    }
    return {value_type, value};
  }

  visitOperator_statement(ctx: Operator_statementContext): Object {
    const operator_ = ctx.OPERATOR_SYMBOLS().text;
    const right_    = this.visit(ctx.statement());
    return {op_symbol: operator_, value: right_};
  } 

  visitType_indentify(ctx: Type_indentifyContext): Object {
    const var_type = ctx.ASSERT_NAME().text;
    if (ctx.sti() != undefined) {
      const with_sti = this.visit(ctx.sti()!);
      // console.log(this.visit());
    }
    return {type_name: var_type};
  }
  // visitSti(ctx: StiContext): Object {
  //   console.log(ctx);
  //   return {};
  // }
}