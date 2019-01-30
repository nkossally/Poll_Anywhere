import { connect } from 'react-redux';
import {createPoll, showPoll, showAllPolls } from '../../actions/poll_actions';

import PollsShow from './polls_show';

const mapStateToProps = (state) => {
  
  return {
    polls: Object.keys(state.entities.polls).map((id)=>state.entities.polls[id])  
  };
};

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(showAllPolls()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PollsShow);