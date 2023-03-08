package com.zemoso.dossier.portfolioservice.mapper;

import com.zemoso.dossier.portfolioservice.dto.PortfolioSlideDTO;
import com.zemoso.dossier.portfolioservice.entity.PortfolioSlides;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PortfolioSlidesMapper {
    PortfolioSlideDTO portfolioSlidesToPortfolioSlidesDTO(PortfolioSlides user);


    PortfolioSlides portfolioSlidesDTOtoPortfolioSlides(PortfolioSlideDTO dto);
}
