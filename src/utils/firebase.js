import firebase from 'firebase'
import 'firebase/auth'

import firebaseKeys from '../keys/firebase.keys'

firebase.initializeApp(firebaseKeys)

export default firebase