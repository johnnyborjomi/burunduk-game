import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import GameService from '../../service/game.service';
import Display from '../../components/Display/Display';
import { StartStopBtn } from '../StartStopBtn/StartStopBtn';
import { Holes } from '../../components/Holes/Holes';
import { Message } from '../../components/Messages/Message';

const game = new GameService();

function Game({ isRun, score, misses }) {
    const [mtx, setMtx] = useState(game.generateMtx(game.getHolesCount()));
    const [message, setMessage] = useState({ text: '', status: '' });

    useEffect(() => {
        game.bindHooks({ setMtx, setMessage });
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
            game.sucessState(item, score + 1);
        } else if (!item.active && isRun) {
            game.missState(item, misses + 1);
        }
    };

    return (
        <div className={`app ${isRun ? 'running' : ''} `}>
            <Display />
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
    isRun: state.game.isGameRun,
    score: state.game.score,
    misses: state.game.misses,
    user: state.auth.currentUser,
});

export default connect(mapStateToProps)(Game);
