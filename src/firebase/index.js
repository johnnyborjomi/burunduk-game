import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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

async function createDbUser(db, user) {
    console.log('DB user create::::::::::', user.uid, user.email);
    const docRef = await addDoc(collection(db, 'users'), {
        id: user.uid,
        email: user.email,
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef;
}

async function getDbUser(db, id) {
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

export async function createUser(email, pass) {
    try {
        const authRes = await createUserWithEmailAndPassword(auth, email, pass);
        console.log('login:', authRes, 'auth:', auth.currentUser);
        const dBuser = await createDbUser(db, auth.currentUser);
        return {
            currentUser: auth.currentUser,
            dBuser,
        };
    } catch (err) {
        console.log('user/create-fail', err);
        return { error: true, err };
    }
}

export async function signInUser(email, pass) {
    try {
        const authRes = await signInWithEmailAndPassword(auth, email, pass);
        // await updateProfile(auth.currentUser, {
        //     displayName: 'Nikuz',
        //     points: '9999',
        // });
        console.log('user:::::::', auth.currentUser);
        const user = await getDbUser(db, auth.currentUser.uid);
        return user;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export default fireBaseApp;
