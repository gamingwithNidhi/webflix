import firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyDUMA0o8xbGSp5qSlJ5kO3gInduF37QLuY",
    authDomain: "gamingtest-f6b8c.firebaseapp.com",
    databaseURL: "gamingtest-f6b8c",
    projectId: "gamingtest-f6b8c",
    storageBucket: "gamingtest-f6b8c.appspot.com",	
    messagingSenderId: "gamingtest-f6b8c",
    appId: "gamingtest-f6b8c",
    measurementId: "gamingtest-f6b8c"
};

const firebaseapp =firebase.initializeApp(firebaseConfig);
const db =firebaseapp.firestore();
const auth=firebaseapp.auth();

export {auth}
export default db;