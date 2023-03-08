package com.zemoso.dossier.portfolioservice.controller;

import com.zemoso.dossier.portfolioservice.dto.PortfolioDTO;
import com.zemoso.dossier.portfolioservice.service.PortfolioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/portfolios")
public class PortfolioController {


    PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("{userId}")
    public List<PortfolioDTO> getPortfoliosByUserId(@PathVariable("userId") String id) {
        return portfolioService.getPortfoliosByUserId(id);
    }
    @PatchMapping("/{id}")
    public ResponseEntity<String> updatePortfolioLink(@PathVariable("id") int id , @RequestBody Map<String, Object> updates) {
        portfolioService.updatePortfolioLink(id,updates);
        return ResponseEntity.status(HttpStatus.CREATED).body("Portfolio Link updated successfully");}
   @PostMapping("/{userId}")
   public ResponseEntity<String> postPortfolio(@PathVariable("userId") String id) {
       portfolioService.createPortfolio(id);
       return ResponseEntity.status(HttpStatus.CREATED).body("Portfolio  updated successfully");
    }
}
