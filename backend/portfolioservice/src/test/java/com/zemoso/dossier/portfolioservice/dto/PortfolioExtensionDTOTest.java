package com.zemoso.dossier.portfolioservice.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PortfolioExtensionDTOTest {

    @Test
    void portfolioExtensionDTOTest() {
        PortfolioExtensionDTO portfolioExtensionDTO=new PortfolioExtensionDTO();
        portfolioExtensionDTO.setId(1);
        portfolioExtensionDTO.setExtensions("[pdf,jpeg]");
        assertEquals(1,portfolioExtensionDTO.getId());
        assertEquals("[pdf,jpeg]",portfolioExtensionDTO.getExtensions());
        assertEquals("PortfolioExtensionDTO{id=1, extensions=[pdf,jpeg]}",portfolioExtensionDTO.toString());
    }
}