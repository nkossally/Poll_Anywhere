import { connect } from "react-redux";
import { createPoll, showPoll, showAllPolls } from "../../actions/poll_actions";
import { createChoice } from "../../actions/choice_actions";
import { showAllGroups } from "../../actions/group_actions";
import { withRouter } from "react-router";

import PollForm from "./poll_form";

const mapStateToProps = (state, ownProps) => {
  let user;

  if (state.entities.users[state.session.id]) {
    user = state.entities.users[state.session.id];
  }
  const groups = [];
  Object.values(state.entities.groups).forEach(group => {
    if (group.user_id === user.id) {
      groups.push(group);
    }
  });
  let defaultGroupId;
  if (groups.length > 0) defaultGroupId = groups[0].id;
  return {
    user: user,
    user_id: state.session.id,
    groups: groups,
    defaultGroupId: defaultGroupId,
    formType: "create-poll"
  };
};

const mapDispatchToProps = dispatch => ({
  action: (poll, choices) => dispatch(createPoll(poll, choices)),
  createChoice: choice => dispatch(createChoice(choice)),
  showAllGroups: () => dispatch(showAllGroups()),
  showAllPolls: () => dispatch(showAllPolls())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PollForm)
);
