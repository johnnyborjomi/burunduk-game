import React from 'react';
import { Timer } from './Timer/Timer';
import stl from './Display.module.css';
import { connect } from 'react-redux';

const Display = ({ score, isRun, misses, level }) => {
    return (
        <div className={stl.display}>
            <Timer isRun={isRun} />
            <div className="score">Score: {score}</div>
            <div className="misses">Misses: {misses}</div>
            <div className="level">Level: {level}</div>
        </div>
    );
};

const mapSttPrps = (state) => ({
    score: state.game.score,
    level: state.game.level,
    misses: state.game.misses,
    isRun: state.game.isGameRun,
});

export default connect(mapSttPrps)(Display);
