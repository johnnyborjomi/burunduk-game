import React from 'react'
import stl from './Btn.module.css'

export const Btn = ({handler, btnState}) => {
    return (
        <button 
            className={`${stl.btn} ${btnState ? stl.btn_stop : stl.btn_start}`} 
            onClick={handler}
        >
            {btnState ? 'Stop' : 'Start'}
        </button>
    )
}