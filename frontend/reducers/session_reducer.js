import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import { RECEIVE_POLL, RECEIVE_POLLS, DELETE_POLL, RECEIVE_POLL_ERRORS } from '../actions/poll_actions';
import { RECEIVE_CHOICE, RECEIVE_CHOICES, DELETE_CHOICE, RECEIVE_CHOICE_ERRORS } from '../actions/choice_actions';

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
    case RECEIVE_POLL:
      newState = oldState;
      return merge({}, newState, { poll_id: action.poll.id });
    case RECEIVE_CHOICE:
      newState = oldState;
      return merge({}, newState, { choice_id: action.choice.id });
    default:
      return oldState;
  }
} 

export default sessionReducer;
