import React from 'react';

export const Message = ({message}) => {
    if (!message.text && !message.status) return null;
    const isVisible = message.text && message.text.length > 0 && message.status;

    return isVisible ? <h1 className={`message ${message.status}`}>{message.text}</h1> : null;
}