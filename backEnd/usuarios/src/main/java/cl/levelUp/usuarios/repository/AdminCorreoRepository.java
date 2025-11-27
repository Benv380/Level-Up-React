package cl.levelUp.usuarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cl.levelUp.usuarios.model.AdminCorreo;

public interface AdminCorreoRepository extends JpaRepository<AdminCorreo, Long> {
    boolean existsByCorreo(String correo);
}

