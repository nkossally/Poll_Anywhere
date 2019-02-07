import { connect } from 'react-redux';
import {createPoll, showPoll, showAllPolls } from '../../actions/poll_actions';
import {createChoice} from '../../actions/choice_actions';
import {showAllGroups} from '../../actions/group_actions';

import PollForm from './poll_form';

// import {showAllUsers} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let user;
  if(state.entities.users[state.session.id]){
    user = state.entities.users[state.session.id];
  }

  return {
    user: user,
    user_id: state.session.id,
    formType: "create-poll",
  };
};

const mapDispatchToProps = dispatch => ({
  action: (poll, choices) => dispatch(createPoll(poll, choices)),
  createChoice: (choice) => dispatch(createChoice(choice)),
  showAllGroups: () => dispatch(showAllGroups()),
  // showAllUsers: () => dispatch(showAllUsers()),

});

export default connect(mapStateToProps, mapDispatchToProps)(PollForm);