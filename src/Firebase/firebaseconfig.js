import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCi91BRk3fZmFsjxI1hFCVMQY2iYA4R4t8",
  authDomain: "olx-ed-95460.firebaseapp.com",
  projectId: "olx-ed-95460",
  storageBucket: "olx-ed-95460.appspot.com",
  messagingSenderId: "659334573329",
  appId: "1:659334573329:web:c51a99422a62981d0730b0",
  measurementId: "G-1DZB0XWE2E"
};

const server = firebase.initializeApp(firebaseConfig)
const auth = server.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}