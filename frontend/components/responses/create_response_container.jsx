import { connect } from 'react-redux';
import {create } from '../../actions/response_actions';
import { show } from '../../actions/poll_actions';

import ResponseForm from './response_form';

const mapStateToProps = (state, ownProps) => {
  return {
    poll_id: ownProps.match.params.pollId,
    formType: "create-response",
  };
};

const mapDispatchToProps = dispatch => ({
  action: (response) => dispatch(create(response)),
  show: (id)=> dispatch(show(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseForm);