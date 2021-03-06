import React from 'react';
import {Hole} from './Hole/Hole';
import './Holes.css';

export const Holes = ({holesCount, mtx, holeClickHandler}) => {
    return (
        <div className={`field cols-${holesCount}`}>
            { mtx.map(item => <Hole 
                key={`${item.id}`}
                item={item} 
                handler={() => holeClickHandler(item)} 
            />) }
        </div>
    )
}