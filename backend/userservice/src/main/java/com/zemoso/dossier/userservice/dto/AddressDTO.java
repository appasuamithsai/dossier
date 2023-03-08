package com.zemoso.dossier.userservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class AddressDTO {
    private int id;
    String street;
    String landmark;
    String city;
    String state;
    String country;
}
