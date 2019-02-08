import { connect } from 'react-redux';
import {createResponse } from '../../actions/response_actions';
import { showPoll, showAllPolls } from '../../actions/poll_actions';
import { showAllChoices } from '../../actions/choice_actions';


import ActivePollResponseForm from './active_poll_response_form';

const mapStateToProps = (state) => {
  let poll;
  if(state.entities.polls){
    let polls = Object.values(state.entities.polls);
    debugger
    for(let i=0; i<polls.length; i++){
      if(polls[i].active){
        poll = polls[i];
        break;
      }
    }
  }
  let choices;
  if (poll){
     choices = poll.choice_ids.map(choice_id => {
      return state.entities.choices[choice_id];
    }).filter(choice=>{
      return choice
    })
  
  }

  return {
    user_id: state.session.id,
    poll: poll,
    choices: choices,
    formType: "create-response",
  };
};

const mapDispatchToProps = dispatch => ({
  action: (response) => dispatch(createResponse(response)),
  showPoll: (id)=> dispatch(showPoll(id)),
  showAllPolls: ()=>dispatch(showAllPolls()),
  showAllChoices: ()=> dispatch(showAllChoices()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ActivePollResponseForm);