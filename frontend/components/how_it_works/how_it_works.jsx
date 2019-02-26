import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../nav_bar/nav_bar_container";

class HowItWorks extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render(){
    return(
      <div>
        <NavBarContainer />
        <ul className="instructions">
          <li>
            <div></div>
            <div>Click "My polls" in the navigation bar in order to open your polls page. </div>
          </li>
          <li>
            <div></div>
            <div>On your polls page, click the "Create" button in the upper left corner in order to create a poll.</div>
          </li>
          <li>
            <div></div>
            <div>Your poll must have a type (multiple choice or free response) and a question. You can add as many
              response choices as you need by clicking "Add Option". In addition, you can select what group you want
              your poll to belong to in the groups dropdown menu. By default, polls are ungrouped.  </div>
          </li>
          <li>
            <div></div>
            <div>Activate your poll by clicking "Activate" on a poll's webpage. Only one poll can be active at a time. Once active,
              the poll's page will display the link to the response form. Send out the url of of the response form link in order
              to get responses.
            </div>
          </li>
          <li>
            <div></div>
            <div>The webpage of a poll displays live results.
            </div>
          </li>
        </ul>
        <ul className="footer">
              <li><a href="https://blog.polleverywhere.com/">Blog</a></li>
              <li><a href="https://twitter.com/polleverywhere">Twitter</a></li>
              <li><a href="https://www.facebook.com/polleverywhere">Facebook</a></li>
          </ul>
      </div>
    )
  }


}

export default HowItWorks;
