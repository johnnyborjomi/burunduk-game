import React, { useState } from 'react';
import Btn from '../UI/Btn/Btn';
import { signInUser } from '../../firebase';
import './Form.css';

const LoginForm = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const { email, pass } = e.target.elements;
        const { error } = await signInUser(email.value, pass.value);
        if (error && error.code) {
            const message = error.code.replace(/auth\/|-/gi, ' ').trim();
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
                    <Btn color="white" bg="green">
                        Login
                    </Btn>
                </div>
            </fieldset>
        </form>
    );
};

export default LoginForm;
