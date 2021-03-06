import levels from '../levels.config';
import { v4 as uuid } from 'uuid';
import store from '../store/store';
import {
    levelCreator,
    missesCreator,
    scoreCreator,
} from '../store/reducers/game';
import { updateHighScoresThunk } from '../store/thunk';

const dispatch = store.dispatch;

export default class Game {
    isEventsRunning = false;
    showTimeoutId = null;
    hideTimeoutId = null;
    currentLevel = 1;
    killAnimationDuration = 500;
    unkillAnimationDelay = 200;

    //hooks
    setLevel = null;
    setMtxCallback = null;

    constructor() {
        this.holesCount = levels[this.currentLevel].holesCount;
        console.log('game::::::', this);
    }

    getHolesCount() {
        return this.holesCount;
    }

    getLevel() {
        return this.currentLevel;
    }

    bindHooks({ setMtx, setMessage }) {
        this.setMtxCallback = setMtx;
        this.setMessage = setMessage;
    }

    generateMtx(count) {
        return new Array(count).fill('').map((item, i) => ({
            active: false,
            num: i,
            id: uuid(),
            isKilled: false,
            isMissed: false,
        }));
    }

    getTimeRange(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }

    generateEvent() {
        const showTime = this.getTimeRange(200, 3000);
        const stayTime = this.getTimeRange(500, 4000);
        const hideTime = showTime + stayTime;
        const activeHole = Math.round(Math.random() * (this.holesCount - 1));
        return {
            showTime,
            stayTime,
            hideTime,
            activeHole,
        };
    }

    nextLevel() {
        this.currentLevel++;
        dispatch(levelCreator(this.currentLevel));
        Game.checkAndUpdateHighScores();
        this.holesCount = levels[this.currentLevel].holesCount;
        this.showMessage({
            text: `Level ${this.currentLevel}!!!`,
            status: 'success',
        });
        setTimeout(() => {
            this.hideMessage();
            this.setMtxCallback(this.generateMtx(this.holesCount));
            this.runEvents();
        }, 1500);
    }

    sucessState(item, score) {
        this.kill(item.num);
        // this.dispatchEvent('Game:score', score);
        dispatch(scoreCreator(score));

        if (score >= levels[this.currentLevel].scoreToNext) {
            setTimeout(() => {
                this.nextLevel();
                this.clearEvents();
            }, this.unkillAnimationDelay);

            return;
        }

        this.clearEvents();
        setTimeout(() => {
            this.hide(item.num);
            this.runEvents();
            setTimeout(() => this.unkill(item.num), this.unkillAnimationDelay);
        }, this.killAnimationDuration);
    }

    showMessage(message) {
        this.setMtxCallback([]);
        this.setMessage(message);
    }

    hideMessage() {
        this.setMessage({
            message: '',
            status: '',
        });
    }

    dispatchEvent(eventName, value) {
        const ev = new CustomEvent(eventName, {
            detail: {
                value,
            },
        });
        document.dispatchEvent(ev);
    }

    missState(item, misses) {
        this.miss(item.num);
        // this.dispatchEvent('Game:misses', misses);
        dispatch(missesCreator(misses));
        setTimeout(() => this.unMiss(item.num), this.unkillAnimationDelay);
    }

    kill(num) {
        this.setMtxCallback((mtx) =>
            this.mtxSetter(mtx, num, 'isKilled', true),
        );
    }

    unkill(num) {
        this.setMtxCallback((mtx) =>
            this.mtxSetter(mtx, num, 'isKilled', false),
        );
    }

    hide(num) {
        this.setMtxCallback((mtx) => this.mtxSetter(mtx, num, 'active', false));
    }

    show(num) {
        this.setMtxCallback((mtx) => this.mtxSetter(mtx, num, 'active', true));
    }

    miss(num) {
        this.setMtxCallback((mtx) =>
            this.mtxSetter(mtx, num, 'isMissed', true),
        );
    }

    unMiss(num) {
        this.setMtxCallback((mtx) =>
            this.mtxSetter(mtx, num, 'isMissed', false),
        );
    }

    mtxSetter(mtx, num, prop, val) {
        mtx[num][prop] = val;
        return [...mtx];
    }

    clearEvents() {
        clearTimeout(this.showTimeoutId);
        clearTimeout(this.hideTimeoutId);
    }

    renderEvent(event, isRender) {
        console.log(
            `${isRender ? 'show' : 'hide'}::::::`,
            JSON.stringify(event, null, 2),
        );

        //disable render when game is stopped
        if (isRender && !this.isEventsRunning) {
            this.clearEvents();
            return;
        }

        //render event
        if (isRender) {
            this.unkill(event.activeHole);
            this.show(event.activeHole);
            return;
        }

        //unrender event and call new event if not stopped
        this.setMtxCallback((mtx) => {
            mtx[event.activeHole].active = false;
            return [...mtx];
        });

        if (!this.isEventsRunning) {
            this.clearEvents();
            return;
        }
        this.runEvents();
    }

    runEvents() {
        this.isEventsRunning = true;
        const event = this.generateEvent();
        this.showTimeoutId = setTimeout(
            () => this.renderEvent(event, true),
            event.showTime,
        );
        this.hideTimeoutId = setTimeout(
            () => this.renderEvent(event, false),
            event.hideTime,
        );
    }

    stopEvents() {
        this.isEventsRunning = false;
        // this.checkAndUpdateHighScores();
    }

    static checkAndUpdateHighScores() {
        const state = store.getState();
        if (!state.game || !state.user) return;
        if (state.game.score > state.user.game.highScore.score) {
            const newhighScore = {
                level: state.game.level,
                score: state.game.score,
                misses: state.game.misses,
            };
            dispatch(updateHighScoresThunk(newhighScore));
        }
    }
}
