package com.zemoso.dossier.portfolioservice.service.implementation;

import com.zemoso.dossier.portfolioservice.VO.User;
import com.zemoso.dossier.portfolioservice.entity.Portfolio;
import com.zemoso.dossier.portfolioservice.error.PortfolioNotFoundException;
import com.zemoso.dossier.portfolioservice.repository.PortfolioRepository;
import com.zemoso.dossier.portfolioservice.service.PortfolioExtensionsService;
import com.zemoso.dossier.portfolioservice.service.PortfolioImageService;
import com.zemoso.dossier.portfolioservice.service.PortfolioService;
import com.zemoso.dossier.portfolioservice.service.PortfolioSlidesService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
class PortfolioServiceImplTest {

    @Autowired
    PortfolioService portfolioService;

    @MockBean
    RestTemplate restTemplate;
    @MockBean
    PortfolioRepository portfolioRepository;
    @MockBean
    PortfolioExtensionsService extensionsService;
    @MockBean
    PortfolioSlidesService slidesService;
    @MockBean
    PortfolioImageService imageService;
    @Test
    void getPortfolioById() {
        Portfolio portfolio=new Portfolio();
        portfolio.setId(1);
        Optional<Portfolio> portfolioOptional=Optional.of(portfolio);
        when(portfolioRepository.findById(1)).thenReturn(portfolioOptional);
        assertEquals(1,portfolioService.getPortfolioById(1).getId());
    }

    @Test
    void getPortfolioLinkByIdException() {
        Exception exception = assertThrows(PortfolioNotFoundException.class, () -> {
            portfolioService.getPortfolioById(1);
        });
        String expectedMessage = "Did not find Portfolio with id - 1";
        String actualMessage = exception.getMessage();
        assertEquals(expectedMessage,actualMessage);
    }

    @Test
    void updatePortfolioLink() {
        Portfolio newPortfolio=new Portfolio(1,"Fintech","file","www.dossier.com",new User());
        newPortfolio.setId(2);
        when(portfolioRepository.findById(2)).thenReturn(Optional.of(newPortfolio));
        Map<String,Object> updates=new HashMap<>();
        updates.put("portfolioName","Sales");
        portfolioService.updatePortfolioLink(2, updates);
        verify(portfolioRepository, times(1)).save(any());

    }
    @Test
    void save(){
        portfolioService.save(new Portfolio());
        verify(portfolioRepository,times(1)).save(any());
    }
    @Test
    void getPortfolioByUserId() {
        Portfolio portfolio=new Portfolio();
        portfolio.setId(1);

        when(portfolioRepository.findPortfoliosByUserId("1")).thenReturn(Arrays.asList(portfolio));
        assertEquals(1,portfolioService.getPortfoliosByUserId("1").size());
    }
  @Test
    void createPortfolio(){
        String userId="userId";
      User newUser=restTemplate.getForObject("http://USER-SERVICE/users/"+userId,User.class);

      portfolioService.createPortfolio(userId);
      verify(portfolioRepository, times(1)).save(any());
      verify(extensionsService, times(1)).save(any());
      verify(imageService, times(1)).save(any());
      verify(slidesService, times(12)).save(any());
  }
}
