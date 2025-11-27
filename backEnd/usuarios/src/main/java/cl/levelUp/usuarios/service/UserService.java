package cl.levelUp.usuarios.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import cl.levelUp.usuarios.model.User;
import cl.levelUp.usuarios.repository.UserRepository;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> findUserById(Long idUsuario) {
        return userRepository.findById(idUsuario);
    }

    public Optional<User> updateUser(Long idUsuario, User detalles) {
        return userRepository.findById(idUsuario).map(u -> {
            u.setUidFirebase(detalles.getUidFirebase());
            u.setNombre(detalles.getNombre());
            u.setApellido(detalles.getApellido());
            u.setEmail(detalles.getEmail());
            u.setIdRol(detalles.getIdRol());
            // fechaCreacion no se toca (la maneja la BD)
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
