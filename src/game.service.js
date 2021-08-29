import levels from './levels.config'
import messageStore from './store/message'
import runtimeStore from './store/runtime'

class Game {
    isEventsRunning = false
    showTimeoutId = null
    hideTimeoutId = null
    killAnimationDuration = 500
    unkillAnimationDelay = 200

    constructor ({
        messageStore,
        runtimeStore
    }) {
        this.messageStore = messageStore
        this.runtimeStore = runtimeStore
        console.log('game::::::', this)
    }

    getHolesCount () {
        return this.runtimeStore.holeCount
    }

    getLevel () {
        return this.runtimeStore.currentLevel
    }

    getTimeRange (min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min))
    }

    generateEvent () {
        const showTime = this.getTimeRange(200, 3000)
        const stayTime = this.getTimeRange(500, 4000)
        const hideTime = showTime + stayTime
        const activeHole = Math.round(Math.random() * (this.runtimeStore.holeCount - 1))
        return {
            showTime,
            stayTime,
            hideTime, 
            activeHole
        } 
    }

    nextLevel () {
        this.runtimeStore.setNextLevel()
        
        this.showMessage({
            text: `Level ${this.runtimeStore.level}!!!`, 
            status: 'success'
        })
        setTimeout(() => {
            this.hideMessage()
            this.runtimeStore.generateMtx();
            this.runEvents()
        }, 1500)
    }

    sucessState (score, item) {
        this.kill(item.num)

        if (score >= levels[this.runtimeStore.level].scoreToNext) {
            setTimeout(() => {
                this.nextLevel()
                this.clearEvents()
            }, this.unkillAnimationDelay)
            
            return
        }

        this.clearEvents()
        setTimeout(() => {
            this.hide(item.num)
            this.runEvents()
            setTimeout(() => this.unkill(item.num), this.unkillAnimationDelay)
        }, this.killAnimationDuration)
    }

    showMessage(message) {
        this.runtimeStore.resetMtx();
        this.messageStore.setMessage(message)
    }

    hideMessage() {
        this.messageStore.resetMessage()
    }

    missState (item) {
        this.miss(item.num)
        setTimeout(() => this.unMiss(item.num), this.unkillAnimationDelay)
    }

    kill (num) {
        this.runtimeStore.setMtxProp(num, 'isKilled', true)
    }

    unkill (num) {
        this.runtimeStore.setMtxProp(num, 'isKilled', false)
    }

    hide (num) {
        this.runtimeStore.setMtxProp(num, 'active', false)
    }

    show (num) {
        this.runtimeStore.setMtxProp(num, 'active', true)
    }

    miss (num) {
        this.runtimeStore.setMtxProp(num, 'isMissed', true)
    }

    unMiss (num) {
        this.runtimeStore.setMtxProp(num, 'isMissed', false)
    }

    clearEvents() {
        clearTimeout(this.showTimeoutId)
        clearTimeout(this.hideTimeoutId)
    }

    renderEvent (event, isRender) {
        console.log(`${isRender ? 'show' : 'hide'}::::::`, JSON.stringify(event, null, 2))

        //disable render when game is stopped
        if (isRender && !this.isEventsRunning) {
            this.clearEvents()
            return
        }

        //render event
        if (isRender) {
            this.unkill(event.activeHole)
            this.show(event.activeHole)
            return
        } 

        //unrender event and call new event if not stopped
        this.runtimeStore.setMtxProp(event.activeHole, 'active', false);

        if (!this.isEventsRunning) {
            this.clearEvents()
            return
        }
        this.runEvents()
    }

    runEvents () {
        this.isEventsRunning = true
        const event = this.generateEvent()
        this.showTimeoutId = setTimeout(() => this.renderEvent(event, true), event.showTime)
        this.hideTimeoutId = setTimeout(() => this.renderEvent(event, false), event.hideTime)
    }

    stopEvents () {
        this.isEventsRunning = false
    }
}

export default new Game({
    messageStore,
    runtimeStore
})