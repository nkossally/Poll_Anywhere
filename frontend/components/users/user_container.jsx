import { connect } from 'react-redux';
import React from 'react';
import User from './user';
import {showAllPolls, updatePoll, updatePollChangeGroup} from '../../actions/poll_actions';
import {showAllGroups} from '../../actions/group_actions';
import {showAllUsers, showUser} from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import {selectPoll, deselectPoll, showSelection} from '../../actions/ui_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  let user = state.entities.users[ownProps.match.params.userId];
  

  const groups = [];
  const polls = [];
  const pollIds = [];
  let activePollId = "";

  Object.values(state.entities.groups).filter(group => group.user_id === user.id).forEach(group =>{
    if(!groups.includes(group)){
      groups.push(group);
    }
  })

  if(groups.length > 0){
    if(state.entities.polls){
      groups.forEach(group=>{
        let sorted = group.poll_ids.sort();
        for( let i = 0; i < sorted.length; i++){
          let poll = state.entities.polls[sorted[i]];
          if(poll && poll.group_id === group.id && !pollIds.includes(poll.id)){
          // if(poll && group.poll_ids.includes(poll.id) ){


            pollIds.push(poll.id)
            polls.push(poll);
            if(poll.active) {activePollId = poll.id};
          }

        }
      })
    }
  }
  
  return {
    id: state.session.id,
    user: user,
    groups: groups,
    polls: polls,
    activePollId: activePollId,
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
    showUser: (id) => dispatch(showUser(id)),
    updatePollChangeGroup: (poll, group) => dispatch(updatePollChangeGroup(poll, group)),

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));