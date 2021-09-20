import { createStore, combineReducers } from 'redux';
import game from './reducers/game';
import auth from './reducers/auth';
import user from './reducers/user';

const rootReducer = combineReducers({
    game,
    auth,
    user,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
