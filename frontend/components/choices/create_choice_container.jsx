import { connect } from 'react-redux';
import {createChoice } from '../../actions/choice_actions';
import {showPoll } from '../../actions/poll_actions';

import ChoiceForm from './choice_form';

const mapStateToProps = (state) => {
  
  return {
  
    body: "",
    formType: "create-choice",
  };
};

const mapDispatchToProps = dispatch => { 
  
  return({
  action: (choice) => dispatch(createChoice(choice)),
  // fetchPost: (id) => dispatch(show(id))
  })

};

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceForm);