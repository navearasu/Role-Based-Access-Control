package com.example.agrimang.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.agrimang.entity.Userentity;
import com.example.agrimang.service.Userservice;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class Controller {

    @Autowired
    private Userservice userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Userentity user) {
        try {
            Userentity registeredUser = userService.registerUser(user);
            return ResponseEntity.ok(registeredUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User registration failed.");
        }
    }

    @GetMapping("/user/email/{email}")
    public ResponseEntity<Userentity> getUserByEmail(@PathVariable String email) {
        Userentity user = userService.findUserByEmail(email);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @GetMapping("/user/id/{id}")
    public ResponseEntity<Userentity> getUserById(@PathVariable Long id) {
        Userentity user = userService.findUserById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Userentity user) {
        Userentity authenticatedUser = userService.loginUser(user.getEmail(), user.getPassword(), user.getRole());
        if (authenticatedUser != null) {
            return ResponseEntity.ok(authenticatedUser);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid login credentials");
    }

    @GetMapping("/users")
    public ResponseEntity<List<Userentity>> getAllUsers() {
        List<Userentity> users = userService.findAllUsers();
        if (users.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(users);
        }
        return ResponseEntity.ok(users);
    }
}
