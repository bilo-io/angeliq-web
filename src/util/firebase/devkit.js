import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

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
