package com.zemoso.dossier.portfolioservice.service;

import com.zemoso.dossier.portfolioservice.dto.PortfolioExtensionDTO;
import com.zemoso.dossier.portfolioservice.entity.PortfolioExtension;

import java.util.Map;

public interface PortfolioExtensionsService {
    PortfolioExtensionDTO getPortfolioExtensions(int id);

    void savePortfolioExtensions(int id, Map<String, Object> updates);
    void save(PortfolioExtension extension);
}
