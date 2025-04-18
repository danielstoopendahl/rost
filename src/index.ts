import { initialise } from "conductor/dist/conductor/runner/util/";
import { RostEvaluator } from "./RostEvaluator";
import { evaluate } from "./LocalEvaluator";

// const { runnerPlugin, conduit } = initialise(RostEvaluator);

const program = `
låt kör: bool = sant;
låt räknare: i32 = 0;

medan (kör){
    räknare = räknare + 1;
     om (räknare > 10){
        kör = falskt;
     }annars{
         kör = sant;
     }
}

räknare;
`

evaluate(program)