import { connect } from 'react-redux';
import { showPoll, destroyPoll } from '../../actions/poll_actions';

import PollShow from './poll_show';
import {showAllChoices, showChoice} from '../../actions/choice_actions';
import {showAllResponses} from '../../actions/response_actions';


const mapStateToProps = (state, ownProps) => {
  let choices;
  if (state.entities.choices) choices = state.entities.choices;
  return {
    poll: state.entities.polls[ownProps.match.params.pollId],
    choices: choices,
  };
};

const mapDispatchToProps = dispatch => ({
  showPoll: (id) => dispatch(showPoll(id)),
  showAllChoices: () => dispatch(showAllChoices()),
  showChoice: (id) => dispatch(showChoice(id)),
  destroyPoll: (id) => dispatch(destroyPoll(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PollShow);