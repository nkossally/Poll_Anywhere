import { connect } from 'react-redux';
import {create, destroy, show, showAll } from '../../actions/poll_actions';
import {createChoice} from '../../actions/choice_actions';

import PollForm from './poll_form';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    polls: state.entities.polls,
    // user_id: state.session.id,
    // user_id: state.entities.users[ownProps.match.params.userId],
    user_id: state.session.id,

    formType: "create-poll",
  };
};

const mapDispatchToProps = dispatch => ({
  action: (poll, choices) => dispatch(create(poll, choices)),
  createChoice: (choice) => dispatch(createChoice(choice)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PollForm);