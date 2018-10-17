 SET NAMES UTF8;
DROP DATABASE IF EXISTS mafengwo;
CREATE DATABASE mafengwo CHARSET=UTF8;
USE mafengwo;
/**马蜂窝商城产品类型**/
CREATE TABLE mfw_product_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,    #类型编号
  fname VARCHAR(32)      #产品名称
);



/**产品**/
CREATE TABLE mfw_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属类型编号
  city VARCHAR(128),           #产品相关城市
  ptitle VARCHAR(128),         #主标题
  details VARCHAR(1024),        #详情
  price DECIMAL(10,2),        #价格
  promise VARCHAR(64),        #服务承诺
  spec VARCHAR(64)           #规格/要求
);




/**产品图片**/
CREATE TABLE mfw_product_img(
  Iid INT PRIMARY KEY AUTO_INCREMENT,
  pid INT,              #产品编号
  img_url VARCHAR(128)            #图片路径
);






/**用户信息**/
CREATE TABLE mfw_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名字，如王小明
  gender INT                  #性别  0-女  1-男
);




/**用户订单(暂无)**/
CREATE TABLE mfw_order(
  oid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  address VARCHAR,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  start_time BIGINT,    #产品/服务开始时间
  end_time BIGINT    #产品/服务结束时间
)AUTO_INCREMENT=10000000;



CREATE TABLE mfw_strategy(
  sid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,         
  title VARCHAR(64),
  city   VARCHAR(128),    #城市
  detail  VARCHAR(1028),      #攻略详情
  member INT,        #人数
  fee DECIMAL(10,2),    #每人平均花费
  repo_time DATE,    #发表时间
  agree_count INT, #点赞人数
  type  BOOLEAN,  #1：自由行0：游记
  experience INT, #曾体验人数
  browse INT,  #浏览人数
  show_pic1 VARCHAR(128),  #展示图1/头图
  show_pic2 VARCHAR(128), #展示图2/用户头像/小图
  show_pic3 VARCHAR(128), #展示图3
  comment_count INT,  #评论数
  uname VARCHAR(12)  #用户名

);

CREATE TABLE mfw_comment(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  sid INT,
  cm_detail  VARCHAR(128),      #评论详情
  cm_time date    #发表时间
);




CREATE TABLE hotelinfo(
  hid INT PRIMARY KEY AUTO_INCREMENT,
  page_id int,    #所属页面
  title1  VARCHAR(128),      #国家/中文名称
  title2  VARCHAR(128),      #城市/英文名称
  h_image VARCHAR(128),    #图片地址
  score DECIMAL(2,1)   #酒店评分
);

CREATE TABLE pageinfo(
  page_id INT PRIMARY KEY AUTO_INCREMENT,
  page_name  VARCHAR(8)      #页面名称
);




/*******************/
/******数据导入******/
/*******************/
/**马蜂窝产品类型**/
INSERT INTO mfw_product_family VALUES
(1,'酒店'),
(2,'签证'),
(3,'跟团游'),
(4,'保险'),
(5,'机票'),
(6,'火车票');


/**用户信息**/
INSERT INTO  mfw_user VALUES
(NULL, 'dangdang', '123456', 'dangdang@qq.com', '13501234567', 'img/avatar/default.png', '凌当', '1'),
(NULL, 'mengmeng', '123456', 'mengmeng@qq.com', '13501234568', 'img/avatar/default.png', '凌檬', '1'),
(NULL, 'xiaolong', '123456', 'xiaolong@qq.com', '13501234569', 'img/avatar/default.png', '凌珑', '0'),
(NULL, 'chenchen', '123456', 'chenchen@qq.com', '13501234560', 'img/avatar/default.png', '凌辰', '1');





/**特价酒店信息**/
INSERT INTO pageinfo VALUES
(1,'童话小镇'),
(2,'亲子之选'),
(3,'超值酒店'),
(4,'设计酒店'),
(5,'迪士尼乐园'),
(6,'目的地特色'),
(7,'曼谷'),
(8,'台北'),
(9,'东京'),
(10,'香港'),
(11,'首尔'),
(12,'新加坡');




