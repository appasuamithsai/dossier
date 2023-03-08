package com.zemoso.dossier.userservice.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserTest {

    @Test
    void userGetterSetterTest() {
        User user = new User();
        User user2=new User("2","Parker","Peterparker@gmail.com",0,1,"Created",null);
        user.setId("1");
        user.setCreated("Created");
        user.setUserName("peterparker@gmail.com");
        user.setIsActive(1);
        user.setPassword("Peter@1234");
        user.setIsExpired(0);
        user.setUpdated(null);
        assertEquals("1", user.getId());
        assertEquals("Created", user.getCreated());
        assertEquals("peterparker@gmail.com", user.getUserName());
        assertEquals("Peter@1234", user.getPassword());
        assertEquals(1, user.getIsActive());
        assertEquals(0, user.getIsExpired());
        assertEquals(null,user.getUpdated());
        assertEquals("User(id=1, password=Peter@1234, userName=peterparker@gmail.com, isActive=1, isExpired=0, created=Created, updated=null)",user.toString());

    }
}