import { connect } from 'react-redux';
import { showPoll, destroyPoll, updatePoll} from '../../actions/poll_actions';

import PollShow from './poll_show';
import {showAllChoices, showChoice} from '../../actions/choice_actions';
import {showAllGroups} from '../../actions/group_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const poll = state.entities.polls[ownProps.match.params.pollId];
  let choices;
  if (state.entities.choices) choices = Object.values(state.entities.choices).filter(choice => choice.poll_id === poll.id);
  const user = state.entities.users[state.session.id];

  const groups = [];
  const polls = [];
  if(user.group_ids){
    for(let j=0; j<user.group_ids.length; j++){
      const group = state.entities.groups[user.group_ids[j]];
      if(group){
        groups.push(group);
      }
    }
  }
  if(groups.length > 0){
    if(state.entities.polls){
      groups.forEach(group=>{  
        group.poll_ids.forEach(id=>
          polls.push(state.entities.polls[id]));
      })
    }
  }
  return {
    poll: poll,
    choices: choices,
    userId: state.session.id,
    polls: polls,
  };
};

const mapDispatchToProps = dispatch => ({
  showPoll: (id) => dispatch(showPoll(id)),
  showAllChoices: () => dispatch(showAllChoices()),
  destroyPoll: (id) => dispatch(destroyPoll(id)),
  updatePoll: (poll, id) => dispatch(updatePoll(poll, id)),
  showAllGroups: () => dispatch(showAllGroups()),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PollShow));