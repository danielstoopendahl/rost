import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from 'antlr4ng';
import { SimpleLangLexer } from './parser/src/SimpleLangLexer';
import { SimpleLangParser } from './parser/src/SimpleLangParser';
import { SimpleLangVisitor } from './parser/src/SimpleLangVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ng';

// Simplified visitor that matches the structure of the previous EvalVisitor
class EvalVisitor extends AbstractParseTreeVisitor<number> implements SimpleLangVisitor<number> {
  visitProg(ctx: any): number {
    return this.visit(ctx.expression());
  }

  visitExpression(ctx: any): number {
    if (ctx.getChildCount() === 1) {
      // This is equivalent to ctx.INT() in your previous code
      return parseInt(ctx.getText(), 10);
    } else if (ctx.getChildCount() === 3) {
      const left = this.visit(ctx.getChild(0));
      const op = ctx.getChild(1).getText();
      const right = this.visit(ctx.getChild(2));

      switch (op) {
        case '+': return left + right;
        case '-': return left - right;
        case '*': return left * right;
        case '/': return left / right;
      }
    }
    return 0;
  }

  // Required by AbstractParseTreeVisitor
  protected defaultResult(): number {
    return 0;
  }
}

export class SimpleLangEvaluator extends BasicEvaluator {
  async evaluateChunk(chunk: string): Promise<void> {
    // Set up antlr's pipeline (using antlr4ng syntax)
    const chars = CharStream.fromString(chunk);
    const lexer = new SimpleLangLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new SimpleLangParser(tokens);
    const tree = parser.prog();

    // Evaluate using our visitor
    const visitor = new EvalVisitor();
    const result = visitor.visit(tree);
    this.conductor.sendOutput(`result: ${result}`);
  }

  constructor(conductor: IRunnerPlugin) {
    super(conductor);
  }
}