import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Auth from './components/Auth/Auth';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import StartPage from './components/Pages/StartPage';

function App({ isGameRun }) {
    return (
        <BrowserRouter basename="/burunduk-game/build">
            <Auth>
                {isGameRun ? null : <Header />}
                <Switch>
                    <Route path="/" exact>
                        <StartPage />
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
