import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const FirebaseDevKit = (config) => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }

    console.log('firebase.devkit.init:', { config })

    const AUTH = firebase.auth()
    const DB = firebase.database()
    const FIRESTORE = firebase.firestore()
    const STORAGE = firebase.storage()

    return {
        AUTH,
        DB,
        FIRESTORE,
        STORAGE
    }
}

export default FirebaseDevKit
