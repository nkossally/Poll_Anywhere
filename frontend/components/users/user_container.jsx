import { connect } from 'react-redux';
import React from 'react';
import User from './user';
import {showAll} from '../../actions/poll_actions'

const mapStateToProps = (state, ownProps) => {
  
  return {
    user: state.entities.users[ownProps.match.params.userId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showAllPolls: ()=>dispatch(showAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);