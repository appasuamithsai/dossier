package com.zemoso.dossier.userservice.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserPreferencesTest {

    @Test
    void userPreferencesGetterSetterTest() {
        UserPreferences userPreferences = new UserPreferences();
        userPreferences.setColor("Black");
        userPreferences.setDesignation("Project Manager");
        userPreferences.setIndustry("IT");
        userPreferences.setPortfolioType("Fintech");
        userPreferences.setExperience("0-10yrs");
        User user = new User();
        user.setId("1");
        userPreferences.setUser(user);
        UserPreferences userPreferences2 = new UserPreferences(0,user,null,null,null,null,null);
        assertEquals("Black", userPreferences.getColor());
        assertEquals("Project Manager", userPreferences.getDesignation());
        assertEquals("IT", userPreferences.getIndustry());
        assertEquals("Fintech", userPreferences.getPortfolioType());
        assertEquals("1", userPreferences.getUser().getId());
        assertEquals("0-10yrs", userPreferences.getExperience());
        assertEquals("UserPreferences(id=0, user=User(id=1, password=null, userName=null, isActive=0, isExpired=0, created=null, updated=null), industry=IT, portfolioType=Fintech, experience=0-10yrs, color=Black, designation=Project Manager)",userPreferences.toString());
    }
}