import { connect } from 'react-redux';
import {login, logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) =>{
    return({
        user: state.entities.users[state.session.id],
    })
};

const mapDispatchToProps = dispatch => {
    
    return( {

    logout: () => dispatch(logout()),
    demo: () => dispatch(login({username: 'demoUser', password: 'demoUser'})),
    } )
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);