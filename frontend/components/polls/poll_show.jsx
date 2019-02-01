import React from 'react';
import ChoiceShow from '../choices/choice_show';

class PollShow extends React.Component {
  constructor( props) {
    super(props)
    this.responses = this.props.responses;
  }

  componentDidMount() {
    this.props.showPoll(this.props.match.params.pollId);
    this.props.showAllChoices();
    this.props.showAllResponses();
  }

  render(){
    if (!this.props.poll || !this.props.poll.choice_ids || !this.props.choices) return null;
    const { poll } = this.props;
    const choicesArr = poll.choice_ids.map(choice_id =>{
      const choice = this.props.choices[choice_id];
      return <div className="choice-body" key={choice_id} >< ChoiceShow choice={choice} /></div>
    })
    
  
  
    return(
      <>
        <div className="poll-box">
          
          <div className="poll-body">{poll.body} </div>
          {/* {choicesText} */}
          {choicesArr}
          <div className="black-logo-container" ><  img src={window.logo_black} className="black-logo" /></div>    


        </div>
      </>
    )
  }

}

export default PollShow;