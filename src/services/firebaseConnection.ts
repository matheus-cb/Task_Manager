import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBCvde7Aj7vuAcDdSk-5tx0ltz2U5CbymA",
  authDomain: "tarefas-463e3.firebaseapp.com",
  projectId: "tarefas-463e3",
  storageBucket: "tarefas-463e3.appspot.com",
  messagingSenderId: "703705233419",
  appId: "1:703705233419:web:0e2a1eb3247125c45cef0e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };