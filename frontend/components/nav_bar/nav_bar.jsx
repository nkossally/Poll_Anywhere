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
    if(this.props.user){
      myPolls =  <li className="my-polls"><Link to={`/users/${this.props.user.id}`}>My polls</Link></li>;
      logout =  <button className="white-nav-logout" onClick={this.props.logout}>Log out</button>    
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
              <li>
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

