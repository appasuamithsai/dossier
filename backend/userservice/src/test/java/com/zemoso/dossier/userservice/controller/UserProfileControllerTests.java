package com.zemoso.dossier.userservice.controller;

import com.zemoso.dossier.userservice.dto.UserProfileDTO;
import com.zemoso.dossier.userservice.service.UserProfileService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@SpringBootTest
class UserProfileControllerTests {
    @Autowired
    UserProfileController profileController;
    @MockBean
    UserProfileService profileService;
    @Test
    void getUserProfile() {
        UserProfileDTO profileDTO=new UserProfileDTO(1,"peter","Parker",30,"9999999","Male",null);
        when(profileService.getUserProfileById("Id")).thenReturn(profileDTO);
        assertEquals(profileDTO,profileController.getUserProfileById("Id"));
    }
    @Test
    void UpdatePreferences() {
        Map<String,Object> updates=new HashMap<>();
        updates.put("firstName","John");
        doNothing().when(profileService).updatePersonalDetails("Id", updates);
        assertEquals(new ResponseEntity<String>("Personal Details updated successfully", HttpStatus.CREATED),profileController.updatePersonalDetails("Id",updates));

    }
}
