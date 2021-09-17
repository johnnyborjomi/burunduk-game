import { signOut, getAuth } from '@firebase/auth';
import stl from './Header.module.css';
//todo: stop game on signOut
const Header = ({ user }) => {
    const auth = getAuth();
    return (
        <header className={stl.header}>
            <span className={stl.user_name}>{user.email}</span>
            <button onClick={() => signOut(auth)}>Sign Out</button>
        </header>
    );
};
export default Header;
