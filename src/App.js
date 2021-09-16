import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signOut, getAuth, onAuthStateChanged } from '@firebase/auth';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Game from './components/Game/Game';
import Tabs from './components/Tabs/Tabs';
import LoginForm from './components/Auth/LoginForm';
import RegForm from './components/Auth/RegisterForm';

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

function App() {
    const auth = getAuth();
    const [currentUser, setCurrentUser] = useState(null);
    const [authPending, setAuthPending] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
            setAuthPending(false);
        });
    }, []);

    if (authPending) {
        return '...Loading';
    }

    return (
        <BrowserRouter basename="/burunduk-game/build">
            {currentUser ? (
                <>
                    <header className="header">
                        <button onClick={() => signOut(auth)}>Sign Out</button>
                    </header>
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

// const mapSttPrps = (state) => ({ isLoggedIn: state.auth.isLogged });

export default App;
