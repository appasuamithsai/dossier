package com.zemoso.dossier.userservice.controller;

import com.zemoso.dossier.userservice.dto.AddressDTO;
import com.zemoso.dossier.userservice.service.AddressService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@SpringBootTest
class AddressControllerTest {
    @Autowired
    AddressController addressController;
    @MockBean
    AddressService addressService;
    @Test
    void getAddress() {
        AddressDTO addressDTO=new AddressDTO(0,null,null,"Hyd","Telangana","Ind");
        when(addressService.getAddressById("userId")).thenReturn(addressDTO);
        assertEquals(addressDTO,addressController.getAddressById("userId"));
    }
}
