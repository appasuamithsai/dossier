package com.zemoso.dossier.portfolioservice.repository;

import com.zemoso.dossier.portfolioservice.entity.PortfolioSlides;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
@Repository
public interface
PortfolioSlidesRepository extends JpaRepository<PortfolioSlides,Integer> {
    @Query(value = "SELECT * from portfolio_slides p WHERE p.portfolio_id=?1 AND p.name=?2", nativeQuery = true)
    PortfolioSlides findBySlideName(int portfolioId, String slideName);
}
