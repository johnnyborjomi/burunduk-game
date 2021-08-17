import React from 'react';
import stl from './Btn.module.css';

export const Btn = ({handler, isRun}) => {
    return (
        <button 
            className={`${stl.btn} ${isRun ? stl.btn_stop : stl.btn_start}`} 
            onClick={handler}
        >
            {isRun ? 'Stop' : 'Start'}
        </button>
    )
}