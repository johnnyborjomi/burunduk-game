import React, {useState, useEffect} from 'react';

let interval = null;

export const Timer = ({isRun}) => {
  const [time, setTime] = useState(0);

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
}