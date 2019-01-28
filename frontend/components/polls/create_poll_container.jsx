import { connect } from 'react-redux';
import {create, destroy, show, showAll } from '../../actions/poll_actions';

import PollForm from './poll_form';

const mapStateToProps = (state, ownProps) => {
  return {
    polls: state.entities.polls,
    // user_id: state.session.id,
    user_id: state.entities.users[ownProps.match.params.userId],

    formType: "create-poll",
  };
};

const mapDispatchToProps = dispatch => ({
  action: (poll) => dispatch(create(poll)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PollForm);