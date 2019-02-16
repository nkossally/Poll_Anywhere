import React from "react";
import { Link } from "react-router-dom";

class BlueNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  render() {
    const navLinks = this.props.user ? (
      <ul className="nav-logged-in">
        <li className="my-polls"><Link to={`/users/${this.props.user.id}`}>My polls</Link></li>
        <li className="blue-logo-container"> <Link to="">< img src={window.blue_logo}  className="blue-logo" /></Link></li>
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
      <></>
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

export default BlueNavBar;
