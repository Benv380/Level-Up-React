import { Helmet } from "react-helmet";

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Página Login" />
      </Helmet>
      <main class="d-flex justify-content-center align-items-center">
        <div class="w-50 w-md-25 text-center">
          <h2>Inicio de sesión</h2>
          <div class="mb-3">
            <label for="usuario">Usuario:</label>
            <input
              type="text"
              name="usuario"
              id="usuario"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="contraseña">Contraseña:</label>
            <input
              type="password"
              name="contraseña"
              id="contrasena"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <button id="btnLogin" class="btn button" type="button">
              Login
            </button>
          </div>
        </div>
      </main>

      <div
        class="modal fade"
        id="loginError"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Error
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Usuario o contraseña incorrecta</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}