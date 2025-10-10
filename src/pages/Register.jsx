export default function Register() {
    return(
        <div>
            <div class="auth-header">
                <h1 class="auth-title">Crear Cuenta</h1>
                <p class="auth-subtitle">Únete a la comunidad Level-Up Gamer</p>
            </div>

            <div id="mensaje" class="mensaje-error" style="display: none;"></div>

            <form id="registerForm" class="auth-form">
                <div class="form-group">
                    <label for="nombre">Nombre Completo</label>
                    <input type="text" id="nombre" class="form-input" required/>
                </div>

                <div class="form-group">
                    <label for="email">Correo Electrónico</label>
                    <input type="email" id="email" class="form-input" required/>
                        <small id="emailHelp" style="color: var(--color-texto-secundario); display: none;">
                            ¡Correo Duoc detectado! Obtendrás 20% de descuento permanente <span class="duoc-badge">DUOC</span>
                        </small>
                </div>

                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <div class="password-container">
                        <input type="password" id="password" class="form-input" required/>
                            <button type="button" class="password-toggle" onclick="togglePassword('password', 'eyeIcon')">
                                <i id="eyeIcon" class="fas fa-eye"></i>
                            </button>
                    </div>
                </div>

                <div class="form-group">
                    <label for="confirmPassword">Confirmar Contraseña</label>
                    <input type="password" id="confirmPassword" class="form-input" required/>
                </div>

                <div class="form-group">
                    <label for="fechaNacimiento">Fecha de Nacimiento</label>
                    <input type="date" id="fechaNacimiento" class="form-input" required/>
                        <small style="color: var(--color-texto-secundario);">Debes ser mayor de 18 años</small>
                </div>

                <div class="checkbox-group">
                    <input type="checkbox" id="terminos" required/>
                        <label for="terminos">Acepto los términos y condiciones</label>
                </div>

                <button type="submit" class="btn-primary">
                    <i class="fas fa-user-plus"></i> Crear Cuenta
                </button>
            </form>

            <div class="auth-footer">
                <p>¿Ya tienes cuenta? <a href="login.html" class="auth-link">Inicia sesión aquí</a></p>
                <p><a href="index.html" class="auth-link">Volver al inicio</a></p>
            </div>
        </div>
    );
}
