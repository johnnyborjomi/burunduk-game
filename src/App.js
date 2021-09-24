import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import Btn from './components/UI/Btn/Btn';

function App() {
    return (
        <BrowserRouter basename="/burunduk-game/build">
            <Auth>
                <Header />
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
            </Auth>
        </BrowserRouter>
    );
}

export default App;
