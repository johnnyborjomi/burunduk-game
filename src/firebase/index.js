import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const fireBaseApp = initializeApp({
    apiKey: 'AIzaSyBiY9tiljK0qg73xYodJFJclRE9uW_aWLc',
    authDomain: 'burunduk-game.firebaseapp.com',
    projectId: 'burunduk-game',
    storageBucket: 'burunduk-game.appspot.com',
    messagingSenderId: '499062892902',
    appId: '1:499062892902:web:b542e0b3566cd476a500a7',
});

const auth = getAuth();
const db = getFirestore();

async function createDbUser(user) {
    console.log('DB user create::::::::::', user.uid, user.email);
    const docRef = await addDoc(collection(db, 'users'), {
        id: user.uid,
        email: user.email,
        name: user.displayName,
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef;
}

export async function getDbUser(id) {
    const querySnapshot = await getDocs(collection(db, 'users'));
    console.log('querySnap', querySnapshot);
    const user = querySnapshot.docs
        .find((doc) => {
            return doc.data().id === id;
        })
        .data();
    console.log('gotUser::::', user);
    return user;
}

export async function registerUser(email, pass, playerName) {
    try {
        await createUserWithEmailAndPassword(auth, email, pass);
        if (playerName) {
            await updateProfile(auth.currentUser, {
                displayName: playerName,
            });
        }
        const dbUser = await createDbUser(auth.currentUser);
        return {
            currentUser: auth.currentUser,
            dbUser,
            error: false,
        };
    } catch (error) {
        console.log('user/create-fail', error);
        return { error, dbUser: null };
    }
}

export async function signInUser(email, pass) {
    try {
        await signInWithEmailAndPassword(auth, email, pass);
        console.log('user:::::::', auth.currentUser);
        const dbUser = await getDbUser(auth.currentUser.uid);
        return { currentUser: auth.currentUser, dbUser, error: false };
    } catch (error) {
        console.log('user/sign-fail', error);
        return { error, dbUser: null };
    }
}

export default fireBaseApp;
