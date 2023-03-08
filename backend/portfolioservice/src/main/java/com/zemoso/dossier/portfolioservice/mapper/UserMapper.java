package com.zemoso.dossier.portfolioservice.mapper;

import com.zemoso.dossier.portfolioservice.dto.UserDTO;
import com.zemoso.dossier.portfolioservice.VO.User;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO userToUserDTO(User user);

    User userDTOtoUser(UserDTO dto);
}
