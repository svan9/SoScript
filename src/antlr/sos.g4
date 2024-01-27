grammar sos;

FUNCTION_KW     : 'function';
RETURN_KW       : 'return';
END_OF_EXPR     : ';';
MACROS_KW       : '@macros';
DEFINE_KW       : '@define';

OPERATOR_SYMBOLS: '=-+*^<>'+;
ASSERT_NAME: [a-zA-Z_$][0-9a-zA-Z_$]*;


program: line* EOF;

line: expression END_OF_EXPR+;

variable: variable_define operator_statement?;

expression: statement | comments;

statement
  : function_statement
  | macros_statement
;

args_row: '(' variable_define ( ',' variable_define assert_name )* ')';

block: 
  '{' (return_statement | line)* '}'
;

function_statement: args_row '->' block;

define_statement: 
  DEFINE_KW assert_name 'as' assert_name
;


macros_statement: 
  MACROS_KW assert_name macros_body
;

macros_body: 
  '{' rounded_breaket '->' block '}'  
;

return_statement: 
  expression
;

type_cast: '(' type_indentify ')' rounded_breaket;

operator_statement: OPERATOR_SYMBOLS statement;

variable_define: type_indentify assert_name;

rounded_breaket: '(' list_base ')';
squared_breaket: '[' list_base ']';

list_base: everything (',' everything)*;

assert_name
  // insert_var_value assert_name
  : ASSERT_NAME
  | STRING
  | CHAR
;

insert_var_value: 
  '%' assert_name '%'
;

everything
  : type_indentify
  | STRING
  | CHAR
  | NUMBER
  | ASSERT_NAME
;

type_indentify: assert_name sti?;

sti
  : '&'
  | '~' expression
;

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

comments: ( comment_multiline | COMMENT_SINGLELINE );

COMMENT_SINGLELINE
  : '//' ~('\n' | '\r')*
;

comment_multiline: 
  ('***') 
    ~('***')* 
  ('***')
;