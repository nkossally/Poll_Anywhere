import { connect } from 'react-redux';
import { createGroup } from '../../actions/group_actions';
import { closeModal } from '../../actions/modal_actions';

import CreateGroup from './create_group';

const mapStateToProps = (state, ownProps) => {
  let user;
  if(state.entities.users[state.session.id]){
    user = state.entities.users[state.session.id];
  }
  return {
    user: user,
    selectedPolls: state.ui.uiReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  createGroup: (group, user, polls) => dispatch(createGroup(group, user, polls)),
  closeModal: () => dispatch(closeModal()),

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);