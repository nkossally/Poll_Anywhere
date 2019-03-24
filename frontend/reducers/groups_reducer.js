import {
  RECEIVE_GROUP,
  RECEIVE_GROUPS,
  DELETE_GROUP
} from "../actions/group_actions";
import merge from "lodash/merge";

const groupsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_GROUP:
      newState = merge({}, oldState, { [action.group.id]: action.group });
      return newState;
    case RECEIVE_GROUPS:
      newState = merge({}, oldState, action.groups);
      return newState;
    case DELETE_GROUP:
      newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};
export default groupsReducer;
