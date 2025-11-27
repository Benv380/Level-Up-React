package cl.levelUp.usuarios.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.levelUp.usuarios.model.User;
import cl.levelUp.usuarios.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/usuarios")
@Tag(name = "Usuarios", description = "Operaciones sobre usuarios del sistema")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Operation(summary = "Obtener todos los usuarios")
    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        List<User> users = userService.getAllUsers();
        if (users.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No users found.");
        }
        return ResponseEntity.ok(users);
    }

    @Operation(summary = "Obtener un usuario por su ID")
    @GetMapping("/{idusuario}")
    public ResponseEntity<?> getUserById(@PathVariable Long idusuario) {

        var optionalUser = userService.findUserById(idusuario);

        if (optionalUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("User not found with id " + idusuario);
        }

        return ResponseEntity.ok(optionalUser.get());
    }

    @Operation(summary = "Crear un nuevo usuario")
    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @Operation(summary = "Actualizar un usuario existente")
    @PutMapping("/{idusuario}")
    public ResponseEntity<?> updateUser(@PathVariable Long idusuario,
                                        @RequestBody User user) {

        var updatedOpt = userService.updateUser(idusuario, user);

        if (updatedOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No se pudo actualizar. User no encontrado con id " + idusuario);
        }

        return ResponseEntity.ok(updatedOpt.get());
    }

    @Operation(summary = "Eliminar un usuario")
    @DeleteMapping("/{idusuario}")
    public ResponseEntity<?> deleteUser(@PathVariable Long idusuario) {

        boolean deleted = userService.deleteUser(idusuario);

        if (!deleted) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No se pudo eliminar. User no encontrado con id " + idusuario);
        }

        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Obtener usuario por UID de Firebase")
    @GetMapping("/by-uid/{uid}")
    public ResponseEntity<?> getUserByUid(@PathVariable String uid) {
        User user = userService.findByUidFirebase(uid);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        return ResponseEntity.ok(user);
    }
}
