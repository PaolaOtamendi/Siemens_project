import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';


// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADShvPzVvQbH8A-qqbC2wGnQWwgyT_D6w",
    authDomain: "siemenschat-6bdb5.firebaseapp.com",
    projectId: "siemenschat-6bdb5",
    storageBucket: "siemenschat-6bdb5.appspot.com",
    messagingSenderId: "834267203283",
    appId: "1:834267203283:web:b5107ea95d85b77c137626",
    measurementId: "G-P3RK1ZCMC0"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const auth = getAuth(app); */ // Inicializa el servicio de autenticación
// se define el proverdor de autenticacion de cta
export const provider = new GoogleAuthProvider();


