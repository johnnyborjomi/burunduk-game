const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const HIGH_SCORES = 'HIGH_SCORES';
const NEW_USER_NAME = 'NEW_USER_NAME';

export const addUserCreator = (user) => {
    return {
        type: ADD_USER,
        user,
    };
};

export const removeUserCreator = () => {
    return {
        type: REMOVE_USER,
    };
};

const defaultState = {
    user: null,
};

export const highScoresCreator = (highScore) => {
    return {
        type: HIGH_SCORES,
        highScore,
    };
};

export const updateUserNameCreator = (newName) => {
    return {
        type: NEW_USER_NAME,
        newName,
    };
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return action.user ? action.user : null;
        case REMOVE_USER:
            return null;
        case HIGH_SCORES:
            return {
                ...state,
                game: {
                    ...state.game,
                    highScore: action.highScore,
                },
            };
        case NEW_USER_NAME:
            return {
                ...state,
                name: action.newName,
            };
        default:
            return state;
    }
};

export default userReducer;
