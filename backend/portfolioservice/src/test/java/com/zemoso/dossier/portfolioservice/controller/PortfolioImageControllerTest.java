package com.zemoso.dossier.portfolioservice.controller;


import com.zemoso.dossier.portfolioservice.service.PortfolioImageService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static junit.framework.TestCase.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@SpringBootTest
class PortfolioImageControllerTest {
    @MockBean
    PortfolioImageService imageService;
    @Autowired
    PortfolioImageController imageController;

    @Test
    void getImages() {
        when(imageService.getImagesByPortfolioId(1)).thenReturn("hello");
        assertEquals("hello", imageController.getImages(1));
    }

    @Test
    void updateImageContent() {
        String res = "Hello";
        byte[] arr = res.getBytes();
        doNothing().when(imageService).updateImage(0, arr);
        assertEquals(new ResponseEntity<String>("Portfolio Image Updated Successfully", HttpStatus.CREATED), imageController.updateImageContent(0, arr));
    }

}
