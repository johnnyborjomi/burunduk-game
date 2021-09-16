const IS_LOGGED = 'IS_LOGGED';

export const loginCreator = (isLogged) => {
    return {
        type: IS_LOGGED,
        isLogged,
    };
};

const defaultState = {
    isLogged: false,
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case IS_LOGGED:
            return { ...state, isLogged: action.isLogged };
        default:
            return state;
    }
};

export default authReducer;
