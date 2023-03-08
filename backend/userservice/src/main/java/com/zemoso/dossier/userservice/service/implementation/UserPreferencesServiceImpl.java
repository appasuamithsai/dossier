package com.zemoso.dossier.userservice.service.implementation;

import com.zemoso.dossier.userservice.dto.UserPreferencesDTO;
import com.zemoso.dossier.userservice.entity.UserPreferences;
import com.zemoso.dossier.userservice.mapper.UserPreferencesMapper;
import com.zemoso.dossier.userservice.repository.UserPreferencesRepository;
import com.zemoso.dossier.userservice.service.UserPreferencesService;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.Map;

@Service

public class UserPreferencesServiceImpl implements UserPreferencesService {
    UserPreferencesMapper userPreferencesMapper;
    UserPreferencesRepository preferencesRepository;

    public UserPreferencesServiceImpl(UserPreferencesMapper userPreferencesMapper, UserPreferencesRepository preferencesRepository) {
        this.userPreferencesMapper = userPreferencesMapper;
        this.preferencesRepository = preferencesRepository;
    }

    @Override
    public UserPreferencesDTO getUserPreferencesById(String id){
        return userPreferencesMapper.userPreferencesToUserPreferencesDTO(preferencesRepository.findByUserPreferencesId(id));

    }

    @Override
    public void updatePreferences(String id, Map<String, Object> updates) {
        UserPreferences preferences=preferencesRepository.findByUserPreferencesId(id);
        updates.forEach((k,v)->{
            Field field = ReflectionUtils.findField(UserPreferences.class, k);
            field.setAccessible(true);
            ReflectionUtils.setField(field, preferences, v);
        });
        preferencesRepository.save(preferences);
    }

}
