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
    const navLinks = this.props.user ? (
      <ul className="nav-logged-in">
        <li className="my-polls"><Link to={`/users/${this.props.user.id}`}>MyPolls</Link></li>
        <li className="blue_logo_container"> <Link to="">< img src={window.blue_logo}  className="blue_logo" /></Link></li>
        <li className="help">
          <Link to="">Help</Link>
        </li>
        <li className="logout-dropdown">
          <button onClick={this.myFunction} className="dropbtn">{this.props.user.username} <i className="fas fa-cog"></i></button>
          <div id="myDropdown" className="dropdown-content">
            <button onClick={this.props.logout}>Log out</button>
          </div>
        </li>
      </ul>
    ) : (
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
              <Link className="login-nav" to="/login">Log in</Link>
            </li>
            <li >
              <Link className="signup-nav" to="/signup">Sign up</Link>
            </li>
            <li>
              <button className="demo" onClick={this.props.demo}>demo</button>
            </li>
          </ul>
        </li>
        

      </ul>
    );
    
    return (
    <>
      <nav className='nav-row'> 
        {navLinks}
      </nav>
    </>
    );
  }
}

export default NavBar;

