import {observer} from 'mobx-react-lite'
import './App.css'
import game from './game.service'
import {Display} from './components/Display/Display'
import {Btn} from './components/Btn/Btn'
import {Holes} from './components/Holes/Holes'
import {Message} from './components/Messages/Message'
import runtimeStore from './store/runtime'

const App = observer(() => {

  return (
    <div className={`app ${runtimeStore.isRun ? 'running' : ''} `}>
      <Display />
      <Holes />
      <Message />
      <Btn handler={game.toggleGameRun.bind(game)} btnState={runtimeStore.isRun} />
    </div>
  )
})

export default App
