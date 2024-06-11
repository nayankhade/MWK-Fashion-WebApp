package com.mwkfashion.mwk_fashion_backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mwkfashion.mwk_fashion_backend.model.Users;
import com.mwkfashion.mwk_fashion_backend.repository.UsersRepository;

@Service
public class UsersServicesImpl implements UsersServices {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public Users signUp(Users user) {
        return usersRepository.save(user);
    }

    @Override
    public Users login(String email, String password) {
        Users user = usersRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
