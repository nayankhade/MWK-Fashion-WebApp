package com.mwkfashion.mwk_fashion_backend.controller;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mwkfashion.mwk_fashion_backend.dto.OfferImageDTO;
import com.mwkfashion.mwk_fashion_backend.model.DashBoardOffers;
import com.mwkfashion.mwk_fashion_backend.services.OffersSellerServices;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin
public class OffersSellerController {

    @Autowired
    private OffersSellerServices offersSellerServices;

    private final Path root = Paths.get("src/main/webapp/offersimages");

    @PostMapping("/upload")
    public DashBoardOffers saveOfferImg(@RequestParam("title") String title, @RequestParam("image") MultipartFile file) {
        return offersSellerServices.saveOffersData(title, file);
    }

    @GetMapping
    public List<DashBoardOffers> getAllOffers() {
        return offersSellerServices.getAllOffers();
    }

    @GetMapping("/images/{filename}")
    public ResponseEntity<Resource> getImage(@PathVariable String filename) {
        try {
            Path filePath = root.resolve(filename).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists()) {
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

}
