import { connect } from 'react-redux';
import {create, destroy, show, showAll } from '../../actions/choice_actions';

import ChoiceForm from './choice_form';

const mapStateToProps = (state) => {
  return {
    choices: state.entities.choices,
    poll_id: state.session.poll_id,
    formType: "create-choice",
  };
};

const mapDispatchToProps = dispatch => ({
  action: (choice) => dispatch(create(choice)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceForm);