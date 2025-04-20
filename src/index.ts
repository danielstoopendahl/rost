import { initialise } from "conductor/dist/conductor/runner/util/";
import { RostEvaluator } from "./RostEvaluator";
import { evaluate } from "./LocalEvaluator";

// const { runnerPlugin, conduit } = initialise(RostEvaluator);

const program = `
låt räknare: i32 = 0;

fn inc(a: i32) -> i32 {
    om (a > 10){
        returnera a;
    }annars{
        returnera inc(a + 1);
    }
    
}

inc(räknare);

`

evaluate(program)