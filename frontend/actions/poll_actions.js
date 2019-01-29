import * as PollApiUtil from '../util/poll_api_util';

export const RECEIVE_POLL = 'RECEIVE_POLL';
export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const DELETE_POLL = 'DELETE_POLL';
export const RECEIVE_POLL_ERRORS = 'RECEIVE_POLL_ERRORS';


export const create = (poll) =>{
  return dispatch =>{
    PollApiUtil.create(poll).then(
      (poll) =>{
        return dispatch(receivePoll(poll))
      },
      errors =>{
        return dispatch(receivePollErrors(errors.responseJSON));
      }
    )
  }
}

export const show = (id) =>{
  return dispatch =>{
    PollApiUtil.show(id).then(
      (poll) =>{
        return dispatch(receivePoll(poll))
      },
      errors =>{
        return dispatch(receivePollErrors(errors.responseJSON));
      }
    )
  }
}



export const showAll = () =>{
  return dispatch =>{
    PollApiUtil.showAll().then(
      (polls) =>{
        return dispatch(receivePolls(polls))
      },
      errors =>{
        return dispatch(receivePollErrors(errors.responseJSON));
      }
    )
  }
}

export const destroy = (id) =>{
  return dispatch =>{
    PollApiUtil.destroy(id).then(
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

