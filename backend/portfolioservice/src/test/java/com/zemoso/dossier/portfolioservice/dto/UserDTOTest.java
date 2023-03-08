package com.zemoso.dossier.portfolioservice.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserDTOTest {

        @Test
        void userDTOTest() {
                UserDTO user = new UserDTO();
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