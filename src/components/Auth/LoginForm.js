import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../../firebase';
import './Form.css';

const LoginForm = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const { email, pass } = e.target.elements;
        const user = await signInUser(email.value, pass.value);
        if (user.error && user.err.code) {
            const message = user.err.code.replace(/auth\/|-/gi, ' ').trim();
            setErrorMessage(message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="error-message">{errorMessage}</div>
            <fieldset>
                <legend>Login</legend>
                <div className="form-field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="form-field">
                    <label>Password</label>
                    <input type="password" name="pass" placeholder="Password" />
                </div>
                <div className="form-field">
                    <input type="submit" value="Login" />
                </div>
            </fieldset>
        </form>
    );
};

export default LoginForm;
