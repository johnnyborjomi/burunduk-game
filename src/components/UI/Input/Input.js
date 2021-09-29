import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import cls from './Input.module.css';

const Input = ({
    value,
    onChange,
    name,
    label,
    type = 'text',
    isTouched,
    isValid,
    errMessage,
    noValidate,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const classes = [];

    if (isValid && isTouched && !noValidate) classes.push(cls.valid);
    if (!isValid && isTouched && !noValidate) classes.push(cls.invalid);
    if (isFocused || value.length) classes.push(cls.focused);

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
                type={type}
            />
            {errMessage && !isValid && isTouched && !noValidate ? (
                <span className={cls.errMessage}>{errMessage}</span>
            ) : null}
        </label>
    );
};

export default Input;
