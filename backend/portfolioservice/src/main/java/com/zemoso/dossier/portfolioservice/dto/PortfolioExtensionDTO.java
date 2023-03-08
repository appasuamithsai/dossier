package com.zemoso.dossier.portfolioservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter  @AllArgsConstructor @NoArgsConstructor
public class PortfolioExtensionDTO {
    private int id;
    String extensions;

    @Override
    public String toString() {
        return "PortfolioExtensionDTO{" +
                "id=" + id +
                ", extensions=" + extensions +
                '}';
    }
}
