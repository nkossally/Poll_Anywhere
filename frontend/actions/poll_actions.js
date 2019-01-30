import * as PollApiUtil from '../util/poll_api_util';

export const RECEIVE_POLL = 'RECEIVE_POLL';
export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const DELETE_POLL = 'DELETE_POLL';
export const RECEIVE_POLL_ERRORS = 'RECEIVE_POLL_ERRORS';

import * as ChoiceActions from './choice_actions';
import merge from 'lodash/merge';



// export const createPoll = (poll, choices) =>{
//   return dispatch =>{
//     PollApiUtil.createPoll(poll).then(
//       (poll) =>{
//         choices.forEach(choice => {
//           dispatch(ChoiceActions.createChoice({poll_id: poll.id, body: choice}))
//         });
//       }).then(
//         (poll) =>{
//           debugger
//         return dispatch(receivePoll(poll))
//       },
//       errors =>{
//         return dispatch(receivePollErrors(errors.responseJSON));
//       }
//     )
//   }
// }

export const createPoll = (poll, choices) =>{
  return dispatch =>{
    PollApiUtil.createPoll(poll, choices).then(
      (poll) =>{
        debugger
          dispatch(ChoiceActions.createChoice(choices, poll))
      }).then(
        (poll) =>{
          debugger
        return dispatch(receivePoll(poll))
      },
      errors =>{
        return dispatch(receivePollErrors(errors.responseJSON));
      }
    )
  }
}

export const showPoll = (id) =>{
  return dispatch =>{
    PollApiUtil.showPoll(id).then(
      (poll) =>{
        return dispatch(receivePoll(poll))
      },
      errors =>{
        return dispatch(receivePollErrors(errors.responseJSON));
      }
    )
  }
}



export const showAllPolls = () =>{
  return dispatch =>{
    PollApiUtil.showAllPolls().then(
      (polls) =>{
        return dispatch(receivePolls(polls))
      },
      errors =>{
        return dispatch(receivePollErrors(errors.responseJSON));
      }
    )
  }
}

export const destroyPoll = (id) =>{
  return dispatch =>{
    PollApiUtil.destroyPoll(id).then(
      () =>{
        return dispatch(deletePoll(id))
      },
      errors =>{
        return dispatch(receivePollErrors(errors.responseJSON));
      }
    )
  }
}

const receivePoll = (poll) =>({
  type: RECEIVE_POLL,
  poll
});

const receivePolls = (polls) =>({
  type: RECEIVE_POLLS,
  polls
});

const deletePoll = (id) =>({
  type: DELETE_POLL,
  id
});

const receivePollErrors = (errors) =>({
  type: RECEIVE_POLL_ERRORS,
  errors
});

