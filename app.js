//使用express构建web服务器
const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');


var hotel=require("./routes/hotel");
var strategy=require("./routes/strategy");
var index=require("./routes/index");
var search=require("./routes/search");
var user=require("./routes/user");





var app = express();
var server = app.listen(3000);
app.use(bodyParser.urlencoded({extended:false}));


//托管静态资源到public目录下
app.use(express.static('public'));
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},//过期时间ms
  resave:false,
  saveUninitialized:true
}));

//使用路由器来管理路由
//把user路由器挂载到/user下



app.use("/hotel",hotel);
app.use("/strategy",strategy);
app.use("/index",index);
app.use("/search",search);
app.use("/user",user);





app.get("/getIconList1",(req,res)=>{
  var rows = [
        {id:1,title:"正在旅行",img_url1:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic1.jpg",img_url2:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic2.jpg",img_url3:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic3.jpg",img_url4:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic4.jpg",img_url5:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic5.jpg",
        user_pic:"http://127.0.0.1:3000/res/user-pics/logs-user1.jpg",uname:"又见潇潇",time:"两天前",place1:"格蒙登",place2:"圣沃尔夫冈小镇",detail:"心心念念的哈尔施塔特，多年夙愿一朝偿。并没有惊喜，稍有失望，反倒是途中的圣沃夫冈有着一抹惊艳。触发，并不是为了要一心到达，有时候过程的风景，会比终点更有意义。"},
        {id:2,title:"推荐",img_url1:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic1.jpg",img_url2:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic2.jpg",img_url3:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic3.jpg",img_url4:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic4.jpg",img_url5:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic5.jpg",
        user_pic:"http://127.0.0.1:3000/res/user-pics/logs-user1.jpg",uname:"又见潇潇",time:"两天前",place1:"格蒙登",place2:"圣沃尔夫冈小镇",detail:"心心念念的哈尔施塔特，多年夙愿一朝偿。并没有惊喜，稍有失望，反倒是途中的圣沃夫冈有着一抹惊艳。触发，并不是为了要一心到达，有时候过程的风景，会比终点更有意义。"},
        {id:3,title:"十一去哪",img_url1:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic1.jpg",img_url2:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic2.jpg",img_url3:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic3.jpg",img_url4:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic4.jpg",img_url5:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic5.jpg",
        user_pic:"http://127.0.0.1:3000/res/user-pics/logs-user1.jpg",uname:"又见潇潇",time:"两天前",place1:"格蒙登",place2:"圣沃尔夫冈小镇",detail:"心心念念的哈尔施塔特，多年夙愿一朝偿。并没有惊喜，稍有失望，反倒是途中的圣沃夫冈有着一抹惊艳。触发，并不是为了要一心到达，有时候过程的风景，会比终点更有意义。"},
        {id:4,title:"国内",img_url1:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic1.jpg",img_url2:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic2.jpg",img_url3:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic3.jpg",img_url4:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic4.jpg",img_url5:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic5.jpg",
        user_pic:"http://127.0.0.1:3000/res/user-pics/logs-user1.jpg",uname:"又见潇潇",time:"两天前",place1:"格蒙登",place2:"圣沃尔夫冈小镇",detail:"心心念念的哈尔施塔特，多年夙愿一朝偿。并没有惊喜，稍有失望，反倒是途中的圣沃夫冈有着一抹惊艳。触发，并不是为了要一心到达，有时候过程的风景，会比终点更有意义。"},
        {id:5,title:"国外",img_url1:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic1.jpg",img_url2:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic2.jpg",img_url3:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic3.jpg",img_url4:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic4.jpg",img_url5:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic5.jpg",
        user_pic:"http://127.0.0.1:3000/res/user-pics/logs-user1.jpg",uname:"又见潇潇",time:"两天前",place1:"格蒙登",place2:"圣沃尔夫冈小镇",detail:"心心念念的哈尔施塔特，多年夙愿一朝偿。并没有惊喜，稍有失望，反倒是途中的圣沃夫冈有着一抹惊艳。触发，并不是为了要一心到达，有时候过程的风景，会比终点更有意义。"},
        {id:6,title:"带娃旅行",img_url1:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic1.jpg",img_url2:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic2.jpg",img_url3:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic3.jpg",img_url4:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic4.jpg",img_url5:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic5.jpg",
        user_pic:"http://127.0.0.1:3000/res/user-pics/logs-user1.jpg",uname:"又见潇潇",time:"两天前",place1:"格蒙登",place2:"圣沃尔夫冈小镇",detail:"心心念念的哈尔施塔特，多年夙愿一朝偿。并没有惊喜，稍有失望，反倒是途中的圣沃夫冈有着一抹惊艳。触发，并不是为了要一心到达，有时候过程的风景，会比终点更有意义。"},
        {id:7,title:"海岛游",img_url1:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic1.jpg",img_url2:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic2.jpg",img_url3:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic3.jpg",img_url4:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic4.jpg",img_url5:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic5.jpg",
        user_pic:"http://127.0.0.1:3000/res/user-pics/logs-user1.jpg",uname:"又见潇潇",time:"两天前",place1:"格蒙登",place2:"圣沃尔夫冈小镇",detail:"心心念念的哈尔施塔特，多年夙愿一朝偿。并没有惊喜，稍有失望，反倒是途中的圣沃夫冈有着一抹惊艳。触发，并不是为了要一心到达，有时候过程的风景，会比终点更有意义。"},
        {id:8,title:"情侣出行",img_url1:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic1.jpg",img_url2:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic2.jpg",img_url3:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic3.jpg",img_url4:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic4.jpg",img_url5:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic5.jpg",
        user_pic:"http://127.0.0.1:3000/res/user-pics/logs-user1.jpg",uname:"又见潇潇",time:"两天前",place1:"格蒙登",place2:"圣沃尔夫冈小镇",detail:"心心念念的哈尔施塔特，多年夙愿一朝偿。并没有惊喜，稍有失望，反倒是途中的圣沃夫冈有着一抹惊艳。触发，并不是为了要一心到达，有时候过程的风景，会比终点更有意义。"},
        {id:9,title:"自驾游",img_url1:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic1.jpg",img_url2:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic2.jpg",img_url3:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic3.jpg",img_url4:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic4.jpg",img_url5:"http://127.0.0.1:3000/res/user-pics/logs-user1-pic5.jpg",
        user_pic:"http://127.0.0.1:3000/res/user-pics/logs-user1.jpg",uname:"又见潇潇",time:"两天前",place1:"格蒙登",place2:"圣沃尔夫冈小镇",detail:"心心念念的哈尔施塔特，多年夙愿一朝偿。并没有惊喜，稍有失望，反倒是途中的圣沃夫冈有着一抹惊艳。触发，并不是为了要一心到达，有时候过程的风景，会比终点更有意义。"}
]; 
    res.send(rows);
}) 