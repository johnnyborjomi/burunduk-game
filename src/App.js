import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { currentUserCreator } from './store/reducers/auth';
import { signOut, getAuth, onAuthStateChanged } from '@firebase/auth';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Game from './components/Game/Game';
import Tabs from './components/Tabs/Tabs';
import LoginForm from './components/Auth/LoginForm';
import RegForm from './components/Auth/RegisterForm';
import Header from './components/Header/Header';

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

function App({ isLoggedIn, user, dispatch }) {
    const auth = getAuth();
    const [authPending, setAuthPending] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            dispatch(currentUserCreator(user));
            setAuthPending(false);
        });
    }, []);

    if (authPending) {
        return '...Loading';
    }

    return (
        <BrowserRouter basename="/burunduk-game/build">
            {isLoggedIn ? (
                <>
                    <Header user={user} />
                    <Switch>
                        <Route path="/" exact>
                            <Link to="/game" style={{ color: 'white' }}>
                                play
                            </Link>
                        </Route>
                        <Route path="/game">
                            <Game />
                        </Route>
                        <Redirect from="/" to="/"></Redirect>
                    </Switch>
                </>
            ) : (
                <Switch>
                    <Route path="/login" exact>
                        <Tabs tabs={AuthTabs} />
                    </Route>
                    <Redirect from="/" to="/login"></Redirect>
                </Switch>
            )}
        </BrowserRouter>
    );
}

const mapSttPrps = (state) => ({
    isLoggedIn: state.auth.isLogged,
    user: state.auth.currentUser,
});

export default connect(mapSttPrps)(App);
