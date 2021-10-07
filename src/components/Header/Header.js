import { useContext } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { signOut, getAuth } from '@firebase/auth';
import stl from './Header.module.css';
import Btn from '../../components/UI/Btn/Btn';
import { clearGameCreator, stopGameCreator } from '../../store/reducers/game';
import { AuthContext } from '../../context';
import Game from '../../service/game.service';
import Title from '../UI/Title/Title';
//TODO: clear game store on sign out
const Header = ({ dispatch, isGameRun }) => {
    const location = useLocation();
    const showBackBtn = location.pathname !== '/';
    const authCtx = useContext(AuthContext);
    const auth = getAuth();
    const name = authCtx.user ? authCtx.user.name || authCtx.user.email : null;

    function signOutHandler() {
        Game.checkAndUpdateHighScores();
        dispatch(stopGameCreator());
        dispatch(clearGameCreator());
        signOut(auth);
    }
    return (
        <header className={stl.header}>
            <div className={stl.header_top_row}>
                <Title>Kill the budger!!!</Title>
            </div>
            {authCtx.user && !isGameRun ? (
                <div className={stl.header_bottom_row}>
                    {showBackBtn ? <Link to="/">⬅ Back</Link> : <span></span>}
                    <div className="df aic">
                        <Link to="/settings" className={stl.user_name}>
                            {name}
                        </Link>
                        <Btn onClick={signOutHandler}>Sign Out</Btn>
                    </div>
                </div>
            ) : null}
        </header>
    );
};

function mapStToPrps(state, ownProps) {
    return { isGameRun: ownProps.isGameRun };
}
export default connect(mapStToPrps)(Header);
