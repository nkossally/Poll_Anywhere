import React from 'react';

class ActivePollResponseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { user_id: this.props.user_id, choice_id: this.props.choice_id, response: this.props.response}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleSubmit(e, id) {
    e.preventDefault();
    this.props.action({ user_id: this.props.user_id, choice_id: id});
  }

  update(id) {
    let that = this;
    return (e)=> {
      if(this.state.choice_id !== id){
        this.setState({
          choice_id: id
        });
        this.handleSubmit(e, id);
      }
    }
  } 
  
  componentDidMount(){
    this.props.showAllPolls();
    this.props.showAllGroups();
    this.props.showAllChoices();
    this.props.showAllResponses();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.choice_id !== this.props.choice_id){
      this.setState({choice_id: nextProps.choice_id, response: nextProps.response})
    }
  }

  handleDelete(){
    this.props.destroyResponse(this.state.response.id);
  }

  render(){
    let that = this;
    const poll = this.props.poll || {};
    let choiceButtons;
    let deleteButton = this.props.choice_id ? <button  onClick={this.handleDelete} >Clear last response</button> : "";

    if (Object.keys(poll).length !== 0) {
      
      if(this.props.choices){
        choiceButtons=this.props.choices.map((choice, idx)=>{
          
          let className = this.props.choice_id === choice.id? "response-chosen" : "response-choice";
          return(
            <div key={idx} >
              <button disabled={this.state.choice_id} className={className} onClick={this.update( choice.id )} value={choice.id} > {choice.body} </button>
            </div>
          ) 
        })

      }
    } else {
      return null;
    }
    
    return(
      
 
        <ul className="response-blue-box">
          <li className="response-question">
            {poll.body}
          </li>
          <li className="response-choice-container">
            {choiceButtons}
          </li>
          <li className={this.props.choice_id ? "delete-response" : "" }>
            {deleteButton}
          </li>
        </ul>

    )

  }
}

export default ActivePollResponseForm;