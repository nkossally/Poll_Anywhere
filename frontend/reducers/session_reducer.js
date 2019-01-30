import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

import merge from 'lodash/merge';

const emptyState = {id: null, poll_id: null, choice_id: null}

const sessionReducer = (oldState = emptyState, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = oldState;
      return merge({}, newState, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
      newState = oldState;
      return merge({}, newState, { id: null });
    
    default:
      return oldState;
  }
} 

export default sessionReducer;
