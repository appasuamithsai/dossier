package com.zemoso.dossier.userservice.service.implementation;

import com.zemoso.dossier.userservice.entity.UserPreferences;
import com.zemoso.dossier.userservice.repository.UserPreferencesRepository;
import com.zemoso.dossier.userservice.service.UserPreferencesService;
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
class UserPreferencesServiceImplTest {
    @MockBean
    UserPreferencesRepository preferencesRepository;

    @Autowired
    UserPreferencesService preferencesService;


    @Test
    void getUserPreferencesByUserId() {

        UserPreferences userPreferences=new UserPreferences(1,null,"Fintech","Sales","2-3years","orange","Project Manager");
        when(preferencesRepository.findByUserPreferencesId("Id")).thenReturn(userPreferences);

        assertEquals("Fintech", preferencesService.getUserPreferencesById("Id").getIndustry());
    }


    @Test
    void updateUserPreferences() {
        UserPreferences userPreferences=new UserPreferences(1,null,"Fintech","Sales","2-3years","orange","Project Manager");
        userPreferences.setId(1);
        when(preferencesRepository.findByUserPreferencesId("Id")).thenReturn(userPreferences);
        Map<String,Object> updates=new HashMap<>();
        updates.put("industry","Sales");
        preferencesService.updatePreferences("Id", updates);
        verify(preferencesRepository, times(1)).save(any());

    }
}
