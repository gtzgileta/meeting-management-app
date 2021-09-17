import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { loadMeetings } from './store/meeting';
import { Routes } from './routes';

const App = () => {
    useEffect(() => {
        // Load user info if already logged in
        if (localStorage.user) {
            store.dispatch(loadMeetings());
        }
    }, []);

    return (
        <Provider store={ store }>
            <Routes/>
        </Provider>
    );
}

export default App;
