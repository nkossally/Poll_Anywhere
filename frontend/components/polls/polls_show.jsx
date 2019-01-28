import React from 'react';

class PollsShow extends React.Component {

  componentDidMount() {
    
    this.props.action();
    
  }

  render(){
    debugger
    const polls = this.props.polls.map((poll, idx)=>{
      return(
        <h4>
          id: {poll.id}, body: {poll.body}, user:{poll.user.username} 
        </h4>
      )
    });
    debugger
        
    return(
      <ul>
        {polls}
      </ul>
    )
  }

}

export default PollsShow;