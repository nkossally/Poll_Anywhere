import { connect } from 'react-redux';
import React from 'react';
import User from './user';
import {showAllPolls, updatePoll} from '../../actions/poll_actions';
import {showAllGroups} from '../../actions/group_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];

  const groups = [];
  for(let j=0; j<user.group_ids.length; j++){
    const group = state.entities.groups[user.group_ids[j]];
    if(group){
      groups.push(group);
    }
  }

  const polls = [];
  if(user && state.entities.polls){
    for(let i=0; i<user.poll_ids.length; i++){
      const poll = state.entities.polls[user.poll_ids[i]];
      if(poll){
        polls.push(poll);
      }
    }
  }

  return {
    user: user,
    polls: polls,
    groups: groups,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showAllPolls: ()=>dispatch(showAllPolls()),
    showAllGroups: ()=>dispatch(showAllGroups()),
    updatePoll: (poll, id)=>dispatch(updatePoll(poll, id)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);