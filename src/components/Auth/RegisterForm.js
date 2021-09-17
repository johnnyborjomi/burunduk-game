import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { connect } from 'react-redux';
import { loginCreator } from '../../store/reducers/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

async function createUser(db, user) {
    console.log('user::::::::::', user.uid, user.email);
    try {
        const docRef = await addDoc(collection(db, 'users'), {
            id: user.uid,
            email: user.email,
        });
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

const RegForm = (props) => {
    const auth = getAuth();
    const db = getFirestore();
    console.log('db::::', db);

    const [errorMessage, setErrorMessage] = useState('');
    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const { email, pass } = e.target.elements;
        try {
            const authRes = await createUserWithEmailAndPassword(
                auth,
                email.value,
                pass.value,
            );
            console.log('login:', authRes, 'auth:', auth.currentUser);
            createUser(db, auth.currentUser);
        } catch (err) {
            console.log(err);
            const message = err.code.replace(/auth\/|-/gi, ' ').trim();
            setErrorMessage(message);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <div className="error-message">{errorMessage}</div>
            <fieldset>
                <legend>Register</legend>
                <div className="form-field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="email" />
                </div>
                <div className="form-field">
                    <label>Password</label>
                    <input type="password" name="pass" placeholder="Password" />
                </div>
                <div className="form-field">
                    <input type="submit" value="Register" />
                </div>
            </fieldset>
        </form>
    );
};

export default RegForm;
