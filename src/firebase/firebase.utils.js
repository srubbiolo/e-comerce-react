import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDzeyvQ1PTlv9aKB4emkN3XfQ1h5UCI0cg",
  authDomain: "e-comerce-react-rubbiolo.firebaseapp.com",
  databaseURL: "https://e-comerce-react-rubbiolo.firebaseio.com",
  projectId: "e-comerce-react-rubbiolo",
  storageBucket: "e-comerce-react-rubbiolo.appspot.com",
  messagingSenderId: "936756278760",
  appId: "1:936756278760:web:bdbe78e2bb8ed31d9c205d",
  measurementId: "G-CMQ6WTFV7B"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;