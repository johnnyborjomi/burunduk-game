import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Game from './components/Game/Game';
import Tabs from './components/Tabs/Tabs';
import LoginForm from './components/Auth/LoginForm';
import RegForm from './components/Auth/RegisterForm';

function App() {
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter basename="/burunduk-game/build">
      {isLoggedIn ? (
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

export default App;
