# Rost
Sublanguage of Rust using Swedish syntax


## Grammar
Antlr4 grammar found in grammar/Rost.g4


## How to Run
### Generate parser & visitor
To gemerate parser and visitor, run:

```bash
yarn generate-parser
```
this spits out your lexer, parser, and a visitor in src/parser/src.

### bundle into a single js file
Run:
```bash
yarn build
```
this produces a bundled file at dist/index.js that’s fully conductor-compatible.

### load your evaluator into sourceacademy playground 
The repo automatically uploads the generated evaluator to: https://danielstoopendahl.github.io/rost/index.js.

To run, go to https://sourceacademy.org/playground, enable conductor and add the evaluator URL.


