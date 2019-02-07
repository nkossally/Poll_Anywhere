import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'signup',
    link: <Link to="/login">log in</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user, group) => dispatch(signup(user, group)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);