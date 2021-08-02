import React, { useEffect, useRef } from 'react';

export const Hole = ({item, index, handler}) => {
    console.log('HOLE RENDER!!!!!!!!!!');

    const holeRef = useRef(null);

    useEffect(() => {

      const badgerHandler = e => {
        console.log('REFFFF::::::::', holeRef);

        if (e.detail.activeHole === index) {
          holeRef.current.classList.add('active');
        } else {
          holeRef.current.classList.remove('active');
        }
      }

      document.addEventListener('Badger:action', badgerHandler);

      return () => {
        document.removeEventListener('Badger:action', badgerHandler);
      }
    }, [index]);

    const clickHandler = () => {
      const isActive = holeRef.current.classList.contains('active');
      if (isActive) holeRef.current.classList.remove('active');
      handler(isActive);
    }

    return (
      <div className={`hole-wrap ${''}`}>
        <div className={`hole ${''}`} ref={holeRef} onClick={clickHandler}>
          {/* {item.num} */}
          <br/>
          {/* {'' + item.active} */}
        </div>
      </div>
    )
}