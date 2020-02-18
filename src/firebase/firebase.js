import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBmQsAj_cEPH2wHXbuHU2ZUfQYHOVKVSBg",
  authDomain: "malpay2.firebaseapp.com",
  databaseURL: "https://malpay2.firebaseio.com",
  projectId: "malpay2",
  storageBucket: "malpay2.appspot.com",
  messagingSenderId: "846973443085",
  appId: "1:846973443085:web:d29373fd146b46bcfdc944",
  measurementId: "G-GMFLZFH1PD"

};

firebase.initializeApp(config);
const auth = firebase.auth();


const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export {
  auth,
  database,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};