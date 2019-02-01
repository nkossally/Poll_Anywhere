import { connect } from 'react-redux';
import { showPoll } from '../../actions/poll_actions';

import PollShow from './poll_show';
import {showAllChoices, showChoice} from '../../actions/choice_actions';
import {showAllResponses} from '../../actions/response_actions';


const mapStateToProps = (state, ownProps) => {
  let responses;
  let choices;
  if (state.entities.choices) choices = state.entities.choices;
  if (state.entities.responses) responses = state.entities.responses;
  return {
    poll: state.entities.polls[ownProps.match.params.pollId],
    choices: choices,
    responses: responses
  };
};

const mapDispatchToProps = dispatch => ({
  showPoll: (id) => dispatch(showPoll(id)),
  showAllChoices: () => dispatch(showAllChoices()),
  showAllResponses: () => dispatch(showAllResponses()),
  showChoice: (id) => dispatch(showChoice(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(PollShow);