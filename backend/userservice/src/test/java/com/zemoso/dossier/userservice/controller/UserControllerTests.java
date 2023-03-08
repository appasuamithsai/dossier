package com.zemoso.dossier.userservice.controller;

import com.zemoso.dossier.userservice.dto.UserDTO;
import com.zemoso.dossier.userservice.helpers.InputDetails;
import com.zemoso.dossier.userservice.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@SpringBootTest
class UserControllerTests {
    @Autowired
    UserController userController;
    @MockBean
    UserService userService;
    @Test
    void getUser() {
        UserDTO userDTO=new UserDTO("Id","password@123","Peter",0,1,"19-07-2022",null);
        when(userService.getUserById("Id")).thenReturn(userDTO);
        assertEquals(userDTO,userController.getUserById("Id"));
    }
    @Test
    void saveExtensions() {
        InputDetails inputDetails=new InputDetails();
        doNothing().when(userService).createUser(inputDetails);
        assertEquals(new ResponseEntity<String>("User Created successfully", HttpStatus.CREATED),userController.createNewUser(inputDetails));

    }
}
