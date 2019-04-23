import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineStore from './combineStore';

export default createStore(
  combineStore,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)