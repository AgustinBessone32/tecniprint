
import { initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
 

const firebaseConfig = {
  apiKey: "AIzaSyC7c64_DNOchsr4YgJ8T5AKwl_pku-uEPo",
  authDomain: "tecniprint-529a5.firebaseapp.com",
  projectId: "tecniprint-529a5",
  storageBucket: "tecniprint-529a5.appspot.com",
  messagingSenderId: "150404564467",
  appId: "1:150404564467:web:03e98cf066d8cd3dbbfe86"
};

export let fire = initializeApp(firebaseConfig)

export let auth = getAuth(fire)

export let fireDB = getFirestore()