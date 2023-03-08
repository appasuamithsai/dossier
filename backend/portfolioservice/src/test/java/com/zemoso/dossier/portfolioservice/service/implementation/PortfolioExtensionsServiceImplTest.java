package com.zemoso.dossier.portfolioservice.service.implementation;

import com.zemoso.dossier.portfolioservice.entity.PortfolioExtension;
import com.zemoso.dossier.portfolioservice.repository.PortfolioExtensionRepository;
import com.zemoso.dossier.portfolioservice.service.PortfolioExtensionsService;
import com.zemoso.dossier.portfolioservice.service.PortfolioService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest
class PortfolioExtensionsServiceImplTest {
    @MockBean
    PortfolioExtensionRepository extensionRepository;
    @MockBean
    PortfolioService portfolioService;
    @Autowired
    PortfolioExtensionsService portfolioExtensionsService;


    @Test
    void getPortfolioExtensions() {

        PortfolioExtension portfolioExtension= new PortfolioExtension();
        portfolioExtension.setId(1);
        portfolioExtension.setExtensions("[pdf,jpeg]");
        when(extensionRepository.findByPortfolioId(1)).thenReturn(portfolioExtension);

        assertEquals("[pdf,jpeg]", portfolioExtensionsService.getPortfolioExtensions(1).getExtensions());
    }


    @Test
    void savePortfolioExtensions() {
        PortfolioExtension portfolioExtension= new PortfolioExtension();
        portfolioExtension.setId(1);
        when(extensionRepository.findByPortfolioId(1)).thenReturn(portfolioExtension);
        Map<String,Object> updates=new HashMap<>();
        updates.put("extensions","[pdf,jpeg]");
        portfolioExtensionsService.savePortfolioExtensions(1, updates);
        verify(extensionRepository, times(1)).save(any());

    }
    @Test
    void save(){
        portfolioExtensionsService.save(new PortfolioExtension());
        verify(extensionRepository,times(1)).save(any());
    }
}