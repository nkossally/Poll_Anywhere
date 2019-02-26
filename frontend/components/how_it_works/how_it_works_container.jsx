import { connect } from 'react-redux';

import HowItWorks from './how_it_works';

const mapStateToProps = (state, ownProps) => {
  let user;

  if(state.entities.users[state.session.id]){
    user = state.entities.users[state.session.id];
  }

  return {
    user: user,
  };
};

export default connect(mapStateToProps, {})(HowItWorks);