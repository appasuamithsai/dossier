package com.zemoso.dossier.portfolioservice.mapper;

import com.zemoso.dossier.portfolioservice.dto.PortfolioDTO;
import com.zemoso.dossier.portfolioservice.entity.Portfolio;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class PortfolioConverter {

    private final ModelMapper mapper = new ModelMapper();

    public Portfolio dtoToEntity(PortfolioDTO portfolioDTO){
        return mapper.map(portfolioDTO, Portfolio.class);
    }

    public PortfolioDTO entityToDto(Portfolio portfolio) {
        return mapper.map(portfolio, PortfolioDTO.class);
    }

}
