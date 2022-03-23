// import firebase from 'firebase'
import firebase from 'firebase/compat/app'
// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    // apiKey: 'AIzaSyBS0WmPiJF7kzxkn815nFZPE4EYDl9QNpY',
    // authDomain: 'scalar-dev-contact-form.firebaseapp.com',
    // projectId: 'scalar-dev-contact-form',
    // storageBucket: 'scalar-dev-contact-form.appspot.com',
    // messagingSenderId: '935666241000',
    // appId: '1:935666241000:web:38a7f30758f9a7c4ca685d',
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
export default firebase

// export const db = getFirestore()
