import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount(){
    this.props.showAllPolls();
    this.props.showAllGroups();
  }


  render() {
    debugger

    const groupsAndPolls = this.props.user.groups.map(group=>{
      return(
        <li>{group.title}</li>
        
      )
    })

    return (
      <div className="user-container">
        <ul>{groupsAndPolls}</ul>
        <Link to="/createpoll">
          <div className="user-create-button">
            Create
          </div>
        </Link>
        <ul className="user-polls">
          <li className="user-polls-header">
            <button>Group</button>
            <button>Ungroup</button>
          </li>

          {this.props.polls.map((poll, idx)=>
            <ul key={idx} className="user-single-poll">
              <div className="check-container">
                <input type="checkbox" checked="checked" />
                <span className="checkmark"></span>
              </div>


              <Link to={`/polls/${poll.id}`}><div className="poll-text">{poll.body}</div></Link>
            </ul>)}
        </ul>
  
        <ul>{this.props.user.groups.map(group=>group.title)}</ul>
      </div>
  
    )
  }
}


export default User;