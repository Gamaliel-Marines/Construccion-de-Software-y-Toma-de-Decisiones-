-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 09, 2023 at 06:19 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hot_cakes`
--

-- --------------------------------------------------------

--
-- Table structure for table `hotcakes`
--

CREATE TABLE `hotcakes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `imagen` varchar(512) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `descripcion` varchar(512) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `handle` varchar(32) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `precio` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `hotcakes`
--

INSERT INTO `hotcakes` (`id`, `nombre`, `imagen`, `descripcion`, `handle`, `precio`, `created_at`) VALUES
(1, 'belgas', 'https://t1.uc.ltmcdn.com/es/posts/8/9/7/como_hacer_waffles_con_harina_de_hot_cakes_50798_paso_5_600.jpg', 'Hot cakes ricos', '@belgas', 150, '2023-03-09 18:13:19');

-- --------------------------------------------------------

--
-- Table structure for table `ingredientes`
--

CREATE TABLE `ingredientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `ingredientes`
--

INSERT INTO `ingredientes` (`id`, `nombre`, `created_at`) VALUES
(1, 'mantequilla', '2023-03-09 18:10:50'),
(2, 'harina', '2023-03-09 18:10:50'),
(3, 'huevos', '2023-03-09 18:11:28'),
(4, 'leche', '2023-03-09 18:11:28'),
(5, 'cocoa', '2023-03-09 18:11:51'),
(6, 'mantequilla de Normandia', '2023-03-09 18:15:12');

-- --------------------------------------------------------

--
-- Table structure for table `necesita`
--

CREATE TABLE `necesita` (
  `idhotcakes` int(11) NOT NULL,
  `idingredientes` int(11) NOT NULL,
  `cantidad` varchar(40) COLLATE utf8mb4_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `necesita`
--

INSERT INTO `necesita` (`idhotcakes`, `idingredientes`, `cantidad`) VALUES
(1, 1, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hotcakes`
--
ALTER TABLE `hotcakes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `necesita`
--
ALTER TABLE `necesita`
  ADD PRIMARY KEY (`idhotcakes`,`idingredientes`),
  ADD KEY `idingredientes` (`idingredientes`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hotcakes`
--
ALTER TABLE `hotcakes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `necesita`
--
ALTER TABLE `necesita`
  ADD CONSTRAINT `necesita_ibfk_1` FOREIGN KEY (`idhotcakes`) REFERENCES `hotcakes` (`id`),
  ADD CONSTRAINT `necesita_ibfk_2` FOREIGN KEY (`idingredientes`) REFERENCES `ingredientes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
