package com.zemoso.dossier.userservice.mapper;

import com.zemoso.dossier.userservice.dto.UserPreferencesDTO;
import com.zemoso.dossier.userservice.entity.UserPreferences;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserPreferencesMapper {

    UserPreferencesDTO userPreferencesToUserPreferencesDTO(UserPreferences userPreferences);

    UserPreferences userPreferencesDTOtoUserPreferences(UserPreferencesDTO dto);
}
