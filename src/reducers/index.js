import { combineReducers } from 'redux';

import studentReducer from './studentReducers';
import anotherReducer from './anotherReducer'

const rootReducer = combineReducers({
  // reducername: reducerfilename
  student: studentReducer,
  another: anotherReducer
});

export default rootReducer;