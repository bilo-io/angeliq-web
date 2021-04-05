import api from 'util/api'
// FIREBASE
import config from 'apps/schools/firebase.config'
import FirebaseDevKit from 'util/firebase/devkit'
const firebase = FirebaseDevKit(config)
// MISC
const appName = 'slides'
const resource = 'schedules'

export class ScheduleService {
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
    // TODO: deprecate static functions

    static findSchedules = async ({ id, query }) => {
        return await api.GETResource({ appName, resource, id, query })
    }

    static createSchedule = async (data) => {
        return await api.POSTResource({ appName, resource, data })
    }

    static updateSchedule = async (id, data) => {
        return await api.PATCHResource({ appName, resource, id, data })
    }

    static deleteSchedule = async (id) => {
        return await api.DELETEResource({ appName, resource, id })
    }
}

export default ScheduleService
