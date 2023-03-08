package com.zemoso.dossier.portfolioservice.service.implementation;

import com.zemoso.dossier.portfolioservice.entity.Portfolio;
import com.zemoso.dossier.portfolioservice.entity.PortfolioImage;
import com.zemoso.dossier.portfolioservice.repository.PortfolioImageRepository;
import com.zemoso.dossier.portfolioservice.service.PortfolioImageService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest

class PortfolioImageServiceTest {
    @Autowired
    PortfolioImageService imageService;

    @MockBean
    PortfolioImageRepository imageRepository;
    @Test
    void saveImage() {
        PortfolioImage image = new PortfolioImage(0,null,null);
        imageService.saveImage(image);
        verify(imageRepository).save(image);
    }

    @Test
    void updateImage(){
        PortfolioImage image=new PortfolioImage();
        Portfolio portfolio=new Portfolio();
        portfolio.setId(1);
        image.setPortfolio(portfolio);
        when(imageRepository.findImageByPortfolioId(1)).thenReturn(image);
        imageService.updateImage(1,"hello".getBytes());
        assertEquals("hello".getBytes().length,image.getImagesContent().length);
    }
    @Test
    void save(){
        imageService.save(new PortfolioImage());
        verify(imageRepository,times(1)).save(any());
    }
    @Test
    void getImagesByPortfolioId() {
        PortfolioImage portfolioImage = new PortfolioImage();
        portfolioImage.setImagesContent("hello".getBytes());
        when(imageRepository.findImageByPortfolioId(1)).thenReturn(portfolioImage);
        assertEquals("hello",imageService.getImagesByPortfolioId(1));
    }

}
