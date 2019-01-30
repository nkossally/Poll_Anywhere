import * as ChoiceApiUtil from '../util/choice_api_util';

export const RECEIVE_CHOICE = 'RECEIVE_CHOICE';
export const RECEIVE_CHOICES = 'RECEIVE_CHOICES';
export const DELETE_CHOICE = 'DELETE_CHOICE';
export const RECEIVE_CHOICE_ERRORS = 'RECEIVE_CHOICE_ERRORS';


export const createChoice = (choice) =>{
  return dispatch =>{
    ChoiceApiUtil.createChoice(choice).then(
      (choice) =>{
        return dispatch(receiveChoice(choice))
      },
      errors =>{
        return dispatch(receiveChoiceErrors(errors.responseJSON));
      }
    )
  }
}

export const showChoice = (id) =>{
  return dispatch =>{
    ChoiceApiUtil.showChoice(id).then(
      (choice) =>{
        return dispatch(receiveChoice(choice))
      },
      errors =>{
        return dispatch(receiveChoiceErrors(errors.responseJSON));
      }
    )
  }
}

export const showAllChoices = () =>{
  return dispatch =>{
    ChoiceApiUtil.showAllChoices().then(
      (choices) =>{
        return dispatch(receiveChoices(choices))
      },
      errors =>{
        return dispatch(receiveChoiceErrors(errors.responseJSON));
      }
    )
  }
}

export const destroyChoice = (id) =>{
  return dispatch =>{
    ChoiceApiUtil.destroyChoice(id).then(
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