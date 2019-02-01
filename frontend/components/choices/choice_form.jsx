import React from "react";
import { Link } from "react-router-dom";

class ChoiceForm extends React.Component {
  constructor(props) {
    super(props);
    
    // this.state = { poll_id: this.props.poll_id, body: ""};
    this.state = { poll_id: props.poll_id, body: props.body};
    this.handleSubmit = this.handleSubmit.bind(this);
    

  }

  update(field) {
    
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    
    e.preventDefault();
    const choice = Object.assign({}, this.state);
    this.props.action(choice);
  }

  componentDidMount(){
    // this.props.fetchPost(this.props.match.params.pollId)
  }

  render() {
    
    return (
      <div >
        <form onSubmit={this.handleSubmit} >
          <label className="choice-input-label">Choice: </label>
            <input className="choice-input-box" type="text"
              value={this.state.body}
              // value={""}
              // onChange={this.props.update }

              onChange={this.props.updateChoice }
              />     
  
            {/* <input type="submit" className={this.props.formType} value={this.props.formType}/> */}

        </form>
      </div>                                                           
    );
  }
}


export default ChoiceForm;