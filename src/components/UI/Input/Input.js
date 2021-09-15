import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Input = ({ value, onChange, label, type = 'text' }) => {
  const id = uuid();

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
