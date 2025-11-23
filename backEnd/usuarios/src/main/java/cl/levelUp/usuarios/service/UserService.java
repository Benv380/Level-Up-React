package cl.levelUp.usuarios.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.levelUp.usuarios.model.User;
import cl.levelUp.usuarios.repository.UserRepository;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User findUserById(Long id_usuario) {
        return userRepository.findById(id_usuario).get();
    }

    public User findByUidFirebase(String uidFirebase) {
    return userRepository.findByUidFirebase(uidFirebase);
}

}
