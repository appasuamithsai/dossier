package com.zemoso.dossier.portfolioservice.service.implementation;

import com.zemoso.dossier.portfolioservice.dto.PortfolioExtensionDTO;
import com.zemoso.dossier.portfolioservice.entity.PortfolioExtension;
import com.zemoso.dossier.portfolioservice.mapper.PortfolioExtensionMapper;
import com.zemoso.dossier.portfolioservice.repository.PortfolioExtensionRepository;
import com.zemoso.dossier.portfolioservice.service.PortfolioExtensionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.Map;

@Service
public class PortfolioExtensionsServiceImpl implements PortfolioExtensionsService {



      PortfolioExtensionRepository extensionRepository;
      PortfolioExtensionMapper extensionMapper;
@Autowired
    public PortfolioExtensionsServiceImpl( PortfolioExtensionRepository extensionRepository, PortfolioExtensionMapper extensionMapper) {

        this.extensionRepository = extensionRepository;
        this.extensionMapper = extensionMapper;
    }

    @Override
    public PortfolioExtensionDTO getPortfolioExtensions(int id) {
       PortfolioExtension extension=extensionRepository.findByPortfolioId(id);


        return extensionMapper.portfolioExtensionToPortfolioExtensionDTO(extension);
    }

    @Override
    public void savePortfolioExtensions(int id, Map<String, Object> updates) {
        PortfolioExtension portfolioExtension = extensionRepository.findByPortfolioId(id);

        updates.forEach((k,v)->{
            Field field = ReflectionUtils.findField(PortfolioExtension.class, k);
            field.setAccessible(true);
            ReflectionUtils.setField(field, portfolioExtension, v);
        });
        extensionRepository.save(portfolioExtension);
    }

    @Override
    public void save(PortfolioExtension extension) {
   extensionRepository.save(extension);
    }
}
