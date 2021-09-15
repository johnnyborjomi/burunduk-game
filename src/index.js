import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import { getCollection } from './firebase/index';

getCollection('users');

console.log('index');

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
