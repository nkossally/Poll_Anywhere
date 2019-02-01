import React from 'react';

class ResponseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { user_id: this.props.user_id, choice_id:""}
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  update(id) {
    return (e)=> {
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
      if(poll.choices){
        choiceButtons=poll.choices.map((choice, idx)=>{
          let id = choice.id;
          return(
            <div key={idx}>
              <button   className="response-choice" onClick={this.update( id )} value={choice.id} > {choice.body} </button>
            </div>
          ) 
        })
      }
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