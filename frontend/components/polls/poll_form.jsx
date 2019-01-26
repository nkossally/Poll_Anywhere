import React from "react";
import { Link } from "react-router-dom";

class PollForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user_id: this.props.user_id, body: "", category: "",
    active: true
     };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const poll = Object.assign({}, this.state);
    this.props.action(poll);
  }



  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} >
          <label className="poll-input-label">Category: </label>
            <input className="poll-input-box" type="text"
              value={this.state.category}
              onChange={this.update('category') }
              />
  
            <br/>
            <label className="poll-input-label">Question: </label>
              <textarea className="poll-input-box"
                value={this.state.body}
                onChange={this.update('body')}
              />
  
            <input type="submit" className={this.props.formType} value={this.props.formType}/>

        </form>
      </div>
    );
  }
}


export default PollForm;