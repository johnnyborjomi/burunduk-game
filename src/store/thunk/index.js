import {
    updateHighScores,
    getUsers as getDbUsers,
    updateUserName,
} from '../../firebase';
import { highScoresCreator, updateUserNameCreator } from '../reducers/user';
import { setUsersCreator } from '../reducers/users';

export const updateHighScoresThunk = (newhighScore) => {
    return function (dispatch) {
        updateHighScores(newhighScore)
            .then(() => {
                dispatch(highScoresCreator(newhighScore));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const getUsersThunk = () => {
    return function (dispatch) {
        return getDbUsers().then((data) => {
            dispatch(setUsersCreator(data));
        });
    };
};

export const updateUserNameThunk = (newName) => {
    return function (dispatch) {
        updateUserName(newName)
            .then(() => {
                dispatch(updateUserNameCreator(newName));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
