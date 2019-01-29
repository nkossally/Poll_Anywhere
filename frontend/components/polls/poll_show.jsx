import React from 'react';

class PollShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.action(this.props.match.params.pollId);
  }

  render(){
    const poll = this.props.poll || {};
    debugger

    return(
      <h4>
        id:{poll.id}, body: {poll.body}, user_id: {poll.user_id} , 
        choice_ids: {poll.choice_ids}
      </h4>
    )
  }

}

export default PollShow;