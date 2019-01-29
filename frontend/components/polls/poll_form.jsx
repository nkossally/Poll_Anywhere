import React from "react";
import { Link } from "react-router-dom";
import ChoiceForm from "../choices/create_choice_container";
import merge from 'lodash/merge';
// import {saveId} from '../../actions/poll_actions'

class PollForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user_id: this.props.user_id, body: "", category: "",
    active: true, choice1Body: "", choice2Body: "",
    choices: [], choiceArray: []};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addChoice = this.addChoice.bind(this);
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
    this.state.choices.push({body: this.state.choice1Body});
    this.state.choices.push({body: this.state.choice2Body});
    debugger
    this.props.action(poll, this.state.choices);
  }

  addChoice(){
    debugger
 
      // this.render();
      let newArr = this.state.choiceArray;
      newArr.push(
        <input className="choice-inside-poll"  />
      )
      this.setState({
        choiceArray: newArr
      });
  }

  



  // updateChoice(num){
  //   debugger
  //   return(e)=>{
  //     this.setState({[`choice${num}`]: {body: e.currentTarget.value}});
  //   }
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
              <ul>
                {this.state.choiceArray}
              </ul>
              <input type="submit" className="submit-button" value={this.props.formType}/>

          </form>

          <button className="add-choice" onClick={this.addChoice}>Add option</button>
        </div>  

      </div>
    );
  }
}


export default PollForm;