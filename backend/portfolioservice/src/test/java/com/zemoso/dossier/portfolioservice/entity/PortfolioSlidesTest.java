package com.zemoso.dossier.portfolioservice.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PortfolioSlidesTest {

    @Test
    void portfolioSlidesGetterSetterTest() {
        PortfolioSlides portfolioSlides=new PortfolioSlides();
        PortfolioSlides portfolioSlides1=new PortfolioSlides(1,"Cover",null,null);
        PortfolioSlides portfolioSlides2=new PortfolioSlides("Cover",null,null);
        portfolioSlides.setId(1);
        portfolioSlides.setSlideName("Awards");
        portfolioSlides.setSlideContent("hello".getBytes());
        Portfolio portfolio=new Portfolio();
        portfolio.setId(1);
        portfolioSlides.setPortfolio(portfolio);
        assertEquals("Awards",portfolioSlides.getSlideName());
        assertEquals(1,portfolioSlides.getPortfolio().getId());
        assertEquals(1,portfolioSlides.getId());
        assertEquals("hello".getBytes().length,portfolioSlides.getSlideContent().length);
        assertEquals("PortfolioSlides{id=1, slideName='Awards'}",portfolioSlides.toString());

    }
}