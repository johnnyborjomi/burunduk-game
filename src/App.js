import { useEffect } from 'react'
import {observer} from 'mobx-react-lite'
import './App.css'
import game from './game.service'
import {Display} from './components/Display/Display'
import {Btn} from './components/Btn/Btn'
import {Holes} from './components/Holes/Holes'
import {Message} from './components/Messages/Message'
import runtimeStore from './store/runtime'

const App = observer(() => {
  const {isRun, toggleIsRun} = runtimeStore

  console.log('storemtx', runtimeStore.mtx)

  useEffect(() => {
    if (isRun) {
      game.runEvents()
    } else {
      game.stopEvents()
    }
  }, [isRun])

  return (
    <div className={`app ${isRun ? 'running' : ''} `}>
      <Display />
      <Holes />
      <Message />
      <Btn handler={toggleIsRun.bind(runtimeStore)} btnState={isRun} />
    </div>
  )
})

export default App
