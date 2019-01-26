import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import sessionReducer from './session_reducer';
import pollsReducer from './polls_reducer';
import choicesReducer from './choices_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  session: sessionReducer,
  polls: pollsReducer,
  choices: choicesReducer
});

export default entitiesReducer;