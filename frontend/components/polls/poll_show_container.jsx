import { connect } from 'react-redux';
import {create, destroy, show, showAll } from '../../actions/poll_actions';

import PollShow from './poll_show';

const mapStateToProps = (state, ownProps) => {
  return {
    poll: state.entities.polls[ownProps.match.params.pollId],
    id: ownProps.match.params.pollId
    
  };
};

const mapDispatchToProps = dispatch => ({
  action: (id) => dispatch(show(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PollShow);