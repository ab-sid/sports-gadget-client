// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDitbGzhV9hYY6REh41E_dJvYVEtRsw4Mg",
    authDomain: "sports-gadget.firebaseapp.com",
    projectId: "sports-gadget",
    storageBucket: "sports-gadget.appspot.com",
    messagingSenderId: "489306209999",
    appId: "1:489306209999:web:0c318b2614b7adcc6b01ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;