import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { currentUserCreator } from './store/reducers/auth';
import { addUserCreator, removeUserCreator } from './store/reducers/user';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { getDbUser } from './firebase/index';
import './App.css';
import Game from './components/Game/Game';
import Tabs from './components/Tabs/Tabs';
import LoginForm from './components/Auth/LoginForm';
import RegForm from './components/Auth/RegisterForm';
import Header from './components/Header/Header';
import Btn from './components/UI/Btn/Btn';

function App({ isLoggedIn, user, dispatch }) {
    const auth = getAuth();
    const [authPending, setAuthPending] = useState(true);

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
        onAuthStateChanged(auth, handleAuth);
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
                                <Btn size={'lg'} bg={'green'} color={'white'}>
                                    play
                                </Btn>
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
