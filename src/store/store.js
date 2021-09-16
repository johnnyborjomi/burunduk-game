import { createStore, combineReducers } from 'redux';
import isGameRun from './reducers/game-run';
import auth from './reducers/auth';

const rootReducer = combineReducers({
    isGameRun,
    auth,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
