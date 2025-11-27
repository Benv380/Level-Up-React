package cl.levelUp.usuarios.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import cl.levelUp.usuarios.model.User;
import cl.levelUp.usuarios.model.AdminCorreo;
import cl.levelUp.usuarios.repository.UserRepository;
import cl.levelUp.usuarios.repository.AdminCorreoRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;
    private final AdminCorreoRepository adminCorreoRepository;

    public UserService(UserRepository userRepository, AdminCorreoRepository adminCorreoRepository) {
        this.userRepository = userRepository;
        this.adminCorreoRepository = adminCorreoRepository; // 👈 SE AGREGA AQUÍ
    }

    // 👉 FUNCIÓN NUEVA
    private Integer obtenerRolPorEmail(String email) {
        // si el correo está en la tabla ADMIN_CORREOS → ADMIN
        if (adminCorreoRepository.existsByCorreo(email)) {
            return 2; // ADMIN
        }
        return 1; // USER
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // 👉 SE AGREGA ASIGNACIÓN DE ROL AUTOMÁTICO
    public User createUser(User user) {
        Integer rol = obtenerRolPorEmail(user.getEmail());
        user.setIdRol(rol);
        return userRepository.save(user);
    }

    public Optional<User> findUserById(Long idUsuario) {
        return userRepository.findById(idUsuario);
    }

    // 👉 UPDATE TAMBIÉN REASIGNA ROL SI CAMBIAN EL CORREO
    public Optional<User> updateUser(Long idUsuario, User detalles) {
        return userRepository.findById(idUsuario).map(u -> {
            u.setUidFirebase(detalles.getUidFirebase());
            u.setNombre(detalles.getNombre());
            u.setApellido(detalles.getApellido());
            u.setEmail(detalles.getEmail());

            // rol asignado automáticamente segun tabla ADMIN_CORREOS
            Integer nuevoRol = obtenerRolPorEmail(detalles.getEmail());
            u.setIdRol(nuevoRol);

            return userRepository.save(u);
        });
    }

    public boolean deleteUser(Long idUsuario) {
        if (!userRepository.existsById(idUsuario)) {
            return false;
        }
        userRepository.deleteById(idUsuario);
        return true;
    }

    public User findByUidFirebase(String uidFirebase) {
        return userRepository.findByUidFirebase(uidFirebase);
    }
}
