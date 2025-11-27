import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) return <Navigate to="/login" />;

  return usuario.idRol === 2
    ? children
    : <Navigate to="/home" />;
}
