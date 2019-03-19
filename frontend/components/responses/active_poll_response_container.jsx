import { connect } from 'react-redux';
import {createResponse } from '../../actions/response_actions';
import { showPoll, showAllPolls } from '../../actions/poll_actions';
import { showAllChoices } from '../../actions/choice_actions';
import {showAllResponses, destroyResponse} from '../../actions/response_actions';
import { showAllGroups } from '../../actions/group_actions';
import { showAllUsers } from '../../actions/user_actions';




import ActivePollResponseForm from './active_poll_response_form';


const mapStateToProps = (state, ownProps) => {
  let poll;
  let responseProp;
  let validGroupIds = [];
  if(state.entities.groups){
    let groups = Object.values(state.entities.groups);
    for(let i=0; i<groups.length; i++){
      if (groups[i].user_id === parseInt(ownProps.match.params.userId)){
        validGroupIds.push( groups[i].id );

      }
    }
  }
  if(state.entities.polls){
    let polls = Object.values(state.entities.polls);
    for(let i=0; i<polls.length; i++){
      if(polls[i].active && validGroupIds.includes(polls[i].group_id) ){

        poll = polls[i];
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
  let user = state.entities.users[state.session.id];
  let choice_id;
    Object.values(state.entities.responses).forEach(response=>{
      if(response.user_id === user.id && poll && poll.choice_ids.includes(response.choice_id)){
        choice_id = response.choice_id;
        responseProp = response;
      }
    })
  return {
    user_id: user.id,
    poll: poll,
    choices: choices,
    choice_id: choice_id,
    response: responseProp,
  };
};

const mapDispatchToProps = dispatch => ({
  action: (response) => dispatch(createResponse(response)),
  showPoll: (id)=> dispatch(showPoll(id)),
  showAllPolls: ()=>dispatch(showAllPolls()),
  showAllChoices: ()=> dispatch(showAllChoices()),
  showAllResponses: ()=> dispatch(showAllResponses()),
  destroyResponse: (id)=> dispatch(destroyResponse(id)),
  showAllGroups: () => dispatch(showAllGroups()),
  showAllUsers: () => dispatch(showAllUsers()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ActivePollResponseForm);