/*
Navicat MySQL Data Transfer

Source Server         : louiebb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : nubia

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-25 11:43:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(30) DEFAULT NULL,
  `nickname` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `role` varchar(10) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `expire` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `logintime` datetime DEFAULT NULL,
  `regtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '用户注册时间',
  `state` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('1', '18898601334', 'louiebb', '1', '1000', '18898601334', '244429290@qq.com', 'dfasfdfg', '2018-10-24 19:49:00', '2018-10-11 19:49:09', '2018-10-23 19:49:23', '1');
INSERT INTO `account` VALUES ('2', '1889801312', 'test', '2', '2000', '18898601312', '1015375385@qq.com', '123asaf', '2018-10-23 19:50:58', '2018-10-11 19:49:09', '2018-10-23 19:50:58', '1');
INSERT INTO `account` VALUES ('3', 'test', 'test', '1', '3000', 'test', 'test', 'trst', '2018-10-17 19:51:02', '2018-10-18 19:51:05', '2018-10-23 19:51:10', '1');

-- ----------------------------
-- Table structure for block_products
-- ----------------------------
DROP TABLE IF EXISTS `block_products`;
CREATE TABLE `block_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `spec_id` int(11) DEFAULT NULL,
  `original_price` decimal(10,2) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `product_link` varchar(255) DEFAULT NULL,
  `shopid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of block_products
-- ----------------------------
INSERT INTO `block_products` VALUES ('27', '819', '59.00', '59.00', '', '1250');
INSERT INTO `block_products` VALUES ('28', '1007', '299.00', '299.00', '', '584');
INSERT INTO `block_products` VALUES ('29', '995', '29.00', '29.00', '', '625');
INSERT INTO `block_products` VALUES ('30', '750', '99.00', '99.00', '', '1253');
INSERT INTO `block_products` VALUES ('31', '1006', '99.00', '99.00', '', '714');
INSERT INTO `block_products` VALUES ('32', '705', '59.00', '59.00', '', '626');
INSERT INTO `block_products` VALUES ('33', '1035', '2999.00', '2699.00', 'nubiaredmagic/red8gb128gb', '1226');
INSERT INTO `block_products` VALUES ('34', '1003', '1799.00', '1799.00', 'nubiaz18mini/blue6gb64gb', '1225');
INSERT INTO `block_products` VALUES ('35', '935', '2699.00', '2499.00', 'nubiaz17s/black6gb64gb', '1039');
INSERT INTO `block_products` VALUES ('36', '882', '2499.00', '2299.00', 'nubiaZ17/black', '796');
INSERT INTO `block_products` VALUES ('37', '983', '1299.00', '1099.00', 'nubiav18/black4gb64gb', '1005');
INSERT INTO `block_products` VALUES ('38', '914', '3399.00', '2699.00', 'nubiaZ17/red128gb', '797');
INSERT INTO `block_products` VALUES ('39', '1020', '69.00', '69.00', '', '1254');

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `cart_id` int(20) NOT NULL AUTO_INCREMENT,
  `product_id` int(20) DEFAULT NULL,
  `name` varchar(80) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `preferential_type` int(11) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `cate_id` int(11) DEFAULT NULL,
  `minus` bigint(1) DEFAULT NULL,
  `minus_msg` varchar(255) DEFAULT NULL,
  `minus_id` int(11) DEFAULT NULL,
  `minus_amount` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `original_price` decimal(10,2) DEFAULT NULL,
  `image_id` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=MyISAM AUTO_INCREMENT=548582 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('548581', '1035', '红魔电竞游戏手机( 8GB+128GB 烈焰红)', '0', '0', '1', '17', '0', '', '0', '0', '2699.00', '2999.00', 'pic/153481678448.jpg', '/product/s/1035', '0');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shopid` int(11) DEFAULT NULL,
  `shop` varchar(255) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '501', '501', '2018-10-19 21:49:54');
INSERT INTO `category` VALUES ('2', '502', '502', '2018-10-19 21:50:24');
INSERT INTO `category` VALUES ('3', '503', '503', '2018-10-19 21:50:44');
INSERT INTO `category` VALUES ('4', '504', '504', '2018-10-19 21:50:50');
INSERT INTO `category` VALUES ('5', '505', '505', '2018-10-19 21:50:57');
INSERT INTO `category` VALUES ('6', '506', '506', '2018-10-19 21:51:18');
INSERT INTO `category` VALUES ('7', '507', '507', '2018-10-19 21:51:23');
INSERT INTO `category` VALUES ('8', '508', '508', '2018-10-19 21:51:27');
INSERT INTO `category` VALUES ('9', '509', '509', '2018-10-19 21:51:41');

-- ----------------------------
-- Table structure for increase_products
-- ----------------------------
DROP TABLE IF EXISTS `increase_products`;
CREATE TABLE `increase_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `promotion_id` int(11) DEFAULT NULL,
  `promotion_desc` varchar(255) DEFAULT NULL,
  `default_image` varchar(255) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `choose_spec_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of increase_products
-- ----------------------------
INSERT INTO `increase_products` VALUES ('1', '671', '圈铁耳机', 'produc/146711226614.png', '554', '努比亚圈铁耳机', '0');
INSERT INTO `increase_products` VALUES ('2', '672', '蓝牙耳机', 'produc/149637093487.jpg', '642', '努比亚蓝牙耳机', '0');
INSERT INTO `increase_products` VALUES ('3', '673', '炫美自拍杆', 'produc/148350884768.png', '575', '努比亚炫美自拍杆', '0');
INSERT INTO `increase_products` VALUES ('4', '674', '便携移动电源', 'produc/152118927962.jpg', '700', '便携移动电源', '0');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account_id` int(11) DEFAULT NULL,
  `cart_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '1', '548581');
INSERT INTO `order` VALUES ('2', '1', '2');
INSERT INTO `order` VALUES ('3', '2', '3');
INSERT INTO `order` VALUES ('4', '3', '4');
INSERT INTO `order` VALUES ('5', '3', '5');
INSERT INTO `order` VALUES ('6', '3', '6');

-- ----------------------------
-- Table structure for shoplist
-- ----------------------------
DROP TABLE IF EXISTS `shoplist`;
CREATE TABLE `shoplist` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `cate_id` int(11) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `sub_title` varchar(100) DEFAULT NULL,
  `page_type` int(20) DEFAULT NULL,
  `big_image` varchar(100) DEFAULT NULL,
  `small_image` varchar(100) DEFAULT NULL,
  `file_path` varchar(100) DEFAULT NULL,
  `link` varchar(100) DEFAULT NULL,
  `media_type` int(20) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title_position` int(20) DEFAULT NULL,
  `content_bg_color` int(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoplist
-- ----------------------------
INSERT INTO `shoplist` VALUES ('1238', null, '501', 'z18抢购9.18', '', '5', '', 'blockimage/153933641050.jpg', '', 'https://m.nubia.com/nubiaz18/black8gb128gb', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('1247', null, '502', 'z18手机', '', '5', '', 'blockimage/153726703712.jpg', '', 'https://m.nubia.com/nubiaz18/black6gb64gb', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('1248', null, '503', '红魔', '', '5', '', 'blockimage/153726709889.jpg', '', 'https://m.nubia.com/nubiaredmagic/red8gb128gb', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('1249', null, '504', 'z17mini', '', '5', '', 'blockimage/153726716198.jpg', '', 'https://m.nubia.com/nubiaz17mini/whitegold6g', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('1250', null, '505', '努比亚二合一数据线', '', '5', '', 'blockimage/153733887722.jpg', '', '', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('584', null, '505', '红魔电竞游戏耳机', '', '5', '', 'blockimage/15254240264.png', '', '', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('625', null, '505', 'Z18mini清水套', '', '5', '', 'blockimage/152542395951.png', '', '', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('1253', null, '505', '圈铁耳机', '', '5', '', 'blockimage/153734173619.jpg', '', '', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('714', null, '505', '努比亚红魔游戏T恤', '', '5', '', 'blockimage/152542388343.png', '', '', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('626', null, '505', 'Type-C数据线', '', '5', '', 'blockimage/149205402555.jpg', '', '', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('1271', null, '501', '红魔6+64直降200', '', '5', '', 'blockimage/153984253670.jpg', '', 'https://m.nubia.com/nubiaredmagic/black6gb64gb', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('1262', null, '501', 'Z18梵高星空典藏版抢购', '', '5', '', 'blockimage/153785732914.jpg', '', 'https://m.nubia.com/nubiaz18/sky8gb128gb', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('1226', '1035', '506', '红魔电竞游戏手机', '<span style=\"color:#FF4D4D\">不红魔不成活</span>', '5', '', 'blockimage/153674260887.png', '', '', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('1225', null, '506', 'Z18mini', '<span style=\"color:#FF4D4D\">2400万双摄</span>', '5', '', 'blockimage/153674246273.png', '', '', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('1039', null, '506', 'Z17S', '<span style=\"color:#FF4D4D\">无边框全面屏</span>', '5', '', 'blockimage/152341451538.png', '', '', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('796', null, '506', 'Z17曜石黑', '<span style=\"color:#FF4D4D\">骁龙835处理器</span>', '5', '', 'blockimage/151746296957.png', '', '', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('1005', null, '506', 'V18 曜石黑', '<span style=\"color:#FF4D4D\">充一次，用两天</span>', '5', '', 'blockimage/152341321867.png', '', '', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('797', null, '506', 'Z17烈焰红', '<span style=\"color:#FF4D4D\">1200�?2300万双摄</span>', '5', '', 'blockimage/151746301180.png', '', '', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('876', null, '507', 'V18', '', '5', '', 'blockimage/153663589182.jpg', '', 'https://m.nubia.com/nubiav18/red4gb64gb', '1', '', '0', '0');
INSERT INTO `shoplist` VALUES ('1254', null, '508', 'nubia 电源适配器（快充3.0）', '', '5', '', 'blockimage/153734644757.jpg', '', 'https://m.nubia.com/product/470/1020', '1', '', '0', '0');

-- ----------------------------
-- Table structure for spec_infos
-- ----------------------------
DROP TABLE IF EXISTS `spec_infos`;
CREATE TABLE `spec_infos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `spec_id` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `original_price` decimal(10,2) DEFAULT NULL,
  `color_name` varchar(255) DEFAULT NULL,
  `spec_value` varchar(255) DEFAULT NULL,
  `image_id` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `stock` tinyint(1) DEFAULT NULL,
  `promotion_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of spec_infos
-- ----------------------------
INSERT INTO `spec_infos` VALUES ('1', '750', '80.00', '99.00', '红色', '', 'pic/147747102535.jpg', '/product/s/750', '1', '671');
INSERT INTO `spec_infos` VALUES ('2', '915', '69.00', '79.00', '黑色', '', 'pic/150103807291.jpg', '/product/s/915', '1', '672');
INSERT INTO `spec_infos` VALUES ('3', '785', '29.00', '49.00', '白金', '', 'pic/148524162779.png', '/product/s/785', '1', '673');
INSERT INTO `spec_infos` VALUES ('4', '972', '89.00', '129.00', '灰白', '', 'pic/152118859076.jpg', '/product/s/972', '1', '674');
SET FOREIGN_KEY_CHECKS=1;
