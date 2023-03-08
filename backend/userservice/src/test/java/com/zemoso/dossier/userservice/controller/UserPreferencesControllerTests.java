package com.zemoso.dossier.userservice.controller;

import com.zemoso.dossier.userservice.dto.UserPreferencesDTO;
import com.zemoso.dossier.userservice.service.UserPreferencesService;
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
class UserPreferencesControllerTests {
    @Autowired
    UserPreferencesController preferencesController;
    @MockBean
    UserPreferencesService preferencesService;
    @Test
    void getUserPreferences() {
        UserPreferencesDTO preferencesDTO=new UserPreferencesDTO(0,"Fintech","Fintech","2-3years","orange","projectManaager");
        when(preferencesService.getUserPreferencesById("Id")).thenReturn(preferencesDTO);
        assertEquals(preferencesDTO,preferencesController.getUserPreferencesById("Id"));
    }
    @Test
    void UpdatePreferences() {
        Map<String,Object> updates=new HashMap<>();
        updates.put("industry","Sales");
        doNothing().when(preferencesService).updatePreferences("Id", updates);
        assertEquals(new ResponseEntity<String>("User Preferences updated successfully", HttpStatus.CREATED),preferencesController.updatePreferences("Id",updates));

    }
}
