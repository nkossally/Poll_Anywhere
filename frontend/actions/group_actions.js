import * as GroupApiUtil from '../util/group_api_util';

export const RECIEVE_GROUP = 'RECIEVE_GROUP';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const DELETE_GROUP = 'DELETE_GROUP';
export const RECEIVE_GROUP_ERRORS = 'RECEIVE_GROUP_ERRORS';


export const createGroup = (group) =>{
  return dispatch =>{
    GroupApiUtil.createGroup(group).then(
      (group) =>{
        return dispatch(receiveGroup(group))
      },
      errors =>{
        return dispatch(receiveGroupErrors(errors.responseJSON));
      }
    )
  }
}

export const showGroup = (id) =>{
  return dispatch =>{
    GroupApiUtil.showGroup(id).then(
      (group) =>{
        return dispatch(receiveGroup(group))
      },
      errors =>{
        return dispatch(receiveGroupErrors(errors.responseJSON));
      }
    )
  }
}

export const showAllGroups = () =>{
  return dispatch =>{
    GroupApiUtil.showAllGroups().then(
      (groups) =>{
        return dispatch(receiveGroups(groups))
      },
      errors =>{
        return dispatch(receiveGroupErrors(errors.responseJSON));
      }
    )
  }
}

export const destroyGroup = (id) =>{
  return dispatch =>{
    GroupApiUtil.destroyGroup(id).then(
      () =>{
        return dispatch(deleteGroup(id))
      },
      errors =>{
        return dispatch(receiveGroupErrors(errors.responseJSON));
      }
    )
  }
}

const receiveGroup = (group) =>({
  type: RECIEVE_GROUP,
  group
});

const receiveGroups = (groups) =>({
  type: RECEIVE_GROUPS,
  groups
});

const deleteGroup = (id) =>({
  type: DELETE_GROUP,
  id
});

const receiveGroupErrors = (errors) =>({
  type: RECEIVE_GROUP_ERRORS,
  errors
});