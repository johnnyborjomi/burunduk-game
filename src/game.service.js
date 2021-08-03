import levels from './levels.config';
import { v4 as uuid } from 'uuid';

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

    constructor () {
        this.holesCount = levels[this.currentLevel].holesCount;
        console.log('game::::::', this)
    }

    getHolesCount () {
        return this.holesCount;
    }

    getLevel () {
        return this.currentLevel;
    }

    bindHooks ({setLevel, setMtx}) {
        this.setLevel = setLevel;
        this.setMtxCallback = setMtx;
    }

    generateMtx (count) {
        return new Array(count)
            .fill('')
            .map((item, i) => ({ 
                active: false, 
                num: i,
                id: uuid(),
                isKilled: false
            }));
    }

    getTimeRange (min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }

    generateEvent () {
        const showTime = this.getTimeRange(10, 3000);
        const stayTime = this.getTimeRange(500, 4000);
        const hideTime = showTime + stayTime;
        const activeHole = Math.round(Math.random() * (this.holesCount - 1));
        return {
            showTime,
            stayTime,
            hideTime, 
            activeHole
        } 
    }

    nextLevel () {
        this.currentLevel++;
        this.setLevel(this.currentLevel);
        this.holesCount = levels[this.currentLevel].holesCount;
        this.setMtxCallback(this.generateMtx(this.holesCount));
        this.runEvents();
    }

    sucessState (score, item) {
        this.kill(item.num);

        if (score >= levels[this.currentLevel].scoreToNext) {
            setTimeout(() => {
                this.nextLevel();
                this.clearEvents();
            }, this.unkillAnimationDelay);
            
            return
        }

        this.clearEvents();
        setTimeout(() => {
            this.hide(item.num)
            this.runEvents();
            setTimeout(() => this.unkill(item.num), this.unkillAnimationDelay);
        }, this.killAnimationDuration);
    }

    kill (num) {
        this.setMtxCallback(mtx => this.mtxSetter(mtx, num, 'isKilled', true));
    }

    unkill (num) {
        this.setMtxCallback(mtx => this.mtxSetter(mtx, num, 'isKilled', false));
    }

    hide (num) {
        this.setMtxCallback(mtx => this.mtxSetter(mtx, num, 'active', false));
    }

    show (num) {
        this.setMtxCallback(mtx => this.mtxSetter(mtx, num, 'active', true));
    }

    mtxSetter (mtx, num, prop, val) {
        mtx[num][prop] = val;
        return [...mtx];
    }

    clearEvents() {
        clearTimeout(this.showTimeoutId);
        clearTimeout(this.hideTimeoutId);
    }

    renderEvent (event, isRender) {
        console.log(`${isRender ? 'show' : 'hide'}::::::`, JSON.stringify(event, null, 2));

        //disable render when game is stopped
        if (isRender && !this.isEventsRunning) {
            this.clearEvents();
            return;
        }

        //render event
        if (isRender) {
            this.unkill(event.activeHole)
            this.show(event.activeHole);
            return;
        } 

        //unrender event and call new event if not stopped
        this.setMtxCallback(mtx => {
            mtx[event.activeHole].active = false;
            return [...mtx];
        });

        if (!this.isEventsRunning) {
            this.clearEvents();
            return;
        }
        this.runEvents();
    }

    runEvents () {
        this.isEventsRunning = true;
        const event = this.generateEvent();
        this.showTimeoutId = setTimeout(() => this.renderEvent(event, true), event.showTime);
        this.hideTimeoutId = setTimeout(() => this.renderEvent(event, false), event.hideTime)
    }

    stopEvents () {
        this.isEventsRunning = false;
    }
}