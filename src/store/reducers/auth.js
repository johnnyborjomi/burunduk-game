const CURRENT_USER = 'CURRENT_USER';

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
        case CURRENT_USER:
            if (action.user)
                return { ...state, currentUser: action.user, isLogged: true };
            return { ...state, currentUser: action.user, isLogged: false };
        default:
            return state;
    }
};

export default authReducer;
