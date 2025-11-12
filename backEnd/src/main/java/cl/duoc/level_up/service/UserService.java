package cl.duoc.level_up.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.duoc.level_up.model.User;
import cl.duoc.level_up.repository.UserRepository;
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

}
