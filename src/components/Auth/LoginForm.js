import React, { useState } from 'react';

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithCustomToken,
} from 'firebase/auth';
import Input from '../UI/Input/Input';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const auth = getAuth();

  const token =
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEyYWZkYjliOGJmZmMyY2M4ZTU4NGQ2ZWE2ODlmYzEwYTg3MGI2NzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYnVydW5kdWstZ2FtZSIsImF1ZCI6ImJ1cnVuZHVrLWdhbWUiLCJhdXRoX3RpbWUiOjE2MzEyMDg0NDksInVzZXJfaWQiOiJPZ3NOZ09kWW9jZE9La0c5cnFVUGhKdElubXQyIiwic3ViIjoiT2dzTmdPZFlvY2RPS2tHOXJxVVBoSnRJbm10MiIsImlhdCI6MTYzMTIwODQ0OSwiZXhwIjoxNjMxMjEyMDQ5LCJlbWFpbCI6Imtla0BrZWsua2VrIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImtla0BrZWsua2VrIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.WuLxZrckH_mSj0Ea6Z1zD1yo5PEqbymHCzDoclfhoYgUmQfOr0p2gWFDcmRhNYRzUCsw3ruGnL_e6YzQMU0aONn4wp2e2vbzGhik5oMvQe9yDKiwfsajAeBnJ2fKtE8OWMx5QUoTStgn5W2e78jmyrvZmHyS_YcyHZY-47ZEf4enwIK3b8hL3SgNVXQe17D6hlI_erD1tyTgR5yEE6jm03I9I-Nu0aWbl6Y-1IC11-yNf8L6O7dCXCBoChWC6JZREYO4VKI5Hz8KjWqmv4vg0COAIor8R7PKoY4se_RoenRpGqYgIaGI2LSNbCJM9pGsYgwh2rF3oZBytJEwaVHbVg';

  function logInWithToken() {
    signInWithCustomToken(token); //.then((arg) => console.log('token loged', arg));
  }

  function logIn({ email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
          //
        }

        if (errorCode === 'auth/user-not-found') {
          //
        }

        setErrorMessage(errorMessage);

        console.log(error);
      });
  }

  return (
    <form
      onSubmit={(event) => {
        setErrorMessage(null);
        logIn({ email, password });

        event.preventDefault();
      }}
    >
      <fieldset>
        <legend>Login</legend>

        <div style={{ color: 'red' }}>{errorMessage}</div>

        <Input label="Name" value={email} onChange={setEmail} />
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={setPassword}
        />

        <div className="form-field">
          <input type="submit" value="Login" />
          <input
            type="button"
            value="log with token"
            onClick={logInWithToken}
          />
        </div>
      </fieldset>
    </form>
  );
};

export default LoginForm;
