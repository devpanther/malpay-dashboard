import firebase from 'firebase';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase'
// Initialize Firebase
const config = {
  apiKey: "AIzaSyADADgQO_GLtznH5MCqxx5q6lbXKt8OuXg",
  authDomain: "malpay-web.firebaseapp.com",
  databaseURL: "https://malpay-web.firebaseio.com",
  projectId: "malpay-web",
  storageBucket: "malpay-web.appspot.com",
  messagingSenderId: "551893236402",
  appId: "1:551893236402:web:6d4e75b253da8adc7467ab",
  measurementId: "G-7B42MWXH00"
};


const configFirebase = firebase.initializeApp(config);
const auth = firebase.auth();
const database = firebase.database();
const firestore = firebase.firestore().settings({ timestampsInSnapshots: true })
const rsf = new ReduxSagaFirebase(configFirebase)


const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export default rsf;
export {
  config,
  auth,
  firestore,
  database,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
};