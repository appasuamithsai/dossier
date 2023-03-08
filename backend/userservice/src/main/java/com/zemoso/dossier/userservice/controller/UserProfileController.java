package com.zemoso.dossier.userservice.controller;

import com.zemoso.dossier.userservice.dto.UserProfileDTO;
import com.zemoso.dossier.userservice.service.UserProfileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserProfileController {
    UserProfileService profileService;

    public UserProfileController(UserProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/{userId}/user_profile")
    public UserProfileDTO getUserProfileById(@PathVariable("userId") String id) {
        return profileService.getUserProfileById(id);
    }
    @PatchMapping("/{userId}/user_profile")
    public ResponseEntity<String> updatePersonalDetails(@PathVariable("userId") String id, @RequestBody Map<String, Object> updates) {
        profileService.updatePersonalDetails(id, updates);
        return ResponseEntity.status(HttpStatus.CREATED).body("Personal Details updated successfully");
    }

}
