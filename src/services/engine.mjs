import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage' // Import Firebase Storage

const firebaseConfig = {
  apiKey: 'AIzaSyB9iNqgyWoJlzv6xQSJyFNo1GPL1wDGufA',
  authDomain: 'xprintxchange.firebaseapp.com',
  databaseURL: 'https://xprintxchange-default-rtdb.firebaseio.com',
  projectId: 'xprintxchange',
  storageBucket: 'xprintxchange.appspot.com',
  messagingSenderId: '535652105767',
  appId: '1:535652105767:web:c1209c1e4d7b20b87e1802',
  measurementId: 'G-YJTMCBHQX8'
}

// Initialize Firebase
let app = initializeApp(firebaseConfig)
initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()
const storage = getStorage() // Initialize Firebase Storage

export { app, auth, db, storage }
