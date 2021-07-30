export default class Game {
    isEventsRunning = false;

    constructor (holeCount) {
        this.holeCount = holeCount;
        this.holesMtx = this.generateMtx(holeCount);
    }

    generateMtx (count) {
        return new Array(count).fill('').map((item, i) => ({ active: false, num: i }));
    }

    generateEvent () {
        const showTime = Math.round(Math.random() * 2000);
        const stayTime = Math.round(Math.random() * 5000);
        const hideTime = showTime + stayTime;
        const activeHole = Math.round(Math.random() * (this.holeCount - 1));
        return {
            showTime,
            stayTime,
            hideTime, 
            activeHole
        } 
    }

    renderEvent (event, isRender, _setMtxCb) {
        console.log(`${isRender ? 'show' : 'hide'}::::::`, JSON.stringify(event, null, 2));

        //disable render when game is stopped
        if (isRender && !this.isEventsRunning) return;

        //render event
        if (isRender) {
            _setMtxCb(mtx => {
                mtx[event.activeHole].active = true;
                return [...mtx];
            });

            return;
        } 

        //unrender event and call new event if not stopped
        _setMtxCb(mtx => {
            mtx[event.activeHole].active = false;
            return [...mtx];
        });

        if (!this.isEventsRunning) return;
        this.runEvents(_setMtxCb);
    }

    runEvents (_setMtxCb) {
        this.isEventsRunning = true;
        const event = this.generateEvent();
        setTimeout(() => this.renderEvent(event, true, _setMtxCb), event.showTime);
        setTimeout(() => this.renderEvent(event, false, _setMtxCb), event.hideTime)
    }

    stopEvents () {
        this.isEventsRunning = false;
    }
}