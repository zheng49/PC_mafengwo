#9:40
#1:创建商品表 t_shop
#id;title;tel;address;time;price
CREATE TABLE t_shop(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  tel   VARCHAR(50),
  address VARCHAR(255),
  time  VARCHAR(50),
  price DECIMAL(10,2)
);


#创建商品图片表 t_shop_photo
#id;tid;sm_url;md_url;lg_url
CREATE TABLE t_shop_photo(
  id INT PRIMARY KEY AUTO_INCREMENT,
  tid INT,
  sm_url VARCHAR(255),
  md_url VARCHAR(255),
  lg_url VARCHAR(255)
);
#2:添加25
INSERT INTO t_shop VALUES(null,'牛排2','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排3','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排4','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排5','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排6','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排7','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排8','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排9','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排10','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排11','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排12','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排13','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排14','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排15','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排16','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排17','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排18','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排19','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排20','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排21','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排22','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排23','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排24','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排25','+8613999999999','万寿路','早10:00~22:00',3000);
INSERT INTO t_shop VALUES(null,'牛排26','+8613999999999','万寿路','早10:00~22:00',3000);

#id;tid;sm_url;md_url;lg_url
INSERT INTO t_shop_photo VALUES(null,2,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,3,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,4,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,5,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,6,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,7,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,8,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,9,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,10,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,11,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,12,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,13,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,14,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,15,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,16,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,17,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,18,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,19,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,20,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,21,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,22,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,23,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,24,'http://127.0.0.1:3000/niupan.png','','');
INSERT INTO t_shop_photo VALUES(null,25,'http://127.0.0.1:3000/niupan.png','','');
#3:表关联查询分页

#能常内联连查询结果
SELECT t.id,t.title,t.tel,t.address,
       t.time,t.price,p.sm_url
       FROM t_shop t INNER JOIN t_shop_photo p
       ON t.id = p.tid
       LIMIT 0,8;

SELECT count(id) as c FROM t_shop;