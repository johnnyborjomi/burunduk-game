import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import AccountPage from './AccountPage';
import ProfilePage from './ProfilePage';
import Btn from '../UI/Btn/Btn';
import './SettingsPage.css';
import { useState } from 'react';

const SettingsPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);
    const openMenu = () => setIsMenuOpen(true);
    return (
        <div className="settings_page">
            <Btn className="settings_menu_btn" onClick={openMenu}>
                Menu
            </Btn>
            <div className="settings_wrap">
                <div
                    className={`settings_sidebar ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => {
                        setTimeout(closeMenu, 200);
                    }}
                >
                    <NavLink to="/settings/profile">Profile</NavLink>
                    <NavLink to="/settings/account">Account</NavLink>
                </div>

                <div className="settings_content">
                    <Switch>
                        <Route path="/settings/profile">
                            <ProfilePage />
                        </Route>
                        <Route path="/settings/account">
                            <AccountPage />
                        </Route>
                        <Redirect from="/settings" to="/settings/profile" />
                    </Switch>
                </div>
            </div>
            <div
                className={`settings_overlay ${isMenuOpen ? 'open' : ''}`}
                onClick={closeMenu}
            ></div>
        </div>
    );
};

export default SettingsPage;
