-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2025 at 03:30 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `echoblog_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `bio` varchar(200) DEFAULT NULL,
  `qualification` varchar(255) NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `bio`, `qualification`, `user_id`, `createdAt`, `updatedAt`) VALUES
('530e60e0-039f-11f0-abe0-ab773396ede2', 'Sample', 'Masters', '79e927c0-0239-11f0-b073-dd4d103f181f', '2025-03-18 02:18:47', '2025-03-18 02:18:47'),
('61ee1500-021f-11f0-b073-dd4d103f181f', 'hey!! this is noman', 'matric fail', '34aa8430-021e-11f0-b2bb-79fa6879cfed', '2025-03-16 04:30:25', '2025-03-16 04:30:25');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT 'reader',
  `profile` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `profile`, `createdAt`, `updatedAt`) VALUES
('34aa8430-021e-11f0-b2bb-79fa6879cfed', 'Noman', 'noman123@gmail.com', '$2b$10$AjAFDxoKa3s.NixAqguj1uGURWVascsQUzUMkTUKfE1i1WUVyEN42', 'author', 'profile-1742385932506.jpeg', '2025-03-16 04:22:00', '2025-03-17 21:34:13'),
('371fb8b0-0378-11f0-9e13-e7c4b83519f9', 'Raees', 'raees123@gmail.com', '$2b$10$zlskrgQM.xEILly2YY1FlOhnkCK249k3X/boLwZ71r6fgHJECQuWS', 'reader', NULL, '2025-03-17 21:38:50', '2025-03-17 21:38:50'),
('48116040-0221-11f0-b073-dd4d103f181f', 'Admin', 'admin@echoblog.com', '$2b$10$IBjFFWc7P/JcjJPiO34wueunxhowEv.IceGF5eqs0VYAtMTcKqlCS', 'admin', NULL, '2025-03-16 04:44:01', '2025-03-16 04:44:01'),
('79e927c0-0239-11f0-b073-dd4d103f181f', 'John', 'john123@gmail.com', '$2b$10$grx..Bvo9EkIhDOeTPEG9erfEKRoWsnY5PLRW7U40L6TutDp7gWHS', 'author', NULL, '2025-03-16 07:37:13', '2025-03-18 02:18:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `authors`
--
ALTER TABLE `authors`
  ADD CONSTRAINT `authors_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
