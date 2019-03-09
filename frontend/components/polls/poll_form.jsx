import React from "react";
import { Link } from "react-router-dom";
import ChoiceForm from "../choices/create_choice_container";
import merge from 'lodash/merge';
import BlueNavBar from '../nav_bar/blue_nav_bar_container';

class PollForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { group_id: "", user_id: this.props.user_id, body: "", category: "",
    choice1: "", choice2: "", choiceArray: [
      <input key="1" className="choice-inside-poll"  placeholder="Choice 1" onChange={this.update('choice1')} />,
      <input key="2" className="choice-inside-poll" placeholder="Choice 2" onChange={this.update('choice2')} />
    ]};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addChoice = this.addChoice.bind(this);
  }

  componentDidMount(){
    this.props.showAllGroups();
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
    let group_id;
    if(!this.state.group_id){
      group_id = this.props.defaultGroupId;
    } else {
      group_id = this.state.group_id;
    }
    

    
    e.preventDefault();
    const poll = {group_id: group_id, user_id: this.state.user_id, body: this.state.body,
      category: this.state.category, active: false }
    let choiceObject = this.state;
    
    delete choiceObject["user_id"];
    delete choiceObject["body"];
    delete choiceObject["category"];
    delete choiceObject["choiceArray"];
    delete choiceObject["group_id"];
    let choices = Object.values(choiceObject);    
    this.props.action(poll, choices);
    this.props.showAllGroups;
    this.props.showAllPolls;
    this.props.history.push(`/users/${this.props.user_id}`);

  }

  addChoice(e){
    
      e.preventDefault();
      let newArr = this.state.choiceArray;
      const identifier = newArr.length+1;
      newArr.push(
        <input key={identifier} className="choice-inside-poll" placeholder={`Choice ${identifier}`} onChange={this.update([`choice${identifier}`])}  />
      )
      this.setState({
        choiceArray: newArr, [`choice${identifier}`]: ""
      });
  }

 

  render() {

    let groupDropdown;
    if(this.props.user){
      groupDropdown = (
          <div >
            <select className="group-dropdown" value={this.state.group_id} 
                    onChange={this.update('group_id')}>
              {this.props.groups.map((group) => <option key={group.id} value={group.id}>{group.title}</option>)}
            </select>
          </div>
      )
      }
        
    
   return (
      <div >
        <BlueNavBar />
        <div className="white-box" >
          <Link to={`/users/${this.props.user_id}`}> <div className="orange-x" >x</div></Link>
        </div>
        <ul className="gray-box">
          <form onSubmit={this.handleSubmit} >
            <ul className="Question-Type-Box">            
              <button className="multiple-choice" value="multiple_choice" id={this.state.category === "multiple_choice" ? "selected" : ""} onClick={this.update('category')}> 
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
              <div className="group-and-create-row">
                {groupDropdown}
                <input type="submit" className="submit-button" value={"Create"}/>
              </div>


          </form>

        </ul> 

      </div>
    );
  }

}


export default PollForm;