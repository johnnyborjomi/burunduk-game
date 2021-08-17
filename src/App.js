import { useState, useEffect } from 'react';
import './App.css';
import Game from './game.service';
import {Display} from './components/Display/Display';
import {Btn} from './components/Btn/Btn';
import {Holes} from './components/Holes/Holes';
import {Message} from './components/Messages/Message';

const game = new Game();

function App() {
  const [mtx, setMtx] = useState(game.generateMtx(game.getHolesCount()));
  const [isRun, setIsRun] = useState(false);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [level, setLevel] = useState(game.getLevel());
  const [message, setMessage] = useState({text: '', status: ''});

  useEffect(() => {
    game.bindHooks({setLevel, setMtx, setMessage});
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
      game.sucessState(score, item);
    } else if (!item.active && isRun) {
      setMisses(miss => miss + 1);
      game.missState(item);
    }
  }

  return (
    <div className={`app ${isRun ? 'running' : ''} `}>
      <Display score={score} isRun={isRun} misses={misses} level={level} />
      <Holes holesCount={game.getHolesCount()} mtx={mtx} holeClickHandler={holeClickHandler} />
      <Message message={message} />
      <Btn handler={startStopHandler} isRun={isRun} />
    </div>
  );
}

export default App;
