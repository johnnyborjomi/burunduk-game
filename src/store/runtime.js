import {makeAutoObservable} from 'mobx'
import levels from '../levels.config';
import { v4 as uuid } from 'uuid'

class GameRunTime {
    isRun = false
    level = 1
    score = 0
    misses = 0

    constructor() {
        makeAutoObservable(this)
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

    toggleIsRun() {
        this.isRun = !this.isRun
    }

    start() {
        this.isRun = true
    }

    stop() {
        this.isRun = false
    }

    get holeCount() {
        const count = levels[this.level].holeCount
        console.log('levels', levels)

        console.log('count', count)
        return count
    }
}

export default new GameRunTime()