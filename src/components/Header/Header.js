import { connect } from 'react-redux';
import { signOut, getAuth } from '@firebase/auth';
import stl from './Header.module.css';
import Btn from '../../components/UI/Btn/Btn';
import { stopGameCreator } from '../../store/reducers/game';

const Header = ({ authUser, dispatch }) => {
    const auth = getAuth();
    const name = authUser.displayName || authUser.email;

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
const mapSttPrps = (state) => ({ authUser: state.auth.currentUser });
export default connect(mapSttPrps)(Header);
