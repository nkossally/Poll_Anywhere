import { connect } from 'react-redux';
import {createPoll, showPoll, showAllPolls } from '../../actions/poll_actions';
import {createChoice} from '../../actions/choice_actions';
import {showAllGroups} from '../../actions/group_actions';
import { withRouter } from 'react-router';


import PollForm from './poll_form';


const mapStateToProps = (state, ownProps) => {
  let user;
  
  if(state.entities.users[state.session.id]){
    user = state.entities.users[state.session.id];
  }
  const userGroups = [];
  for(let j=0; j<user.group_ids.length; j++){
    const group = state.entities.groups[user.group_ids[j]];
    if(group){
      userGroups.push(group);
    }
  }
  let defaultGroupId;
  if(userGroups.length>0) defaultGroupId = userGroups[0].id;
  return {
    user: user,
    user_id: state.session.id,
    groups: userGroups,
    defaultGroupId: defaultGroupId,
    formType: "create-poll",
  };
};

const mapDispatchToProps = dispatch => ({
  action: (poll, choices) => dispatch(createPoll(poll, choices)),
  createChoice: (choice) => dispatch(createChoice(choice)),
  showAllGroups: () => dispatch(showAllGroups()),
  showAllPolls: () => dispatch(showAllPolls()),


});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PollForm));