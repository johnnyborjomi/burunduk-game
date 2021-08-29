import React from 'react'
import {observer} from 'mobx-react-lite'
import stl from './Messages.module.css'
import message from '../../store/message'

export const Message = observer(() => {
    if (!message.text && !message.status) return null
    const isVisible = message.text && message.text.length > 0 && message.status

    return isVisible ? <h1 className={`${stl.message} ${stl[message.status]}`}>{message.text}</h1> : null
})