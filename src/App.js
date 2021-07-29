import { useState, useEffect, useMemo } from 'react';
import './App.css';
import Game from './game';
import {Timer} from './components/Timer';
import {Btn} from './components/Btn';
import {Hole} from './components/Hole';

const game = new Game(9);
let {interval, holeCount} = game;

function App() {
  const [mtx, setMtx] = useState(game.generateMtx(holeCount));
  const [time, setTime] = useState(0);
  const [isRun, setIsRun] = useState(false);
  const [eventsCount, setEventsCount] = useState(0);

  useEffect(() => {
    if (isRun) {
      game.runEvents(setMtx);
    } else {
      setMtx(mtx => game.generateMtx(holeCount));
    }
  }, [isRun, eventsCount]);

  useEffect(() => {
    if (isRun) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }, [isRun]);

  const startStopHandler = () => {
    setIsRun(run => !run)
  }

  return (
    <div className="app">
      <div className={`field cols-${holeCount}`}>
        { mtx.map(item => <Hole key={item.num + '' + item.acitve} item={item} />) }
      </div>
      <Btn handler={startStopHandler} isRun={isRun} />
      <Timer time={time}/>
    </div>
  );
}

export default App;
