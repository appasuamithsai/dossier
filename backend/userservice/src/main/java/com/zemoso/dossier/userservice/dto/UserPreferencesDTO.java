package com.zemoso.dossier.userservice.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

 @AllArgsConstructor @NoArgsConstructor @ToString
public class UserPreferencesDTO {
     int id;
    String industry;
    String portfolioType;
    String experience;
    String color;
    String designation;

     public int getId() {
         return id;
     }

     public void setId(int id) {
         this.id = id;
     }

     public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getPortfolioType() {
        return portfolioType;
    }

    public void setPortfolioType(String portfolioType) {
        this.portfolioType = portfolioType;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }
}
