import React from 'react'
import {ReactComponent as BadgerImg} from '../../../icons/badger.svg'
import {ReactComponent as MissIcon} from '../../../icons/cancel.svg'
import './Hole.css'
import display from '../../../store/display'
import game from '../../../game.service'
import runtime from '../../../store/runtime'


export const Hole = ({item}) => {

  const {score, setScore, setMisses} = display
  const {isRun} = runtime

  const classes = []
  if (item.isKilled) classes.push('killed')
  if (item.active) classes.push('active')
  if (item.isMissed) classes.push('missed')

  const holeClickHandler = (item) => {
    if (item.active) {
      setScore.call(display)
      game.sucessState(score, item)
    } else if (!item.active && isRun) {
      setMisses.call(display)
      game.missState(item)
    }
  }

  return (
      <div className="hole_block">
        <div className={`hole_wrap ${classes.join(' ')}`}>
          {item.isMissed ? <MissIcon className="miss_icon" /> : null}
          <div className={`hole ${classes.join(' ')}`} onClick={() => holeClickHandler(item)}>
            <BadgerImg 
              className={`badger_img ${classes.join(' ')}`}
            />
          </div>
        </div>
      </div>
  )
}
