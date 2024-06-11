package com.mwkfashion.mwk_fashion_backend.services;

import com.mwkfashion.mwk_fashion_backend.model.Users;

public interface UsersServices {

    Users signUp(Users user);

    Users login(String email, String password);
}
