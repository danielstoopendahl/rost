import { initialise } from "conductor/dist/conductor/runner/util/";
import { RostEvaluator } from "./RostEvaluator";

const {runnerPlugin, conduit} = initialise(RostEvaluator);