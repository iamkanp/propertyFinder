-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 17, 2014 at 10:29 PM
-- Server version: 5.1.54
-- PHP Version: 5.3.27

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `goosuayc_property`
--

-- --------------------------------------------------------

--
-- Table structure for table `asset_detail`
--

CREATE TABLE IF NOT EXISTS `asset_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `asset_type` enum('SH','TH','CD','CB','LD') NOT NULL,
  `province` enum('BKK','NTB','PTT','SMP','ETC') NOT NULL,
  `price` int(11) NOT NULL,
  `special_need` enum('BTS','EXAT','ROAD','CLOSE_TO_ROAD','RIVER','MOUNTAIN') NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `asset_detail` text NOT NULL,
  `date_in` datetime NOT NULL,
  `date_out` datetime NOT NULL,
  `status` enum('T','F') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `asset_image`
--

CREATE TABLE IF NOT EXISTS `asset_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `asset_id` int(11) NOT NULL,
  `image_name` varchar(50) NOT NULL,
  `image` blob NOT NULL,
  `status` enum('T','F') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `transaction_contact`
--

CREATE TABLE IF NOT EXISTS `transaction_contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `search_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `reply` enum('T','F') NOT NULL,
  `status` enum('T','F') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `transaction_search`
--

CREATE TABLE IF NOT EXISTS `transaction_search` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `asset_type` enum('SH','TH','CD','CB','LD') NOT NULL,
  `province` enum('BKK','NTB','PTT','SMP','ETC') NOT NULL,
  `price_min` int(11) NOT NULL,
  `price_max` int(11) NOT NULL,
  `special_need` enum('BTS','EXAT','ROAD','CLOSE_TO_ROAD','RIVER','MOUNTAIN') NOT NULL,
  `date_time` datetime NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
