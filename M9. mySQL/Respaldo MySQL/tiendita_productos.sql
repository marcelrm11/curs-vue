-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: tiendita
-- ------------------------------------------------------
-- Server version	5.7.33-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `fecha_alta` date DEFAULT '0000-00-00',
  `idCategoria` int(11) NOT NULL,
  `existencia` int(11) NOT NULL,
  PRIMARY KEY (`idProducto`),
  KEY `fk_CatPro_idx` (`idCategoria`),
  CONSTRAINT `fk_CatPro` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Refresco de Cola',10.00,'2016-01-01',1,10),(2,'Refesco de limon',9.00,'2015-02-06',1,15),(3,'Limonada',12.00,'2014-05-09',1,12),(4,'Refresco de toronja',9.00,'2016-05-07',1,20),(5,'Agua Mineral',15.00,'2016-02-15',1,8),(6,'Aceite Natural 1 Litro',20.00,'2015-09-20',2,25),(7,'Aceite de Coco 500 ml',15.00,'2016-03-24',2,20),(8,'Jabon lavanda 1 kg',12.00,'2014-02-21',3,6),(9,'Detergente en polvo 1 kg',18.50,'2014-11-17',3,9),(10,'Jabon para manos 500 ml',26.50,'2016-01-10',3,7),(11,'Detergente en polvo 2 kg',30.00,'2014-11-17',3,5),(12,'Detergente en polvo para trastes 500 g',18.50,'2016-02-20',3,8),(13,'Paleta de caramelo',5.00,'2013-01-01',4,50),(14,'Paleta de chocolate',6.50,'2014-05-20',4,34),(15,'Gomitas',12.50,'2016-03-30',4,16),(16,'Bolsa de dulces variados',14.50,'2015-12-12',4,23),(17,'Papas fritas',9.50,'2013-04-09',5,14),(18,'Frituras de queso',8.00,'2014-10-09',5,12),(19,'Papas fristas con limon',10.00,'2015-09-08',5,8),(20,'Bolsa de chicharrones',15.00,'2016-05-20',5,19),(21,'Palomitas de mantequilla',18.00,'2015-11-28',5,12);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-23 17:08:41
