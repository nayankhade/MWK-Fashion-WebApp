package com.mwkfashion.mwk_fashion_backend.services;

import java.util.List;
import com.mwkfashion.mwk_fashion_backend.model.DashBoardOffers;
import org.springframework.web.multipart.MultipartFile;

public interface OffersSellerServices {
    DashBoardOffers saveOffersData(String title, MultipartFile file);
    List<DashBoardOffers> getAllOffers();
    DashBoardOffers findOfferByFilename(String filename);
}
