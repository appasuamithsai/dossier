package com.zemoso.dossier.portfolioservice.dto;

import lombok.*;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor@ToString
public class PortfolioDTO {
    private int id;
    String portfolioName;
    String fileName;
    String portfolioLink;
    String userId;
}
