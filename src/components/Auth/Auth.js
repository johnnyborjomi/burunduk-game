import React, { useEffect, useState, createContext } from 'react';
import { connect } from 'react-redux';
import { currentUserCreator } from '../../store/reducers/auth';
import { addUserCreator, removeUserCreator } from '../../store/reducers/user';
import { getDbUser } from '../../firebase';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { Switch, Route, Redirect } from 'react-router-dom';
import Tabs from '../../components/Tabs/Tabs';
import LoginForm from '../../components/Auth/LoginForm';
import RegForm from '../../components/Auth/RegisterForm';
import { AuthContext } from '../../context';

const Auth = ({ dispatch, auth, user, children }) => {
    const [authPending, setAuthPending] = useState(true);
    const fbAuth = getAuth();

    const AuthTabs = [
        {
            text: 'Login',
            el: <LoginForm />,
        },
        {
            text: 'Register',
            el: <RegForm />,
        },
    ];

    useEffect(() => {
        async function handleAuth(user) {
            console.log('AUTH STATE CHANGED');
            if (user) {
                const dbUser = await getDbUser(user.uid);
                dispatch(addUserCreator(dbUser));
            } else {
                dispatch(removeUserCreator());
            }
            dispatch(currentUserCreator(user));
            setAuthPending(false);
        }
        onAuthStateChanged(fbAuth, handleAuth);
    }, []);

    if (authPending) {
        return '...Loading';
    }

    return (
        <AuthContext.Provider value={{ auth, user }}>
            {auth.isLogged ? (
                children
            ) : (
                <Switch>
                    <Route path="/login" exact>
                        <Tabs tabs={AuthTabs} />
                    </Route>
                    <Redirect from="/" to="/login"></Redirect>
                </Switch>
            )}
        </AuthContext.Provider>
    );
};

const mapSttPrps = (state) => ({
    auth: state.auth,
    user: state.user,
});

export default connect(mapSttPrps)(Auth);
