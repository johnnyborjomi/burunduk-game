import React from 'react'
import styled from 'styled-components';

const StyledBtn = styled.button`
padding: 12px 30px;
margin-top: 20px;
border: none;
border-radius: 10px;
font-weight: bold;
background: ${props => props.btnState ? 'var(--c-red)' : 'chartreuse'};
&:focus {
    cursor: pointer;
}
`

export const Btn = (props) => {
    return (
    <StyledBtn 
        onClick={props.handler} 
        btnState={props.btnState}>
            {props.btnState ? 'Stop' : 'Start'}
    </StyledBtn>)
}