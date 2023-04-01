// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxrFNU478myqFlEcgDMN1T432xycB90GA",
    authDomain: "quick-quize-b18ed.firebaseapp.com",
    projectId: "quick-quize-b18ed",
    storageBucket: "quick-quize-b18ed.appspot.com",
    messagingSenderId: "321070962435",
    appId: "1:321070962435:web:8930724a4eb361b962bb36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app