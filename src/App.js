import { useState, useEffect } from 'react'
import {observer} from 'mobx-react-lite'
import './App.css'
import game from './game.service'
import {Display} from './components/Display/Display'
import {Btn} from './components/Btn/Btn'
import {Holes} from './components/Holes/Holes'
import {Message} from './components/Messages/Message'
import runtimeStore from './store/runtime'

const App = observer(() => {
  const [mtx, setMtx] = useState(game.generateMtx(game.getHolesCount()))
  const {isRun, toggleIsRun} = runtimeStore

  useEffect(() => {
    game.bindHooks({setMtx})
  }, [])

  useEffect(() => {
    if (isRun) {
      game.runEvents(setMtx)
    } else {
      setMtx(mtx => game.generateMtx(game.getHolesCount()))
      game.stopEvents()
    }
  }, [isRun])

  return (
    <div className={`app ${isRun ? 'running' : ''} `}>
      <Display />
      <Holes holesCount={game.getHolesCount()} mtx={mtx} />
      <Message />
      <Btn handler={toggleIsRun.bind(runtimeStore)} btnState={isRun} />
    </div>
  )
})

export default App
