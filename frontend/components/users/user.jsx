import React from "react";
import { Link, Redirect } from "react-router-dom";
import BlueNavBar from "../nav_bar/blue_nav_bar_container";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state={active_poll_id: "", selected_polls: [], showModal: false};
    this.activate = this.activate.bind(this);
    this.selectPoll = this.selectPoll.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount(){
    this.props.showAllPolls();
    this.props.showAllGroups();
  }

  handleModal(){
    return( 
      this.props.openModal(this.props.user.id, this.state.selected_polls)
    )
  }

  selectPoll(poll){
    // return()=>{
    //   let that = this;
    //   let newSelection = this.state.selected_polls;
    //   if(newSelection.includes(id)){
    //     newSelection.splice(newSelection.indexOf(id), 1);
    //   } else {
    //     newSelection.push(id);
    //   }
    //   this.setState({selected_polls: newSelection});
    // }

    return()=>{
      this.props.selectPoll(poll);
    }
  }

  activate(id){
    return()=>{
      let inactivePoll = {active: false};
      let activePoll = {active: true};
      for(let i=0; i<this.props.polls.length; i++){
        const poll = this.props.polls[i];

        if(poll.id === id){
          this.props.updatePoll(activePoll, poll.id)
        } else {
          this.props.updatePoll(inactivePoll, poll.id)
        }
      }
      this.setState({active_poll_id: id})
    } 
  }

  render() {
    const groupsAndPolls = this.props.groups.map(group=>{
      return(
        <div key={group.id}>
          <li className="group-title" >{group.title}</li>
          <ul className="group-list">
            {group.polls.map((poll, idx)=>{
              let className;
              if(poll.active){
                className = "green-user-single-poll";
              } else {
                className = "user-single-poll";
              }
              return(
                <div className={className} key={poll.id}> 
                  <div className="check-and-text">
                    <div className="check-container">
                      <input type="checkbox" onClick={this.selectPoll(poll)}/>
                    </div>
                    <Link to={`/polls/${poll.id}`}><div className="poll-text">{poll.body}</div></Link>
                  </div>
                  <Link className="user-edit-poll" to={`/polls/${poll.id}/edit`}>Edit</Link>
                  <button onClick={this.activate(poll.id)}>
                    <i className="fas fa-toggle-on"></i>
                  </button>

                </div>
                )
            })}
          </ul>
          <div className="white-space"></div>
        </div>
      )
      
    })
    return (
      <div>
        <BlueNavBar />
        <div className="user-container">
          <Link to="/createpoll">
            <div className="user-create-button">
              Create
            </div>
          </Link>
          <ul className="user-polls">
            <li className="user-polls-header">
              <button onClick={this.handleModal}>Group</button>
              <button>Ungroup</button>
            </li>

            {groupsAndPolls}

          </ul>
    
        </div>
      </div>
    )
  }
}


export default User;