import { useContext } from 'react';
import { connect } from 'react-redux';
import { signOut, getAuth } from '@firebase/auth';
import stl from './Header.module.css';
import Btn from '../../components/UI/Btn/Btn';
import { stopGameCreator } from '../../store/reducers/game';
import { AuthContext } from '../../context';
//TODO: clear game store on sign out
const Header = ({ dispatch }) => {
    const authCtx = useContext(AuthContext);
    const auth = getAuth();
    const name = authCtx.user.name || authCtx.user.email;

    function signOutHandler() {
        dispatch(stopGameCreator());
        signOut(auth);
    }
    return (
        <header className={stl.header}>
            <span className={stl.user_name}>{name}</span>
            <Btn onClick={signOutHandler}>Sign Out</Btn>
        </header>
    );
};
export default connect()(Header);
