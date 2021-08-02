import { useState, useEffect } from 'react';
import './App.css';
import Game from './game.service';
import {Display} from './components/Display';
import {Btn} from './components/Btn';
import {Holes} from './components/Holes';

const game = new Game();

function App() {
  const [mtx, setMtx] = useState(game.generateMtx(game.getHolesCount()));
  const [isRun, setIsRun] = useState(false);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [level, setLevel] = useState(game.getLevel());
  console.log('APP RENDER!!!!!!!!!!');

  useEffect(() => {
    game.bindHooks({setLevel, setMtx});
  }, [])

  useEffect(() => {
    if (isRun) {
      game.runEvents();
    } else {
      game.stopEvents();
    }
  }, [isRun]);

  const startStopHandler = () => setIsRun(run => !run);

  const holeClickHandler = (isActive) => {
    if (isActive) {
      setScore(score => score + 1);
      game.sucessState(score);
    } else if (!isActive && isRun) {
      setMisses(miss => miss + 1);
    }
  }

  return (
    <div className="app">
      <Display score={score} isRun={isRun} misses={misses} level={level} />
      <Holes mtx={mtx} holeClickHandler={holeClickHandler} />
      <Btn handler={startStopHandler} isRun={isRun} />
    </div>
  );
}

export default App;
