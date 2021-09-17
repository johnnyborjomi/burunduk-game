const IS_LOGGED = 'IS_LOGGED';
const CURRENT_USER = 'CURRENT_USER';

export const loginCreator = (isLogged) => {
    return {
        type: IS_LOGGED,
        isLogged,
    };
};

export const currentUserCreator = (user) => {
    return {
        type: CURRENT_USER,
        user,
    };
};

const defaultState = {
    isLogged: false,
    currentUser: null,
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case IS_LOGGED:
            return { ...state, isLogged: action.isLogged };
        case CURRENT_USER:
            if (action.user)
                return { ...state, currentUser: action.user, isLogged: true };
            return { ...state, currentUser: action.user, isLogged: false };
        default:
            return state;
    }
};

export default authReducer;
