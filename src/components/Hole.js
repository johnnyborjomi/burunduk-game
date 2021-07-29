import React from 'react';

export const Hole = ({item}) => {
    return (
        <div className="hole-wrap" >
          <div className={`hole${item.acitve ? ' active' : ''}`}>
            {item.num}
            <br/>
            {'' + item.acitve}
          </div>
        </div>
      )
}