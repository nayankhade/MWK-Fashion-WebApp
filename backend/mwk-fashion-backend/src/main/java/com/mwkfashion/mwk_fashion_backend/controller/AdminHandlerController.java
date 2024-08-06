package com.mwkfashion.mwk_fashion_backend.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mwkfashion.mwk_fashion_backend.model.AdminHandler;
import com.mwkfashion.mwk_fashion_backend.services.AdminHandlerServiceImpl;
import com.mwkfashion.mwk_fashion_backend.enums.Role;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminHandlerController {

    @Autowired
    private AdminHandlerServiceImpl adminHandlerServiceImpl;

    @GetMapping("/uniqueCode/{role}")
    public List<AdminHandler> getUniqueCode(@PathVariable Role role) {
        return adminHandlerServiceImpl.getHandlersByRole(role);
    }

    @PostMapping("/uniqueCode")
    public AdminHandler saveOrUpdateUniqueCode(@RequestBody AdminHandler adminHandler) {
        return adminHandlerServiceImpl.updateUniqueCode(adminHandler);
    }
    
    @GetMapping("/roles")
    public Set<String> getAllRoles() {
        return adminHandlerServiceImpl.getAllRoles();
    }
}
