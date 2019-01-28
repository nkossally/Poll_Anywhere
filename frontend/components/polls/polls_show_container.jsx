import { connect } from 'react-redux';
import {create, destroy, show, showAll } from '../../actions/poll_actions';

import PollsShow from './polls_show';

const mapStateToProps = (state) => {
  debugger
  return {
    
    polls: Object.keys(state.entities.polls).map((id)=>state.entities.polls[id])
    
  };
};

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(showAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PollsShow);