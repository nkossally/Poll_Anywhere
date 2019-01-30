import React from 'react';

class PollShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.action(this.props.match.params.pollId);
    this.props.showAllChoices();
  }

  render(){
    const poll = this.props.poll || {};
    let choices;
    if (Object.keys(poll).length !== 0) {
      choices=poll.choices.map((choice)=>choice.body)
    }
    return(
      <h4>
        <p>id:{poll.id}</p> 
        <p>body: {poll.body}</p>
        <p>user_id: {poll.user_id} </p>
        <p>choice_ids: {poll.choice_ids}</p>
        <p>choices:</p>
        <ul> {choices}</ul>
      </h4>
    )
  }

}

export default PollShow;