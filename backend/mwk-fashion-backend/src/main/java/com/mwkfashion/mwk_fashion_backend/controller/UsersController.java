package com.mwkfashion.mwk_fashion_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mwkfashion.mwk_fashion_backend.model.Users;
import com.mwkfashion.mwk_fashion_backend.services.UsersServices;

@RestController
@CrossOrigin
public class UsersController {

    @Autowired
    private UsersServices usersServices;

    @PostMapping("/signup")
    public ResponseEntity<Users> signUp(@RequestBody Users user) {
        try {
            Users createdUser = usersServices.signUp(user);
            return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Users> login(@RequestBody Users loginRequest) {
        Users user = usersServices.login(loginRequest.getEmail(), loginRequest.getPassword());
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
    }
}