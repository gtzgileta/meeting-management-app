import React from 'react';
import { Route, withRouter, useHistory } from 'react-router-dom';
import Header from "../components/Header";
import { isLoggedIn } from '../utils/auth-util';

const LayoutRoute = ({ component: Component, authRoute, ...rest }) => {
    const history = useHistory();
    const loggedIn = isLoggedIn();
    // Redirect to login if user not logged in
    if (!loggedIn && authRoute) history.push("/");
    if(loggedIn && !authRoute) history.push('/panel/dashboard');

    if (!authRoute) return <Component { ...rest } />;

    const panel = (
        <React.Fragment>
            <Header />
            <Component { ...rest } />
        </React.Fragment>
    );

    // Return React Router's route with render function
    return <Route render={ () => panel } { ...rest } />;
}

export default withRouter(LayoutRoute);
