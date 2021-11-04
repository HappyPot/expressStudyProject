/*
 Navicat Premium Data Transfer

 Source Server         : vueblog
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : 127.0.0.1:3306
 Source Schema         : vueblog

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 06/09/2021 09:38:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `userid` int(11) NOT NULL,
  `articleid` int(11) NOT NULL AUTO_INCREMENT,
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci,
  `likenum` int(11) DEFAULT NULL,
  `createtime` datetime(0) DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`articleid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (16, 1, '<p>Initial contentasdasdasdadasd</p>', 0, NULL);
INSERT INTO `article` VALUES (16, 2, '<h1>Initial contentasdadadad撒大大大</h1>', 0, NULL);
INSERT INTO `article` VALUES (16, 3, '<h1 style=\"text-align: center;\">按时大大大大多所</h1>\n<ul>\n<li style=\"text-align: left;\">啊实打实大大</li>\n<li style=\"text-align: left;\">asdadad</li>\n<li style=\"text-align: left;\">asdasd</li>\n<li style=\"text-align: left;\">asdadad</li>\n</ul>', 0, NULL);
INSERT INTO `article` VALUES (16, 4, '<p style=\"text-align: center;\">Initial content啊实打实大大所多</p>', 0, NULL);
INSERT INTO `article` VALUES (16, 5, '<p>再次更新</p>', 0, NULL);
INSERT INTO `article` VALUES (16, 6, '<p>今天2021年9月3号</p>', 0, NULL);
INSERT INTO `article` VALUES (16, 7, '<div class=\"index-module_textWrap_3ygOc\">\n<p><span class=\"bjh-p\">据路透社伊斯兰堡9月1日报道，巴基斯坦官员越来越担心邻国阿富汗的安全形势。</span></p>\n</div>\n<div class=\"index-module_textWrap_3ygOc\">\n<p><span class=\"bjh-p\">巴基斯坦政府尤其担心阿富汗境内的另一个组织&ldquo;巴基斯坦塔利班&rdquo;越境对巴境内发动致命袭击。过去20年有数千名巴基斯坦人死于&ldquo;圣战分子&rdquo;的暴力活动。</span></p>\n</div>\n<div class=\"index-module_textWrap_3ygOc\">\n<p><span class=\"bjh-p\">报道称，一位巴基斯坦高级官员说：&ldquo;接下来两三个月至关重要。&rdquo;他表示，巴基斯坦政府担心巴阿边境的武装袭击会增多。阿富汗塔利班正在努力填补阿政府军垮台后留下的真空。</span></p>\n</div>', 0, NULL);
INSERT INTO `article` VALUES (16, 8, '<div class=\"index-module_textWrap_3ygOc\">\n<p data-from-paste=\"1\">随着美国第四轮技术制裁的到来，华为承受的芯片压力进一步增大。拿华为P50举例，由于麒麟芯片库存不足，华为一部分P50新机只好搭载4G版骁龙888，因缺少5G射频芯片、调制解调器，P50全系告别5G。虽说华为积极地寻求缓解芯片压力的办法，可依旧不能彻底解决缺芯问题。</p>\n<p data-from-paste=\"1\">我是柏柏说科技，资深半导体科技爱好者。本期为大家带来的资讯是：缺芯问题加剧，华为又一芯片库存告急。AX3 Pro悄然换&ldquo;芯&rdquo;。</p>\n</div>', 0, NULL);
INSERT INTO `article` VALUES (16, 9, '<div class=\"index-module_textWrap_3ygOc\">\n<p><span class=\"bjh-p\">9月2日中午，在 &ldquo;西安地铁保安拖拽女乘客事件&rdquo;引发舆论关注两天后，当地警方发布了有关调查和处理情况通报。</span></p>\n</div>\n<div class=\"index-module_textWrap_3ygOc\">\n<p><span class=\"bjh-p\">通报称，当事女乘客郭某有扰乱地铁公共秩序的行为，但情节轻微，不予治安处罚，由公安机关给予批评教育；保安员陈某某工作方法简单粗暴，但尚不构成违法犯罪，责令其所属保安公司对其予以停职并依规调查处理。</span></p>\n</div>', 0, NULL);
INSERT INTO `article` VALUES (16, 10, '<div class=\"index-module_textWrap_3ygOc\">\n<p><span class=\"bjh-p\">《环球报》提问说，根据巴西5G标书，允许华为竞标，但禁止华为参与巴西政府私网。这符合中方利益吗？</span></p>\n</div>\n<div class=\"index-module_textWrap_3ygOc\">\n<p><span class=\"bjh-p\">对此，杨大使表示，5G是新一轮科技革命的重要驱动，是引领产业升级、提升国家竞争力的关键因素。选择先进、安全、高性价比的5G设备，关乎一国能否分享科技创新、数字经济的发展红利。</span></p>\n</div>', 0, NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `create_time` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (16, '测试', '$2b$10$Qhg/W09mR8QlqRTAxnunn.nwCUDwA.lisewN/dcqStgRZzq4DLocK', 1, '1629967054534');

SET FOREIGN_KEY_CHECKS = 1;
