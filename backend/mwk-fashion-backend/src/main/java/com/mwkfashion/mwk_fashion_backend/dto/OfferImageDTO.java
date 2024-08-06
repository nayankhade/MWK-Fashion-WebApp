package com.mwkfashion.mwk_fashion_backend.dto;

import org.springframework.core.io.Resource;

public class OfferImageDTO {
    private String title;
    private Resource image;

    public OfferImageDTO(String title, Resource image) {
        this.title = title;
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Resource getImage() {
        return image;
    }

    public void setImage(Resource image) {
        this.image = image;
    }
}
