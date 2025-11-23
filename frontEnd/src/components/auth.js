import { auth, db } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";


export const registrarUsuario = async (nombre, numero, fechaNacimiento, email, password) => {
  try {
    // Crear usuario en Firebase Authentication
    const credenciales = await createUserWithEmailAndPassword(auth, email, password);
    const uid = credenciales.user.uid;

    // Guardar información adicional en Firestore
    await setDoc(doc(db, "usuarios", uid), {
      nombre,
      numero,
      fechaNacimiento,
      email,
      creadoEn: new Date(),
    });

    return { ok: true, uid };
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return { ok: false, error: error.message };
  }
};

/**
 * Iniciar sesión con correo y contraseña
 */
export const iniciarSesion = async (email, password) => {
  try {
    const credenciales = await signInWithEmailAndPassword(auth, email, password);
    const uid = credenciales.user.uid;

    // Traer datos adicionales del usuario
    const docRef = doc(db, "usuarios", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ok: true, usuario: docSnap.data() };
    } else {
      return { ok: true, usuario: { email } }; 
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return { ok: false, error: error.message };
  }
};

/**
 * Cerrar sesión
 */
export const cerrarSesion = async () => {
  try {
    await signOut(auth);
    return { ok: true };
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    return { ok: false, error: error.message };
  }
};
