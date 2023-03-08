package com.zemoso.dossier.userservice.service.implementation;

import com.zemoso.dossier.userservice.dto.AddressDTO;
import com.zemoso.dossier.userservice.mapper.AddressMapper;
import com.zemoso.dossier.userservice.repository.AddressRepository;
import com.zemoso.dossier.userservice.service.AddressService;
import org.springframework.stereotype.Service;

@Service

public class AddressServiceImpl implements AddressService {
    AddressMapper addressMapper;
    AddressRepository addressRepository;

    public AddressServiceImpl(AddressMapper addressMapper, AddressRepository addressRepository) {
        this.addressMapper = addressMapper;
        this.addressRepository = addressRepository;
    }

    @Override
    public AddressDTO getAddressById(String id) {
        return addressMapper.addressToAddressDTO(addressRepository.findByAddressId(id));
    }
}
