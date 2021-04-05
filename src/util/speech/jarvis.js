import Speech from './speech'
import Linda from './linda'

export class Jarvis {
    constructor () {
        this.speech = new Speech('en-US', 'female')
        this.linda = new Linda()
    }
}

export default Jarvis
