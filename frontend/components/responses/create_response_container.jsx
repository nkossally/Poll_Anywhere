import { connect } from 'react-redux';
import {createResponse } from '../../actions/response_actions';
import { showPoll } from '../../actions/poll_actions';
import { showAllChoices } from '../../actions/choice_actions';


import ResponseForm from './response_form';

const mapStateToProps = (state, ownProps) => {

  const poll = state.entities.polls[ownProps.match.params.pollId];
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
  showAllChoices: ()=> dispatch(showAllChoices()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseForm);