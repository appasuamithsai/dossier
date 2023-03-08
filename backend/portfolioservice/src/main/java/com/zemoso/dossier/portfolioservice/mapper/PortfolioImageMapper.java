package com.zemoso.dossier.portfolioservice.mapper;

import com.zemoso.dossier.portfolioservice.dto.PortfolioImageDTO;
import com.zemoso.dossier.portfolioservice.entity.PortfolioImage;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PortfolioImageMapper {
    PortfolioImageDTO portfolioImageToPortfolioImageDTO(PortfolioImage portfolio);


    PortfolioImage portfolioImageDTOtoPortfolioImage(PortfolioImageDTO dto);
}
