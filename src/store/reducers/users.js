const SET_USERS = 'SET_USERS';

const defaultState = [];

export const setUsersCreator = (users) => {
    return {
        type: SET_USERS,
        users,
    };
};

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USERS:
            return action.users;
        default:
            return state;
    }
};

export default usersReducer;
