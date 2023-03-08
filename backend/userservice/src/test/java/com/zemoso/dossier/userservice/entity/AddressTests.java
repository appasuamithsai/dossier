package com.zemoso.dossier.userservice.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AddressTests {

    @Test
    void addressDataGettingAndSetting(){
        Address address=new Address();
        address.setId(1);
        address.setCity("Los Angels");
        address.setCountry("America");
        address.setLandmark("Beside Walmart");
        address.setState("California");
        User user=new User();
        user.setId("1");
        address.setUser(user);
        Address newAddress=new Address(0,null,null,null,null,null,null);
        address.setStreet("Oxford Street");
        assertEquals(1,address.getId());
        assertEquals("Los Angels",address.getCity());
        assertEquals("America",address.getCountry());
        assertEquals("Beside Walmart",address.getLandmark());
        assertEquals("California",address.getState());
        assertEquals("1",address.getUser().getId());
        assertEquals("Oxford Street",address.getStreet());
        assertEquals("Address{id=1, street='Oxford Street', landmark='Beside Walmart', city='Los Angels', state='California', country='America'}",address.toString());
    }
}