package com.zemoso.dossier.userservice.controller;

import com.zemoso.dossier.userservice.dto.AddressDTO;
import com.zemoso.dossier.userservice.service.AddressService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class AddressController {
    AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @GetMapping("/{userId}/address")
    public AddressDTO getAddressById(@PathVariable("userId") String id) {
        return addressService.getAddressById(id);
    }

}
