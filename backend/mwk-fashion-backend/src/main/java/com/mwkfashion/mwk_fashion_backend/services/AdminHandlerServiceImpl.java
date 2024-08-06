package com.mwkfashion.mwk_fashion_backend.services;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mwkfashion.mwk_fashion_backend.enums.Role;
import com.mwkfashion.mwk_fashion_backend.model.AdminHandler;
import com.mwkfashion.mwk_fashion_backend.repository.AdminHandlerRepository;

@Service
public class AdminHandlerServiceImpl implements AdminHandlerService {
    @Autowired
    private AdminHandlerRepository adminHandlerRepository;

    public List<AdminHandler> getHandlersByRole(Role role) {
        return adminHandlerRepository.findByRole(role);
    }

    public AdminHandler saveUniqueCode(AdminHandler adminHandler) {
        return adminHandlerRepository.save(adminHandler);
    }

    public AdminHandler updateUniqueCode(AdminHandler adminHandler) {
        return adminHandlerRepository.save(adminHandler);
    }
    
    @Override
    public Set<String> getAllRoles() {
        List<AdminHandler> handlers = adminHandlerRepository.findAll();
        return handlers.stream()
                       .map(AdminHandler::getRole)
                       .map(Enum::name)
                       .collect(Collectors.toSet());
    }

}
