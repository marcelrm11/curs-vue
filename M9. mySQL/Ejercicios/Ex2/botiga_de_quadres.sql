-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2021 at 07:22 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `botiga de quadres`
--

-- --------------------------------------------------------

--
-- Table structure for table `taula compradors`
--

CREATE TABLE `taula compradors` (
  `nom` varchar(45) NOT NULL,
  `cognom` varchar(45) NOT NULL,
  `dni` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `taula quadres`
--

CREATE TABLE `taula quadres` (
  `id_quadre` int(11) NOT NULL,
  `preu` decimal(10,2) NOT NULL,
  `autor` varchar(45) NOT NULL DEFAULT 'Anonim',
  `venut` tinyint(1) NOT NULL,
  `dni_comprador` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `taula compradors`
--
ALTER TABLE `taula compradors`
  ADD KEY `dni` (`dni`);

--
-- Indexes for table `taula quadres`
--
ALTER TABLE `taula quadres`
  ADD UNIQUE KEY `id_quadre` (`id_quadre`),
  ADD KEY `comprador` (`dni_comprador`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `taula quadres`
--
ALTER TABLE `taula quadres`
  ADD CONSTRAINT `comprador` FOREIGN KEY (`dni_comprador`) REFERENCES `taula compradors` (`dni`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
