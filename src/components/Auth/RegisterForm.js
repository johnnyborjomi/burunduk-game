import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../firebase';

const RegForm = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const { email, pass } = e.target.elements;
        const user = await createUser(email.value, pass.value);
        if (user.error && user.error.code) {
            const message = user.error.code.replace(/auth\/|-/gi, ' ').trim();
            setErrorMessage(message);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <div className="error-message">{errorMessage}</div>
            <fieldset>
                <legend>Register</legend>
                <div className="form-field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="email" />
                </div>
                <div className="form-field">
                    <label>Password</label>
                    <input type="password" name="pass" placeholder="Password" />
                </div>
                <div className="form-field">
                    <input type="submit" value="Register" />
                </div>
            </fieldset>
        </form>
    );
};

export default RegForm;
