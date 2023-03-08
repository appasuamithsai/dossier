package com.zemoso.dossier.userservice.dto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class UserPreferencesDTOTest {
    @Test
    void userPreferencesDTOTest() {
        UserPreferencesDTO userPreferences = new UserPreferencesDTO();
        userPreferences.setColor("Black");
        userPreferences.setDesignation("Project Manager");
        userPreferences.setIndustry("IT");
        userPreferences.setPortfolioType("Fintech");
        userPreferences.setExperience("0-10yrs");
        userPreferences.setId(1);
        assertEquals(1,userPreferences.getId());
        assertEquals("Black", userPreferences.getColor());
        assertEquals("Project Manager", userPreferences.getDesignation());
        assertEquals("IT", userPreferences.getIndustry());
        assertEquals("Fintech", userPreferences.getPortfolioType());
        assertEquals("0-10yrs", userPreferences.getExperience());

    }

}