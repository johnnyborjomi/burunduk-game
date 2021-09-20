import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import GameService from '../../service/game.service';
import { Display } from '../../components/Display/Display';
import { StartStopBtn } from '../StartStopBtn/StartStopBtn';
import { Holes } from '../../components/Holes/Holes';
import { Message } from '../../components/Messages/Message';

const game = new GameService();

function Game({ isRun, user }) {
    const [mtx, setMtx] = useState(game.generateMtx(game.getHolesCount()));
    const [score, setScore] = useState(0);
    const [misses, setMisses] = useState(0);
    const [level, setLevel] = useState(game.getLevel());
    const [message, setMessage] = useState({ text: '', status: '' });

    useEffect(() => {
        game.bindHooks({ setLevel, setMtx, setMessage });
        return game.stopEvents.bind(game);
    }, []);

    useEffect(() => {
        if (isRun) {
            game.runEvents(setMtx);
        } else {
            setMtx((mtx) => game.generateMtx(game.getHolesCount()));
            game.stopEvents();
        }
    }, [isRun]);

    const holeClickHandler = (item) => {
        if (item.active) {
            setScore((score) => score + 1);
            game.sucessState(score, item);
        } else if (!item.active && isRun) {
            setMisses((miss) => miss + 1);
            game.missState(item);
        }
    };

    return (
        <div className={`app ${isRun ? 'running' : ''} `}>
            <Display
                score={score}
                isRun={isRun}
                misses={misses}
                level={level}
            />
            <Holes
                holesCount={game.getHolesCount()}
                mtx={mtx}
                holeClickHandler={holeClickHandler}
            />
            <Message message={message} />
            <StartStopBtn />
        </div>
    );
}

const mapStateToProps = (state) => ({
    isRun: state.isGameRun,
    user: state.auth.currentUser,
});

export default connect(mapStateToProps)(Game);
