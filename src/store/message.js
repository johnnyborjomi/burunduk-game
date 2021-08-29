import {makeAutoObservable} from 'mobx'

class Message {
    text = ''
    status = ''
    
    constructor() {
        makeAutoObservable(this)
    }

    setMessage(message) {
        this.text = message.text
        this.status = message.status
    }

    resetMessage() {
        this.text = ''
        this.status = ''
    }

    get message() {
        return {
            text: this.text,
            status: this.status
        }
    }
}

export default new Message()