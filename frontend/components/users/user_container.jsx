import { connect } from 'react-redux';
import React from 'react';
import User from './user';
import {showAllPolls} from '../../actions/poll_actions';
import {showAllGroups} from '../../actions/group_actions';


const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];
  // const userPolls = user.poll_ids.map((id)=>{
  //   return state.entities.polls[id];
  // })
  const userPolls = [];
  for(let i=0; i<user.poll_ids.length; i++){
    const poll = state.entities.polls[user.poll_ids[i]];
    if(poll){
      userPolls.push(poll);
    }
  }
  const userGroups = [];
  for(let j=0; j<user.group_ids.length; j++){
    const group = state.entities.groups[user.group_ids[j]];
    if(group){
      userGroups.push(group);
    }
  }

  return {
    user: user,
    polls: userPolls,
    groups: userGroups,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showAllPolls: ()=>dispatch(showAllPolls()),
    showAllGroups: ()=>dispatch(showAllGroups())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);