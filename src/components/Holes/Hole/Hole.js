import React from 'react';
import {ReactComponent as BadgerImg} from '../../../icons/badger.svg';
import {ReactComponent as MissIcon} from '../../../icons/cancel.svg';
import './Hole.css';

export const Hole = ({item, index, handler}) => {

  const classes = [];
  if (item.isKilled) classes.push('killed');
  if (item.active) classes.push('active');
  if (item.isMissed) classes.push('missed');

    return (
        <div className="hole_block">
          <div className={`hole_wrap ${classes.join(' ')}`}>
            {item.isMissed ? <MissIcon className="miss_icon" /> : null}
            <div className={`hole ${classes.join(' ')}`} onClick={handler}>
              <BadgerImg 
                className={`badger_img ${classes.join(' ')}`}
              />
            </div>
          </div>
        </div>
    )
}
