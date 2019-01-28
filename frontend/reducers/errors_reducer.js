import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import pollErrorsReducer from './poll_errors_reducer';
const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  poll: pollErrorsReducer,
});

export default errorsReducer;