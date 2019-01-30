import { connect } from 'react-redux';
import {createResponse } from '../../actions/response_actions';
import { showPoll } from '../../actions/poll_actions';

import ResponseForm from './response_form';

const mapStateToProps = (state, ownProps) => {
  return {
    poll_id: ownProps.match.params.pollId,
    formType: "create-response",
  };
};

const mapDispatchToProps = dispatch => ({
  action: (response) => dispatch(createResponse(response)),
  showPoll: (id)=> dispatch(showPoll(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseForm);