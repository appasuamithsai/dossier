package com.zemoso.dossier.portfolioservice.entity;

import org.junit.jupiter.api.Test;

import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PortfolioExtensionTest {




    @Test
    void portfolioExtensionsGetAndSetData() throws SQLException  {
        PortfolioExtension portfolioExtension=new PortfolioExtension();
        PortfolioExtension portfolioExtension2=new PortfolioExtension(1,"[pdf,jpeg]",null);

        portfolioExtension.setId(1);
        portfolioExtension.setExtensions("[pdf,jpeg]");
        Portfolio portfolio=new Portfolio();
        portfolio.setId(1);
        portfolioExtension.setPortfolio(portfolio);
        assertEquals(1,portfolioExtension.getPortfolio().getId());
        assertEquals("[pdf,jpeg]",portfolioExtension.getExtensions());
        assertEquals(1,portfolioExtension.getId());
        assertEquals("PortfolioExtension{id=1, extensions=[pdf,jpeg]}",portfolioExtension.toString());


    }
}