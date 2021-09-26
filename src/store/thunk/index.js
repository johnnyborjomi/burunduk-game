import { updateHighScores } from '../../firebase';
import { highScoresCreator } from '../reducers/user';

export const updateHighScoresThunk = (newhighScore) => {
    console.log('thunk');
    return function (dispatch) {
        console.log('dis', dispatch);
        updateHighScores(newhighScore)
            .then(() => {
                console.log('then');
                dispatch(highScoresCreator(newhighScore));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
