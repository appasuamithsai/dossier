package com.zemoso.dossier.portfolioservice.entity;

import com.zemoso.dossier.portfolioservice.VO.User;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PortfolioTest {

        @Test
        void portfolioGetAndSetData() {
                Portfolio portfolio = new Portfolio();
                Portfolio portfolio1=new Portfolio(1,"Sales","newFile","link",null);
                portfolio.setId(1);
                portfolio.setPortfolioLink("www.dossier.com");
                portfolio.setPortfolioName("Peter Parker");
                User user = new User();
                user.setId("1");
                portfolio.setUser(user);
                portfolio.setFileName("resume");
                PortfolioSlides portfolioSlide = new PortfolioSlides();
                portfolioSlide.setId(1);
                List<PortfolioSlides> portfolioSlidesList = new ArrayList<>();
                portfolioSlidesList.add(portfolioSlide);
                PortfolioImage portfolioImage = new PortfolioImage();
                portfolioImage.setId(1);
                List<PortfolioImage> portfolioImageList = new ArrayList<>();
                portfolioImageList.add(portfolioImage);
                PortfolioExtension portfolioExtension=new PortfolioExtension();
                portfolioExtension.setId(1);
                assertEquals(1, portfolio.getId());
                assertEquals("www.dossier.com", portfolio.getPortfolioLink());
                assertEquals("Peter Parker", portfolio.getPortfolioName());
                assertEquals("1", portfolio.getUser().getId());
                assertEquals("resume", portfolio.getFileName());
                assertEquals("Portfolio(id=1, portfolioName=Peter Parker, fileName=resume, portfolioLink=www.dossier.com, user=User(id=1, password=null, userName=null, isActive=0, isExpired=0, created=null, updated=null))",portfolio.toString());

        }
}