import React from "react";
import { Link } from "react-router-dom";
import ChoiceForm from "../choices/create_choice_container";
import merge from 'lodash/merge';

class PollForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user_id: this.props.user_id, body: "", category: "",
    active: true, choice1: "", choice2: "", choiceArray: [
      <input key="0" className="choice-inside-poll" onChange={this.update('choice1')} />,
      <input key="1" className="choice-inside-poll"  onChange={this.update('choice2')} />
    ]};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addChoice = this.addChoice.bind(this);
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
      const identifier = newArr.length;
      newArr.push(
        <input key={newArr.length} className="choice-inside-poll" onChange={this.update([`choice${identifier}`])}  />
      )
      this.setState({
        choiceArray: newArr, [`choice${identifier}`]: ""
      });
  }

  render() {
    
    return (
      <div >
        <div className="white-box" >
        <Link to={`/users/${this.props.user_id}`}> <div className="orange-x" >x</div></Link>
        </div>
        <ul className="gray-box">
          <form onSubmit={this.handleSubmit} >
            <ul className="Question-Type-Box">            
              <button className="multiple-choice" value="multiple_choice" onClick={this.update('category')}> 
                <p><i className="fas fa-poll-h fa-5x" ></i></p>
                Multiple Choice 
              </button>
              <button className="free-response" value="free_response" onClick={this.update('category')}> 
                <p><i className="fas fa-question fa-5x" ></i></p> 
                Free Response 
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
             <button className="add-choice" onClick={this.addChoice}><i className="fas fa-plus"></i> &nbsp;Add option</button>
              <div className="horizontal-dashes" />
             <input type="submit" className="submit-button" value={"Create"}/>
          </form>

        </ul>  

      </div>
    );
  }
}


export default PollForm;