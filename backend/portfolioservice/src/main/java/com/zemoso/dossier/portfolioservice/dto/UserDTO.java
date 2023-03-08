package com.zemoso.dossier.portfolioservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.Setter;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private String id;
    private String password;
    private String userName;
    private int isActive;
    private int isExpired;
    private String created;
    private String updated;
}
