package com.zemoso.dossier.portfolioservice.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.zemoso.dossier.portfolioservice.VO.User;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "portfolio")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    String portfolioName;
    @Column(name = "file_name")
    String fileName;
    @Column(name = "portfolio_link")
    String portfolioLink;

    @ManyToOne
    @JsonBackReference
    private User user;




}
