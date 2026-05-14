package backend.controller;

import backend.entity.user;
import backend.repository.userrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class authcontroller {

    @Autowired
    private userrepository userrepository;

    @PostMapping("/signup")
    public user signup(@RequestBody user user) {

        return userrepository.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody user loginUser) {

        user existingUser = userrepository.findByEmail(loginUser.getEmail())
                .orElse(null);

        if(existingUser == null) {
            return "User not found";
        }

        if(!existingUser.getPassword().equals(loginUser.getPassword())) {
            return "Invalid password";
        }

        return "Login successful";
    }
}