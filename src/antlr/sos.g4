grammar sos;

FUNCTION_KW : 'function';
RETURN_KW   : 'return';
END_OF_EXPR : ';';

OPERATOR_SYMBOLS: '=-+*^<>'+;
ASSERT_NAME: [a-zA-Z_$][0-9a-zA-Z_$]*;


program: line* EOF;

line: expression END_OF_EXPR+;

variable: variable_define operator_statement?;

expression: statement;

statement: 
  function_statement
;

args_row: '(' variable_define ( ',' variable_define NAME )* ')';

block: 
  '{' (return_statement | line)* '}'
;

function_statement: args_row '->' block;

return_statement: 
  expression
;

type_cast: '(' type_indentify ')' rounded_breaket;

operator_statement: OPERATOR_SYMBOLS statement;

variable_define: type_indentify NAME;

rounded_breaket: '(' list_base ')';
squared_breaket: '[' list_base ']';

list_base: everything (',' everything)*;

everything
  : type_indentify
  | STRING
  | CHAR
  | NUMBER
  | NAME
;

type_indentify: TYPE sti?;

sti
  : '&'
  | '~' expression
;

NAME: ASSERT_NAME;
TYPE: ASSERT_NAME;

STRING
  : '"' ('\\"' | ~'"')* '"'
;

CHAR
  : '\'' ('\\\'' | ~'\'') '\''
;

NUMBER
  : FLOATING_NUMBER
  | SPLITED_NUMBER
  | VERY_NEGATIVE_NUMBER 
  | VERY_POSITIV_NUMBER 
  | DIGITS
;

DIGITS
  : [0-9]+
; 

VERY_POSITIV_NUMBER
  : '+' DIGITS
;

VERY_NEGATIVE_NUMBER
  : '-' DIGITS
;

FLOATING_NUMBER
  : DIGITS? '.' DIGITS
;

SPLITED_NUMBER
  : DIGITS ('_' DIGITS)+
;

WS: [\n\r ] -> skip;