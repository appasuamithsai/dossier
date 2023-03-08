package com.zemoso.dossier.userservice.mapper;

import com.zemoso.dossier.userservice.dto.UserDTO;
import com.zemoso.dossier.userservice.entity.User;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO userToUserDTO(User user);

    User userDTOtoUser(UserDTO dto);
}
