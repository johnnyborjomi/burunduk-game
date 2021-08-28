import {makeAutoObservable} from 'mobx';

class Score {
    score = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setScore(scr) {
        console.log(this)
        scr ? this.score = scr : this.score++
    }
}

export default new Score();