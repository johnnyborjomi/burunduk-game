import React, { useState, useEffect } from 'react';
import Btn from '../UI/Btn/Btn';
import { signInUser } from '../../firebase';
import './Form.css';
import Input from '../UI/Input/Input';
import { validators } from '../../helpers/validation';

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const { email, password } = fields;
        const { error } = await signInUser(email.value, password.value);
        if (error && error.code) {
            const message = error.code.replace(/auth\/|-/gi, ' ').trim();
            setErrorMessage(message);
        }
    };

    const [fields, setFields] = useState({
        email: {
            value: '',
            isTouched: false,
            isValid: false,
            errMessage: null,
        },
        password: {
            value: '',
            isTouched: false,
            isValid: false,
            errMessage: null,
            // noValidate: true,
        },
    });

    useEffect(() => {
        if (Object.values(fields).every((field) => field.isValid === true))
            setIsFormValid(true);
    }, [fields]);

    function onInputChange(val, type) {
        const [isValid, errMessage] = validators[type](val);
        setFields((prev) => ({
            ...prev,
            [type]: {
                value: val,
                isTouched: val.length,
                isValid: prev[type].noValidate ? true : isValid,
                errMessage: errMessage,
                noValidate: prev[type].noValidate,
            },
        }));
    }

    return (
        <form onSubmit={handleLogin}>
            <div className="error-message">{errorMessage}</div>
            <fieldset>
                <legend>Login</legend>
                <Input
                    type="email"
                    name="email"
                    label="Email"
                    value={fields.email.value}
                    isTouched={fields.email.isTouched}
                    isValid={fields.email.isValid}
                    errMessage={fields.email.errMessage}
                    onChange={(val) => onInputChange(val, 'email')}
                />
                <Input
                    type="password"
                    name="password"
                    label="Password"
                    value={fields.password.value}
                    isTouched={fields.password.isTouched}
                    isValid={fields.password.isValid}
                    errMessage={fields.password.errMessage}
                    onChange={(val) => onInputChange(val, 'password')}
                    noValidate={fields.password.noValidate}
                />
                <div className="form-field">
                    <Btn
                        color="white"
                        bg="green"
                        size="lg"
                        disabled={!isFormValid}
                    >
                        Login
                    </Btn>
                </div>
            </fieldset>
        </form>
    );
};

export default LoginForm;
