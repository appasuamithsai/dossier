package com.zemoso.dossier.userservice.dto;

import lombok.*;

@Getter
@Setter
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
