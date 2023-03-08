drop database if exists dossier;
create database dossier;
use dossier;

DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `line1` varchar(45) DEFAULT NULL,
  `line2` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `_id` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_address_user1_idx` (`user_id`),
  CONSTRAINT `fk_address_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;

LOCK TABLES `address` WRITE;
INSERT INTO `address` VALUES (0,NULL,NULL,NULL,'Pensylvania','USA','62c458125a732515dd6f4743');
UNLOCK TABLES;


DROP TABLE IF EXISTS `portfolio`;
CREATE TABLE `portfolio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `file_name` varchar(45) NOT NULL,
  `portfolio_link` varchar(100) NOT NULL,
  `user_id` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_portfolio_user1_idx` (`user_id`),
  CONSTRAINT `fk_portfolio_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;

LOCK TABLES `portfolio` WRITE;
INSERT INTO `portfolio` VALUES (0,'Fintech Portfolio','file','www.dossier.com','62c458125a732515dd6f4743');
UNLOCK TABLES;


DROP TABLE IF EXISTS `portfolio_extensions`;
CREATE TABLE `portfolio_extensions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `extensions` varchar(80) DEFAULT NULL,
  `portfolio_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_portfolio_extensions_portfolio1_idx` (`portfolio_id`),
  CONSTRAINT `fk_portfolio_extensions_portfolio1` FOREIGN KEY (`portfolio_id`) REFERENCES `portfolio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;

LOCK TABLES `portfolio_extensions` WRITE;
INSERT INTO `portfolio_extensions` VALUES (0,NULL,0);
UNLOCK TABLES;


DROP TABLE IF EXISTS `portfolio_images`;
CREATE TABLE `portfolio_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagescontent` longblob,
  `portfolio_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_portfolio_images_portfolio1_idx` (`portfolio_id`),
  CONSTRAINT `fk_portfolio_images_portfolio1` FOREIGN KEY (`portfolio_id`) REFERENCES `portfolio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;


LOCK TABLES `portfolio_images` WRITE;
INSERT INTO `portfolio_images` VALUES (0,NULL,0);
UNLOCK TABLES;


DROP TABLE IF EXISTS `portfolio_slides`;
CREATE TABLE `portfolio_slides` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` mediumblob,
  `portfolio_id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_portfolio_slides_portfolio1_idx` (`portfolio_id`),
  CONSTRAINT `fk_portfolio_slides_portfolio1` FOREIGN KEY (`portfolio_id`) REFERENCES `portfolio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=utf8mb3;

LOCK TABLES `portfolio_slides` WRITE;
INSERT INTO `portfolio_slides` VALUES (0,NULL,0,'FirstPageInResume'),(1,NULL,0,'PersonalDetails'),(2,NULL,0,'EducationDetails'),(3,NULL,0,'ExperienceDetalis'),(4,NULL,0,'Certifications'),(5,NULL,0,'ImageAndNameSlideContent1'),(6,NULL,0,'ImageAndNameSlideContent2'),(7,NULL,0,'ImageAndNameSlideContent3'),(8,NULL,0,'Accomplishmnets'),(9,NULL,0,'Graph'),(10,NULL,0,'SkyFlowValuation'),(11,NULL,0,'Awards');
UNLOCK TABLES;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(60) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email_id` varchar(45) NOT NULL,
  `is_active` tinyint NOT NULL,
  `is_expired` tinyint NOT NULL,
  `created` datetime NOT NULL,
  `updated` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

LOCK TABLES `user` WRITE;
INSERT INTO `user` VALUES ('62c458125a732515dd6f4743','peter@1234','peterparker@gmail.com',0,1,'2022-04-01 00:00:00',NULL);
UNLOCK TABLES;


DROP TABLE IF EXISTS `user_preferences`;
CREATE TABLE `user_preferences` (
  `industry` varchar(45) NOT NULL,
  `portfolio_type` varchar(45) NOT NULL,
  `experience` varchar(45) NOT NULL,
  `color` varchar(45) NOT NULL,
  `designation` varchar(45) NOT NULL,
  `user_id` varchar(60) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;


LOCK TABLES `user_preferences` WRITE;
INSERT INTO `user_preferences` VALUES ('Fintech','Fintech','2-3 Years','orange','Project Manager','62c458125a732515dd6f4743',1);
UNLOCK TABLES;


DROP TABLE IF EXISTS `user_profile`;
CREATE TABLE `user_profile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `age` int NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `user_id` varchar(60) NOT NULL,
  `profile_image` mediumblob,
  PRIMARY KEY (`id`),
  KEY `fk_user_profile_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_profile_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;


LOCK TABLES `user_profile` WRITE;
INSERT INTO `user_profile` VALUES (0,'Peter','Parker',30,'9999999999','Male','62c458125a732515dd6f4743',NULL);
UNLOCK TABLES;


