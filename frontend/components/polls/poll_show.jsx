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
      choices=poll.choices.map((choice)=><div className="choice-body">{choice.body}</div>)
    }
    return(
      <>
        <div className="poll-box">
          
          <div className="poll-body">{poll.body}</div>
          {choices}
          <div className="black-logo-container" ><  img src={window.logo_black} className="black-logo" /></div>    


        </div>
      </>
    )
  }

}

export default PollShow;