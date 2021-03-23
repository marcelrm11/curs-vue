-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2021 at 08:14 PM
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
-- Database: `amazon`
--

-- --------------------------------------------------------

--
-- Table structure for table `autors`
--

CREATE TABLE `autors` (
  `id_autor` int(11) NOT NULL,
  `nom` text NOT NULL,
  `direccio` text DEFAULT NULL,
  `llibres_escrits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `factures`
--

CREATE TABLE `factures` (
  `id_factura` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_llibre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `llibres`
--

CREATE TABLE `llibres` (
  `id_llibre` int(11) NOT NULL,
  `titol` varchar(999) NOT NULL,
  `existencies` int(11) NOT NULL DEFAULT 0,
  `autor` text NOT NULL,
  `id_autor` int(11) NOT NULL,
  `preu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `email` varchar(999) NOT NULL,
  `password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `autors`
--
ALTER TABLE `autors`
  ADD PRIMARY KEY (`id_autor`);

--
-- Indexes for table `factures`
--
ALTER TABLE `factures`
  ADD PRIMARY KEY (`id_factura`),
  ADD KEY `user` (`id_user`),
  ADD KEY `llibre` (`id_llibre`);

--
-- Indexes for table `llibres`
--
ALTER TABLE `llibres`
  ADD PRIMARY KEY (`id_llibre`),
  ADD KEY `autor` (`id_autor`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `autors`
--
ALTER TABLE `autors`
  MODIFY `id_autor` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `factures`
--
ALTER TABLE `factures`
  MODIFY `id_factura` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `llibres`
--
ALTER TABLE `llibres`
  MODIFY `id_llibre` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `factures`
--
ALTER TABLE `factures`
  ADD CONSTRAINT `llibre` FOREIGN KEY (`id_llibre`) REFERENCES `llibres` (`id_llibre`),
  ADD CONSTRAINT `user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`);

--
-- Constraints for table `llibres`
--
ALTER TABLE `llibres`
  ADD CONSTRAINT `autor` FOREIGN KEY (`id_autor`) REFERENCES `autors` (`id_autor`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
