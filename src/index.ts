import { initialise } from "conductor/dist/conductor/runner/util/";
import { RostEvaluator } from "./RostEvaluator";
import { evaluate } from "./LocalEvaluator";

// const { runnerPlugin, conduit } = initialise(RostEvaluator);

const program = `
låt kör: bool = sant;
låt räknare: i32 = 0;


räknare = räknare + 1;
    


räknare;
`

evaluate(program)