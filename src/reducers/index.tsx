import { combineReducers } from "redux";

import { movieReducer } from "./movie";
import { willWatchReducer } from "./willWatch";
import { searchReducer } from "./search";

const rootReducers = combineReducers(
  { movieReducer, willWatchReducer, searchReducer },
);

export default rootReducers;
