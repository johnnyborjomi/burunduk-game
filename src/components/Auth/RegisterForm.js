import React, { useState } from 'react';
import { registerUser } from '../../firebase';
import Btn from '../UI/Btn/Btn';

const RegForm = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const { email, pass, player_name } = e.target.elements;
        const { error } = await registerUser(
            email.value,
            pass.value,
            player_name.value,
        );
        if (error && error.code) {
            const message = error.code.replace(/auth\/|-/gi, ' ').trim();
            setErrorMessage(message);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <div className="error-message">{errorMessage}</div>
            <fieldset>
                <legend>Register</legend>
                <div className="form-field">
                    <label>Player Name</label>
                    <input
                        type="text"
                        name="player_name"
                        placeholder="Player Name"
                    />
                </div>
                <div className="form-field">
                    <label>Email*</label>
                    <input type="text" name="email" placeholder="email" />
                </div>
                <div className="form-field">
                    <label>Password*</label>
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

export default RegForm;
