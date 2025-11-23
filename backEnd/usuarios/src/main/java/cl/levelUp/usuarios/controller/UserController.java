package cl.levelUp.usuarios.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.levelUp.usuarios.model.User;
import cl.levelUp.usuarios.service.FireBaseService;
import cl.levelUp.usuarios.service.UserService;



@RestController
@RequestMapping("/usuarios")
public class UserController {

    @Autowired
    private FireBaseService firebaseService;

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        List<User> users = userService.getAllUsers();
        if (users.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No users found.");
        } else {
            return ResponseEntity.ok(users);
        }
    }

    @GetMapping("/{idusuario}")
    public ResponseEntity<?> getUserById(@PathVariable Long idusuario) {
        User user = userService.findUserById(idusuario);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } else {
            return ResponseEntity.ok(user);
        }
        
    }
    
    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        if (createdUser == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User could not be created.");
        } else {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
        }
    }

    @GetMapping("/by-uid/{uid}")
    public ResponseEntity<?> getUserByUid(@PathVariable String uid) {
        User user = userService.findByUidFirebase(uid);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        return ResponseEntity.ok(user);
    }


    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@RequestHeader("Authorization") String authHeader) {
    try {
        String token = authHeader.replace("Bearer ", "");

        // 1) Validar token y obtener UID
        String uid = firebaseService.verifyTokenAndGetUid(token);

        // 2) Buscar usuario en Oracle
        User user = userService.findByUidFirebase(uid);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Usuario no encontrado en Oracle");
        }

        return ResponseEntity.ok(user);

    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Token inválido o expirado");
    }
    }


    
}
