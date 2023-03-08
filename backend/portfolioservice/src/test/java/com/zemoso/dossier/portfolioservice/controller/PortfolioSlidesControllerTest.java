package com.zemoso.dossier.portfolioservice.controller;

import com.zemoso.dossier.portfolioservice.service.PortfolioSlidesService;
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
class PortfolioSlidesControllerTest {
    @MockBean
    PortfolioSlidesService slideService;
    @Autowired
    PortfolioSlidesController slidesController;

    @Test
    void getSlideByName() {
        when(slideService.findBySlideName(1,"EducationDetails")).thenReturn("Education details slide content");
        assertEquals("Education details slide content",slidesController.getSlideByName(1,"EducationDetails"));
    }

    @Test
    void updatePortfolioSlideTest() throws Exception {
        String res="Hello";
        byte[] arr=res.getBytes();
        doNothing().when(slideService).updateSlide(1,"EducationDetails",arr);
        assertEquals(new ResponseEntity<String>("Portfolio Slide Updated Successfully", HttpStatus.CREATED),slidesController.updateSlideContent(1,"EducationDetails",arr));
    }

}