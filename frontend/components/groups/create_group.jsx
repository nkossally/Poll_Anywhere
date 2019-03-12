import React from 'react';
import merge from 'lodash/merge';

class CreateGroup extends React.Component {
  constructor(props){
    super(props);
    this.state={title: ""};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    
    let group = { title: this.state.title};
    let pollIds = Object.values(this.props.selectedPolls).map(poll=>poll.id);
    this.props.createGroup(group, this.props.user, pollIds);
    this.props.showAllGroups();
    this.props.showAllPolls();
    this.props.closeModal();

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

  render(){
  return (
    <ul  className="create-group-box">
      <li className="group-big-text">New Group</li>
      <li className="group-small-text">What should this group be named?</li>
      <li><input className="create-group-input" onChange={this.update('title')}  /></li>
      <li className="create-group-last-row">
        <button className="cancel-create-group" onClick={this.props.closeModal}>Cancel</button>
        <button className="create-group-button" onClick={this.handleSubmit}>Create group</button>
      </li>
    </ul>
    )
  }
}

export default CreateGroup;