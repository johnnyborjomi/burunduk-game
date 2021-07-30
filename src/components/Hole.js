import React from 'react';

export const Hole = ({item, handler}) => {
    return (
        <div className="hole-wrap" >
          <div className={`hole${item.active ? ' active' : ''}`} onClick={handler}>
            {item.num}
            <br/>
            {'' + item.active}
          </div>
        </div>
      )
}