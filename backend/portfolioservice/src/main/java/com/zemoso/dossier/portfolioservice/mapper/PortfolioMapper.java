package com.zemoso.dossier.portfolioservice.mapper;

import com.zemoso.dossier.portfolioservice.dto.PortfolioDTO;
import com.zemoso.dossier.portfolioservice.entity.Portfolio;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PortfolioMapper {
    PortfolioDTO portfolioToPortfolioDTO(Portfolio portfolio);


    Portfolio portfolioDTOtoPortfolio(PortfolioDTO dto);
}
