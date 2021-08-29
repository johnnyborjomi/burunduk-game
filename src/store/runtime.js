import {makeAutoObservable, makeObservable} from 'mobx'
import levels from '../levels.config';
import { v4 as uuid } from 'uuid'

function generateMtx (count) {
    return new Array(count)
        .fill('')
        .map((item, i) => ({ 
            active: false, 
            num: i,
            id: uuid(),
            isKilled: false,
            isMissed: false
        }))
}

class GameRunTime {
    isRun = false
    level = 1
    score = 0
    misses = 0
    mtx = generateMtx(levels[this.level].holeCount)

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }

    generateMtx() {
        this.mtx = generateMtx(this.holeCount)
    }

    resetMtx() {
        this.mtx = []
    }

    setMtxProp(num, prop, val) {
        this.mtx[num][prop] = val
        //resolve issue with updating
        this.mtx = [...this.mtx]
    }

    setMisses(val) {
        this.setCounter('misses', val)
    }

    setScore(val) {
        this.setCounter('score', val)
    }

    setNextLevel(val) {
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

        console.log('count', count)
        return count
    }
}

export default new GameRunTime()