import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavBar from './nav_bar/nav_bar_container';
import { Route, Switch, Redirect, HashRouter, Link } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import HomePage from './home_page';





const App = () => (    
  <div>
    <header>
      <NavBar />
      <GreetingContainer />
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>

    <body>
      <HomePage />
    </body>


  </div>
)

export default App;