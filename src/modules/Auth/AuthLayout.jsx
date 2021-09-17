import React from 'react';
import Input from '../../components/Input';
import image from '../../assets/images';
import './AuthLayout.css';

const backgroundImage = `url(${ image.auth.bg })`;

const AuthLayout = ({ login, formObj, setEmail, setPassword }) => (
    <div className="auth" style={{ backgroundImage }}>
        <div className="box">
            <h1>Login to your account</h1>
            <Input
                type="text"
                title="Email"
                value={formObj.email}
                onChange={ e => setEmail(e.target.value) }
            />
            <Input
                type="password"
                title="Password"
                value={formObj.password}
                onChange={ e => setPassword(e.target.value) }
            />
            { formObj.error && <div className="error">{ formObj.error }</div> }
            <button
                type="button"
                onClick={() => login()}
            >Login</button>
        </div>
    </div>
);

export default AuthLayout;
