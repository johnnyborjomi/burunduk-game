import React from 'react';
import stl from './Btn.module.css';
import { connect } from 'react-redux';
import {isGameRunCreator} from '../../store/reducers/game-run';

const BtnComponent = ({isRun, startStopHandler}) => {

    return (
        <button 
            className={`${stl.btn} ${isRun ? stl.btn_stop : stl.btn_start}`} 
            onClick={() => startStopHandler(isRun)}
        >
            {isRun ? 'Stop' : 'Start'}
        </button>
    )
}

const mapSttPrps = state => ({ isRun: state.isGameRun });
const mapDsptPrps = (dispatch) => {
    return { startStopHandler: isRun => dispatch(isGameRunCreator(!isRun)) }
};

export const Btn = connect(mapSttPrps, mapDsptPrps)(BtnComponent);

