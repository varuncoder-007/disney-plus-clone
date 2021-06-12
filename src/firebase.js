import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClkVoXjOjzENhBL_DzNeglAGX_W5G2Pmg",
  authDomain: "dinseyplus-clone.firebaseapp.com",
  projectId: "dinseyplus-clone",
  storageBucket: "dinseyplus-clone.appspot.com",
  messagingSenderId: "1052713778385",
  appId: "1:1052713778385:web:b015bb23077df8f8b3d9f0",
  measurementId: "G-T27YRL658T"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
