import { combineReducers } from 'redux';

import { movieReducer } from './movie';
import { willWatchReducer } from './willWatch';

const rootReducers = combineReducers({ movieReducer, willWatchReducer });

export default rootReducers;
