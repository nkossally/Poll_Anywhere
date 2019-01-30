import React from "react";
import { Link } from "react-router-dom";
import ChoiceForm from "../choices/create_choice_container";
import merge from 'lodash/merge';

class PollForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user_id: this.props.user_id, body: "", category: "",
    active: true, choice1: "", choice2: "", choiceArray: [
      <input className="choice-inside-poll" onChange={this.update('choice1')} />,
      <input className="choice-inside-poll"  onChange={this.update('choice2')} />
    ]};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addChoice = this.addChoice.bind(this);
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
    let choiceObject = this.state;
    
    delete choiceObject["user_id"];
    delete choiceObject["body"];
    delete choiceObject["category"];
    delete choiceObject["active"];
    delete choiceObject["choiceArray"];
    let choices = Object.values(choiceObject);    
    this.props.action(poll, choices);
  }

  addChoice(e){
    
      e.preventDefault();
      let newArr = this.state.choiceArray;
      const identifier = newArr.length;
      newArr.push(
        <input className="choice-inside-poll" onChange={this.update([`choice${identifier}`])}  />
      )
      this.setState({
        choiceArray: newArr, [`choice${identifier}`]: ""
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
        <ul className="gray-box">
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

              <ul>
                {this.state.choiceArray}
              </ul>
              <button className="add-choice" onClick={this.addChoice}>Add option</button>

              <input type="submit" className="submit-button" value={this.props.formType}/>
          </form>

        </ul>  

      </div>
    );
  }
}


export default PollForm;