import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger]; //latter on, thunk can go here in this array :)

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;