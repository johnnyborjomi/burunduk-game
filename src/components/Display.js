import React from 'react';
import {Timer} from './Timer';

export const Display = ({score, isRun}) => {
    return (
        <div className="display">
            <Timer isRun={isRun}/>
            <div className="score">
                Score: {score}
            </div>
        </div>
    )
}