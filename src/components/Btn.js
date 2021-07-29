import React from 'react';

export const Btn = ({handler, isRun}) => {
    return (
        <button 
            className={`btn btn--${isRun ? 'stop' : 'start'}`} 
            onClick={handler}
        >
            {isRun ? 'Stop' : 'Start'}
        </button>
    )
}