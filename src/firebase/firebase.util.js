import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAf3j68U6ICfiQ0D4vMaTBJnEs1Rqq2vC8",
    authDomain: "react-crown-db-11392.firebaseapp.com",
    databaseURL: "https://react-crown-db-11392.firebaseio.com",
    projectId: "react-crown-db-11392",
    storageBucket: "react-crown-db-11392.appspot.com",
    messagingSenderId: "580790482330",
    appId: "1:580790482330:web:fdd35c4da7e7a6a1143623",
    measurementId: "G-Z3S88J8TDP"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;