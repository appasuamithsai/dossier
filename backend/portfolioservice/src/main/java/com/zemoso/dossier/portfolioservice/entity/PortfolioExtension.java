package com.zemoso.dossier.portfolioservice.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity
@Table(name = "portfolio_extensions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PortfolioExtension {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "extensions")
    String extensions;

    @OneToOne
    @JsonBackReference
    private Portfolio portfolio;

    @Override
    public String toString() {
        return "PortfolioExtension{" +
                "id=" + id +
                ", extensions=" + extensions +
                '}';
    }
}
