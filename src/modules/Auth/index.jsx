import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import AuthLayout from './AuthLayout';
import { loginUser } from '../../store/auth';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const error = useSelector((state) => state.Auth.error);
    const dispatch = useDispatch();
    const history = useHistory();

    const login = () => {
        const formValues = { email, password };
        dispatch(loginUser(formValues)).then((success) => {
            if (success) { // navigate to dashboard
                history.push("/panel/dashboard");
            }
        });
    };

    return (
        <AuthLayout
            login={login}
            formObj={{email, password, error}}
            setEmail={setEmail}
            setPassword={setPassword}
        />
    );
}

export default Auth;
