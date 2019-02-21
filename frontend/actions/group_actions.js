import * as GroupApiUtil from '../util/group_api_util';
import * as PollApiUtil from '../util/poll_api_util';

export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const DELETE_GROUP = 'DELETE_GROUP';
export const RECEIVE_GROUP_ERRORS = 'RECEIVE_GROUP_ERRORS';


// export const createGroup = (group, user) =>{
//   return dispatch =>{
//     GroupApiUtil.createGroup(group, user).then(
//       (group) =>{
//         return dispatch(receiveGroup(group))
//       },
//       errors =>{
//         return dispatch(receiveGroupErrors(errors.responseJSON));
//       }
//     )
//   }
// }

export const createGroup = (group, user, pollIds) =>{
  return dispatch =>{
    GroupApiUtil.createGroup(group, user, pollIds).then(
      (group) =>{
        return PollApiUtil.updatePoll(pollIds, -1, [], group).then(
          (group) => {
          debugger;
          return dispatch(receiveGroup(group));
        }, errors => {
          return dispatch(receiveGroupErrors(errors.responseJSON));
        });
      })
  }
}

// export const createPoll = (poll, choices) =>{
//   return dispatch =>{
//     PollApiUtil.createPoll(poll, choices).then(
//       (poll) =>{
//            return ChoiceApiUtil.createChoice(choices, poll).then(
//             (poll) =>{
//               // dispatch receive choices
//             return dispatch(receivePoll(poll))
//           },
//           errors =>{
//             return dispatch(receivePollErrors(errors.responseJSON));
//           }
//         )
//       })
//   }
// }


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
  type: RECEIVE_GROUP,
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