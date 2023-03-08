package com.zemoso.dossier.userservice.repository;

import com.zemoso.dossier.userservice.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AddressRepository extends JpaRepository<Address,Integer> {
    @Query(value = "SELECT * from address a WHERE a.user_id=?1", nativeQuery = true)
    Address findByAddressId(String id);
}