/**页面展示信息**/
INSERT INTO hotelinfo VALUES
(1,1,'德国','罗腾堡','http://127.0.0.1:3000/hotel-image/thxz1.jpeg','null'),
(2,1,'德国','海德堡','http://127.0.0.1:3000/hotel-image/thxz2.jpeg','null'),
(3,1,'奥地利','哈尔施塔特','http://127.0.0.1:3000/hotel-image/thxz3.jpeg','null'),
(4,1,'意大利','五渔村','http://127.0.0.1:3000/hotel-image/thxz4.jpeg','null'),
(5,1,'荷兰','羊角村','http://127.0.0.1:3000/hotel-image/thxz5.jpeg','null'),
(6,1,'瑞士','因特拉肯','http://127.0.0.1:3000/hotel-image/thxz6.jpeg','null'),
(7,2,'泰国','狗骨岛','http://127.0.0.1:3000/hotel-image/qzzx1.jpeg','null'),
(8,2,'中国','三亚','http://127.0.0.1:3000/hotel-image/qzzx2.jpeg','null'),
(9,2,'日本','大阪','http://127.0.0.1:3000/hotel-image/qzzx3.jpeg','null'),
(10,2,'泰国','苏梅岛','http://127.0.0.1:3000/hotel-image/qzzx4.jpeg','null'),
(11,2,'新西兰','皇后镇','http://127.0.0.1:3000/hotel-image/qzzx5.jpeg','null'),
(12,2,'澳大利亚','大堡礁','http://127.0.0.1:3000/hotel-image/qzzx6.jpeg','null'),
(13,3,'美国','塞班岛','http://127.0.0.1:3000/hotel-image/czjd1.jpeg','null'),
(14,3,'中国','香港','http://127.0.0.1:3000/hotel-image/czjd2.jpeg','null'),
(15,3,'法国','巴黎','http://127.0.0.1:3000/hotel-image/czjd3.jpeg','null'),
(16,3,'美国','纽约','http://127.0.0.1:3000/hotel-image/czjd4.jpeg','null'),
(17,3,'日本','东京','http://127.0.0.1:3000/hotel-image/czjd5.jpeg','null'),
(18,3,'新加坡','新加坡','http://127.0.0.1:3000/hotel-image/czjd6.jpeg','null'),
(19,4,'中国','上海','http://127.0.0.1:3000/hotel-image/sjjd1.jpeg','null'),
(20,4,'韩国','首尔','http://127.0.0.1:3000/hotel-image/sjjd2.jpeg','null'),
(21,4,'丹麦','哥本哈根','http://127.0.0.1:3000/hotel-image/sjjd3.jpeg','null'),
(22,4,'美国','纽约','http://127.0.0.1:3000/hotel-image/sjjd4.jpeg','null'),
(23,4,'德国','柏林','http://127.0.0.1:3000/hotel-image/sjjd5.jpeg','null'),
(24,4,'中国','台中','http://127.0.0.1:3000/hotel-image/sjjd6.jpeg','null'),
(25,5,'美国','奥兰多','http://127.0.0.1:3000/hotel-image/dsnly1.jpeg','null'),
(26,5,'中国','上海','http://127.0.0.1:3000/hotel-image/dsnly2.jpeg','null'),
(27,5,'中国','香港','http://127.0.0.1:3000/hotel-image/dsnly3.jpeg','null'),
(28,5,'美国','洛杉矶','http://127.0.0.1:3000/hotel-image/dsnly4.jpeg','null'),
(29,5,'法国','巴黎','http://127.0.0.1:3000/hotel-image/dsnly5.jpeg','null'),
(30,5,'日本','东京','http://127.0.0.1:3000/hotel-image/dsnly6.jpeg','null'),
(31,6,'韩国','首尔韩屋','http://127.0.0.1:3000/hotel-image/mddts1.jpeg','null'),
(32,6,'日本','京都町屋','http://127.0.0.1:3000/hotel-image/mddts2.jpeg','null'),
(33,6,'中国','大理民居','http://127.0.0.1:3000/hotel-image/mddts3.jpeg','null'),
(34,6,'中国','北京四合院','http://127.0.0.1:3000/hotel-image/mddts4.jpeg','null'),
(35,6,'日本','北海道温泉','http://127.0.0.1:3000/hotel-image/mddts5.jpeg','null'),
(36,6,'土耳其','洞穴酒店','http://127.0.0.1:3000/hotel-image/mddts6.jpeg','null'),
(37,7,'曼谷威客3号酒店（原曼谷胜利纪念碑全季酒店）','Vic3 Bangkok','http://127.0.0.1:3000/hotel-image/mg1.jpeg','8.4分'),
(38,7,'穰南帝景酒店','Royal View Resort - Rang Nam','http://127.0.0.1:3000/hotel-image/mg2.jpeg','8.8分'),
(39,7,'璀璨专享服务公寓','Abloom Exclusive Serviced Apartments','http://127.0.0.1:3000/hotel-image/mg3.jpeg','8.4分'),
(40,7,'曼谷暹罗安纳塔拉酒店','Anantara Siam Bangkok Hotel','http://127.0.0.1:3000/hotel-image/mg4.jpeg','8.7分'),
(41,7,'彩虹云霄酒店','Baiyoke Sky Hotel','http://127.0.0.1:3000/hotel-image/mg5.jpeg','7.7分'),
(42,7,'曼谷利特酒店','LiT BANGKOK Hotel','http://127.0.0.1:3000/hotel-image/mg6.jpeg','8.7分'),
(43,7,'暹罗四季酒店','Seasons Siam Hotel','http://127.0.0.1:3000/hotel-image/mg7.jpeg','8.3分'),
(44,7,'曼谷廊曼机场阿玛瑞酒店','Amari Don Muang Airport Bangkok','http://127.0.0.1:3000/hotel-image/mg8.jpeg','8.1分'),
(45,8,'台北凯撒大饭店','Caesar Park Hotel Taipei','http://127.0.0.1:3000/hotel-image/tb1.jpeg','8.5分'),
(46,8,'大师商旅','Master Hotel','http://127.0.0.1:3000/hotel-image/tb2.jpeg','8.4分'),
(47,8,'帅客旅店','Saual Keh Hotel','http://127.0.0.1:3000/hotel-image/tb3.jpeg','8.4分'),
(48,8,'台北君品酒店','PALAIS de Chine Hotel','http://127.0.0.1:3000/hotel-image/tb4.jpeg','9.0分'),
(49,8,'二十轮旅店','SWIIO Hotel','http://127.0.0.1:3000/hotel-image/tb5.jpeg','8.5分'),
(50,8,'皇家季节酒店台北馆','Royal Seasons Hotel Taipei-Nanjing W','http://127.0.0.1:3000/hotel-image/tb6.jpeg','8.3分'),
(51,8,'乐园大饭店','ONETEL','http://127.0.0.1:3000/hotel-image/tb7.jpeg','7.8分'),
(52,8,'台北王朝大酒店','Sunworld Dynasty Hotel Taipei','http://127.0.0.1:3000/hotel-image/tb8.jpeg','7.7分'),
(53,9,'东京湾希尔顿酒店','Hilton Tokyo Bay','http://127.0.0.1:3000/hotel-image/dj1.jpeg','8.4分'),
(54,9,'东京京王广场酒店','Keio Plaza Hotel Tokyo','http://127.0.0.1:3000/hotel-image/dj2.jpeg','8.6分'),
(55,9,'日晖新宿酒店','Hotel Sunlite Shinjuku','http://127.0.0.1:3000/hotel-image/dj3.jpeg','8.4分'),
(56,9,'东京湾喜来登大酒店 ','Sheraton Grande Tokyo Bay Hotel','http://127.0.0.1:3000/hotel-image/dj4.jpeg','8.5分'),
(57,9,'东新宿E酒店','E Hotel Higashi Shinjuku','http://127.0.0.1:3000/hotel-image/dj5.jpeg','8.4分'),
(58,9,'馨乐庭中央东京新宿区酒店','Citadines Central Shinjuku Tokyo','http://127.0.0.1:3000/hotel-image/dj6.jpeg','8.8分'),
(59,9,'东京新宿馨乐庭酒店','Citadines Shinjuku Tokyo','http://127.0.0.1:3000/hotel-image/dj7.jpeg','8.2分'),
(60,9,'新宿灿路都广场大饭店','Hotel Sunroute Plaza Shinjuku','http://127.0.0.1:3000/hotel-image/dj8.jpeg','9.0分'),
(61,10,'迪士尼好莱坞酒店','Disney’s Hollywood Hotel','http://127.0.0.1:3000/hotel-image/xg1.jpeg','8.9分'),
(62,10,'香港迪士尼乐园酒店','Disneyland Hotel','http://127.0.0.1:3000/hotel-image/xg2.jpeg','8.8分'),
(63,10,'憙酒店','Xi Hotel','http://127.0.0.1:3000/hotel-image/xg3.jpeg','8.5分'),
(64,10,'英格兰宾馆','UK Hostel','http://127.0.0.1:3000/hotel-image/xg4.jpeg','6.4分'),
(65,10,'香港珀丽酒店','Rosedale Hotel Hong Kong','http://127.0.0.1:3000/hotel-image/xg5.jpeg','8.5分'),
(66,10,'香港红茶馆酒店(土瓜湾店)','Bridal Tea House Hotel Tokwawan','http://127.0.0.1:3000/hotel-image/xg6.jpeg','7.7分'),
(67,10,'J Plus精品酒店','J Plus Hotel by YOO','http://127.0.0.1:3000/hotel-image/xg7.jpeg','8.5分'),
(68,10,'香港Casa酒店','Casa Hotel','http://127.0.0.1:3000/hotel-image/xg8.jpeg','8.5分'),
(69,11,'中央明洞空中公园酒店','Hotel Skypark Central Myeongdong','http://127.0.0.1:3000/hotel-image/se1.jpeg','9.0分'),
(70,11,'明洞韦斯廷公寓','Vestin Residence Myeongdong','http://127.0.0.1:3000/hotel-image/se2.jpeg','8.1分'),
(71,11,'空中花园酒店明洞1号店','Hotel Skypark Myeongdong 1','http://127.0.0.1:3000/hotel-image/se3.jpeg','8.8分'),
(72,11,'天空花园酒店东大门1号店','Hotel Skypark Dongdaemun I','http://127.0.0.1:3000/hotel-image/se4.jpeg','8.7分'),
(73,11,'首尔东大门大使宜必思快捷酒店','ibis Budget Ambassador Seoul Dongdaemun','http://127.0.0.1:3000/hotel-image/se5.jpeg','8.8分'),
(74,11,'宜必思仁寺洞大使酒店','ibis Ambassador Insadong','http://127.0.0.1:3000/hotel-image/se6.jpeg','8.7分'),
(75,11,'太平洋酒店','Pacific Hotel','http://127.0.0.1:3000/hotel-image/se7.jpeg','8.8分'),
(76,11,'首尔大使铂尔曼酒店','Grand Ambassador Seoul associated with Pullman','http://127.0.0.1:3000/hotel-image/se8.jpeg','8.8分'),
(77,12,'新加坡圣淘湾大酒店','Bay Hotel Singapore','http://127.0.0.1:3000/hotel-image/xjp1.jpeg','8.6分'),
(78,12,'新加坡滨海湾金沙酒店','Marina Bay Sands','http://127.0.0.1:3000/hotel-image/xjp2.jpeg','8.2分'),
(79,12,'客来福酒店 - 惹兰苏丹33号','Hotel Clover 33 Jalan Sultan','http://127.0.0.1:3000/hotel-image/xjp3.jpeg','8.2分'),
(80,12,'新加坡克拉码头智选假日酒店','Holiday Inn Express Singapore Clarke Quay','http://127.0.0.1:3000/hotel-image/xjp4.jpeg','8.6分'),
(81,12,'飞龙玫瑰酒店','Fragrance Hotel - Rose','http://127.0.0.1:3000/hotel-image/xjp5.jpeg','8.4分'),
(82,12,'飞龙水轩酒店','Fragrance Hotel - Waterfront','http://127.0.0.1:3000/hotel-image/xjp6.jpeg','8.6分'),
(83,12,'新加坡香格里拉圣淘沙度假酒店',"Shangri-La's Rasa Sentosa Resort & Spa",'http://127.0.0.1:3000/hotel-image/xjp7.jpeg','8.6分'),
(84,12,'新加坡丽思卡尔顿美年酒店','The Ritz-Carlton, Millenia Singapore','http://127.0.0.1:3000/hotel-image/xjp8.jpeg','8.5分');







