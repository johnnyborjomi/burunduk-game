import React, { useEffect, useState } from 'react';
import { registerUser } from '../../firebase';
import Btn from '../UI/Btn/Btn';
import Input from '../UI/Input/Input';
import { validators } from '../../helpers/validation';

const RegForm = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const [fields, setFields] = useState({
        player_name: {
            value: '',
            isTouched: false,
            isValid: false,
            errMessage: null,
        },
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
        },
    });

    useEffect(() => {
        const isFormValid = Object.values(fields).every(
            (field) => field.isValid === true,
        );
        isFormValid ? setIsFormValid(true) : setIsFormValid(false);
    }, [fields]);

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const { email, password, player_name } = fields;
        const { error } = await registerUser(
            email.value,
            password.value,
            player_name.value,
        );
        if (error && error.code) {
            const message = error.code.replace(/auth\/|-/gi, ' ').trim();
            setErrorMessage(message);
        }
    };

    function onInputChange(val, type) {
        const [isValid, errMessage] = validators[type](val);
        setFields((prev) => ({
            ...prev,
            [type]: {
                value: val,
                isTouched: val.length,
                isValid: isValid,
                errMessage: errMessage,
                noValidate: prev[type].noValidate,
            },
        }));
    }

    return (
        <form onSubmit={handleRegister}>
            <div className="error-message">{errorMessage}</div>
            <fieldset>
                <legend>Register</legend>
                <Input
                    type="text"
                    name="player_name"
                    label="Player Name"
                    value={fields.player_name.value}
                    isTouched={fields.player_name.isTouched}
                    isValid={fields.player_name.isValid}
                    errMessage={fields.player_name.errMessage}
                    onChange={(val) => onInputChange(val, 'player_name')}
                />
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

export default RegForm;
