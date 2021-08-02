import levels from './levels.config';

export default class Game {
    isEventsRunning = false;
    showTimeoutId = null;
    hideTimeoutId = null;
    currentLevel = 1;

    //hooks
    setLevel = null;
    setMtxCallback = null;

    constructor () {
        this.holesCount = levels[this.currentLevel].holesCount;
        this.holesMtx = this.generateMtx(this.holesCount);
        console.log('game::::::', this)
    }

    getHolesCount () {
        return this.holesCount;
    }

    getLevel () {
        return this.currentLevel;
    }

    bindHooks ({setLevel}) {
        this.setLevel = setLevel;
    }

    generateMtx (count) {
        return new Array(count).fill('').map((item, i) => ({ active: false, num: i }));
    }

    generateEvent () {
        const showTime = Math.round(Math.random() * 2000);
        const stayTime = Math.round(Math.random() * 5000);
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
        this.runEvents(this.setMtxCallback);
    }

    sucessState (score) {
        if (score >= levels[this.currentLevel].scoreToNext) {
            this.nextLevel();
            this.clearEvents();
            return
        }
        this.clearEvents();
        this.runEvents(this.setMtxCallback);
    }

    clearEvents() {
        clearTimeout(this.showTimeoutId);
        clearTimeout(this.hideTimeoutId);
    }

    sendEvent (event, isRender) {
        console.log(`${isRender ? 'show' : 'hide'}::::::`, JSON.stringify(event, null, 2));

        //disable render when game is stopped
        if (isRender && !this.isEventsRunning) {
            this.clearEvents();
            return;
        }

        //render event
        if (isRender) {
            // this.setMtxCallback(mtx => {
            //     mtx[event.activeHole].active = true;
            //     return [...mtx];
            // });
            const ev = new CustomEvent('Badger:action', {
                detail: {
                    isRender: true,
                    activeHole: event.activeHole
                }
            });
            document.dispatchEvent(ev);

            return;
        } 

        //unrender event and call new event if not stopped
        // this.setMtxCallback(mtx => {
        //     mtx[event.activeHole].active = false;
        //     return [...mtx];
        // });
        const ev = new CustomEvent('Badger:action', {
            detail: {
                isRender: false,
                activeHole: event.activeHole
            }
        });
        document.dispatchEvent(ev);


        if (!this.isEventsRunning) {
            this.clearEvents();
            return;
        }
        this.runEvents(this.setMtxCallback);
    }

    runEvents (_setMtxCb) {
        this.isEventsRunning = true;
        this.setMtxCallback = _setMtxCb;
        const event = this.generateEvent();
        this.showTimeoutId = setTimeout(() => this.sendEvent(event, true), event.showTime);
        this.hideTimeoutId = setTimeout(() => this.sendEvent(event, false), event.hideTime)
    }

    stopEvents () {
        this.isEventsRunning = false;
    }
}