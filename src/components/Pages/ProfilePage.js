import { useState } from 'react';
import { connect } from 'react-redux';
import Btn from '../UI/Btn/Btn';
import Input from '../UI/Input/Input';
import { updateUserNameThunk } from '../../store/thunk';

const ProfilePage = ({ user, dispatch }) => {
    const [playerName, setPlayerName] = useState(user.name);
    const updateUserName = () => dispatch(updateUserNameThunk(playerName));
    return (
        <div className="setting-content">
            <h4>Profile</h4>
            <p></p>
            <Input
                value={playerName}
                onChange={(val) => setPlayerName(val)}
                label={'Player name'}
            />
            <Btn bg="green" color="white" onClick={updateUserName}>
                Update Profile
            </Btn>
        </div>
    );
};

function mapSttPrps(state) {
    return { user: state.user };
}

export default connect(mapSttPrps)(ProfilePage);
