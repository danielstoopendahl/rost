import { initialise } from "conductor/dist/conductor/runner/util/";
import { RostEvaluator } from "./RostEvaluator";
import { evaluate } from "./LocalEvaluator";

// const { runnerPlugin, conduit } = initialise(RostEvaluator);

const program = `
fn abc(a: i32) -> i32 {
    returnera a + 1;
}

abc(3);
`

evaluate(program)