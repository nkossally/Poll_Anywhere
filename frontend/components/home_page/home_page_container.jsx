import { connect } from 'react-redux';

import HomePage from './home_page.jsx';

const mapStateToProps = (state, ownProps) => {
  let user;

  if(state.entities.users[state.session.id]){
    user = state.entities.users[state.session.id];
  }

  return {
    user: user,
  };
};

export default connect(mapStateToProps, {})(HomePage);