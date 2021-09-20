const STOP_GAME = 'STOP_GAME';
const START_GAME = 'START_GAME';
const LEVEL = 'LEVEL';
const SCORE = 'SCORE';
const MISSES = 'MISSES';

export const startGameCreator = () => {
    return {
        type: START_GAME,
    };
};

export const stopGameCreator = () => {
    return {
        type: STOP_GAME,
    };
};

export const scoreCreator = (score) => {
    return {
        type: SCORE,
        score,
    };
};

export const missesCreator = (misses) => {
    return {
        type: MISSES,
        misses,
    };
};

export const levelCreator = (level) => {
    return {
        type: LEVEL,
        level,
    };
};

const defaultState = {
    isGameRun: false,
    score: 0,
    level: 1,
    misses: 0,
};

const GameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case START_GAME:
            return { ...state, isGameRun: true };
        case STOP_GAME:
            return { ...state, isGameRun: false };
        case LEVEL:
            return { ...state, level: action.level };
        case MISSES:
            return { ...state, misses: action.misses };
        case SCORE:
            return { ...state, score: action.score };
        default:
            return state;
    }
};

export default GameReducer;
