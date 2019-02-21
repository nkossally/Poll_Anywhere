import { connect } from 'react-redux';
import React from 'react';
import User from './user';
import {showAllPolls, updatePoll} from '../../actions/poll_actions';
import {showAllGroups} from '../../actions/group_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import {selectPoll, deselectPoll, showSelection} from '../../actions/ui_actions';
import { withRouter } from 'react-router';




const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];

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
    user: user,
    groups: groups,
    polls: polls,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showAllPolls: ()=>dispatch(showAllPolls()),
    showAllGroups: ()=>dispatch(showAllGroups()),
    updatePoll: (poll, id, choices, group)=>dispatch(updatePoll(poll, id, choices, group)),
    closeModal: () => dispatch(closeModal()),
    openModal: (user_id, selectedPolls ) => dispatch(openModal(user_id, selectedPolls)),
    selectPoll: (poll) => dispatch(selectPoll(poll)),
    deselectPoll: (poll) => dispatch(deselectPoll(poll)),

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));