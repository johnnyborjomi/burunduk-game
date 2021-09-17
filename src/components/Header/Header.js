import { connect } from 'react-redux';
import { signOut, getAuth } from '@firebase/auth';
import stl from './Header.module.css';
//todo: stop game on signOut
const Header = ({ authUser }) => {
    const auth = getAuth();
    const name = authUser.displayName || authUser.email;
    return (
        <header className={stl.header}>
            <span className={stl.user_name}>{name}</span>
            <button onClick={() => signOut(auth)}>Sign Out</button>
        </header>
    );
};
const mapSttPrps = (state) => ({ authUser: state.auth.currentUser });
export default connect(mapSttPrps)(Header);
