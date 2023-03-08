package com.zemoso.dossier.portfolioservice.service;

import com.zemoso.dossier.portfolioservice.dto.PortfolioDTO;
import com.zemoso.dossier.portfolioservice.entity.Portfolio;

import java.util.List;
import java.util.Map;

public interface PortfolioService {

    PortfolioDTO getPortfolioById(int id);

    void updatePortfolioLink(int id, Map<String, Object> updates);
    void save(Portfolio portfolio);

    List<PortfolioDTO> getPortfoliosByUserId(String id);

    void createPortfolio(String userId);
}
