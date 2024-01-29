grammar sos;

FUNCTION_KW     : 'function';
RETURN_KW       : 'return';
END_OF_EXPR     : ';';
MACROS_KW       : '@macros';
DEFINE_KW       : '@define';

OPERATOR_SYMBOLS: ('='|'-'|'+'|'*'|'^'|'<'|'>')+;
ASSERT_NAME: [a-zA-Z_$][0-9a-zA-Z_$]*;


program: line* EOF;

line: expression | comments;

variable: variable_define operator_statement?;

expression
  : statement END_OF_EXPR+
  | compiler_instr
;

compiler_instr
  : macros_statement
  | define_statement
;

statement
  : function_statement
  | variable
  | everything
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
  statement
;

type_cast: '(' type_indentify ')' rounded_breaket;

operator_statement: OPERATOR_SYMBOLS statement;

variable_define: type_indentify assert_name;

rounded_breaket: '(' list_base ')';
squared_breaket: '[' list_base ']';

list_base: everything (',' everything)*;

assert_name
  : (assert_short_name ('.' assert_short_name)*)
;

assert_short_name
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

type_indentify: ASSERT_NAME sti?;

sti
  : '&'
  | '~' (NUMBER | ('(' statement ')'))
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

comments
  : comment_multiline 
  | comment_singleline
;

comment_singleline
  : '//' ~('\n' | '\r')*
;

comment_multiline: 
  ('***') 
    ~('***')* 
  ('***')
;