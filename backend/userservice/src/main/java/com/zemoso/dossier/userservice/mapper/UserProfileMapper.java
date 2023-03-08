package com.zemoso.dossier.userservice.mapper;

import com.zemoso.dossier.userservice.dto.UserProfileDTO;
import com.zemoso.dossier.userservice.entity.UserProfile;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserProfileMapper {
    UserProfileDTO userProfileToUserProfileDTO(UserProfile userProfile);

    UserProfile userProfileDTOtoUserProfile(UserProfileDTO dto);
}
