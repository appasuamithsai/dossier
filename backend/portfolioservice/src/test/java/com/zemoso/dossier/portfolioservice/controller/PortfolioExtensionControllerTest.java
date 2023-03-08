package com.zemoso.dossier.portfolioservice.controller;

import com.zemoso.dossier.portfolioservice.dto.PortfolioExtensionDTO;
import com.zemoso.dossier.portfolioservice.service.PortfolioExtensionsService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@SpringBootTest
class PortfolioExtensionControllerTest {
    @MockBean
    PortfolioExtensionsService portfolioExtensionsService;
    @Autowired
    PortfolioExtensionController portfolioExtensionController;
    @Test
    void getExtensions() {
        PortfolioExtensionDTO portfolioExtensionDTO=new PortfolioExtensionDTO(1,"[pdf,jpeg]");
        when(portfolioExtensionsService.getPortfolioExtensions(1)).thenReturn(portfolioExtensionDTO);
        assertEquals("[pdf,jpeg]",portfolioExtensionController.getExtensions(1).getExtensions());
    }

    @Test
    void saveExtensions() {
        Map<String,Object> updates=new HashMap<>();
        updates.put("extensions","[pdf,jpeg]");
        doNothing().when(portfolioExtensionsService).savePortfolioExtensions(1, updates);
        assertEquals(new ResponseEntity<String>("Portfolio Extensions added successfully", HttpStatus.CREATED),portfolioExtensionController.saveExtensions(1, updates));

    }
}
