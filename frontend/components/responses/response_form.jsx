import React from 'react';

class ResponseForm extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    debugger
    const poll = this.props.showPoll(this.props.poll_id);
    debugger
    return(
      <div>
        {poll.body}
        {poll.choice_ids}

      </div>
    )

  }
}

export default ResponseForm;