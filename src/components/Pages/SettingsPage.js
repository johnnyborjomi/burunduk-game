import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import AccountPage from './AccountPage';
import ProfilePage from './ProfilePage';
import './SettingsPage.css';

const SettingsPage = () => {
    return (
        <div className="settings_page">
            <div className="settings_sidebar">
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
    );
};

export default SettingsPage;
