package com.zemoso.dossier.userservice.dto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class AddressDTOTest {
    @Test
    void addressDTOGetterSetterTest() {
        AddressDTO address = new AddressDTO();
        address.setId(1);
        address.setCity("Los Angels");
        address.setCountry("America");
        address.setLandmark("Beside Walmart");
        address.setState("California");
        address.setStreet("Oxford Street");
        assertEquals(1, address.getId());
        assertEquals("Los Angels", address.getCity());
        assertEquals("America", address.getCountry());
        assertEquals("Beside Walmart", address.getLandmark());
        assertEquals("California", address.getState());
        assertEquals("Oxford Street", address.getStreet());

    }


}