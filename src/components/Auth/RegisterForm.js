import React from "react";
import {addUser} from '../../firebase/index';

const LoginForm = () => {
    
    const submit = e => {
        e.preventDefault();
        addUser({name: 'petya', password: 'loh'})
    }

    return (
        <form>
            <fieldset>
                <legend>Register</legend>
                <div className="form-field">
                    <label>Name</label>
                    <input type="text" placeholder="Name" />
                </div>
                <div className="form-field">
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="form-field">
                    <input onClick={submit} type="submit" value="Register" />
                </div>
            </fieldset>
        </form>
    )
}

export default LoginForm;