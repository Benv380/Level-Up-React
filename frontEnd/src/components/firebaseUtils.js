import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


// // 🔹 Registrar usuario
// export const registrarUsuario = async (datos) => {
//   const { nombre, numero, fechaNacimiento, email, password } = datos;

//   try {
//     // 1️⃣ Crear usuario en Auth
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const uid = userCredential.user.uid;

//     // Guardar información extra en Firestore
//     await setDoc(doc(db, "usuarios", uid), {
//       nombre,
//       numero,
//       fechaNacimiento,
//       email,
//       creadoEn: new Date()
//     });

//     return { ok: true, uid };
//   } catch (error) {
//     console.error("Error al registrar:", error.message);
//     return { ok: false, error: error.message };
//   }
// };

// // 🔹 Iniciar sesión
// export const iniciarSesion = async (email, password) => {
//   try {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         const uid = userCredential.user.uid;

//         // Obtener los datos del usuario desde Firestore
//         const docSnap = await getDoc(doc(db, "usuarios", uid));

//         if (docSnap.exists()) {
//           return { ok: true, datos: docSnap.data() };
//         } else {
//           return { ok: false, error: "No se encontraron datos del usuario" };
//         }
        
//   } catch (error) {
//     console.error("Error al iniciar sesión:", error.message);
//     return { ok: false, error: error.message };
//   }
// };


const API_URL = "http://localhost:8081/usuarios";  //API con uso en login y registro

//registrar usuario backend

export async function registrarUsuario(formData) {
  try {
    // 1) Registrar email y contraseña en Firebase
    const cred = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    const uidFirebase = cred.user.uid; // UID del usuario generado por Firebase

    // 2) Enviar el resto de los datos al backend (Oracle)
    const bodyOracle = {
      uidFirebase,
      nombre: formData.nombre,
      numero: formData.numero,
      fechaNacimiento: formData.fechaNacimiento,
      email: formData.email,
      idRol: 3 // o el rol que tú definas para "cliente"
    };

    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyOracle),
    });

    if (!response.ok) {
      // OPCIONAL: borrar el usuario de Firebase si Oracle falló
      // await cred.user.delete();
      return { ok: false, error: "Error al registrar en Oracle" };
    }

    return { ok: true };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}


// iniciar sesion backend



export async function iniciarSesion(email, password) {
  try {
    // 1) Login Firebase
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const token = await cred.user.getIdToken();
    const uid = cred.user.uid;


    // 2) Obtener datos desde Oracle usando el token
    const res = await fetch(`${API_URL}/by-uid/${uid}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return { ok: false, error: "Usuario no encontrado en Oracle" };
    }

    const datosOracle = await res.json();

    return {
      ok: true,
      datos: datosOracle,
    };

  } catch (error) {
    console.error("Error login:", error);
    return { ok: false, error: error.message };
  }
}

