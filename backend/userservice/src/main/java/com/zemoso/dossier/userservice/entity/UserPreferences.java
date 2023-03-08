package com.zemoso.dossier.userservice.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "user_preferences")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserPreferences  {

    @Id
    @Column(name = "id")
    private int id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonBackReference
    private User user;
    @Column(name = "industry")
   private String industry;
    @Column(name = "portfolio_type")
  private   String portfolioType;
    @Column(name = "experience")
 private   String experience;
    @Column(name = "color")
  private  String color;
    @Column(name = "designation")
   private String designation;


}