/**马蜂窝产品**/
INSERT INTO mfw_product VALUES
(1,3,'新加坡','枕海而眠·开窗即景·北京往返苏梅岛5天4晚自由行（五星新加坡航空+W酒店限时优惠+淡定号游艇出海/四驱车丛林穿越+赠送机场接送）',NULL,4699,NULL,NULL),
(2,3,'俄罗斯','重庆直飞贝加尔湖+莫斯科+圣彼得堡全景12-13跟团游（伊尔库茨克/莫斯科双点直航+湖区熏鱼餐+切尔斯缆车高空眺望贝加尔湖',NULL,14580,NULL,NULL),
(3,2,'日本','[北京送签]日本单次旅游签证（咨询领券+拒签退双倍+免在职流水+资料极简+高出签率+顺丰包回邮+免押金+诚信经营+暖心服务）',NULL,279,NULL,NULL);





/**马蜂窝产品图片**/
INSERT INTO xz_laptop_pic VALUES





/**攻略信息**/
INSERT INTO mfw_strategy VALUES
(1,null,'芽庄千万不能错过的美食&酒吧推荐','越南','不管是高大上的气质餐厅、接地气的大排档路边摊、还是越南民间的传统美食，这篇攻略将初步解答你的疑惑，作为一个大概的芽庄美食指南攻略跟大家分享',null,null,null,0,1,10,72219,'127.0.0.1:3000/image/picture/wkgbefpm8haalkwaaag8e52sr1o47.jpeg','127.0.0.1:3000/image/picture/wkgbefpm5jkaz_wiaahgqezk2m035.jpeg','127.0.0.1:3000/image/picture/wkgbefpm5k6ayspiaakcdes4qii67.jpeg',null,null),
(2,null,'去日本买买买锁定这些店就对了','日本','一篇让你在日本更愉快地购物/代购的攻略。',null,null,null,0,1,0,32564,'127.0.0.1:3000/image/picture/wkgbz1ntbggaa-wlaadz1jrz4ae50.jpeg','127.0.0.1:3000/image/picture/wkgbz1k2vcsae4mbaa2e6hcobjq46.jpeg','127.0.0.1:3000/image/picture/wkgbz1k2t5sac8uaabqvvgwxmvk569.png',null,null),
(3,null,'厦门亲子游 |带孩子来厦门这样玩，大人孩子都开心','厦门','温润怡人的海风，四季芬芳的街巷让厦门成为国内最佳亲子游目的地。可是很多时候我们只顾着赶景点，忽略了许多景点其实孩子并不喜欢。那么，带孩子来厦门怎么玩可以既有趣又能充分领略厦门特色，让大人和孩子都玩得开心呢？根据我在厦门多年的生活和游玩经验，整理了以下玩法和朋友们分享。',null,null,null,0,1,398,247281,'127.0.0.1:3000/image/picture/wkgbs1hbbx6adqhtabxubdvqqeg93.jpeg','127.0.0.1:3000/image/picture/wkgb3ff3ns2aggw_aaxxkcbaole28.jpeg','127.0.0.1:3000/image/picture/wkgb6lpusq6alvlvaat_qk_wtoe11.jpeg',null,null),
(4,null,'遵义&nbsp;☆&nbsp;见天地，见众生，见自己','遵义','Limit 英文单词Limit有两个含义，作动词时，它表示限制，作名词时表示极限。 一个人做一件事时，是不是如果心中对自己没有限制，便能达到极限的境界。 这个问题从另一个角度来看，或许可以浓缩为两个字——自信，也就是相信自己可以，不断给自己灌输“我可...',null,null,null,438,0,null,10923,'127.0.0.1:3000/image/picture/wkgbefrsltqac5gnabyv1akipai38.jpeg',null,null,92,'凯爷'),
(5,null,'慕吉云溪山居|逃离喧嚣，享桃源般的古朴悠然','广州','盛夏炎炎，即将进入暑假的热潮，各种旅游计划也层出不穷。出游度假叹世界是我们年青一代不可缺少的生活格调。但你有否考虑过逃离城市的烦嚣，来到山间林中避暑感受自然馈赠的清爽呢？而在广州周边增城就有那么一处彷如世外桃源般的清幽度假地——慕吉·云...',null,null,null,37,0,null,23612,'127.0.0.1:3000/image/picture/wkgbefsrxz6alzhraawew4gmdi8811.png',null,null,9,'妖妖的旅行时光'),
(6,null,'京族三岛 | 自驾去广西看海，这些地方不能错过！','广西','在这个喧嚣的世界,人人都叫嚣着想要来一场说走就走的旅行，但真正能做到“说走就走”的又有几人？对我而言，每一次旅行都是一次挑战自我的机会。所以，不管是提前做攻略还是说走就走，我坚持在路上。 你在北方的寒夜里大雪纷飞， 我在南方的艳阳里面朝大...',null,null,null,406,0,null,15921,'127.0.0.1:3000/image/picture/wkgbefpojfmax-7saarcqi2tkjq92.jpeg',null,null,36,'手写的从前cl'),
(7,null,'邂逅非洲，神奇动物在这里 --- 纳米比亚13日','纳米比亚','我之前一直以为 非洲 是个离我非常遥远的地方，要么出现在赵忠祥老师配音的《动物世界》里，要么是在国家地理杂志的照片上，再或者就是在旅行节目里看大仁哥一人一车一狗的自在逍遥。 直到上...',null,null,null,183,0,null,5451,'127.0.0.1:3000/image/picture/wKgBEFs32VWARrpRAAvkNkbOiiM59.jpeg','127.0.0.1:3000/image/picture/wKgBs1f9xtOANN5YAACuwMv8u2s38.jpeg',null,81,'honeyclover'),
(8,null,'【摩洛哥】时光流逝，我对你的爱却与日俱增','摩洛哥','插播一篇【 冰岛 + 芬兰 】游记，欢迎围观！ 邂逅欧若拉女神与圣诞老人，再为一场星际穿越： http://www.mafengwo.cn/i/10016110.html Salut Morac! - “你昨晚去哪里了？” - “那么久以前...',null,null,null,326,0,null,7865,'127.0.0.1:3000/image/picture/wKgBEFtLWNaAK7gSAAgjk7PDJEg84.jpeg','127.0.0.1:3000/image/picture/wKgBEFtDYB2AZCi8ABvsmhORJvI17.jpeg',null,73,'耳聋的小鬼'),
(9,null,'多瑙河周边到底有什么好玩的？想悠闲的度假，就看这里吧','奥地利','新的方式重新游欧洲近几年，因为工作原因每年都会去欧洲很多次，欧洲对于我来讲，一点都不陌生，每年的旅行目的地都越来越深入，旅行方式也都各不相同。比如有过自驾、有过火车...',null,null,null,1214,0,null,69511,'127.0.0.1:3000/image/picture/wKgBEFs_MFqABYQ6AA9UYYz1z6w71.jpeg','127.0.0.1:3000/image/picture/wKgBEFrTG2WAJ94RAABhIabKEII42.jpeg',null,130,'黄建华'),
(10,null,'初夏，和山间农田最配哦~','无锡','在被焦虑，慌张，喧嚣的世事冲刷之时 有一些美好始终拥抱着我们 让我们脚下有根 心中有爱 在之前的推文中提到过为什么每年要去 无锡 2013年第一次去的场景还在眼前 然而今年已是第六个年头 ...',null,null,null,151,0,null,3709,'127.0.0.1:3000/image/picture/wKgBEFs049WAIgEuACCesJ71aP872.jpeg','127.0.0.1:3000/image/picture/wKgBEFs7UdKAUr5kAACNhXdP9sM85.jpeg',null,48,'茏宝去玩吧'),
(11,null,'短话长沙｜吃不了辣，也能快乐一夏（美食探店+景...','长沙','星城印象｜这个地方有点Hot 这些年前后路过 长沙 少说五六次，但却一直没机会稍作停留，其实蛮想好好打量一下这座城，以自己的视角去观察这里的人和物。 当然，很大程度上也是逃不过舌尖上...',null,null,null,3123,0,null,49866,'127.0.0.1:3000/image/picture/wKgBEFtXRmqASH1PAA1uoHe6vE490.jpeg','127.0.0.1:3000/image/picture/wKgBEFrYItOAagw0ABnoTZU3usw71.jpeg',null,196,'AllenL'),
(12,null,'一个人的首尔 周末闲逛指南','首尔','提到首尔，作为一个去了很多次韩国的人来说，也是不得不爱，我给它的评价是，时尚和传统完美交融，一座能永远让你保持新鲜感的城市，大都市应有的高楼大厦鳞次栉比，韩式小屋错...',null,null,null,622,0,null,34600,'127.0.0.1:3000/image/picture/wKgBEFtZn9-Af5iQAAbyhtrEg7o00.jpeg','127.0.0.1:3000/image/picture/wKgBZ1n-6-GABtukABlQYR8vjfM21.jpeg',null,56,'张三'),
(13,null,'北纬30度的春天，盛开在圣洁的南迦巴瓦峰下——记春行西藏','西藏','写在前面 西藏 ，对于很多人来说 是旅行的终极梦想 这里也是我一直想要到达的地方 在八千万年前的地质运动中成长起的这片土地 雪山巍峨，圣湖密布 壮阔的荒原和深邃的沟壑同生 亚热带景观和...',null,null,null,507,0,null,4452,'127.0.0.1:3000/image/picture/wKgBEFsOps6Afjt9AAk63McppQQ16.jpeg','127.0.0.1:3000/image/picture/wKgBEFsOnK6AA8kQAAh2D-Ub0kg25.jpeg',null,94,'十八'),
(14,null,'从南半球到北半球，只为遇见你——南非IVHQ志愿之旅','开普敦','前言 “当我用心去触摸这片土地时，我庆幸自己当初的选择，这里让我知道什么是朴素和善良，让我找回原始的激情。” （图为我造访最多次的沙滩，每天吃完午饭便在沙滩上晒晒太阳打个小盹） ...',null,null,null,351,0,3548,null,'127.0.0.1:3000/image/picture/wKgBEFsWJnuAWM5aAAh70X4PPJI99.jpeg','127.0.0.1:3000/image/picture/wKgBs1bN2sWANHdpAACeoMxoR1M56.jpeg',null,101,'一棵棕榈'),
(15,null,'穷极一生，做不完一场梦——台湾','台湾','你说，人生有点乏味，所以去骑行 我说，想给人生加点调料，所以来骑行 谢谢这14天遇见的人和发生的事 最后，谢谢自己 不说再见，因为相信我们会再遇见。 ——2018年夏 Getting in Taiwan 游...',null,null,null,105,0,null,8131,'127.0.0.1:3000/image/picture/wKgBEFsZYoaANX6nAAqLBqagDb032.jpeg','127.0.0.1:3000/image/picture/wKgBEFrBysiADKNFABQl1wEJdl488.jpeg',null,105,'Getting'),
(16,null,'在冶勒湖——我会像青草一样呼吸','成都','“最好是娴静地招呼那熹微的晨光，不必忙乱地奔向前去，也不要对落日忘记感谢那曾为晨光之垂死的光明。” 这是周作人先生在《我独爱生活应有的样子》描写的生活的样子。今年的五月就像是夏天...',null,null,null,570,0,null,8820,'127.0.0.1:3000/image/picture/wKgBEFsmbGGAYn-JAAh4MQaL9W831.jpeg','127.0.0.1:3000/image/picture/wKgBEFtdZK-APYyzAAIf0sk6Yss18.jpeg',null,113,'taoer陶陶子');





/****攻略评论****/
INSERT INTO xz_index_product VALUES







/****页面展示内容****/
INSERT INTO xz_index_product VALUES
