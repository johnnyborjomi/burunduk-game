import React from 'react';
import {Hole} from './Hole';

export const Holes = ({holesCount, mtx, holeClickHandler}) => {
    return (
        <div className={`field cols-${holesCount}`}>
            { mtx.map(item => <Hole key={item.num + '' + item.active} item={item} handler={() => holeClickHandler(item)} />) }
        </div>
    )
}