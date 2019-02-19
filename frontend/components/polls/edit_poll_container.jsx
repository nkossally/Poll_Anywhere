import { connect } from 'react-redux';

import { updatePoll, showPoll } from '../../actions/poll_actions';

import EditPoll from './edit_poll_form';
import { showAllChoices, showChoice, destroyChoice } from '../../actions/choice_actions';


const mapStateToProps = (state, ownProps) => {
  let poll;
  let prevChoices = [];
  if(state.entities.polls) poll = state.entities.polls[ownProps.match.params.pollId]
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
  };
};

const mapDispatchToProps = dispatch => ({
  showPoll: (id) => dispatch(showPoll(id)),
  showAllChoices: () => dispatch(showAllChoices()),
  updatePoll: (poll, id, choices) => dispatch(updatePoll(poll, id, choices)),
  destroyChoice: (id) => dispatch(destroyChoice(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(EditPoll);