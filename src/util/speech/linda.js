export class Linda {
    constructor (lang, handler) {
        // eslint-disable-next-line new-cap, no-undef
        this.recognition = new webkitSpeechRecognition()
        this.recognition.continuous = true
        this.recognition.interimResults = true
        this.recognition.lang = lang
        this.recognition.onresult = function (event) {
            handler(event)
        }
        console.log('recognition initialised: ', this.recognition)
    }

    listen () {
        this.recognition.start()
        console.log('linda started listening')
    }

    stop () {
        this.recognition.stop()
        console.log('linda stopped listening')
    }
}

export default Linda
