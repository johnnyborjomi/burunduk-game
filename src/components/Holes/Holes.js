import React from 'react'
import { observer } from 'mobx-react-lite'
import {Hole} from './Hole/Hole'
import './Holes.css'
import runtime from '../../store/runtime'

export const Holes = observer(() => {
    console.log('runtime mtx from holes', runtime.mtx)
    return (
        <div className={`field cols-${runtime.holeCount}`}>
            { runtime.mtx.map(item => <Hole 
                key={`${item.id}`}
                item={item}  
            />) }
        </div>
    )
})