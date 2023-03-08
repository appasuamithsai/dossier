package com.zemoso.dossier.portfolioservice.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PortfolioSlideDTOTest {

        @Test
        void portfolioSlideDTOTest() {
                PortfolioSlideDTO portfolioSlideDTO = new PortfolioSlideDTO();
                portfolioSlideDTO.setId(1);
                portfolioSlideDTO.setSlideName("EducationDetails");
                portfolioSlideDTO.setContent("hello".getBytes());
                assertEquals(1, portfolioSlideDTO.getId());
                assertEquals("EducationDetails", portfolioSlideDTO.getSlideName());
                assertEquals("hello".getBytes().length, portfolioSlideDTO.getContent().length);
        }
}