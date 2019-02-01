import { connect } from 'react-redux';
import {createPoll, showPoll, showAllPolls } from '../../actions/poll_actions';
import {createChoice} from '../../actions/choice_actions';

import PollForm from './poll_form';

const mapStateToProps = (state, ownProps) => {
  return {

    user_id: state.session.id,

    formType: "create-poll",
  };
};

const mapDispatchToProps = dispatch => ({
  action: (poll, choices) => dispatch(createPoll(poll, choices)),
  createChoice: (choice) => dispatch(createChoice(choice)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PollForm);