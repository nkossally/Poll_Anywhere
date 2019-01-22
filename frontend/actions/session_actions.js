import * as SessionApiUtil from './util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const login = (user) => dispatch =>(
  SessionApiUtil.login(user).then((user)=>receiveCurrentUser(user))
)

export const logout = () => dispatch =>(
  SessionApiUtil.logout(user).then((user)=>logoutCurrentUser(user))
)
// How get id of currentUser

export const signup = (user) => dispatch =>(
  SessionApiUtil.signup(user).then((user)=>receiveCurrentUser(user))
)

const 

login(user) (thunk action creator)
logout() (thunk action creator)
signup(user) (thunk action creator)
receiveCurrentUser(currentUser) (regular action creator)
logoutCurrentUser() (regular action creator)
receiveErrors(errors) (regular action creator)