package com.zemoso.dossier.userservice.service.implementation;

import com.zemoso.dossier.userservice.dto.UserProfileDTO;
import com.zemoso.dossier.userservice.entity.UserProfile;
import com.zemoso.dossier.userservice.mapper.UserProfileMapper;
import com.zemoso.dossier.userservice.repository.UserProfileRepository;
import com.zemoso.dossier.userservice.service.UserProfileService;

import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.Map;

@Service

public class UserProfileImpl implements UserProfileService {
    UserProfileRepository profileRepository;
    UserProfileMapper userProfileMapper;

    public UserProfileImpl(UserProfileRepository profileRepository, UserProfileMapper userProfileMapper) {
        this.profileRepository = profileRepository;
        this.userProfileMapper = userProfileMapper;
    }

    @Override
    public UserProfileDTO getUserProfileById(String id) {

        return userProfileMapper.userProfileToUserProfileDTO(profileRepository.findByUserProfileId(id));

    }

    @Override
    public void updatePersonalDetails(String id, Map<String, Object> updates) {
        UserProfile userProfile=profileRepository.findByUserProfileId(id);
        updates.forEach((k,v)->{
            Field field = ReflectionUtils.findField(UserProfile.class, k);
            field.setAccessible(true);
            ReflectionUtils.setField(field, userProfile, v);
        });
        profileRepository.save(userProfile);
    }



}
