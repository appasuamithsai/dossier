package com.zemoso.dossier.portfolioservice.controller;

import com.zemoso.dossier.portfolioservice.dto.PortfolioExtensionDTO;
import com.zemoso.dossier.portfolioservice.service.PortfolioExtensionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/portfolios")
public class PortfolioExtensionController {

    PortfolioExtensionsService portfolioExtensionsService;

    @Autowired
    public PortfolioExtensionController(PortfolioExtensionsService portfolioExtensionsService) {
        this.portfolioExtensionsService = portfolioExtensionsService;
    }

    @GetMapping("/{portfolioId}/extensions")
    public PortfolioExtensionDTO getExtensions(@PathVariable int portfolioId) {
        return portfolioExtensionsService.getPortfolioExtensions(portfolioId);

    }

    @PatchMapping("/{portfolioId}/extensions")
    public ResponseEntity<String> saveExtensions(@PathVariable int portfolioId, @RequestBody Map<String, Object> updates) {
        portfolioExtensionsService.savePortfolioExtensions(portfolioId, updates);
        return ResponseEntity.status(HttpStatus.CREATED).body("Portfolio Extensions added successfully");
    }
}


