import React, { useState } from 'react';
import cls from './Input.module.css';
import { ReactComponent as VisibilityIcon } from '../../../icons/visibility.svg';
import { ReactComponent as NoVisibilityIcon } from '../../../icons/novisibility.svg';

const Input = ({
    value,
    onChange,
    name = Math.random(),
    label,
    type = 'text',
    isTouched,
    isValid,
    errMessage,
    noValidate,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [passVisibility, setPassVisibility] = useState({
        visible: false,
        type: type,
    });

    const classes = [];

    if (isValid && isTouched && !noValidate) classes.push(cls.valid);
    if (!isValid && isTouched && !noValidate) classes.push(cls.invalid);
    if (isFocused || value.length) classes.push(cls.focused);
    if (type === 'password') classes.push(cls.password);

    function toggleVisibility(e) {
        e.preventDefault();
        if (passVisibility.visible) {
            setPassVisibility({ visible: false, type: 'password' });
        } else {
            setPassVisibility({ visible: true, type: 'text' });
        }
    }

    return (
        <label className={cls.field}>
            <span className={`${cls.label} ${classes.join(' ')}`}>{label}</span>
            <input
                className={`${cls.input} ${classes.join(' ')}`}
                value={value}
                name={name}
                onChange={(event) => onChange(event.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                type={type === 'password' ? passVisibility.type : type}
            />
            {type === 'password' ? (
                <i className={cls.show_icon} onClick={toggleVisibility}>
                    {passVisibility.visible ? (
                        <VisibilityIcon />
                    ) : (
                        <NoVisibilityIcon />
                    )}
                </i>
            ) : null}
            {errMessage && !isValid && isTouched && !noValidate ? (
                <span className={cls.err_message}>{errMessage}</span>
            ) : null}
        </label>
    );
};

export default Input;
