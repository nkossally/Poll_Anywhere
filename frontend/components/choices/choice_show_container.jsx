import { connect } from 'react-redux';
import ChoiceShow from './choice_show';
import { showAllChoices, showChoice } from '../../actions/choice_actions';

const mapStateToProps = (state, ownProps) => {
  let choice;
  if(state.entities.choices){
    choice = state.entities.choices[ownProps.match.params.choice_id]
  }
  return({
    choice: choice,
  })
}

const mapDispatchToProps = dispatch => ({
  showAllChoices: () => dispatch(showChoices()),
  showChoice: () => dispatch(showChoice()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoiceShow);
