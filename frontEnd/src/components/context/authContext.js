import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);     // usuario Firebase
  const [userBD, setUserBD] = useState(null); // usuario desde tu backend
  const [loading, setLoading] = useState(true);

  // Detecta login/logout de Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (!currentUser) {
        setUserBD(null);
        localStorage.removeItem("usuario");
      }
    });

    return () => unsubscribe();
  }, []);

  // Cargar usuario desde backend según UID de Firebase
  useEffect(() => {
    if (!user) return;

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8081/usuarios/by-uid/${user.uid}`
        );
        setUserBD(res.data);
        localStorage.setItem("usuario", JSON.stringify(res.data));
        console.log("Usuario BD cargado:", res.data);
      } catch (e) {
        console.error("Error cargando usuario desde backend:", e);
      }
    };

    fetchUser();
  }, [user]);

  const logout = async () => {
    await signOut(auth);
    setUserBD(null);
    localStorage.removeItem("usuario");
  };

  return (
    <AuthContext.Provider value={{ user, userBD, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
