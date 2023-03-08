package com.zemoso.dossier.portfolioservice.service.implementation;

import com.zemoso.dossier.portfolioservice.entity.PortfolioSlides;
import com.zemoso.dossier.portfolioservice.repository.PortfolioSlidesRepository;
import com.zemoso.dossier.portfolioservice.service.PortfolioSlidesService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest

class PortfolioSlidesServiceImplTest {
    @Autowired
    PortfolioSlidesService portfolioSlidesService;

    @MockBean
    PortfolioSlidesRepository portfolioSlidesRepository;
    @Test
    void updateSlide(){
        PortfolioSlides portfolioSlides=new PortfolioSlides();
        portfolioSlides.setSlideContent("hello".getBytes());
        when(portfolioSlidesRepository.findBySlideName(1,"education")).thenReturn(portfolioSlides);
        portfolioSlidesService.updateSlide(1,"education","hello".getBytes());
        verify(portfolioSlidesRepository,times(1)).save(any());
    }
    @Test
    void save(){
        portfolioSlidesService.save(new PortfolioSlides());
        verify(portfolioSlidesRepository,times(1)).save(any());
    }
    @Test
    void findBySlideName() {
        PortfolioSlides portfolioSlides=new PortfolioSlides();
        portfolioSlides.setSlideContent("slideContent".getBytes());
        when(portfolioSlidesRepository.findBySlideName(1,"education")).thenReturn(portfolioSlides);
        assertEquals("slideContent",portfolioSlidesService.findBySlideName(1, "education"));

    }

}
