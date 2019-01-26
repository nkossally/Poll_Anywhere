import React from "react";
import { Link } from "react-router-dom";

class ChoiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { poll_id: this.props.poll_id, body: ""};
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
          <label className="choice-input-label">Choice: </label>
            <input className="choice-input-box" type="text"
              value={this.state.body}
              onChange={this.update('body') }
              />
  
            <input type="submit" className={this.props.formType} value={this.props.formType}/>

        </form>
      </div>
    );
  }
}


export default ChoiceForm;