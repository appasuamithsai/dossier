package com.zemoso.dossier.portfolioservice.mapper;

import com.zemoso.dossier.portfolioservice.dto.PortfolioExtensionDTO;
import com.zemoso.dossier.portfolioservice.entity.PortfolioExtension;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PortfolioExtensionMapper {
    PortfolioExtensionDTO portfolioExtensionToPortfolioExtensionDTO(PortfolioExtension portfolioExtension);


    PortfolioExtension portfolioExtensionDTOtoPortfolioExtension(PortfolioExtensionDTO dto);
}
