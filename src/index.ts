import { initialise } from "conductor/dist/conductor/runner/util/";
import { RostEvaluator } from "./RostEvaluator";
import { evaluate } from "./LocalEvaluator";

// const { runnerPlugin, conduit } = initialise(RostEvaluator);

const program = `
låt mut a : i32 = 4;


`

evaluate(program)