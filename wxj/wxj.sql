SET NAMES UTF8;
DROP DATABASE IF EXISTS wxj;
CREATE DATABASE wxj CHARSET=UTF8;
USE wxj;

#网站的基本信息
CREATE TABLE wxj_site_info(
            site_name VARCHAR(16),
            logo VARCHAR(64),
            copyright VARCHAR(256)
);
INSERT INTO wxj_site_info VALUES(
"无限极",
"images/logo.png",
"李锦记健康产品集团 国家工商总局直销行业管理 产品批次报告查询 国际联网备案登记证书 直销信息披露 版权所有©2017 无限极（中国） [粤ICP备05041458] 粤公网安备44010602005995号");

#导航条目
CREATE TABLE wxj_navbar1(
	      fid SMALLINT PRIMARY KEY ,
              title VARCHAR(20),
              url VARCHAR(64)
);
INSERT INTO wxj_navbar1 VALUES(1,"首页","index.html"),
(2,"公司要闻","index.html"),
(3,"走进无限极","index.html"),
(4,"健康人生","index.html"),
(5,"社会责任","index.html"),
(6,"服务大厅","index.html"),
(7,"其它","index.html");

CREATE TABLE wxj_navbar2(
	      sid INT(6) PRIMARY KEY,
              title VARCHAR(20),
              url VARCHAR(64),
	      familyId SMALLINT,
	      FOREIGN KEY(familyId) REFERENCES wxj_navbar1(fid)
);
INSERT INTO wxj_navbar2 VALUES(201,"公司动态","index.html",2),
(202,"产品快讯","index.html",2),
(203,"事业无限","index.html",2),
(301,"董事长寄语","index.html",3),
(302,"公司介绍","index.html",3),
(303,"企业文化","index.html",3),
(304,"健康理念","index.html",3),
(401,"养生固本","index.html",4),
(501,"社会责任观","index.html",5),
(502,"CSR报告","index.html",5),
(503,"思利及人公益基金会","index.html",5),
(504,"公益动态","index.html",5),
(601,"联系我们","index.html",6),
(701,"视频","index.html",7),
(702,"图库","index.html",7),
(703,"应用中心","index.html",7);

CREATE TABLE wxj_navbar3(
	      tid INT(6) PRIMARY KEY,
              title VARCHAR(20),
              url VARCHAR(64),
	      fyId INT(6),
	      FOREIGN KEY(fyId) REFERENCES wxj_navbar2(sid)
);
INSERT INTO wxj_navbar3 VALUES(2011,"公司新闻","index.html",201),
(2012,"媒体报道","index.html",201),
(2013,"数码平台推广","index.html",201),
(2014,"地方风采","index.html",201),
(2021,"售后资讯","index.html",202),
(2031,"规范专区","index.html",203),
(3021,"公司简介","index.html",302),
(3022,"发展历程","index.html",302),
(3023,"企业荣誉","index.html",302),
(3024,"企业之歌","index.html",302),
(3031,"思利及人","index.html",303),
(3032,"自动波","index.html",303),
(3033,"永远创业","index.html",303),
(3041,"解读","index.html",304),
(4011,"养生之道","index.html",401),
(6011,"客服热线","index.html",601);

 
#轮播图数据表
CREATE TABLE wxj_carousel(
            cid INT PRIMARY KEY AUTO_INCREMENT,
            pic VARCHAR(128),
            url VARCHAR(128),
            title VARCHAR(32)
);
INSERT INTO wxj_carousel VALUES(NULL,'images/index/lunbo1.jpg','/m1.html','承担主体责任落实专项整改'),
(NULL,'images/index/lunbo2.jpg','/m2.html','温馨提示 保健食品不能代替药物，不具有食品保健功能');

#公司要闻
CREATE TABLE wxj_news(
      title VARCHAR(32),
      img_title VARCHAR(32),
      img VARCHAR(32),
      img_url VARCHAR(128),
      info1_title VARCHAR(32),
      info1 VARCHAR(256),
      info1_url VARCHAR(128),
      info2_title VARCHAR(32),
      info2 VARCHAR(256),
      info2_url VARCHAR(128)
       );
INSERT INTO wxj_news VALUES(
"公司要闻",
"无限极参与国家重点研发计划“食品安全关键技术研发”项目",
"images/index/yw.jpg",
"index.html",
"2019华彩之旅，到荷兰领略不一样的风情",
"2019华彩之旅如约而至！来自全国各地的无限极业务伙伴，来到了素有“海上马车夫”之称的荷...[详细]",
"index.html",
"无限极•2019年女排精英赛岛城鏖战，山东女排夺冠",
"5月5日，无限极•2019年女排精英赛（青岛）在青岛市民健身中心体育馆落下了帷幕。本次比赛由山东省排球运动管理中心主办，无限极（中国）有限公司独家冠名。",
"index.html");

#产品信息
CREATE TABLE wxj_info(
      title VARCHAR(32),
      img_title VARCHAR(32),
      img VARCHAR(32),
      img_url VARCHAR(128)
       );
INSERT INTO wxj_info VALUES(
"产品信息",
"预约服务“不打烊”，7x24小时等候您!",
"images/index/xx.jpg",
"index.html");

#专题
CREATE TABLE wxj_theme(
      title VARCHAR(32),
      img VARCHAR(32),
      img_url VARCHAR(128),
      info_title VARCHAR(32),
      info VARCHAR(256),
      info_url VARCHAR(128)
       );
INSERT INTO wxj_theme VALUES(
"专题   媒体报道       更多",
"images/index/zt.jpg",
"index.html",
"维护消费者的合法权益，无限极一直在行动",
"让消费者更满意，是无限极一直坚持不懈、努力奋斗的方向。",
"index.html");

#董事长寄语
CREATE TABLE wxj_sendword(
      title VARCHAR(32),
      img VARCHAR(32),
      img_url VARCHAR(128),
      info_title VARCHAR(32),
      info VARCHAR(256),
      info_url VARCHAR(128)
       );
INSERT INTO wxj_sendword VALUES(
"董事长寄语       更多",
"images/index/jy.jpg",
"index.html",
"李惠森：从平凡到非凡",
"所谓从平凡到非凡，就是把一件又一件不起眼的小事做到极致。",
"index.html");

#精彩视频
CREATE TABLE wxj_video(
      title VARCHAR(32),
      img VARCHAR(32),
      img_url VARCHAR(128),
      info_title VARCHAR(32),
      info VARCHAR(256),
      info_url VARCHAR(128)
       );
INSERT INTO wxj_video VALUES(
"精彩视频  高清图片       更多",
"images/index/jy.jpg",
"index.html",
"李惠森：从平凡到非凡",
"所谓从平凡到非凡，就是把一件又一件不起眼的小事做到极致。",
"index.html");

#页尾

#用户表
CREATE TABLE wxj_user(
      cid CHAR(9),                          #卡号
      uname VARCHAR(32),                    #姓名
      upwd VARCHAR(32),                     #密码
      id CHAR(18),                          #身份证号
      phone VARCHAR(11),                    #手机号
      avatar VARCHAR(128),                  #头像
      gender INT);                          #性别

 INSERT INTO wxj_user VALUES(
'161829531',"张三","123456","441522199003125815","18812345678","images/avarar/default.png",0);