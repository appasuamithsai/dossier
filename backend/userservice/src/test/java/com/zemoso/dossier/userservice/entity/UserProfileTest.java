package com.zemoso.dossier.userservice.entity;

import org.junit.jupiter.api.Test;

import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserProfileTest {

    @Test
    void userProfileGetterSetterTest() throws SQLException {
        UserProfile userProfile = new UserProfile();
        UserProfile userProfile2=new UserProfile(1,"Peter","Parker",21,"99999","Male",null,null);
        userProfile.setId(1);
        userProfile.setAge(21);
        userProfile.setGender("Male");
        userProfile.setFirstName("Peter");
        userProfile.setLastName("Parker");
        userProfile.setMobileNumber("123456789");
        User user = new User();
        user.setId("1");
        userProfile.setUser(user);
        assertEquals(1, userProfile.getId());
        assertEquals("Male", userProfile.getGender());
        assertEquals("Peter", userProfile.getFirstName());
        assertEquals("Parker", userProfile.getLastName());
        assertEquals(21, userProfile.getAge());
        assertEquals("1", userProfile.getUser().getId());
        assertEquals("123456789", userProfile.getMobileNumber());
        assertEquals("UserProfile{id='1', firstName='Peter', lastName='Parker', age=21, mobileNumber=123456789, gender='Male'}",userProfile.toString());
    }
}