package com.zemoso.dossier.portfolioservice.controller;

import com.zemoso.dossier.portfolioservice.dto.PortfolioDTO;
import com.zemoso.dossier.portfolioservice.repository.PortfolioRepository;
import com.zemoso.dossier.portfolioservice.service.PortfolioService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.mockito.Mockito.when;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;

@SpringBootTest
class PortfolioControllerTest {

    @MockBean
    PortfolioService portfolioService;

    @Autowired
    PortfolioRepository portfolioRepository;

    @Autowired
    PortfolioController portfolioController;

    @Test
    void getPortfoliosByUserId() {
        PortfolioDTO portfolioDTO=new PortfolioDTO();
        String id="1";
        portfolioDTO.setUserId(id);

        when(portfolioService.getPortfoliosByUserId(id)).thenReturn(Arrays.asList(portfolioDTO));
        assertEquals(1,portfolioController.getPortfoliosByUserId(id).size());
    }
    @Test
    void updatePortfolioLink() {
        Map<String,Object> updates=new HashMap<>();
        updates.put("portfolioLink","dossier.com");
        doNothing().when(portfolioService).updatePortfolioLink(1,updates);
        assertEquals(new ResponseEntity<String>("Portfolio Link updated successfully", HttpStatus.CREATED),portfolioController.updatePortfolioLink(1,updates));
    }
    @Test
    void postPortfolio() {
        doNothing().when(portfolioService).createPortfolio("1");
        assertEquals(new ResponseEntity<String>("Portfolio  updated successfully", HttpStatus.CREATED),portfolioController.postPortfolio("1"));
    }
}