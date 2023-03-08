package com.zemoso.dossier.portfolioservice.service.implementation;

import com.zemoso.dossier.portfolioservice.entity.PortfolioImage;
import com.zemoso.dossier.portfolioservice.mapper.PortfolioImageMapper;
import com.zemoso.dossier.portfolioservice.repository.PortfolioImageRepository;
import com.zemoso.dossier.portfolioservice.service.PortfolioImageService;
import org.springframework.stereotype.Service;
@Service
public class PortfolioImageServiceImpl implements PortfolioImageService {

    PortfolioImageRepository imageRepository;
    PortfolioImageMapper imageMapper;
    public PortfolioImageServiceImpl(PortfolioImageRepository imageRepository){
        this.imageRepository=imageRepository;
    }
    @Override
    public void saveImage(PortfolioImage portfolioImage) {
        imageRepository.save(portfolioImage);
    }



    @Override
    public void updateImage(int id, byte[] arr) {
        PortfolioImage images=imageRepository.findImageByPortfolioId(id);
        images.setImagesContent(arr);
        this.saveImage(images);
    }

    @Override
    public void save(PortfolioImage image) {
      imageRepository.save(image);
    }

    @Override
    public String getImagesByPortfolioId(int id) {
        PortfolioImage image=imageRepository.findImageByPortfolioId(id);

       return new String(image.getImagesContent());

    }
}
