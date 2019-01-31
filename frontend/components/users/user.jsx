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
    // debugger
    // if (!this.props.polls) return null

    return (
      <div className="user-container">
        <div className="user-create-button">
          Create
        </div>
        <ul className="user-polls">
          <li className="user-polls-header">My Polls</li>
          {this.props.polls.map((poll)=><li className="user-single-poll"><Link to={`/polls/${poll.id}`}><div className="poll-text">{poll.body}</div></Link></li>)}
        </ul>
      </div>
  
    )
  }
}


export default User;