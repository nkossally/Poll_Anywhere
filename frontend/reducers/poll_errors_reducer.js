import { RECEIVE_POLL_ERRORS, RECEIVE_POLL, RECEIVE_POLLS, DELETE_POLL } from '../actions/poll_actions';

const pollErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_POLL_ERRORS:
      return action.errors;
    case RECEIVE_POLL:
      return [];
    case RECEIVE_POLLS:
      return [];
    case DELETE_POLL:
      return []; 
    default:
      return oldState;
  }
} 

export default pollErrorsReducer;

