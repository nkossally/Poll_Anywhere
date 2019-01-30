import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount(){
    this.props.showAllPolls();
  }


  render() {

    return (
      <h4>
        <p>first name: {this.props.user.first_name}</p> 
        <p>last name: {this.props.user.last_name}</p>
        <p>username: {this.props.user.username}</p>
        <p>polls:</p> 
        <ul>
        {this.props.user.polls.map((poll)=>poll.body)}
        </ul>

        
      </h4>

    )
  }
}


export default User;