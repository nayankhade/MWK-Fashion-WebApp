package com.mwkfashion.mwk_fashion_backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.mwkfashion.mwk_fashion_backend.enums.Role;
import com.mwkfashion.mwk_fashion_backend.model.AdminHandler;
import com.mwkfashion.mwk_fashion_backend.model.Users;
import com.mwkfashion.mwk_fashion_backend.repository.UsersRepository;

import java.util.List;

@Service
public class UsersServicesImpl implements UsersServices {

    private static final Logger logger = LoggerFactory.getLogger(UsersServicesImpl.class);

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private AdminHandlerServiceImpl adminHandlerService;

    @Override
    public Users signUp(Users user) {
        Users existingUser = usersRepository.findByEmail(user.getEmail());
        if (existingUser != null) {
            throw new IllegalArgumentException("Email is already in use");
        }
        
        logger.info("User details: {}", user);

        Role role = user.getRole();
        String uniqueCode = user.getUniqueCode();

        if (role == Role.ADMIN) {
            List<AdminHandler> adminHandlers = adminHandlerService.getHandlersByRole(Role.ADMIN);
            if (adminHandlers.isEmpty() || !adminHandlers.get(0).getUniqueCode().equals(uniqueCode)) {
                throw new IllegalArgumentException("Invalid unique code for Admin role");
            }
        } else if (role == Role.MANAGER) {
            List<AdminHandler> adminHandlers = adminHandlerService.getHandlersByRole(Role.MANAGER);
            if (adminHandlers.isEmpty() || !adminHandlers.get(0).getUniqueCode().equals(uniqueCode)) {
                throw new IllegalArgumentException("Invalid unique code for Manager role");
            }
        } else if (role == Role.USER) {
            if (uniqueCode != null && !uniqueCode.isEmpty()) {
                throw new IllegalArgumentException("Unique code should not be provided for User role");
            }
        }

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
