package com.mwkfashion.mwk_fashion_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mwkfashion.mwk_fashion_backend.model.AdminHandler;
import com.mwkfashion.mwk_fashion_backend.enums.Role;

public interface AdminHandlerRepository extends JpaRepository<AdminHandler, Long> {
	List<AdminHandler> findByRole(Role role);
}
