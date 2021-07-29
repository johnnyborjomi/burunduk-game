export default class Game {
    interval = null;
        constructor (holeCount) {
        this.holeCount = holeCount;
        this.holesMtx = this.generateMtx(holeCount);
    }

    generateMtx (count) {
        return new Array(count).fill('').map((item, i) => ({ acitve: false, num: i }));
    }

    generateEvent () {
        const showTime = Math.round(Math.random() * 2000);
        const stayTime = Math.round(Math.random() * 5000);
        const hideTime = showTime + stayTime;
        const activeHole = Math.round(Math.random() * this.holeCount);
        return {
            showTime,
            stayTime,
            hideTime, 
            activeHole
        } 
    }

    runEvents (_setMtxCb) {
        const event = this.generateEvent();
        console.log('::::::: event:',event);
        setTimeout(() => {
            console.log('show::::::: event:',event);
            _setMtxCb(mtx => {
                mtx[event.activeHole].acitve = true;
                return mtx;
            });
        }, event.showTime);
      
        setTimeout(() => {
            _setMtxCb(mtx => {
                console.log('hide::::::: event:',event);
                mtx[event.activeHole].acitve = false;
                return mtx;
            });
            this.runEvents(_setMtxCb);
        }, event.hideTime)
    }
}