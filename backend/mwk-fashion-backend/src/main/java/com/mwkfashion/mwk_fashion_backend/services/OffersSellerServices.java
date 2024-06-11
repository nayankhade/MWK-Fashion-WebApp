package com.mwkfashion.mwk_fashion_backend.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.mwkfashion.mwk_fashion_backend.model.DashBoardOffers;


public interface OffersSellerServices {
    DashBoardOffers saveOffersData(MultipartFile file);
    List<DashBoardOffers> getAllOffers();
}
