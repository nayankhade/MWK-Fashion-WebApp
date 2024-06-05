package com.mwkfashion.mwk_fashion_backend.services.offerSeller;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.mwkfashion.mwk_fashion_backend.model.offersSeller.DashBoardOffers;


public interface OffersSellerServices {
    DashBoardOffers saveOffersData(MultipartFile file);
    List<DashBoardOffers> getAllOffers();
}
