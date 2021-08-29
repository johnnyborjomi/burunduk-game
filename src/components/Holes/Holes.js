import React from 'react'
import {Hole} from './Hole/Hole'
import './Holes.css'
import runtime from '../../store/runtime'

export const Holes = ({mtx}) => {
    return (
        <div className={`field cols-${runtime.holeCount}`}>
            { mtx.map(item => <Hole 
                key={`${item.id}`}
                item={item}  
            />) }
        </div>
    )
}