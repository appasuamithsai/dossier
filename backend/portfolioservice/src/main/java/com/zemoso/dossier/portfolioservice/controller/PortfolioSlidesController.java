package com.zemoso.dossier.portfolioservice.controller;


import com.zemoso.dossier.portfolioservice.service.PortfolioSlidesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/portfolios")
public class PortfolioSlidesController {
    PortfolioSlidesService slideService;

    @Autowired
    public PortfolioSlidesController(PortfolioSlidesService slideService) {
        this.slideService = slideService;
    }

    @GetMapping("/{portfolioId}/portfolio-slides/{slideName}")
    public String getSlideByName(@PathVariable(name="portfolioId") int portfolioId, @PathVariable(name="slideName") String slideName) {
        return slideService.findBySlideName(portfolioId, slideName);

    }
    @PutMapping("/{portfolioId}/portfolio-slides/{slideName}")
    public ResponseEntity<String> updateSlideContent(@PathVariable(name="portfolioId") int portfolioId, @PathVariable(name="slideName") String slideName, @RequestBody byte[] arr) {

        slideService.updateSlide(portfolioId,slideName, arr);
        return ResponseEntity.status(HttpStatus.CREATED).body("Portfolio Slide Updated Successfully");
    }

}
