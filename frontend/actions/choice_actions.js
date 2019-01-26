import * as ChoiceApiUtil from '../util/choice_api_util';

export const RECEIVE_CHOICE = 'RECEIVE_CHOICE';
export const RECEIVE_CHOICES = 'RECEIVE_CHOICES';
export const DELETE_CHOICE = 'DELETE_CHOICE';
export const RECEIVE_CHOICE_ERRORS = 'RECEIVE_CHOICE_ERRORS';


export const create = (choice) =>{
  return dispatch =>{
    ChoiceApiUtil.create(choice).then(
      (choice) =>{
        return dispatch(receiveChoice(choice))
      },
      errors =>{
        return dispatch(receiveChoiceErrors(errors.responseJSON));
      }
    )
  }
}

export const show = (id) =>{
  return dispatch =>{
    ChoiceApiUtil.show(id).then(
      (choice) =>{
        return dispatch(receiveChoice(choice))
      },
      errors =>{
        return dispatch(receiveChoiceErrors(errors.responseJSON));
      }
    )
  }
}

export const showAll = () =>{
  return dispatch =>{
    ChoiceApiUtil.showAll().then(
      (choices) =>{
        return dispatch(receiveChoices(choices))
      },
      errors =>{
        return dispatch(receiveChoiceErrors(errors.responseJSON));
      }
    )
  }
}

export const destroy = (id) =>{
  return dispatch =>{
    ChoiceApiUtil.destroy(id).then(
      () =>{
        return dispatch(deleteChoice(id))
      },
      errors =>{
        return dispatch(receiveChoiceErrors(errors.responseJSON));
      }
    )
  }
}

const receiveChoice = (choice) =>({
  type: RECEIVE_CHOICE,
  choice
});

const receiveChoices = (choices) =>({
  type: RECEIVE_CHOICES,
  choices
});

const deleteChoice = (id) =>({
  type: DELETE_CHOICE,
  id
});

const receiveChoiceErrors = (errors) =>({
  type: RECEIVE_CHOICE_ERRORS,
  errors
});