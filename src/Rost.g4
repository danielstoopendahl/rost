grammar Rost;
/* Chane to statement* */
prog: expression ';' EOF;

statement
    : letStmt
    | funDecl
    | ifStmt
    | whileStmt
    | block
    | assignment
    | returnStatement
    | breakStatement       
    | expressionStatement
    ;

block: '{' statement* '}';


letStmt: 'let' mutable? id=IDENTIFIER ':' type=TYPE '=' expr=expression ';';
mutable: 'mut';
assignment: IDENTIFIER '=' expression ';';


funDecl: 'fn' id=IDENTIFIER '(' paramList? ')'  ('->' type=TYPE)? body=block;
paramList: param (',' param)*;
param: id=IDENTIFIER ':' type=TYPE;
returnStatement: 'return' expression? ';';



ifStmt
    : 'if' cond=expression cons=block elseBranch?;
elseBranch
    : 'else' block
    | 'else' ifStmt
    ;


whileStmt: 'while' cond=expression block;
breakStatement: 'break' ';';

// Add dereference and borrow
expression
    : '(' expression ')'
    | expression op=('+'|'-' |'*'|'/') expression
    | expression op=('&&'|'||') expression
    | expression op=('=='|'!='|'<='|'>='|'<'|'>') expression
    | ('-'|'!') expression
    | functionCallExpression
    | INT
    | BOOL
    | IDENTIFIER
    ;

expressionStatement: expression ';';

functionCallExpression: IDENTIFIER '(' argList? ')';
argList: expression (',' expression)*;

IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
TYPE: 'bool' | 'i32';
BOOL: 'true' | 'false';
INT: [0-9]+;
WS: [ \t\r\n]+ -> skip;

