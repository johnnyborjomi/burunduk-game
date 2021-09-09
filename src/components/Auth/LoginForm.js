import React from "react";

const LoginForm = () => {
    return (
        <form>
            <fieldset>
                <legend>Login</legend>
                <div className="form-field">
                    <label>Name</label>
                    <input type="text" placeholder="Name" />
                </div>
                <div className="form-field">
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="form-field">
                    <input type="submit" value="Login" />
                </div>
            </fieldset>
        </form>
    )
}

export default LoginForm;