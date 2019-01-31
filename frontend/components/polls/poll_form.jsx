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
    return e =>{
      debugger
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        [field]: e.currentTarget.value
      });
    } 
  }

  handleSubmit(e) {
    debugger
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
        <div className="white-box" >
          <div className="orange-x" >x</div>
        </div>
        <ul className="gray-box">
          <form onSubmit={this.handleSubmit} >
            <ul className="Question-Type-Box">            
              <button className="multiple-choice" value="multiple_choice" onClick={this.update('category')}> 
                <p><i class="fas fa-poll-h fa-5x" ></i></p>
                Multiple Choice 
                <button  className="multiple-choice" type="hidden" value="multiple_choice" onClick={this.update('category')} /> 
              </button>
              <button className="free-response" value="free_response" onClick={this.update('category')}> 
                <p><i class="fas fa-question fa-5x" ></i></p> 
                Free Response 
                <button className="multiple-choice" type="hidden" value="free_response" onClick={this.update('category')} /> 
              </button>
            </ul>
            <input className="poll-input-box"
                  value={this.state.body}
                  placeholder="Question"
                  onChange={this.update('body')}
                />

              <ul>
                {this.state.choiceArray}
              </ul>
             <button className="add-choice" onClick={this.addChoice}><i class="fas fa-plus"></i> &nbsp;Add option</button>
              <div className="horizontal-dashes" />
             <input type="submit" className="submit-button" value={"Create"}/>
          </form>

        </ul>  

      </div>
    );
  }
}


export default PollForm;