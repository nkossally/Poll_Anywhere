import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const noLogIn = { id: null };

const sessionReducer = (oldState = noLogIn, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { id: action.user.id };
    case LOGOUT_CURRENT_USER:
      return noLogIn;
    default:
      return oldState;
  }
} 

export default sessionReducer;
