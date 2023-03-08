package com.zemoso.dossier.portfolioservice.mapper;

import com.zemoso.dossier.portfolioservice.dto.PortfolioDTO;
import com.zemoso.dossier.portfolioservice.entity.Portfolio;
import com.zemoso.dossier.portfolioservice.mapper.PortfolioConverter;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PortfolioConverterTest {

    @Test
    void dtoToEntity() {
        PortfolioDTO portfolioDTO=new PortfolioDTO();
        portfolioDTO.setId(1);
        Portfolio portfolio=new PortfolioConverter().dtoToEntity(portfolioDTO);
        assertEquals(1,portfolio.getId());

    }

    @Test
    void entityToDtoTest(){
        Portfolio portfolio=new Portfolio();
        portfolio.setId(1);
        PortfolioDTO portfolioDTO=new PortfolioConverter().entityToDto(portfolio);
        assertEquals(1,portfolioDTO.getId());
    }
}