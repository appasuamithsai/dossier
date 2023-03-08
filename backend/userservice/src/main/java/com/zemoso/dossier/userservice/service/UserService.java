package com.zemoso.dossier.userservice.service;


import com.zemoso.dossier.userservice.dto.UserDTO;
import com.zemoso.dossier.userservice.helpers.InputDetails;

public interface UserService {
    UserDTO getUserById(String id);
    void createUser(InputDetails inputDetails);


}
