import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import sample, { actions as sampleActions } from 'js/sample/ducks'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'

const logs = logger();

export default () => {
  return createStore(combineReducers({
    sample,
    routing: routerReducer
  }), undefined, compose(
    applyMiddleware(thunk, promise, logs),
     typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));
};
