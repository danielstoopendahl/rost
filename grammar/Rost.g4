grammar Rost;

prog: sequence EOF;

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

block: '{' sequence '}';

sequence: statement*;

// letStmt: 'låt' mutable? id=IDENTIFIER ':' type=TYPE '=' expr=expression ';';
letStmt: 'låt' id=IDENTIFIER '=' expr=expression ';';
mutable: 'mut';
assignment: IDENTIFIER '=' expression ';';


funDecl: 'fn' id=IDENTIFIER '(' paramList? ')'  ('->' type=TYPE)? body=block;
paramList: param (',' param)*;
param: id=IDENTIFIER ':' type=TYPE;
returnStatement: 'returnera' expression? ';';



ifStmt
    : 'om' cond=expression cons=block elseBranch?;
elseBranch
    : 'annars' block
    | 'annars' ifStmt
    ;


whileStmt: 'medan' cond=expression block;
breakStatement: 'bryt' ';';

// Add dereference and borrow
expression
    : '(' expression ')'
    | expression op=('+'|'-' |'*'|'/') expression
    | expression op=('&&'|'||') expression
    | expression op=('=='|'!='|'<='|'>='|'<'|'>') expression
    | op=('-'|'!') expression
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
BOOL: 'sant' | 'falskt';
INT: [0-9]+;
WS: [ \t\r\n]+ -> skip;

