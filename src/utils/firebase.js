import * as firebase from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAkNJdM6ipLqsr9Do7bYdPvXOEhGUsLQVQ",
    authDomain: "clone-10cdc.firebaseapp.com",
    projectId: "clone-10cdc",
    storageBucket: "clone-10cdc.appspot.com",
    messagingSenderId: "606884886291",
    appId: "1:606884886291:web:6706936cd1cd1477694ce6"
  };

    firebase.initializeApp(firebaseConfig);
  
    const db = getFirestore();
    const auth = getAuth();

    export {db, auth};