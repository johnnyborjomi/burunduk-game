import React, { useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { connect } from 'react-redux';
import {
    getAuth,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import './Form.css';

async function getUser(db, id) {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        console.log('querySnap', querySnapshot);
        const user = querySnapshot.docs
            .find((doc) => {
                console.log(doc, id);
                return doc.data().id === id;
            })
            .data();
        console.log('gotUser::::', user);
        return user;
    } catch (e) {
        console.error('Error getting document: ', e);
    }
}

const LoginForm = (props) => {
    const auth = getAuth();
    const db = getFirestore();

    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const { email, pass } = e.target.elements;
        try {
            const authRes = await signInWithEmailAndPassword(
                auth,
                email.value,
                pass.value,
            );
            // await updateProfile(auth.currentUser, {
            //     displayName: 'Nikuz',
            //     points: '9999',
            // });
            console.log('user:::::::', auth.currentUser);
            getUser(db, auth.currentUser.uid);
        } catch (err) {
            console.log(err);
            const message = err.code.replace(/auth\/|-/gi, ' ').trim();
            setErrorMessage(message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="error-message">{errorMessage}</div>
            <fieldset>
                <legend>Login</legend>
                <div className="form-field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="form-field">
                    <label>Password</label>
                    <input type="password" name="pass" placeholder="Password" />
                </div>
                <div className="form-field">
                    <input type="submit" value="Login" />
                </div>
            </fieldset>
        </form>
    );
};

export default LoginForm;
