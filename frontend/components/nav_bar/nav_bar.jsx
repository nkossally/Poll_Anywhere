import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const navLinks = this.props.user ? (
      <ul className="nav-logged-in">
        <li className="my_polls_logo_container">< img src={window.my_polls_logo}  className="my_polls_logo" /></li>
        <li className="help">
          <Link to="">Help</Link>
        </li>
        <li className="logout">
          <button onClick={this.props.logout}>Log out</button>
        </li>
      </ul>
    ) : (
      <ul className="nav-logged-out">
        <li>< img src={window.logo}  className="logo" /></li>
        <li>
          <ul className="nav-logged-out-expanded">
            <li>
              <Link id="how-it-works" to="">How it works</Link>
            </li>
            <li>
              <Link id="support" to="">Support</Link>
            </li>
            <li>
              <Link className="login" to="/login">Log in</Link>
            </li>
            <li className="signup">
              <Link  to="/signup">Sign up</Link>
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

{/* <li>
          <ul className="nav-logged-out-hamburger">
            <li>
              <ul>
              <li>
                <Link id="how-it-works" to="">How it works</Link>
              </li>
              <li>
                <Link id="support" to="">Support</Link>
              </li>
              <li>
                <Link className="login" to="/login">Log in</Link>
              </li>
              <li>
                <Link className="signup" to="/signup">Sign up</Link>
              </li>
              <li>
                <button className="demo" onClick={this.props.demo}>demo</button>
              </li>
              </ul>
            </li>
          </ul>
        </li> */}