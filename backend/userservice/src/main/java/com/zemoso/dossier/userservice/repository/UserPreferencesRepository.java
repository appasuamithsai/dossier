package com.zemoso.dossier.userservice.repository;


import com.zemoso.dossier.userservice.entity.UserPreferences;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserPreferencesRepository extends JpaRepository<UserPreferences,Integer> {
    @Query(value = "SELECT * from user_preferences u WHERE u.user_id=?1", nativeQuery = true)
    UserPreferences findByUserPreferencesId(String id);
}
