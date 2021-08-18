import { createStore } from "redux";
import isGameRunReducer  from "./reducers/game-run";

const store = createStore(isGameRunReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;