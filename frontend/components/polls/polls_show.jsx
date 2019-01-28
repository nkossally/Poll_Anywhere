import React from 'react';

class PollsShow extends React.Component {

  componentDidMount() {
    
    this.props.action();
    
  }

  render(){
    
    const polls = this.props.polls.map((poll, idx)=>{
      return(
        <h4 key={poll.id}>
          id: {poll.id}, body: {poll.body}, user:{poll.user.username} 
        </h4>
      )
    });
    
        
    return(
      <ul>
        {polls}
      </ul>
    )
  }

}

export default PollsShow;