export default function AdminPage() {
  return (
    <div className="container mt-4">
      <h1>Panel de Administración</h1>
      <p className="text-muted">Acceso rápido a los paneles de Swagger:</p>

      <ul className="list-group">
        <li className="list-group-item">
          <a href="http://localhost:8081/swagger-ui/index.html" target="_blank">
            🔑 Usuarios / Correos Admin (Swagger)
          </a>
        </li>

        <li className="list-group-item">
          <a href="http://localhost:8080/swagger-ui/index.html" target="_blank">
            🛒 Productos (Swagger)
          </a>
        </li>

        <li className="list-group-item">
          <a href="http://localhost:8083/swagger-ui/index.html" target="_blank">
            💰 Ventas (Swagger)
          </a>
        </li>
      </ul>
    </div>
  );
}
