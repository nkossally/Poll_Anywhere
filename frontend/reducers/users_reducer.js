import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import merge from "lodash/merge";

import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.user.title) {
        return oldState;
      }
      newState = merge({}, oldState, { [action.user.id]: action.user });
      return newState;
    case RECEIVE_USER:
      newState = merge({}, oldState, { [action.user.id]: action.user });
      return newState;
    case RECEIVE_USERS:
      newState = merge({}, oldState, action.users);
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;
