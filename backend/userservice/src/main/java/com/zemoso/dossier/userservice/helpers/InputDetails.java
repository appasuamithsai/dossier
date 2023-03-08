package com.zemoso.dossier.userservice.helpers;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class InputDetails {
    private String userId;
    private String emailId;
    private String firstName;
    private String lastName;
}
