import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LayoutRoute from './modules/SiteLayout';
import Login from './modules/Auth';
import Dashboard from './modules/Dashboard';
import Schedule from './modules/Schedule';

const browserHistory = createBrowserHistory();

export const Routes = () => (
    <Router history={ browserHistory }>
        <Switch>
            {/* LOGIN */ }
            <LayoutRoute exact path="/" component={ Login } />

            {/* ADMIN ROUTES */ }
            <LayoutRoute exact path="/panel/dashboard" component={ Dashboard } authRoute />
            <LayoutRoute exact path="/panel/schedule-meeting" component={ Schedule } authRoute />
            <LayoutRoute exact path="/panel/schedule-meeting/:id" component={ Schedule } authRoute />
        </Switch>
    </Router>
);
