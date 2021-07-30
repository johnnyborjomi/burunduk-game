import React from 'react';
import {Hole} from './Hole';

export const Holes = ({holeCount, mtx, holeClickHandler}) => {
    return (
        <div className={`field cols-${holeCount}`}>
            { mtx.map(item => <Hole key={item.num + '' + item.active} item={item} handler={() => holeClickHandler(item)} />) }
        </div>
    )
}