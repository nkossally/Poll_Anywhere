import { RECEIVE_RESPONSE, RECEIVE_RESPONSES, DELETE_RESPONSE } from '../actions/response_actions';
import merge from 'lodash/merge';

const responsesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  
  switch(action.type){
    case RECEIVE_RESPONSE:
      newState = merge({}, oldState, {[action.response.id]: action.response});
      return newState;
    case RECEIVE_RESPONSES:
      newState = merge({}, oldState, action.responses);
      return newState;
    case DELETE_RESPONSE:
      newState = oldState;
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
} 
export default responsesReducer;