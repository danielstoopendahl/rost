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
    | continueStmt
    | breakStmt     
    | expressionStatement
    ;

block: '{' sequence '}';

sequence: statement*;

letStmt: 'låt' id=IDENTIFIER ':' type=TYPE '=' expr=expression ';';
// mutable: 'mut';
assignment: IDENTIFIER '=' expression ';';


funDecl: 'fn' id=IDENTIFIER '(' paramList? ')' '->' type=TYPE body=block;
paramList: param (',' param)*;
param: id=IDENTIFIER ':' type=TYPE;

// Not optional expression
returnStatement: 'returnera' expression ';';


// Simplification for now
ifStmt: 'om' cond=expression cons=block 'annars' alt=block;

/*
ifStmt
    : 'om' cond=expression cons=block elseBranch?;
elseBranch
    : 'annars' block
    | 'annars' ifStmt
    ;

 */

whileStmt: 'medan' cond=expression body=block;
//Not used
breakStmt: 'bryt' ';';
continueStmt: 'fortsätt' ';';

// Add dereference and borrow
expression
    : '(' expression ')'
    | expression op=('*'|'/') expression
    | expression op=('+'|'-') expression
    | expression op=('&&'|'||') expression
    | expression op=('=='|'!='|'<='|'>='|'<'|'>') expression
    | op=('-'|'!') expression
    | functionCallExpression
    | INT
    | BOOL
    | STRING
    | IDENTIFIER
    | '&' IDENTIFIER
    ;

expressionStatement: expression ';';

functionCallExpression: IDENTIFIER '(' argList? ')';
argList: expression (',' expression)*;


TYPE: 'bool' | 'i32' | '&bool' | '&i32' | 'String';
BOOL: 'sant' | 'falskt';
STRING: '"' (~["\r\n] | '\\"')* '"';
INT: [0-9]+;
IDENTIFIER: [a-zA-Z_åäöÅÄÖ][a-zA-Z0-9_åäöÅÄÖ]*;
WS: [ \t\r\n]+ -> skip;

