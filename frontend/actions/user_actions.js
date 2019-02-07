import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const showAllUsers = () =>{
  return dispatch =>{
    UserApiUtil.showAllUsers().then(
      (users) =>{
        return dispatch(receiveUsers(users))
      },
      errors =>{
        return dispatch(receiveUserErrors(errors.responseJSON));
      }
    )
  }
}


const receiveUsers = (users) =>({
  type: RECEIVE_USERS,
  users
});

const receiveUserErrors = (errors) =>({
  type: RECEIVE_USER_ERRORS,
  errors
});