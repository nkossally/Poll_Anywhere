
import { combineReducers } from 'redux';
import modal from './modal_reducer';

import {SELECT_POLL, DESELECT_POLL, SHOW_SELECTION} from '../actions/ui_actions';

import merge from 'lodash/merge';

const uiReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type){
    case SELECT_POLL:

      if(Object.keys(oldState).includes(action.poll.id.toString())){
        newState = merge({}, oldState);
        delete newState[action.poll.id];
        
      } else {
        newState = merge({}, oldState, {[action.poll.id]: action.poll});
      }
      return newState;
    case DESELECT_POLL:
      newState = merge({}, oldState);
      delete newState[action.poll.id];
      return newState;
    case SHOW_SELECTION:
      newState = merge({}, oldState);
      return newState;
    default:
      return oldState;
  }
} 


export default combineReducers({
  uiReducer,
  modal
});