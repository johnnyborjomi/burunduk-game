import React from 'react';
import {Timer} from './Timer/Timer';
import stl from './Display.module.css';
import {observer} from 'mobx-react-lite';
import lvl from '../../store/level';
import scr from '../../store/score';


export const Display = observer(({misses}) => {
    return (
        <div className={stl.display}>
            <Timer />
            <div className="score">
                Score: {scr.score}
            </div>
            <div className="misses">
                Misses: {misses}
            </div>
            <div className="level">
                Level: {lvl.level}
            </div>
        </div>
    )
})