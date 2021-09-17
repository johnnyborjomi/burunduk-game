import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { connect } from 'react-redux';
import { loginCreator } from '../../store/reducers/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const RegForm = (props) => {
    const auth = getAuth();

    const [errorMessage, setErrorMessage] = useState('');
    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const { email, pass } = e.target.elements;
        try {
            const authRes = await createUserWithEmailAndPassword(
                auth,
                email.value,
                bcrypt.hashSync(pass.value, 10),
            );
            console.log('login:', authRes, 'auth:', auth.currentUser);
        } catch (err) {
            console.log(err);
            const message = err.code.replace(/auth\/|-/gi, ' ').trim();
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
