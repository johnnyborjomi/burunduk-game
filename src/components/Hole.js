import React from 'react';
import {ReactComponent as BadgerImg} from '../badger.svg';

export const Hole = ({item, index, handler}) => {

    return (
          <div className="hole-wrap">
            <div className={`hole${''}`} onClick={handler}>
              <BadgerImg className={`badger-img ${item.active ? 'visible' : ''}`}/>
            </div>
          </div>
    )
}
