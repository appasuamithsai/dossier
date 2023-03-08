package com.zemoso.dossier.userservice.repository;

import com.zemoso.dossier.userservice.entity.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserProfileRepository extends JpaRepository<UserProfile,Integer> {
    @Query(value = "SELECT * from user_profile u WHERE u.user_id=?1", nativeQuery = true)
    UserProfile findByUserProfileId(String id);
}
