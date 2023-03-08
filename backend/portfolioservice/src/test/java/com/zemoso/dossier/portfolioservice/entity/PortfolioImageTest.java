package com.zemoso.dossier.portfolioservice.entity;

import org.junit.jupiter.api.Test;

import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PortfolioImageTest {

    @Test
    void portfolioImageGetterSetterTest() throws SQLException {
        PortfolioImage portfolioImage=new PortfolioImage();
        Portfolio portfolio=new Portfolio();
        PortfolioImage portfolioImage1=new PortfolioImage(1,null,portfolio);
        portfolio.setId(1);
        portfolioImage.setPortfolio(portfolio);
        portfolioImage.setImagesContent("hello".getBytes());
        portfolioImage.setId(1);
        assertEquals(1,portfolioImage.getPortfolio().getId());
        assertEquals("hello".getBytes().length,portfolioImage.getImagesContent().length);
        assertEquals(1,portfolioImage.getId());
        assertEquals("PortfolioImage{id=1, imagesContent="+portfolioImage.getImagesContent()+"}",portfolioImage.toString());
    }
}