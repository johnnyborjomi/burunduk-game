import {makeAutoObservable} from 'mobx';

class Level {
    level = 1;

    constructor() {
        makeAutoObservable(this);
    }

    setLevel(lvl) {
        console.log('level:::::', this)
        lvl ? this.level = lvl : this.level++;
    }
}

export default new Level();