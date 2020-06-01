import { combineReducers } from 'redux';

import { movieReducer } from './movie';
import { topMovieReducer } from './top';
import { willWatchReducer } from './willWatch';
import { searchReducer } from './search';

const rootReducers = combineReducers({
  movieReducer,
  topMovieReducer,
  willWatchReducer,
  searchReducer,
});

export default rootReducers;
