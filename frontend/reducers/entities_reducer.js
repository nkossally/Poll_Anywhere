import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import sessionReducer from './session_reducer';
import pollsReducer from './polls_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer,
  polls: pollsReducer,
});

export default entitiesReducer;