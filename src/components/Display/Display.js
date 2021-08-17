import React from 'react';
import {Timer} from './Timer/Timer';
import stl from './Display.module.css';

export const Display = ({score, isRun, misses, level}) => {
    return (
        <div className={stl.display}>
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