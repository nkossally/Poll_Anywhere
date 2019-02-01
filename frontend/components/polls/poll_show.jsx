import React from 'react';

class PollShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.action(this.props.match.params.pollId);
    this.props.showAllChoices();
    this.props.showAllResponses();
  }

  render(){
    this.props.showAllResponses();

    const poll = this.props.poll || {};
    let choicesText;
    let choices;
    let responseCount;
    if (Object.keys(poll).length !== 0) {
      if(poll.choices){
        choices = poll.choices;
        choicesText=choices.map((choice, idx)=><div key={idx} className="choice-body">{choice.body} </div>);
        this.props.showAllResponses();
      }
    }
    if(choices && choices[0].responses){
      responseCount = choices.map((choice, idx)=><div key={idx} className="choice-body">{choice.body} </div>);
    }
    return(
      <>
        <div className="poll-box">
          
          <div className="poll-body">{poll.body} </div>
          {choicesText}
          <div className="black-logo-container" ><  img src={window.logo_black} className="black-logo" /></div>    


        </div>
      </>
    )
  }

}

export default PollShow;