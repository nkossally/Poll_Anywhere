import React from "react";
import { Link } from "react-router-dom";
import ChoiceForm from "../choices/create_choice_container";
import merge from 'lodash/merge';
// import {saveId} from '../../actions/poll_actions'

class PollForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_id: this.props.user_id, body: "", category: "",
    active: true, choice1: {}, choice2: {}, choice1Body: "", choice2Body: ""
     };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateChoice = this.updateChoice.bind(this);
    this.submitChoices = this.submitChoices.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const poll = {user_id: this.state.user_id, body: this.state.body,
      category: this.state.category, active: this.state.active }
    
    let dispatchReturn = this.props.action(poll)
    debugger
    this.submitChoices();
  }

  submitChoices(){
    debugger
    // const choice1 = merge({}, this.state.choice1, {poll_id: 5});
    // const choice2 = merge({}, this.state.choice2, {poll_id: 5});

    const choice1 = merge({}, {body: this.state.choice1Body, poll_id: 5});
    const choice2 = merge({}, {body: this.state.choice2Body, poll_id: 5});
    debugger

    this.props.createChoice(choice1);
    this.props.createChoice(choice2);
  }

  // updateChoice(num){
  //   debugger
  //   return(e)=>{
  //     this.setState({[`choice${num}`]: {body: e.currentTarget.value}});
  //   }
  // }

 

  // choiceForms(){
  //   let choiceOne = <ChoiceForm updateChoice={this.updateChoice(1)}/>;
  //   let choiceTwo = <ChoiceForm  updateChoice={this.updateChoice(2)}/>;
  //   return(
  //     <div>
  //       {choiceOne}
  //       {choiceTwo}
  //     </div>
  //   );
  // }


  render() {
    
    return (
      <div >
        <div className="white-box" />
        <div className="gray-box">
          <form onSubmit={this.handleSubmit} >
            <label className="poll-input-label">Category: </label><br></br>
            
              <label> Multiple Choice
              <input className="poll-input-box" name="category"  type="radio" value="multiple_choice" onChange={this.update('category')} /> 
              </label>
              <label> Free Response

              <input className="poll-input-box" name="category" type="radio" value="free_response" onChange={this.update('category')} /> 
              </label>
              <br/>
              <label className="poll-input-label">Question: </label>
                <textarea className="poll-input-box"
                  value={this.state.body}
                  onChange={this.update('body')}
                />
                      <input className="choice-inside-poll" onChange={this.update('choice1Body')} />
              <input className="choice-inside-poll"  onChange={this.update('choice2Body')} />
              <input type="submit" className="submit-button" value={this.props.formType}/>

          </form>
        </div>  
        {/* {choiceForms} */}

      </div>
    );
  }
}


export default PollForm;