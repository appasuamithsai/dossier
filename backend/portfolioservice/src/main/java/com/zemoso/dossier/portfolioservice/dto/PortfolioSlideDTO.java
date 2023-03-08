package com.zemoso.dossier.portfolioservice.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PortfolioSlideDTO {
    private int id;
    String slideName;
    byte[] content;
}
