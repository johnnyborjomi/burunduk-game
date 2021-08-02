import React from 'react';
import {Timer} from './Timer';

export const Display = ({score, isRun, misses, level}) => {
    console.log('DISPLAY RENDER!!!!!!!!')
    return (
        <div className="display">
            <Timer isRun={isRun}/>
            <div className="score">
                Score: {score}
            </div>
            <div className="misses">
                Misses: {misses}
            </div>
            <div className="level">
                Level: {level}
            </div>
        </div>
    )
}