package com.zemoso.dossier.portfolioservice.controller;

import com.zemoso.dossier.portfolioservice.service.PortfolioImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/portfolios")
public class PortfolioImageController {

    PortfolioImageService slideService;

    @Autowired
    public PortfolioImageController(PortfolioImageService slideService) {
        this.slideService = slideService;
    }
   @GetMapping("/{portfolioId}/portfolio_image")
   public String getImages(@PathVariable(name = "portfolioId") int id){
        return slideService.getImagesByPortfolioId(id);
   }
    @PutMapping("/{portfolioId}/portfolio_image")
    public ResponseEntity<String> updateImageContent(@PathVariable(name = "portfolioId") int id, @RequestBody byte[] arr) {
        slideService.updateImage(id, arr);
        return ResponseEntity.status(HttpStatus.CREATED).body("Portfolio Image Updated Successfully");
    }
}
