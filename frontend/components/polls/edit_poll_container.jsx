import { connect } from 'react-redux';

import { updatePoll, showPoll } from '../../actions/poll_actions';

import EditPoll from './edit_poll_form';
import {showAllChoices, showChoice} from '../../actions/choice_actions';


const mapStateToProps = (state, ownProps) => {
  debugger
  let poll;
  if(state.entities.polls) poll = state.entities.polls[ownProps.match.params.pollId]
  let prevChoices;
  if(poll){
    prevChoices = poll.choices.map(choice=> choice.body);
  }

  return {
    poll: poll,
    body: poll ? poll.body : "",
    prevChoices: prevChoices,
    choice1: (poll && prevChoices.length > 0) ? prevChoices[0] : "",
    choice2: (poll && prevChoices.length > 1) ? prevChoices[1] : "",
    choice3: (poll && prevChoices.length > 2) ? prevChoices[2] : "",
    choice4: (poll && prevChoices.length > 3) ? prevChoices[3] : "",
    choice5: (poll && prevChoices.length > 4) ? prevChoices[4] : "",
  };
};

const mapDispatchToProps = dispatch => ({
  showPoll: (id) => dispatch(showPoll(id)),
  showChoice: (id) => dispatch(showChoice(id)),
  showAllChoices: () => dispatch(showAllChoices()),
  updatePoll: (poll, choices) => dispatch(updatePoll(poll, choices)),

});

export default connect(mapStateToProps, mapDispatchToProps)(EditPoll);