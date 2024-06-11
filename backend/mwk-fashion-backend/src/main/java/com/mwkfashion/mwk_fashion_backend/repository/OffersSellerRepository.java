package com.mwkfashion.mwk_fashion_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mwkfashion.mwk_fashion_backend.model.DashBoardOffers;

@Repository
public interface OffersSellerRepository extends JpaRepository<DashBoardOffers, Integer>{

}
