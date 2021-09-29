import React from 'react';
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
    const id = uuid();

    const classes = [];
    if (!noValidate) {
        if (isValid && isTouched) classes.push(cls.valid);
        if (!isValid && isTouched) classes.push(cls.invalid);
    }

    return (
        <div className="form-field">
            <label className={`${cls.label} ${classes.join(' ')}`} htmlFor={id}>
                {label}
            </label>
            <input
                className={`${cls.input} ${classes.join(' ')}`}
                id={id}
                value={value}
                name={name}
                onChange={(event) => onChange(event.target.value)}
                type={type}
                placeholder={label}
            />
            {errMessage && !isValid && isTouched && !noValidate ? (
                <span className={cls.errMessage}>{errMessage}</span>
            ) : null}
        </div>
    );
};

export default Input;
