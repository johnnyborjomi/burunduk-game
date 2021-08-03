import React from 'react';
import {ReactComponent as BadgerImg} from '../icons/badger.svg';
import {ReactComponent as MissIcon} from '../icons/cancel.svg';

export const Hole = ({item, index, handler}) => {

  const classes = [];
  if (item.isKilled) classes.push('killed');
  if (item.active) classes.push('active');
  if (item.isMissed) classes.push('missed');

    return (
          <div className={`hole-wrap ${classes.join(' ')}`}>
            {item.isMissed ? <MissIcon className="miss-icon" /> : null}
            <div className={`hole ${classes.join(' ')}`} onClick={handler}>
              <BadgerImg 
                className={`badger-img ${classes.join(' ')}`}
              />
            </div>
          </div>
    )
}
