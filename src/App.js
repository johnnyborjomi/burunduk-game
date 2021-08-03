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

  useEffect(() => {
    game.bindHooks({setLevel, setMtx});
  }, [])

  useEffect(() => {
    if (isRun) {
      game.runEvents(setMtx);
    } else {
      setMtx(mtx => game.generateMtx(game.getHolesCount()));
      game.stopEvents();
    }
  }, [isRun]);

  const startStopHandler = () => setIsRun(run => !run);

  const holeClickHandler = (item) => {
    if (item.active) {
      setScore(score => score + 1);
      setMtx(mtx => game.generateMtx(game.getHolesCount()));
      game.sucessState(score);
    } else if (!item.active && isRun) {
      setMisses(miss => miss + 1);
    }
  }

  return (
    <div className="app">
      <Display score={score} isRun={isRun} misses={misses} level={level} />
      <Holes holesCount={game.getHolesCount()} mtx={mtx} holeClickHandler={holeClickHandler} />
      <Btn handler={startStopHandler} isRun={isRun} />
    </div>
  );
}

export default App;
