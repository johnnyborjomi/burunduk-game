import React, { useEffect, useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

export const Hole = ({item, index, handler}) => {
    console.log('HOLE RENDER!!!!!!!!!!');

    const [isActive, setIsActive] = useState(false);

    const holeRef = useRef(null);

    useEffect(() => {
      document.addEventListener('Badger:action', e => {
        console.log('catch EVEnt::::::', e);
        if (e.detail.activeHole === index) {
          // setIsActive(true);
          holeRef.current.classList.add('active')
        } else {
          // setIsActive(false);
          holeRef.current.classList.remove('active')
        }
      });
    }, []);

    const clickHandler = () => {
      console.log(holeRef.current)
      holeRef.current.classList.toggle('active')
    }

    return (
              <div className={`hole-wrap ${isActive.toString()}`}>
                <div className={`hole ${isActive.toString()}`} ref={holeRef} onClick={handler}>
                  {/* {item.num} */}
                  <br/>
                  {/* {'' + item.active} */}
                </div>
              </div>
      )
}