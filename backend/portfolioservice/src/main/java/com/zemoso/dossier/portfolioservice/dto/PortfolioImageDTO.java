package com.zemoso.dossier.portfolioservice.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PortfolioImageDTO {
    private int id;
    byte[] imagesContent;
}
