import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";


// 🔹 Registrar usuario
export const registrarUsuario = async (datos) => {
  const { nombre, numero, fechaNacimiento, email, password } = datos;

  try {
    // 1️⃣ Crear usuario en Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    // Guardar información extra en Firestore
    await setDoc(doc(db, "usuarios", uid), {
      nombre,
      numero,
      fechaNacimiento,
      email,
      creadoEn: new Date()
    });

    return { ok: true, uid };
  } catch (error) {
    console.error("Error al registrar:", error.message);
    return { ok: false, error: error.message };
  }
};

// 🔹 Iniciar sesión
export const iniciarSesion = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    // Obtener los datos del usuario desde Firestore
    const docSnap = await getDoc(doc(db, "usuarios", uid));

    if (docSnap.exists()) {
      return { ok: true, datos: docSnap.data() };
    } else {
      return { ok: false, error: "No se encontraron datos del usuario" };
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    return { ok: false, error: error.message };
  }
};

