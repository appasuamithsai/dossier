package com.zemoso.dossier.portfolioservice.service.implementation;

import com.zemoso.dossier.portfolioservice.VO.User;
import com.zemoso.dossier.portfolioservice.mapper.PortfolioConverter;
import com.zemoso.dossier.portfolioservice.dto.PortfolioDTO;

import com.zemoso.dossier.portfolioservice.entity.Portfolio;
import com.zemoso.dossier.portfolioservice.entity.PortfolioExtension;
import com.zemoso.dossier.portfolioservice.entity.PortfolioImage;
import com.zemoso.dossier.portfolioservice.entity.PortfolioSlides;
import com.zemoso.dossier.portfolioservice.error.PortfolioNotFoundException;
import com.zemoso.dossier.portfolioservice.repository.PortfolioRepository;
import com.zemoso.dossier.portfolioservice.service.PortfolioExtensionsService;
import com.zemoso.dossier.portfolioservice.service.PortfolioSlidesService;
import com.zemoso.dossier.portfolioservice.service.PortfolioImageService;
import com.zemoso.dossier.portfolioservice.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@Service
public class PortfolioServiceImpl implements PortfolioService {
@Autowired
private RestTemplate restTemplate;
    @Autowired
    PortfolioRepository portfolioRepository;
    @Autowired
    PortfolioConverter portfolioConverter;
@Autowired
PortfolioSlidesService slidesService;
@Autowired
    PortfolioImageService imageService;
@Autowired
PortfolioExtensionsService extensionsService;
    @Override
    public PortfolioDTO getPortfolioById(int id) {
        Optional<Portfolio> result= portfolioRepository.findById(id);
        Portfolio portfolio=result.orElseThrow(()->new PortfolioNotFoundException("Did not find Portfolio with id - "+id) );
        return  portfolioConverter.entityToDto(portfolio);
    }

    @Override
    public void updatePortfolioLink(int id, Map<String, Object> updates) {
        Portfolio portfolio=portfolioRepository.findById(id).orElseThrow();
        updates.forEach((k,v)->{
            Field field = ReflectionUtils.findField(Portfolio.class, k);
            field.setAccessible(true);
            ReflectionUtils.setField(field, portfolio, v);
        });
        portfolioRepository.save(portfolio);
    }

    @Override
    public void save(Portfolio portfolio) {
         portfolioRepository.save(portfolio);
    }

    @Override
    public List<PortfolioDTO> getPortfoliosByUserId(String id) {


        return  getPortfolioDTOSConverted(portfolioRepository.findPortfoliosByUserId(id));
    }

    @Override
    public void createPortfolio(String userId) {
        User newUser=restTemplate.getForObject("http://USER-SERVICE/users/"+userId,User.class);
        Portfolio portfolio=new Portfolio();
        portfolio.setUser(newUser);
        portfolio.setPortfolioLink("www.dossier.parker.com");
        portfolio.setPortfolioName("Fintech");
        portfolio.setFileName("File");
        portfolioRepository.save(portfolio);
        PortfolioExtension extensions=new PortfolioExtension();
        extensions.setExtensions(null);
        extensions.setPortfolio(portfolio);
        extensionsService.save(extensions);
        PortfolioImage image=new PortfolioImage();
        image.setImagesContent("hello".getBytes());
        image.setPortfolio(portfolio);
        imageService.save(image);
        slidesService.save(new PortfolioSlides("FirstPageInResume",null,portfolio));
        slidesService.save(new PortfolioSlides("PersonalDetails",null,portfolio));
        slidesService.save(new PortfolioSlides("EducationDetails",null,portfolio));
        slidesService.save(new PortfolioSlides("ExperienceDetails",null,portfolio));
        slidesService.save(new PortfolioSlides("Certifications",null,portfolio));
        slidesService.save(new PortfolioSlides("ImageAndNameSlideContent1",null,portfolio));
        slidesService.save(new PortfolioSlides("ImageAndNameSlideContent2",null,portfolio));
        slidesService.save(new PortfolioSlides("ImageAndNameSlideContent3",null,portfolio));
        slidesService.save(new PortfolioSlides("Accomplishments",null,portfolio));
        slidesService.save(new PortfolioSlides("Graph",null,portfolio));
        slidesService.save(new PortfolioSlides("SkyFlowValuation",null,portfolio));
        slidesService.save(new PortfolioSlides("Awards",null,portfolio));

    }

    private List<PortfolioDTO> getPortfolioDTOSConverted(List<Portfolio> portfolioList) {
        List<PortfolioDTO> portfolioDTOS = new ArrayList<>();
        for (Portfolio portfolio : portfolioList) {
            portfolioDTOS.add(portfolioConverter.entityToDto(portfolio));
        }
        return portfolioDTOS;
    }

}