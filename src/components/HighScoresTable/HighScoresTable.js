import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsersThunk } from '../../store/thunk';
import { useMemo } from 'react';
import cls from './HighScoresTable.module.css';

let prevUserScore = { score: 0 };

function useShouldFetchUsers() {
    const user = useSelector((state) => state.user);
    if (!user) return false;
    const userHighScore = user.game.highScore;
    if (userHighScore.score !== prevUserScore.score) {
        prevUserScore = userHighScore;
        return true;
    }
    return false;
}

const HighScoresTable = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const shouldFetchUsers = useShouldFetchUsers();

    useEffect(() => {
        if (!users.length || shouldFetchUsers) {
            console.log('Fetch users');
            (async () => {
                await dispatch(getUsersThunk());
            })();
        }
    }, []);

    const sortedUsers = useMemo(() => {
        console.log('USERS', users);
        return users.sort(
            (a, b) => b.game.highScore.score - a.game.highScore.score,
        );
    }, [users]);

    console.log('RENDER:::::::');

    return (
        <div className="score-table">
            <h3 style={{ textAlign: 'center' }}>Top Players:</h3>
            {sortedUsers.length ? (
                <div className={cls.table}>
                    {sortedUsers.map((user, idx) => {
                        return (
                            <div className={cls.player_row} key={user.id}>
                                <div>
                                    <div>
                                        {idx === 0 ? '🏆' : null} {idx + 1}{' '}
                                    </div>
                                    <strong>
                                        Player: {user.name || user.email}
                                    </strong>
                                </div>
                                <div>
                                    <span>Level: </span>
                                    <span>{user.game.highScore.level}</span>
                                </div>
                                <div>
                                    <span>Score: </span>
                                    <span>{user.game.highScore.score}</span>
                                </div>
                                <div>
                                    <span>Misses: </span>
                                    <span>{user.game.highScore.misses}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                'Loading...'
            )}
        </div>
    );
};

export default HighScoresTable;
