import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDF97CetO-26ugZDypeSeCE_azO2ZgeL1I",
    authDomain: "notes-app-3cce7.firebaseapp.com",
    projectId: "notes-app-3cce7",
    storageBucket: "notes-app-3cce7.appspot.com",
    messagingSenderId: "954784758254",
    appId: "1:954784758254:web:2e107169d0c0c552d4b6ff"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const notesCollection = collection(db, "notes")