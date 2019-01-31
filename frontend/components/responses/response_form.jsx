import React from 'react';

class ResponseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { user_id: this.props.user_id, choice_id:""}
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.action(this.state);
  }

  update(id) {
    debugger
    return (e)=> {
      debugger
      this.setState({
        choice_id: id
      });
      this.handleSubmit(e);
    }
  } 
  


  componentDidMount(){
    this.props.showPoll(this.props.match.params.pollId);
    this.props.showAllChoices();
  }

  render(){
    const poll = this.props.poll || {};
    let choiceButtons;
    if (Object.keys(poll).length !== 0) {

      choiceButtons=poll.choices.map((choice)=>{
        let id = choice.id;
        return(
          <div >
            <button  className="response-choice" onClick={this.update( id )} value={choice.id} > {choice.body} </button>
          </div>
        ) 
      })
    } else {
      return null;
    }
    return(
      
      <div>
        <ul className="response-blue-box">
          <li className="response-question">
            {poll.body}
          </li>
          {choiceButtons}
        </ul>
      </div>
    )

  }
}

export default ResponseForm;