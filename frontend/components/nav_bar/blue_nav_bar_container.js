import { connect } from 'react-redux';
import {login, logout } from '../../actions/session_actions';
import BlueNavBar from './blue_nav_bar.jsx';

const mapStateToProps = (state) =>{
    
    return({
        user: state.entities.users[state.session.id],
        // try to get the path from props and decide if blue this.props.location.pathname
    })
};

const mapDispatchToProps = dispatch => {
    return( {

    logout: () => dispatch(logout()),
    demo: () => dispatch(login({username: 'demoUser', password: 'demoUser'})),
    } )
};

export default connect(mapStateToProps, mapDispatchToProps)(BlueNavBar);