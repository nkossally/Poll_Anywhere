import { connect } from 'react-redux';
import { createGroup } from '../../actions/group_actions';

import CreateGroup from './create_group';

const mapStateToProps = (state, ownProps) => {
  let user;
  if(state.entities.users[state.session.id]){
    user = state.entities.users[state.session.id];
  }
  return {
    user: user,
  };
};

const mapDispatchToProps = dispatch => ({
  createGroup: () => dispatch(createGroup()),

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);