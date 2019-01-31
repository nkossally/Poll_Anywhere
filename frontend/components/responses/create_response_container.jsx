import { connect } from 'react-redux';
import {createResponse } from '../../actions/response_actions';
import { showPoll } from '../../actions/poll_actions';
import { showAllChoices } from '../../actions/choice_actions';


import ResponseForm from './response_form';

const mapStateToProps = (state, ownProps) => {
  // let poll;
  // if(state.entities.polls[ownProps.match.params.pollId]){
  //   poll = state.entities.polls[ownProps.match.params.pollId];
  // }

  return {
    user_id: state.session.id,
    poll: state.entities.polls[ownProps.match.params.pollId],
    formType: "create-response",
  };
};

const mapDispatchToProps = dispatch => ({
  action: (response) => dispatch(createResponse(response)),
  showPoll: (id)=> dispatch(showPoll(id)),
  showAllChoices: ()=> dispatch(showAllChoices()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseForm);