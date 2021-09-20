import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
    padding: ${(props) => {
        switch (props.size) {
            case 'sm':
                return '3px 10px;';
            case 'lg':
                return '20px 40px;';
            default:
                return '0px 0px;';
        }
    }}
    border: none;
    border-radius: 10px;
    font-weight: bold;
    background: ${(props) => props.bg || 'white'};
    color: ${(props) => props.color || 'black'};
    &:hover {
        cursor: pointer;
    }
`;

const Btn = (props) => {
    return (
        <StyledBtn
            onClick={props.onClick}
            color={props.color}
            bg={props.bg}
            size={props.size || 'sm'}
        >
            {props.children}
        </StyledBtn>
    );
};

export default Btn;
