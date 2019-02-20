import React from 'react';

class CreateGroup extends React.Component {
  constructor(props){
    super(props);
    this.state={groupTitle: ""};
    this.update = this.update.bind(this);
  }

  handleSubmit(){

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
      <li>New Group</li>
      <li>What should this group be named</li>
      <li><input className="create-group-input" onChange={this.update('groupTitle')}  /></li>
      <li>
        <button className="cancel-create-group">Cancel</button>
        <button className="create-group-button" onClick={this.handleSubmit}>Create group</button>
      </li>
    </ul>
    )
  }
}

export default CreateGroup;