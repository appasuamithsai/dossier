package com.zemoso.dossier.userservice.service.implementation;

import com.zemoso.dossier.userservice.entity.Address;
import com.zemoso.dossier.userservice.repository.AddressRepository;
import com.zemoso.dossier.userservice.service.AddressService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class AddressServiceImplTest {
    @MockBean
    AddressRepository addressRepository;

    @Autowired
    AddressService addressService;


    @Test
    void getPortfolioExtensions() {

        Address address=new Address(0,null,null,"Hyd","Telangana","Ind",null);
       when(addressRepository.findByAddressId("Id")).thenReturn(address);

        assertEquals("Hyd", addressService.getAddressById("Id").getCity());
    }


}
