package com.zemoso.dossier.portfolioservice.repository;

import com.zemoso.dossier.portfolioservice.entity.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PortfolioRepository extends JpaRepository<Portfolio,Integer> {
    @Query(value = "SELECT * from portfolio p WHERE p.user_id=?1", nativeQuery = true)
    List<Portfolio> findPortfoliosByUserId(String id);
}
