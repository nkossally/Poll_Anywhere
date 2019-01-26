import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';




export const logout = () => {
  return dispatch => {
    return SessionApiUtil.logout().then(
      () => {
        return dispatch(logoutCurrentUser());
      }
    )
  }   
};



export const login = user => {
  return dispatch => {
    return SessionApiUtil.login(user).then(
      user => { 
        return dispatch(receiveCurrentUser(user));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const signup = user => {
  return dispatch => {
    return SessionApiUtil.signup(user).then(
      user => { 
        return dispatch(receiveCurrentUser(user));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};


const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const receiveCurrentUser = (user) =>({
  type: RECEIVE_CURRENT_USER,
  user
})

const logoutCurrentUser = () =>({
  type: LOGOUT_CURRENT_USER,
});
