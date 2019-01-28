import { connect } from 'react-redux';
import React from 'react';
import User from './user';

const mapStateToProps = (state, ownProps) => {
  
  return {
    user: state.entities.users[ownProps.match.params.userId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
   
  };
};

export default connect(mapStateToProps, null)(User);