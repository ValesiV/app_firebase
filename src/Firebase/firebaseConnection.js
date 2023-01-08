import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCl833L4pAxxxeRwnsgCYLcv0zBrNag4Ns",
    authDomain: "projetofirebase-db1a6.firebaseapp.com",
    projectId: "projetofirebase-db1a6",
    storageBucket: "projetofirebase-db1a6.appspot.com",
    messagingSenderId: "876312642552",
    appId: "1:876312642552:web:ea32cfd73ead15cbcdcc0d"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;