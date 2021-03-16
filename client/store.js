import { createStore, applyMiddleware } from 'redux';
import resumeReducer from './redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  resumeReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store
