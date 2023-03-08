package com.zemoso.dossier.portfolioservice.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "portfolio_images")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PortfolioImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "imagescontent")
    byte[] imagesContent;

    @OneToOne
    @JsonBackReference
    private Portfolio portfolio;

    @Override
    public String toString() {
        return "PortfolioImage{" +
                "id=" + id +
                ", imagesContent=" + imagesContent +
                '}';
    }
}
