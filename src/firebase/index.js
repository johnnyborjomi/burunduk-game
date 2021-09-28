import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    getDocs,
    query,
    where,
    setDoc,
    doc,
    updateDoc,
} from 'firebase/firestore';

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
    const docRef = doc(db, 'users', user.uid);
    await setDoc(docRef, {
        id: user.uid,
        email: user.email,
        name: user.displayName,
        game: {
            highScore: {
                score: 0,
                level: 1,
                misses: 0,
            },
        },
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef;
}

export async function getDbUser(id) {
    try {
        const docSnap = await getDoc(doc(db, 'users', id));
        const user = docSnap.data();
        return user;
    } catch (error) {
        console.log('user/get-user-fail', error);
        return { error, dbUser: null };
    }
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

export async function updateHighScores(results) {
    try {
        const userRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userRef, {
            game: {
                highScore: {
                    score: results.score,
                    level: results.level,
                    misses: results.misses,
                },
            },
        });
        return true;
    } catch (error) {
        console.log('game/update-failed', error);
        return { error };
    }
}

export async function getUsers() {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        return data;
    } catch (error) {
        console.log('game/failed-to-get-users', error);
        return { error };
    }
}

export default fireBaseApp;
