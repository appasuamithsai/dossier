package com.zemoso.dossier.userservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class UserProfileDTO {

    private int id;

    private String firstName;

    private String lastName;

    private int age;

    private String mobileNumber;

    private String gender;

    private byte[] profileImage;

}
