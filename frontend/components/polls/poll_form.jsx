import React from "react";
import { Link } from "react-router-dom";
import ChoiceForm from "../choices/create_choice_container";

class PollForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_id: this.props.user_id, body: "", category: "",
    active: true, choice1: {}, choice2: {}
     };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateChoice = this.updateChoice.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const poll = {user_id: this.state.user_id, body: this.state.body,
      category: this.state.category, active: this.state.active }
    // if (this.choices.length >= 2){
    this.props.action(poll);
  }

  submitChoices(poll){
  }

  updateChoice(num){
    return(e)=>{
      this.setState({[`choice${num}`]: {body: e.target.value}});

    }
  }

 

  choiceForms(){
    let choiceOne = <ChoiceForm updateChoice={this.updateChoice(1)}/>;
    let choiceTwo = <ChoiceForm  updateChoice={this.updateChoice(2)}/>;
    return(
      <div>
        {choiceOne}
        {choiceTwo}
      </div>
    );
  }

  render() {
    debugger
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

            <input type="submit" className="submit-button" value={this.props.formType}/>

        </form>
      </div>  
      {this.choiceForms()}

      </div>
    );
  }
}


export default PollForm;