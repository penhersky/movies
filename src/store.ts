import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

function configureStore(preloadedState: any) {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers =
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(...enhancers)
      : compose;
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
}

const store = configureStore({});

export default store;
