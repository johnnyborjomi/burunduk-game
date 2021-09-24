import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import fireBaseApp from './firebase';
console.log('firebase', fireBaseApp);

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
