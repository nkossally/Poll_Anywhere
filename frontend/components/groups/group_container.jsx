import { connect } from "react-redux";
import { createGroup } from "../../actions/group_actions";
import { closeModal } from "../../actions/modal_actions";

import { showAllPolls } from "../../actions/poll_actions";
import { showAllGroups } from "../../actions/group_actions";

import CreateGroup from "./create_group";

const mapStateToProps = state => {
  let user;
  if (state.entities.users[state.session.id]) {
    user = state.entities.users[state.session.id];
  }
  return {
    user: user,
    selectedPolls: state.ui.uiReducer
  };
};

const mapDispatchToProps = dispatch => ({
  createGroup: (group, user, polls) =>
    dispatch(createGroup(group, user, polls)),
  closeModal: () => dispatch(closeModal()),
  showAllGroups: () => dispatch(showAllGroups()),
  showAllPolls: () => dispatch(showAllPolls())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGroup);
