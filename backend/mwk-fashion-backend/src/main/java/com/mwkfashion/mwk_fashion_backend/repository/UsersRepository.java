package com.mwkfashion.mwk_fashion_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mwkfashion.mwk_fashion_backend.model.Users;

public interface UsersRepository extends JpaRepository<Users, Integer> {
    Users findByEmail(String email);
}
