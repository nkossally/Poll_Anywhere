import { connect } from 'react-redux';
import {create, destroy, show, showAll } from '../../actions/poll_actions';

import PollForm from './poll_form';

const mapStateToProps = (state) => {
  return {
    polls: state.entities.polls,
    user_id: state.session.id,
    formType: "create-poll",
  };
};

const mapDispatchToProps = dispatch => ({
  action: (poll) => dispatch(create(poll)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PollForm);