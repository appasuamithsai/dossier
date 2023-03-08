package com.zemoso.dossier.userservice.service.implementation;

import com.zemoso.dossier.userservice.entity.UserProfile;
import com.zemoso.dossier.userservice.repository.UserProfileRepository;
import com.zemoso.dossier.userservice.service.UserProfileService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
class UserProfileServiceImplTest {
    @MockBean
    UserProfileRepository profileRepository;

    @Autowired
    UserProfileService profileService;


    @Test
    void getUserProfileByUserId() {
        UserProfile userProfile=new UserProfile(1,"Peter","Parker",21,"99999","Male",null,null);
        when(profileRepository.findByUserProfileId("Id")).thenReturn(userProfile);

        assertEquals("Peter", profileService.getUserProfileById("Id").getFirstName());
    }


    @Test
    void updateUserPreferences() {
        UserProfile userProfile=new UserProfile(1,"Peter","Parker",21,"99999","Male",null,null);
        userProfile.setId(2);
        when(profileRepository.findByUserProfileId("2")).thenReturn(userProfile);
        Map<String,Object> updates=new HashMap<>();
        updates.put("firstName","John");
        profileService.updatePersonalDetails("2", updates);
        verify(profileRepository, times(1)).save(any());

    }
}
