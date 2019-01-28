import { connect } from 'react-redux';
import {create, destroy, show, showAll } from '../../actions/response_actions';

import ResponseForm from './response_form';

const mapStateToProps = (state) => {
  return {
    poll_id: state.entities.polls,
    user_id: state.session.id,
    formType: "create-response",
  };
};

const mapDispatchToProps = dispatch => ({
  action: (poll) => dispatch(create(poll)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseForm);