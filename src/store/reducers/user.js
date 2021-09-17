const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

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

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return action.user;
        case REMOVE_USER:
            return null;
        default:
            return state;
    }
};

export default authReducer;
