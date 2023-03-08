package com.zemoso.dossier.userservice.controller;

import com.zemoso.dossier.userservice.dto.UserPreferencesDTO;
import com.zemoso.dossier.userservice.service.UserPreferencesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserPreferencesController {
    UserPreferencesService preferencesService;

    public UserPreferencesController(UserPreferencesService preferencesService) {
        this.preferencesService = preferencesService;
    }

    @GetMapping("/{userId}/user_preferences")
    public UserPreferencesDTO getUserPreferencesById(@PathVariable("userId") String id) {
        return preferencesService.getUserPreferencesById(id);
    }
    @PatchMapping("/{userId}/user_preferences")
    public ResponseEntity<String> updatePreferences(@PathVariable("userId") String id, @RequestBody Map<String, Object> updates) {
        preferencesService.updatePreferences(id, updates);
        return ResponseEntity.status(HttpStatus.CREATED).body("User Preferences updated successfully");
    }
}
