const Form = ({ children }) => {
    return (
        <form onSubmit={handleLogin}>
            <div className="error-message">{errorMessage}</div>
            <fieldset>
                <legend>Login</legend>

                <div className="form-field">
                    <Btn color="white" bg="green" size="lg">
                        Login
                    </Btn>
                </div>
            </fieldset>
        </form>
    );
};

export default Form;
