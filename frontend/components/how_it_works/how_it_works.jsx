import React from "react";
import { Link } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar_container";

class HowItWorks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <img src={window.coca} className="corporate-logo" />;

    // window.how_create_poll = "<%= image_url("how_create_poll.png") %>"
    // window.how_drag_and_drop = "<%= image_url("how_drag_and_drop.jpg") %>"
    // window.how_new_group = "<%= image_url("how_new_group.jpg") %>"
    // window.how_results = "<%= image_url("how_results.jpg") %>"
    return (
      <div>
        <NavBarContainer />
        <ul className="instructions">
          <li>
            <div>
              <img src={window.how_create_poll} className="how-to-pic" />
            </div>
            <div>
              Click the "My polls" button in the navigation bar in order to open
              your polls page. On your polls page, click the "Create" button in
              the upper left corner in order to create a poll. Your poll must
              have a type (multiple choice or free response) and a question. For
              multiple choice polls, you can add as many response choices as
              needed by clicking "Add Option". In addition, you can select what
              group you want your poll to belong to in the groups dropdown menu.
              By default, polls are ungrouped.
            </div>
          </li>
          <li>
            <div>
              <img src={window.how_results} className="" />
            </div>
            <div>
              On an individual poll's page, click "Activate" in order to receive
              live responses. The link is displayed on the poll page. Send out
              the response link and watch the results come in.
            </div>
          </li>
          <li>
            <div>
              <img src={window.how_new_group} className="" />
            </div>
            <div>
              On your polls page, create groups by checking off polls you wish
              to group together, and clicking the button "Group". Ungroup polls
              by clicking "Ungroup".
            </div>
          </li>
        </ul>
        <ul className="footer">
          <li>
            <a href="https://github.com/nkossally">GitHub</a>
          </li>
          <li>
            <a href="http://www.najjakossally.com/">Personal Site</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default HowItWorks;
