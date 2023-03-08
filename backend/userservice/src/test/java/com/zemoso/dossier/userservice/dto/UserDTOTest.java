package com.zemoso.dossier.userservice.dto;


import com.zemoso.dossier.userservice.entity.User;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class UserDTOTest {

    @Test
    void userDTOTest() {
        UserDTO user = new UserDTO();
        UserDTO user2=new UserDTO("2","Parker","Peterparker@gmail.com",0,1,"Created",null);
        user.setId("1");
        user.setCreated("Created");
        user.setUserName("peterparker@gmail.com");
        user.setIsActive(1);
        user.setPassword("Peter@1234");
        user.setIsExpired(0);
        user.setUpdated("Peter Parker");
        assertEquals("1", user.getId());
        assertEquals("Created", user.getCreated());
        assertEquals("peterparker@gmail.com", user.getUserName());
        assertEquals("Peter@1234", user.getPassword());
        assertEquals(1, user.getIsActive());
        assertEquals(0, user.getIsExpired());
        assertEquals("Peter Parker", user.getUpdated());
    }
}