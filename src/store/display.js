import {makeAutoObservable} from 'mobx';

class Display {
    score = 0;
    level = 1;
    misses = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setMisses(val) {
        this.setCounter('misses', val)
    }

    setScore(val) {
        this.setCounter('score', val)
    }

    setLevel(val) {
        this.setCounter('level', val)
    }

    setCounter(name, val) {
        val ? this[name] = val : this[name]++
    }
}

export default new Display();