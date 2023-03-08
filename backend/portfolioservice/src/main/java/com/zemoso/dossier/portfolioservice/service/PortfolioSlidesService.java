package com.zemoso.dossier.portfolioservice.service;

import com.zemoso.dossier.portfolioservice.entity.PortfolioSlides;

public interface PortfolioSlidesService {



    void updateSlide(int slideId,String slideName, byte[] arr);
    void save(PortfolioSlides portfolioSlide);
    String findBySlideName(int portfolioId, String slideName);
}
