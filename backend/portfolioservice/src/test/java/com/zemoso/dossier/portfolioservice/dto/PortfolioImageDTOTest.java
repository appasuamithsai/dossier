package com.zemoso.dossier.portfolioservice.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PortfolioImageDTOTest {

    @Test
    void portfolioImageDTOTest() {
        PortfolioImageDTO portfolioImageDTO=new PortfolioImageDTO();
        portfolioImageDTO.setId(1);
        portfolioImageDTO.setImagesContent("hello".getBytes());
        assertEquals(1,portfolioImageDTO.getId());
        assertEquals("hello".getBytes().length,portfolioImageDTO.getImagesContent().length);
    }
}