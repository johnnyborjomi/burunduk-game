import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { connect } from 'react-redux';
import { loginCreator } from '../../store/reducers/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './Form.css';

const LoginForm = (props) => {
    const auth = getAuth();

    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const { email, pass } = e.target.elements;
        try {
            const authRes = await signInWithEmailAndPassword(
                auth,
                email.value,
                bcrypt.hashSync(pass.value, 10),
            );
        } catch (err) {
            console.log(err);
            const message = err.code.replace(/auth\/|-/gi, ' ').trim();
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
