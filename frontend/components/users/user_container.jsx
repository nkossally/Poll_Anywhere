import { connect } from 'react-redux';
import React from 'react';
import User from './user';
import {showAllPolls} from '../../actions/poll_actions'

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
  return {
    user: user,
    polls: userPolls,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showAllPolls: ()=>dispatch(showAllPolls()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);