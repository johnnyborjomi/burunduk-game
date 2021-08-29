import {makeAutoObservable} from 'mobx'

class GameRunTime {
    isRun = false
    mtx = []

    constructor() {
        makeAutoObservable(this)
    }

    toggleIsRun() {
        this.isRun = !this.isRun
    }

    start() {
        this.isRun = true
    }

    stop() {
        this.isRun = false
    }
}

export default new GameRunTime()