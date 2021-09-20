import React from 'react';
import stl from './Btn.module.css';
import { connect } from 'react-redux';
import { startGameCreator, stopGameCreator } from '../../store/reducers/game';

const BtnComponent = ({ isRun, startStopHandler }) => {
    return (
        <button
            className={`${stl.btn} ${isRun ? stl.btn_stop : stl.btn_start}`}
            onClick={() => startStopHandler(isRun)}
        >
            {isRun ? 'Stop' : 'Start'}
        </button>
    );
};

const mapSttPrps = (state) => ({ isRun: state.game.isGameRun });
const mapDsptPrps = (dispatch) => {
    return {
        startStopHandler: (isRun) => {
            isRun ? dispatch(stopGameCreator()) : dispatch(startGameCreator());
        },
    };
};

export const StartStopBtn = connect(mapSttPrps, mapDsptPrps)(BtnComponent);
