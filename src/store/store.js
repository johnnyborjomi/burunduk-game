import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
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
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
