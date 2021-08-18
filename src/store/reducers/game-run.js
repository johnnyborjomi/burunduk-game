const IS_GAME_RUN = 'IS_GAME_RUN';

export const isGameRunCreator = (isGameRun) => {
    return {
        type: IS_GAME_RUN,
        isGameRun
    }
}

const defaultState = {
    isGameRun: false
}

const isGameRunReducer = (state = defaultState, action) => {
    switch(action.type) {
        case IS_GAME_RUN :
            return { ...state, isGameRun: action.isGameRun };
        default:
            return state;
    }
}

export default isGameRunReducer;