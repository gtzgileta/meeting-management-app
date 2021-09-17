import React from 'react';
import { useHistory } from "react-router-dom";
import { logout } from '../../utils/auth-util';
import './Header.css';

const Header = () => {
    const history = useHistory();
    const logoutAction = () => {
        logout();
        history.push('/');
    }
    return (
        <header>
            <h1>Meeting Management App</h1>
            <ul id="menu">
                <li onClick={ () => history.push('/panel/dashboard') }>Dashboard</li>
                <li onClick={ () => history.push('/panel/schedule-meeting') }>Schedule Meeting</li>
                <li onClick={ () => logoutAction() }>Logout</li>
            </ul>
        </header>
    );
}

export default Header;
