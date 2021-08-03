import React from 'react';
import {ReactComponent as BadgerImg} from '../badger.svg';

export const Hole = ({item, index, handler}) => {

    return (
          <div className="hole-wrap">
            <div className={`hole ${item.active ? 'active' : ''}`} onClick={handler}>
              <BadgerImg 
                className={`badger-img ${item.active ? 'visible' : ''} ${item.isKilled ? 'killed' : ''}`}
              />
            </div>
          </div>
    )
}
