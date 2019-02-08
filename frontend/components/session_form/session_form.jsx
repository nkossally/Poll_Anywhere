import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', 
    phone_number: "",
    first_name: "", last_name: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    let group;
    if(this.props.formType === "signup"){
      group = {title: "Ungrouped"}
    }
    this.props.processForm(user, group);

  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  additionalFields(){
    if (this.props.formType === 'signup'){
      return(
        <div>
          <label className="input-label">First Name:
          <input className="input-box" type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}
          />
        </label>
        <br/>
        <label className="input-label">Last Name:
          <input className="input-box" type="text"
            value={this.state.last_name}
            onChange={this.update('last_name')}
          />
        </label>
        <br/>
        <label className="input-label">Phone Number:
          <input className="input-box" type="text"
            value={this.state.phone_number}
            onChange={this.update('phone_number')}
          />
        </label>
        <br/>
      </div>
      )
    }
  }
  


  render() {
    return (
      <div className="session-container">
        <form onSubmit={this.handleSubmit} >
          <div >
          {/* {this.props.formType} or {this.props.link} */}
          {this.renderErrors()}
            <br/>
            <label className="input-label">Username:
              <input className="input-box" type="text"
                value={this.state.username}
                onChange={this.update('username') }
              />
            </label>
            <br/>
            <label className="input-label">Password:          </label>
            <br/>
              <input className="input-box" type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
  
            <br/>
            {this.additionalFields()}
            {/* <input type="submit" value={this.props.formType} /> */}
            <input type="submit" className={this.props.formType} value={this.props.formType}/>

          </div>

        </form>
      </div>
    );
  }
}

export default SessionForm;
