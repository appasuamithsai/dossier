package com.zemoso.dossier.userservice.service;

import com.zemoso.dossier.userservice.dto.UserProfileDTO;

import java.util.Map;

public interface UserProfileService {
    UserProfileDTO getUserProfileById(String id);

    void updatePersonalDetails(String id, Map<String, Object> updates);
}
