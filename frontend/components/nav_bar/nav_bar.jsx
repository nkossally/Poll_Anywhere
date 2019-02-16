import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  render() {
  
    let login;
    let signup;
    let demo;
    let myPolls;
    let logout;
    debugger
    if(this.props.user){
      debugger
      myPolls =  <li className="my-polls"><Link to={`/users/${this.props.user.id}`}>My polls</Link></li>;
      logout = (
          <li className="logout-dropdown">
            <button onClick={this.myFunction} className="dropbtn">{this.props.user.username} <i className="fas fa-cog"></i></button>
            <div id="myDropdown" className="dropdown-content">
            <button onClick={this.props.logout}>Log out</button>
          </div>
        </li>
      );
    } else {
      login = <Link className="login-nav" to="/login">Log in</Link>;
      signup = <Link className="signup-nav" to="/signup">Sign up</Link>;
      demo = <button className="demo" onClick={this.props.demo}>demo</button>;
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
                <Link id="how-it-works" to="">How it works</Link>
              </li>
              <li>
                <Link id="support" to="">Support</Link>
              </li>
              <li>
                {login}
              </li>
              <li >
                {signup}
              </li>
              <li>
                {demo}
              </li>
              <li>
                {myPolls}
              </li>
              {logout}
            </ul>
          </li>
        </ul>
      </nav>
    </>
    );
  }
}

export default NavBar;

