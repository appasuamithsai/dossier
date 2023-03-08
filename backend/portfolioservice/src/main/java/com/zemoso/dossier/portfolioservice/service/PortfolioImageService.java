package com.zemoso.dossier.portfolioservice.service;

import com.zemoso.dossier.portfolioservice.entity.PortfolioImage;

public interface PortfolioImageService {
    void saveImage(PortfolioImage portfolioImage);



    void updateImage(int id, byte[] arr);
    void save(PortfolioImage image);

    String getImagesByPortfolioId(int id);
}
