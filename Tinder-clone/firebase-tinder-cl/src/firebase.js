import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDaF204_Mt-ftzf-voSB6uKDlBRPgS6F9c',
  authDomain: 'fir-tinder-cl-ef47f.firebaseapp.com',
  projectId: 'fir-tinder-cl-ef47f',
  storageBucket: 'fir-tinder-cl-ef47f.appspot.com',
  messagingSenderId: '475349490345',
  appId: '1:475349490345:web:ee18e3077e9b4d1c46e7b8',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db
