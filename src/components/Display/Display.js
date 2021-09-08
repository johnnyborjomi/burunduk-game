import React from 'react'
import {Timer} from './Timer/Timer'
import {observer} from 'mobx-react-lite'
import runtime from '../../store/runtime'
import styled from 'styled-components'

const StyledDisplay = styled.div`
padding: 10px 0;
display: flex;
color: white;
flex-wrap: wrap;
justify-content: center;

& > div {
    margin: 0 10px;
}
`


export const Display = observer(() => {
    return (
        <StyledDisplay>
            <Timer />
            <div className="score">
                Score: {runtime.score}
            </div>
            <div className="misses">
                Misses: {runtime.misses}
            </div>
            <div className="level">
                Level: {runtime.level}
            </div>
        </StyledDisplay>
    )
})