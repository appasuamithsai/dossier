package com.zemoso.dossier.portfolioservice.error;

public class PortfolioNotFoundException extends   RuntimeException{

    public PortfolioNotFoundException(String message) {
        super(message);
    }

}
