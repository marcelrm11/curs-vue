-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2021 at 08:55 PM
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
-- Database: `cul d'ampolla`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id_address` int(11) NOT NULL,
  `tipus_via` text NOT NULL,
  `nom_via` text NOT NULL,
  `numero` int(11) NOT NULL,
  `pis` int(11) NOT NULL,
  `porta` int(11) DEFAULT NULL,
  `ciutat` text NOT NULL,
  `codi_postal` int(11) NOT NULL,
  `pais` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id_client` int(11) NOT NULL,
  `nom` text NOT NULL,
  `id_address` int(11) NOT NULL,
  `telefon` int(13) NOT NULL,
  `email` varchar(999) NOT NULL,
  `data_registre` date NOT NULL,
  `referral` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `marques`
--

CREATE TABLE `marques` (
  `id_marca` int(11) NOT NULL,
  `nom` text NOT NULL,
  `id_proveidor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `proveidors`
--

CREATE TABLE `proveidors` (
  `id_proveidor` int(11) NOT NULL,
  `nom` text NOT NULL,
  `id_address` int(11) NOT NULL,
  `telefon` int(13) NOT NULL,
  `fax` int(13) NOT NULL,
  `NIF` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ulleres`
--

CREATE TABLE `ulleres` (
  `id_ulleres` int(11) NOT NULL,
  `id_marca` int(11) NOT NULL,
  `graduacio_dreta` int(11) NOT NULL,
  `graduacio_esquerra` int(11) NOT NULL,
  `tipus_muntura` set('flotant','pasta','metalica') NOT NULL,
  `color_muntura` text NOT NULL,
  `color_vidre_dreta` text NOT NULL,
  `color_vidre_esquerra` text NOT NULL,
  `preu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ventas`
--

CREATE TABLE `ventas` (
  `id_venta` int(11) NOT NULL,
  `id_ullera` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  `id_venedor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id_address`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id_client`),
  ADD KEY `referral` (`referral`),
  ADD KEY `address` (`id_address`);

--
-- Indexes for table `marques`
--
ALTER TABLE `marques`
  ADD PRIMARY KEY (`id_marca`),
  ADD KEY `proveidor` (`id_proveidor`);

--
-- Indexes for table `proveidors`
--
ALTER TABLE `proveidors`
  ADD PRIMARY KEY (`id_proveidor`),
  ADD KEY `address` (`id_address`);

--
-- Indexes for table `ulleres`
--
ALTER TABLE `ulleres`
  ADD PRIMARY KEY (`id_ulleres`),
  ADD KEY `marca` (`id_marca`);

--
-- Indexes for table `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_venta`),
  ADD KEY `ullera` (`id_ullera`),
  ADD KEY `client` (`id_client`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id_address` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `marques`
--
ALTER TABLE `marques`
  MODIFY `id_marca` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `proveidors`
--
ALTER TABLE `proveidors`
  MODIFY `id_proveidor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ulleres`
--
ALTER TABLE `ulleres`
  MODIFY `id_ulleres` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `client` FOREIGN KEY (`id_address`) REFERENCES `clients` (`id_address`);

--
-- Constraints for table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `compra` FOREIGN KEY (`id_client`) REFERENCES `ventas` (`id_client`),
  ADD CONSTRAINT `referral` FOREIGN KEY (`referral`) REFERENCES `clients` (`id_client`);

--
-- Constraints for table `marques`
--
ALTER TABLE `marques`
  ADD CONSTRAINT `proveidor` FOREIGN KEY (`id_proveidor`) REFERENCES `proveidors` (`id_proveidor`);

--
-- Constraints for table `proveidors`
--
ALTER TABLE `proveidors`
  ADD CONSTRAINT `address` FOREIGN KEY (`id_address`) REFERENCES `addresses` (`id_address`);

--
-- Constraints for table `ulleres`
--
ALTER TABLE `ulleres`
  ADD CONSTRAINT `marca` FOREIGN KEY (`id_marca`) REFERENCES `marques` (`id_marca`);

--
-- Constraints for table `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ullera` FOREIGN KEY (`id_ullera`) REFERENCES `ulleres` (`id_ulleres`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
