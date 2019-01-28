import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
    
  }



  render() {

    return (
      <h4>
        first name: {this.props.user.first_name}, last name: {this.props.user.lastt_name}, username: {this.props.user.username},
        polls: 
        <ul>
        {this.props.user.polls.map((poll)=>poll.body)}
        </ul>

        
      </h4>

    )
  }
}


export default User;