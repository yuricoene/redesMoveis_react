// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"; 
import {getFirestore} from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyA25hdIsi_McJPUjNapP4OTlWnl1kw9V1g",
    authDomain: "projeto01-26141.firebaseapp.com",
    databaseDomain: "https://projeto01-26141.firebaseio.com", //endereço do banco
    projectId: "projeto01-26141",
    storageBucket: "projeto01-26141.firebasestorage.app",
    messagingSenderId: "613458197628",
    appId: "1:613458197628:web:9f1995157d4e7a6a059df9",
    measurementId: "G-84XKHTCNFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
export const db = getFirestore(app); 

export default app; 