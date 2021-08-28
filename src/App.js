import { useState, useEffect } from 'react';
import {observer} from 'mobx-react-lite';
import './App.css';
import Game from './game.service';
import {Display} from './components/Display/Display';
import {Btn} from './components/Btn/Btn';
import {Holes} from './components/Holes/Holes';
import {Message} from './components/Messages/Message';
import run from './store/run';
import lvl from './store/level';
import scr from './store/score';


const game = new Game();
const setLevel = lvl.setLevel.bind(lvl);


const App = observer(() => {
  const [mtx, setMtx] = useState(game.generateMtx(game.getHolesCount()));
  const [misses, setMisses] = useState(0);
  const [message, setMessage] = useState({text: '', status: ''});
  const {isRun, toggleIsRun} = run;
  const {score, setScore} = scr;

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

  const holeClickHandler = (item) => {
    if (item.active) {
      setScore.call(scr);
      game.sucessState(score, item);
    } else if (!item.active && isRun) {
      setMisses(miss => miss + 1);
      game.missState(item);
    }
  }

  return (
    <div className={`app ${isRun ? 'running' : ''} `}>
      <Display misses={misses} />
      <Holes holesCount={game.getHolesCount()} mtx={mtx} holeClickHandler={holeClickHandler} />
      <Message message={message} />
      <Btn handler={toggleIsRun.bind(run)} btnState={isRun} />
    </div>
  );
})

export default App;
