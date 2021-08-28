import {makeAutoObservable} from 'mobx';

class GameRun {
    isRun = false;
    
    constructor() {
        makeAutoObservable(this);
    }

    toggleIsRun() {
        this.isRun = !this.isRun;
    }
}

export default new GameRun();