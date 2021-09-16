import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const fireBaseApp = initializeApp({
    apiKey: 'AIzaSyBiY9tiljK0qg73xYodJFJclRE9uW_aWLc',
    authDomain: 'burunduk-game.firebaseapp.com',
    projectId: 'burunduk-game',
    storageBucket: 'burunduk-game.appspot.com',
    messagingSenderId: '499062892902',
    appId: '1:499062892902:web:b542e0b3566cd476a500a7',
});

export default fireBaseApp;
