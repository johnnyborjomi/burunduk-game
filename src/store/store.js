import { createStore, combineReducers } from 'redux';
import isGameRun from './reducers/game-run';
import auth from './reducers/auth';
import user from './reducers/user';

const rootReducer = combineReducers({
    isGameRun,
    auth,
    user,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
