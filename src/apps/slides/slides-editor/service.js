import api from 'util/api'
// FIREBASE
import config from 'apps/schools/firebase.config'
import FirebaseDevKit from 'util/firebase/devkit'
const firebase = FirebaseDevKit(config)
// MISC
const appName = 'slides'
const resource = 'slides'

export class SlidesService {
    constructor () {
        console.log(`${this.constructor.name} INIT`)
    }

    create = (data) => {
        console.log(`${this.constructor.name} CREATE`)
        const promise = firebase.FIRESTORE
            .collection(resource)
            .add(data)
            .then(docRef => {
                console.log({ docRef })
            })
            .catch(error => {
                console.log({ error })
            })
            .finally(() => {
            })

        return promise
    }

    getAll = () => {
        console.log(`${this.constructor.name} GET_ALL`)
        const promise = firebase.FIRESTORE
            .collection(resource)
            .get()
            .then(snapshot => {
                const data = []
                snapshot.forEach(doc => {
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                console.log({ data })
                return data
            })
            .catch(error => {
                return error
            })

        return promise
    }
}

export default SlidesService
