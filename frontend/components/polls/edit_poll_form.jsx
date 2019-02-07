import React from "react";
import { Link } from "react-router-dom";
import ChoiceForm from "../choices/create_choice_container";
import merge from 'lodash/merge';
import EditChoiceShow from "../choices/edit_choice_show";

class EditPoll extends React.Component {
  constructor(props) {
    debugger
    super(props);
 
    this.state = { body: this.props.body, choice1: "" , choice2 : "", choice3: "", choice4: "", choice5: ""};
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addOldChoices = this.addOldChoices.bind(this);
    
  }

  addOldChoices(){

  }

  componentDidMount(){
    this.props.showPoll(this.props.match.params.pollId);
  }

  update(field) {
    return e =>{
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        [field]: e.currentTarget.value
      });
    } 
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
      const identifier = newArr.length+1;
      newArr.push(
        <input key={identifier} className="choice-inside-poll" onChange={this.update([`choice${identifier}`])}  />
      )
      this.setState({
        choiceArray: newArr, [`choice${identifier}`]: ""
      });
  }

  render() {
    if (!this.props.poll || !this.props.poll.choice_ids ){
      return null;
    }
    const poll = this.props.poll;
    const choices = [];
    for(let i=0; i<poll.choices.length; i++){
      choices.push(
        <input key={i+1} className="choice-inside-poll" value={poll.choices[i].body} onChange={this.update([`choice${i+1}`])}  />
      );
    }

    debugger
    return (
      <div className="gray-box">
        {this.props.poll.body}
        <ul>{choices}</ul>
      </div>

    );
  }
}


export default EditPoll;