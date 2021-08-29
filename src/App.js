import { useState, useEffect } from 'react';
import {observer} from 'mobx-react-lite';
import './App.css';
import game from './game.service';
import {Display} from './components/Display/Display';
import {Btn} from './components/Btn/Btn';
import {Holes} from './components/Holes/Holes';
import {Message} from './components/Messages/Message';
import run from './store/run';
import display from './store/display';

const App = observer(() => {
  const [mtx, setMtx] = useState(game.generateMtx(game.getHolesCount()));
  const [message, setMessage] = useState({text: '', status: ''});
  const {isRun, toggleIsRun} = run;
  const {setLevel} = display;

  useEffect(() => {
    game.bindHooks({setLevel: setLevel.bind(display), setMtx, setMessage});
  }, [])

  useEffect(() => {
    if (isRun) {
      game.runEvents(setMtx);
    } else {
      setMtx(mtx => game.generateMtx(game.getHolesCount()));
      game.stopEvents();
    }
  }, [isRun]);



  return (
    <div className={`app ${isRun ? 'running' : ''} `}>
      <Display />
      <Holes holesCount={game.getHolesCount()} mtx={mtx} />
      <Message message={message} />
      <Btn handler={toggleIsRun.bind(run)} btnState={isRun} />
    </div>
  );
})

export default App;
