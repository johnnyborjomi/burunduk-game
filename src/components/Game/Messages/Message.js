import React from 'react';
import stl from './Messages.module.css';

export const Message = ({message}) => {
    if (!message.text && !message.status) return null;
    const isVisible = message.text && message.text.length > 0 && message.status;
    console.log(stl)
    // const msgClass = '';
    // switch (message.status) {
    //     case 'success':
    //         msgClass = message.su
    // }

    return isVisible ? <h1 className={`${stl.message} ${stl[message.status]}`}>{message.text}</h1> : null;
}