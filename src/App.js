import { useState, useEffect } from 'react';
import './App.css';
import Game from './game';
import {Display} from './components/Display';
import {Btn} from './components/Btn';
import {Holes} from './components/Holes';

const game = new Game(9);
let {holeCount} = game;

function App() {
  const [mtx, setMtx] = useState(game.generateMtx(holeCount));
  const [isRun, setIsRun] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isRun) {
      game.runEvents(setMtx);
    } else {
      setMtx(mtx => game.generateMtx(holeCount));
      game.stopEvents();
    }
  }, [isRun]);

  const startStopHandler = () => setIsRun(run => !run);

  const holeClickHandler = (item) => {
    console.log(item);
    if (item.active) setScore(score => score + 1);
  }

  return (
    <div className="app">
      <Display score={score} isRun={isRun} />
      <Holes holeCount={holeCount} mtx={mtx} holeClickHandler={holeClickHandler} />
      <Btn handler={startStopHandler} isRun={isRun} />
    </div>
  );
}

export default App;
