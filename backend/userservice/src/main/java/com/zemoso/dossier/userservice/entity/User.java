package com.zemoso.dossier.userservice.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
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
