import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemo=this.handleDemo.bind(this);
  }

  componentDidMount(){
    this.props.showAllUsers();
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  handleDemo(){
    this.props.demo().then(user =>{
      this.props.history.push(`/users/${user.id}`);

    });
  }

  render() {
  
    let login;
    let signup;
    let demo;
    let myPolls;
    let logout;
    if(this.props.user){
      myPolls =  <Link to={`/users/${this.props.user.id}`} className="my-polls" >My polls</Link>;
      logout =  <button className="white-nav-logout" onClick={this.props.logout}>Log out</button>    
    } else {
      login = <Link className="login-nav" to="/login" >Log in</Link>;
      signup = <Link className="signup-nav" to="/signup">Sign up</Link>;
      demo = <button className="demo" onClick={this.handleDemo}>try demo</button>;
    }
    return (
    <>
      <nav className='nav-row'> 
        <ul className="nav-logged-out">
          <li>
            <Link to="">< img src={window.logo}  className="logo" /></Link>
          </li>
          <li>
            <ul className="nav-logged-out-expanded">

              <li>
                <Link id="support" to="/how-it-works" >How it works</Link>
              </li>
              <li className={this.props.user ? "nav-hidden": ""}>
                {login}
              </li>
              <li className={this.props.user ? "nav-hidden": ""} >
                {signup}
              </li>
              <li className={this.props.user ? "nav-hidden": ""}>
                {demo}
              </li>
              <li className={this.props.user ? "" :"nav-hidden"}>
                {myPolls}
              </li>
              <li className={this.props.user ? "" : "nav-hidden"}>
                {logout}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
    );
  }
}

export default NavBar;

