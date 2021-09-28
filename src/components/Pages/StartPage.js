import HighScore from '../HighScore/HighScore';
import { Link } from 'react-router-dom';
import Btn from '../UI/Btn/Btn';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context';
import HighScoresTable from '../HighScoresTable/HighScoresTable';

const StartPage = () => {
    const ctx = useContext(AuthContext);

    let highScore;
    if (ctx.user && ctx.user.game) {
        highScore = ctx.user.game.highScore;
    }

    return (
        <div className="page">
            <HighScore results={highScore} />
            <Link to="/game" style={{ color: 'white', textAlign: 'center' }}>
                <Btn size={'lg'} bg={'green'} color={'white'}>
                    PLAY
                </Btn>
            </Link>
            <HighScoresTable />
        </div>
    );
};

export default StartPage;
