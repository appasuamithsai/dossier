package com.zemoso.dossier.portfolioservice.service.implementation;

import com.zemoso.dossier.portfolioservice.entity.PortfolioSlides;
import com.zemoso.dossier.portfolioservice.mapper.PortfolioSlidesMapper;
import com.zemoso.dossier.portfolioservice.repository.PortfolioSlidesRepository;
import com.zemoso.dossier.portfolioservice.service.PortfolioSlidesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PortfolioSlidesServiceImpl implements PortfolioSlidesService {
    PortfolioSlidesRepository portfolioSlidesRepository;
    PortfolioSlidesMapper slidesMapper;
    @Autowired
    public PortfolioSlidesServiceImpl(PortfolioSlidesRepository portfolioSlidesRepository, PortfolioSlidesMapper slidesMapper) {
        this.portfolioSlidesRepository = portfolioSlidesRepository;
        this.slidesMapper = slidesMapper;
    }


    @Override
    public void updateSlide(int portfolioId,String slideName, byte[] arr) {
    PortfolioSlides slide=portfolioSlidesRepository.findBySlideName(portfolioId,slideName);
    slide.setSlideContent(arr);
        portfolioSlidesRepository.save(slide);
    }

    @Override
    public void save(PortfolioSlides portfolioSlide) {
portfolioSlidesRepository.save(portfolioSlide);
    }

    @Override
    public String findBySlideName(int portfolioId, String slideName) {


      return  new String(portfolioSlidesRepository.findBySlideName(portfolioId,slideName).getSlideContent());
    }


}
