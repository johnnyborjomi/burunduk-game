import React from 'react'
import {Timer} from './Timer/Timer'
import stl from './Display.module.css'
import {observer} from 'mobx-react-lite'
import runtime from '../../store/runtime'


export const Display = observer(() => {
    return (
        <div className={stl.display}>
            <Timer />
            <div className="score">
                Score: {runtime.score}
            </div>
            <div className="misses">
                Misses: {runtime.misses}
            </div>
            <div className="level">
                Level: {runtime.level}
            </div>
        </div>
    )
})