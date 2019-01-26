import { RECEIVE_CHOICE, RECEIVE_CHOICES, DELETE_CHOICE } from '../actions/choice_actions';
import merge from 'lodash/merge';

const choicesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type){
    case RECEIVE_CHOICE:
      newState = merge({}, oldState, {[action.choice.id]: action.choice});
      return newState;
    case RECEIVE_CHOICES:
      newState = merge({}, oldState, action.choices);
      return newState;
    case DELETE_CHOICE:
      newState = oldState;
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
} 
export default choicesReducer;