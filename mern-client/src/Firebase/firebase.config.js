// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1omKrxCiOITE46qVuKxDzPV4Ac1MUzu0",
    authDomain: "mern-book-inventory-fea4a.firebaseapp.com",
    projectId: "mern-book-inventory-fea4a",
    storageBucket: "mern-book-inventory-fea4a.appspot.com",
    messagingSenderId: "336888680342",
    appId: "1:336888680342:web:45fc670facc25c15f997b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;