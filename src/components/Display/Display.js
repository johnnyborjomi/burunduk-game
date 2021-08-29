import React from 'react';
import {Timer} from './Timer/Timer';
import stl from './Display.module.css';
import {observer} from 'mobx-react-lite';
import display from '../../store/display';


export const Display = observer(() => {
    return (
        <div className={stl.display}>
            <Timer />
            <div className="score">
                Score: {display.score}
            </div>
            <div className="misses">
                Misses: {display.misses}
            </div>
            <div className="level">
                Level: {display.level}
            </div>
        </div>
    )
})