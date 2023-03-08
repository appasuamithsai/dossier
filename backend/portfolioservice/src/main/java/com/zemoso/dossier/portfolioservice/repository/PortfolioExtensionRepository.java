package com.zemoso.dossier.portfolioservice.repository;

import com.zemoso.dossier.portfolioservice.entity.PortfolioExtension;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PortfolioExtensionRepository extends JpaRepository<PortfolioExtension,Integer> {
    @Query(value = "SELECT * from portfolio_extensions p WHERE p.portfolio_id=?1", nativeQuery = true)
    PortfolioExtension findByPortfolioId(int id);
}
