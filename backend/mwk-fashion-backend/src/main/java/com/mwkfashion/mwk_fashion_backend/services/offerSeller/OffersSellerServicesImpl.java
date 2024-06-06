package com.mwkfashion.mwk_fashion_backend.services.offerSeller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mwkfashion.mwk_fashion_backend.model.offersSeller.DashBoardOffers;
import com.mwkfashion.mwk_fashion_backend.repository.offersSeller.OffersSellerRepository;

@Service
public class OffersSellerServicesImpl implements OffersSellerServices {

    @Autowired
    private OffersSellerRepository offersSellerRepository;

    private final String uploadDirectory = System.getProperty("user.dir") + "/src/main/webapp/offersimages";

    @Override
    public DashBoardOffers saveOffersData(MultipartFile file) {
        String orgFileName = file.getOriginalFilename();
        Path fileNameAndPath = Paths.get(uploadDirectory, orgFileName);

        try {
            Files.write(fileNameAndPath, file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }

        DashBoardOffers dashBoardOffers = new DashBoardOffers();
        dashBoardOffers.setOffers(orgFileName);

        return offersSellerRepository.save(dashBoardOffers);
    }

    @Override
    public List<DashBoardOffers> getAllOffers() {
        return offersSellerRepository.findAll();
    }
}

