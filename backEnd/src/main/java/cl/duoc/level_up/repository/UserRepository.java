package cl.duoc.level_up.repository;

import cl.duoc.level_up.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long> {

}
