package com.zemoso.dossier.portfolioservice.VO;


import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class User {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "password")
    private String password;

    @Column(name = "email_id")
    private String userName;

    @Column(name = "is_active")
    private int isActive;

    @Column(name = "is_expired")
    private int isExpired;

    @Column(name = "created")
    private String created;

    @Column(name = "updated")
    private String updated;




}
