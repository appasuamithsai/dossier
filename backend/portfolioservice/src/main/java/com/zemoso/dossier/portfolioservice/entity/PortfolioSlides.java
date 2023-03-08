package com.zemoso.dossier.portfolioservice.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "portfolio_slides")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PortfolioSlides {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    String slideName;

    @Column(name = "content")
    byte[] slideContent;

    @ManyToOne
    @JsonBackReference
    Portfolio portfolio;

    public PortfolioSlides(String slideName, byte[] slideContent, Portfolio portfolio) {
        this.slideName = slideName;
        this.slideContent = slideContent;
        this.portfolio = portfolio;
    }

    @Override
    public String toString() {
        return "PortfolioSlides{" +
                "id=" + id +
                ", slideName='" + slideName + '\'' +
                '}';
    }
}
