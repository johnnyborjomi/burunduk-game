import React from 'react';
import {Hole} from './Hole';

export const Holes = ({ mtx, holeClickHandler }) => {
    console.log('HOLES RENDER!!!!!!!!!!!', 'mtx::', mtx);
    return (
        <div className={`field cols-${mtx.length}`}>
            { mtx.map((item, i) => (
                <Hole 
                    item={item}
                    key={`${item.num}${item.active}${Math.random()}`} 
                    index={i}
                    handler={holeClickHandler} 
                />)
            )}
        </div>
    )
}