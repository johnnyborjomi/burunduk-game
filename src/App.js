import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Auth from './components/Auth/Auth';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import Btn from './components/UI/Btn/Btn';
import HighScores from './components/HighScores/HighScores';

function App({ isGameRun, user }) {
    let highScore;
    if (user.game) {
        highScore = user.game.highScore;
    }
    return (
        <BrowserRouter basename="/burunduk-game/build">
            <Auth>
                {isGameRun ? null : <Header />}
                <Switch>
                    <Route path="/" exact>
                        <div className="page">
                            <HighScores results={highScore} />
                            <Link
                                to="/game"
                                style={{ color: 'white', textAlign: 'center' }}
                            >
                                <Btn size={'lg'} bg={'green'} color={'white'}>
                                    PLAY
                                </Btn>
                            </Link>
                        </div>
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
    user: state.user,
}))(App);
