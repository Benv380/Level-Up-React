package cl.levelUp.usuarios.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.levelUp.usuarios.model.AdminCorreo;
import cl.levelUp.usuarios.repository.AdminCorreoRepository;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/admin/correos")
@Tag(name = "Admin Correos", description = "Gestión de correos con rol ADMIN")
public class AdminCorreoController {

    private final AdminCorreoRepository repo;

    public AdminCorreoController(AdminCorreoRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<AdminCorreo> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public ResponseEntity<?> addCorreo(@RequestBody AdminCorreo correo) {
        if (repo.existsByCorreo(correo.getCorreo())) {
            return ResponseEntity.badRequest().body("Correo ya existe");
        }
        return ResponseEntity.ok(repo.save(correo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

