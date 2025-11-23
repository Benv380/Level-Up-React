package cl.levelUp.usuarios.service;

import org.springframework.stereotype.Service;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;



@Service
public class FireBaseService {

    public String verifyTokenAndGetUid(String token) throws Exception {
        FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
        return decodedToken.getUid();
    }
}

