import { connect } from 'react-redux';
import { showPoll, destroyPoll } from '../../actions/poll_actions';

import PollShow from './poll_show';
import {showAllChoices, showChoice} from '../../actions/choice_actions';


const mapStateToProps = (state, ownProps) => {
  const poll = state.entities.polls[ownProps.match.params.pollId];
  let choices;
  // if (state.entities.choices) choices = state.entities.choices;
  if (state.entities.choices) choices = Object.values(state.entities.choices).filter(choice => choice.poll_id === poll.id);

  return {
    poll: poll,
    choices: choices,
  };
};

const mapDispatchToProps = dispatch => ({
  showPoll: (id) => dispatch(showPoll(id)),
  showAllChoices: () => dispatch(showAllChoices()),
  destroyPoll: (id) => dispatch(destroyPoll(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(PollShow);