import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../nav_bar/nav_bar_container";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render(){
  let signUpBox;
  if(!this.props.user){
    signUpBox = (
      <ul className="sign-up-block">
              <li>
                Sign up for your free account.
              </li>
              <li >
                <Link className="sign-up-now" to="/signup">Sign up now</Link>
              </li>
      </ul>
    );
  }

    return(
      <ul>
        <NavBarContainer />
        <li className="container">
          <img src={window.conference_gradient} className="home-page-big-img" />

          <ul className="top-left">
            <li className="first-img-big-txt">
            Live interactive audience participation
            </li>
            <li className="first-img-small-txt">
            Engage your audience or class in real time
            </li>
          </ul>
        </li>
        <li className="home-page-three">
          < img src={window.askQuestion2} className="home-page-thirds"/>
          < img src={window.collectResponses} className="home-page-thirds" id="middle"/>
          < img src={window.instantResults} className="home-page-thirds"/>
        </li>
        <li className="home-page-three" id="heading">
          <div className="home-page-thirds">Ask a question</div>
          <div className="home-page-thirds"  id="middle">Collect live responses</div>
          <div className="home-page-thirds">See instant results</div>
        </li>
        <li className="home-page-three">
          <div className="home-page-thirds">
          Use multiple choice questions to identify gaps in understanding, or kick off group discussions with a colorful word cloud.
          </div>
          <div className="home-page-thirds"  id="middle">
          {"Invite the audience to respond simultaneously by visiting a website or texting a number on their phones."}&nbsp;&nbsp;&nbsp;&nbsp; 
          </div>
          <div className="home-page-thirds">
          Responses appear in an animated graph or chart embedded in your presentation. Results update live for all to see.
          </div>
        </li>
        <li>
          <ul>
            <li className="corporate-clients-big">
      
                Over 75% of the Fortune 500 trust Poll Anywhere
      
            </li>
            <li className="corporate-clients-small">
                We also help over 300,000 educators facilitate tough discussions in classrooms worldwide

            </li>
          </ul>
        </li>
        <li >
          <ul className="corporate-logos-container">
            < img src={window.apple} className="corporate-logo" id="shrink-img" />
            < img src={window.atandt} className="corporate-logo" />
            < img src={window.bankOfAmerica} className="corporate-logo" />
            < img src={window.chevron} className="corporate-logo" id="shrink-img" />

            < img src={window.coca} className="corporate-logo"/>
            < img src={window.navy} className="corporate-logo" />
            < img src={window.google} className="corporate-logo" />
            < img src={window.hp} className="corporate-logo" id="shrink-img" />
            < img src={window.merrill} className="corporate-logo"/>
            < img src={window.microsoft} className="corporate-logo" />
            < img src={window.target} className="corporate-logo" id="shrink-img" />
            < img src={window.verizon} className="corporate-logo"/>     
          </ul>
        </li>
        <li >
          {signUpBox}
        </li>
        <li>
          <ul className="footer">
              <li><a href="https://blog.polleverywhere.com/">Blog</a></li>
              <li><a href="https://twitter.com/polleverywhere">Twitter</a></li>
              <li><a href="https://www.facebook.com/polleverywhere">Facebook</a></li>
          </ul>
        </li>

      </ul>
    )
  }

}



export default HomePage;

{/* <ul className="home-page-four">
< img src={window.apple} className="corporate-logo" id="shrink-img" />
  < img src={window.atandt} className="corporate-logo" id="middle"/>
  < img src={window.bankOfAmerica} className="corporate-logo" id="middle"/>
  < img src={window.chevron} className="corporate-logo" id="shrink-img" />
</ul>
<ul className="home-page-four">
< img src={window.coca} className="corporate-logo"/>
  < img src={window.navy} className="corporate-logo" id="middle"/>
  < img src={window.google} className="corporate-logo" id="middle"/>
  < img src={window.hp} className="corporate-logo" id="shrink-img" />
</ul>
<ul className="home-page-four">
< img src={window.merrill} className="corporate-logo"/>
  < img src={window.microsoft} className="corporate-logo" id="middle"/>
  < img src={window.target} className="corporate-logo" id="shrink-img" />
  < img src={window.verizon} className="corporate-logo"/>     
</ul> */}