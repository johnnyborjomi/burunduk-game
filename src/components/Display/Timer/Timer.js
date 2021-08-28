import React, {useState, useEffect} from 'react';
import run from '../../../store/run';
import {observer} from 'mobx-react-lite';

let interval = null;

export const Timer = observer(() => {
  const [time, setTime] = useState(0);
  const {isRun} = run;

   useEffect(() => {
      if (isRun) {
        interval = setInterval(() => {
          setTime(prev => prev + 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
    }, [isRun]);

   return <div className="timer">Timer: {time}</div>
})