import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Auth from './components/Auth/Auth';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import StartPage from './components/Pages/StartPage';
import SettingsPage from './components/Pages/SettingsPage';

function App({ isGameRun }) {
    return (
        <BrowserRouter basename="/burunduk-game/build">
            <Auth>
                <Header isGameRun={isGameRun} />
                <Switch>
                    <Route path="/" exact>
                        <StartPage />
                    </Route>
                    <Route path="/settings">
                        <SettingsPage />
                    </Route>
                    <Route path="/game">
                        <Game />
                    </Route>
                    <Redirect from="/" to="/"></Redirect>
                </Switch>
            </Auth>
        </BrowserRouter>
    );
}

export default connect((state) => ({
    isGameRun: state.game.isGameRun,
}))(App);
