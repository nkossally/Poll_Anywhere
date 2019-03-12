import { connect } from 'react-redux';
import {login, logout } from '../../actions/session_actions';
import {showAllUsers } from '../../actions/user_actions';

import NavBar from './nav_bar';
import { withRouter } from "react-router";


const mapStateToProps = (state) =>{
    let demoUserId = Object.values(state.entities.users).filter(user => user.username === "demoUser")[0].id;
    return({
        user: state.entities.users[state.session.id],
        demoUserId: demoUserId,
    })
};

const mapDispatchToProps = dispatch => {
    
    return( {

    logout: () => dispatch(logout()),
    demo: () => dispatch(login({username: 'demoUser', password: 'demoUser'})),
    showAllUsers: () => dispatch(showAllUsers())
    } )
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));