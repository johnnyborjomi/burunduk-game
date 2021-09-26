import React from 'react';
import stl from './Btn.module.css';
import { connect } from 'react-redux';
import {
    startGameCreator,
    stopGameCreator,
} from '../../../store/reducers/game';
import Game from '../../../service/game.service';

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
            if (isRun) {
                Game.checkAndUpdateHighScores();
                dispatch(stopGameCreator());
            } else {
                dispatch(startGameCreator());
            }
        },
    };
};

export const StartStopBtn = connect(mapSttPrps, mapDsptPrps)(BtnComponent);
