import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  let userId = state.session.id;
  return {
    errors: state.errors.session,
    formType: 'login',
    link: <Link to="/signup">sign up</Link>,
    userId: userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));