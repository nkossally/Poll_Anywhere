import { connect } from 'react-redux';

import { updatePoll, showPoll } from '../../actions/poll_actions';

import EditPoll from './edit_poll_form';
import {showAllChoices, showChoice} from '../../actions/choice_actions';


const mapStateToProps = (state, ownProps) => {
  let poll;
  if(state.entities.polls) poll = state.entities.polls[ownProps.match.params.pollId]
  let prevChoices=[];
  if (poll){
    for(let i=0; i<poll.choice_ids.length; i++){
      const choice = state.entities.choices[poll.choice_ids[i]];
      if(choice){
        prevChoices.push(choice);
      }
    }
  }

  return {
    poll: poll,
    body: poll ? poll.body : "",
    prevChoices: prevChoices,
    // choice1: (poll && prevChoices.length > 0) ? prevChoices[0] : "",
    // choice2: (poll && prevChoices.length > 1) ? prevChoices[1] : "",

  };
};

const mapDispatchToProps = dispatch => ({
  showPoll: (id) => dispatch(showPoll(id)),
  showAllChoices: () => dispatch(showAllChoices()),
  updatePoll: (poll, id, choices) => dispatch(updatePoll(poll, id, choices)),

});

export default connect(mapStateToProps, mapDispatchToProps)(EditPoll);