package cl.levelUp.usuarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cl.levelUp.usuarios.model.User;


public interface UserRepository extends JpaRepository <User, Long> {
    User findByUidFirebase(String uidFirebase);
}


