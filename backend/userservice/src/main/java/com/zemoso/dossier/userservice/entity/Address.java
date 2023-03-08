package com.zemoso.dossier.userservice.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;



@Entity
@Table(name="address")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "line1")
    String street;

    @Column(name = "line2")
    String landmark;

    @Column(name = "city")
    String city;

    @Column(name = "state")
    String state;

    @Column(name = "country")
    String country;

    @OneToOne
    @JsonBackReference
    private User user;

    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", street='" + street + '\'' +
                ", landmark='" + landmark + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", country='" + country + '\'' +
                '}';
    }
}
