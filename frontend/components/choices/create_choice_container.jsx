import { connect } from 'react-redux';
import {create } from '../../actions/choice_actions';
import {show } from '../../actions/poll_actions';

import ChoiceForm from './choice_form';

const mapStateToProps = (state) => {
  debugger
  return {
    
    // poll_id: state.entities.polls[ownProps.match.params.pollId] || 4,
    poll_id: state.session.poll_id || 5,
    body: "",
    formType: "create-choice",
  };
};

const mapDispatchToProps = dispatch => { 
  debugger
  return({
  action: (choice) => dispatch(createChoice(choice)),
  // fetchPost: (id) => dispatch(show(id))
  })

};

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceForm);