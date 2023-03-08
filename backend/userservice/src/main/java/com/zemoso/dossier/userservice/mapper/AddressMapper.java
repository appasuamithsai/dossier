package com.zemoso.dossier.userservice.mapper;

import com.zemoso.dossier.userservice.dto.AddressDTO;
import com.zemoso.dossier.userservice.entity.Address;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AddressMapper {
    AddressDTO addressToAddressDTO(Address address);

    Address addressDTOtoAddress(AddressDTO dto);
}
