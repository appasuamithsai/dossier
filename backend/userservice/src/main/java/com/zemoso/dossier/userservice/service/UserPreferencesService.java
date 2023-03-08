package com.zemoso.dossier.userservice.service;

import com.zemoso.dossier.userservice.dto.UserPreferencesDTO;

import java.util.Map;

public interface UserPreferencesService {
    UserPreferencesDTO getUserPreferencesById(String id);



    void updatePreferences(String id, Map<String, Object> updates);
}
