package com.zemoso.dossier.portfolioservice.repository;

import com.zemoso.dossier.portfolioservice.entity.PortfolioImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
@Repository
public interface PortfolioImageRepository extends JpaRepository<PortfolioImage,Integer> {
    @Query(value = "SELECT * from portfolio_images p WHERE p.portfolio_id=?1", nativeQuery = true)
    PortfolioImage findImageByPortfolioId(int id);

}
