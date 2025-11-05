// Importa los módulos necesarios
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJEfjw2Ko8SuWdx9TLGTnUWg6ct1iSU10",
  authDomain: "level-up-mobile-1b9f5.firebaseapp.com",
  projectId: "level-up-mobile-1b9f5",
  storageBucket: "level-up-mobile-1b9f5.firebasestorage.app",
  messagingSenderId: "65876150763",
  appId: "1:65876150763:web:3d70053726cabbeef971ae",
  measurementId: "G-3KF0GC8C6R"
};

// Inicializa Firebase
const appFirebase = initializeApp(firebaseConfig);

// 🔹 Inicializa Authentication y Firestore
export const auth = getAuth(appFirebase);
export const db = getFirestore(appFirebase);

// Exporta la app principal por si la necesitas en otros módulos
export default appFirebase;
