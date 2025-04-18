import { initialise } from "conductor/dist/conductor/runner/util/";
import { RostEvaluator } from "./RostEvaluator";
import { evaluate } from "./LocalEvaluator";

//const {runnerPlugin, conduit} = initialise(RostEvaluator);

const program = `
fn f(a: i32) -> bool {
    returnera 2;
}
`

evaluate(program)