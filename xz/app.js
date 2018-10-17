//app.js
//1:加载相应模块
const express = require("express");
const pool = require("./pool");
//2:创建express对象
var app = express();
app.use(express.static(__dirname+"/public"));
app.listen(3000);
app.get("/getList",(req,res)=>{
    var rows = [{id:1,name:"dd"},{id:2,name:"wh"},{id:3,name:"yy"}];
    res.send(rows);
});
// app.get("/getImageList",(req,res)=>{
//    var rows = [
//          {id:1,"title":"图片一","img_url":"http://127.0.0.1:3000/img/banner1.png"},
//          {id:2,"title":"图片二","img_url":"http://127.0.0.1:3000/img/banner2.png"},
//          {id:3,"title":"图片三","img_url":"http://127.0.0.1:3000/img/banner3.png"},
//          {id:4,"title":"图片四","img_url":"http://127.0.0.1:3000/img/banner4.png"},
//       ];
//       res.send(rows);    
// })

//app.get("/getImageList",(req,res)=>{
      //    var rows = [
      //          {id:1,"title":"图片一","img_url":"http://127.0.0.1:3000/img/banner1.png"},
      //          {id:2,"title":"图片二","img_url":"http://127.0.0.1:3000/img/banner2.png"},
      //          {id:3,"title":"图片三","img_url":"http://127.0.0.1:3000/img/banner3.png"},
      //          {id:4,"title":"图片四","img_url":"http://127.0.0.1:3000/img/banner4.png"},
      //       ];
      //       res.send(rows);    
      // });
app.get("/getImageList",(req,res)=>{
  var rows = [
        {id:1,img_url:"http://127.0.0.1:3000/img/banner-01.png"},
        {id:2,img_url:"http://127.0.0.1:3000/img/banner-02.png"},
]; 
    res.send(rows);
}) 

//功能二:九宫格列表
app.get("/getIndexList2",(req,res)=>{
   var rows = [
     {id:1,title:"美食",img_url:"http://127.0.0.1:3000/icons/grid-01.png"},
     {id:2,title:"美食",img_url:"http://127.0.0.1:3000/icons/grid-02.png"},
     {id:3,title:"美食",img_url:"http://127.0.0.1:3000/icons/grid-03.png"},
     {id:4,title:"K歌",img_url:"http://127.0.0.1:3000/icons/grid-04.png"},
     {id:5,title:"美食",img_url:"http://127.0.0.1:3000/icons/grid-05.png"},
     {id:6,title:"美食",img_url:"http://127.0.0.1:3000/icons/grid-06.png"},
     {id:7,title:"美食",img_url:"http://127.0.0.1:3000/icons/grid-07.png"},
     {id:8,title:"美食",img_url:"http://127.0.0.1:3000/icons/grid-08.png"},
     {id:9,title:"美食",img_url:"http://127.0.0.1:3000/icons/grid-09.png"},
   ];
   res.send(rows)

});



//功能三:message组件数据列表
app.get("/getMessageList",(req,res)=>{
   var rows = [
         {id:1,title:"新书",date:"2018-09-01",img_url:"http://127.0.0.1:3000/img/banner-01.png"},
         {id:2,title:"新电影",date:"2018-10-01",img_url:"http://127.0.0.1:3000/img/banner-02.png"}
   ];
   res.send(rows);
});


//功能四:商品列表分页显示
app.get("/shopList",(req,res)=>{
  //1:参数 pno 页码 pageSize  页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  if(!pno){
     pno = 1;      //设置页码默认值
  }
  if(!pageSize){
     pageSize = 8;  //设置页大小默认值
  }
  //2:sql sql 查询总页数  
  var sql = "SELECT count(id) as c FROM t_shop";
  var obj = {code:1};
  //解决问题:二条sql二次异步发送
  //完成进度值： sql  谁先结果 +50 后结束+50
  var progress = 0;
  pool.query(sql,(err,result)=>{
      if(err)throw err;
      var pageTotal = Math.ceil(result[0].c/pageSize);
      obj.pageCount = pageTotal;
      progress+=50;
      if(progress==100){
        res.send(obj);
      }
  })
  //3:查询当前页内容
  //4:json {code:1,msg:[],totalPage:3}
  var offset = (pno-1)*pageSize;
  var sql = " SELECT t.id,t.title,t.tel,t.address,";
  sql +=" t.time,t.price,p.sm_url";
  sql +=" FROM t_shop t INNER JOIN t_shop_photo p";
  sql +=" ON t.id = p.tid";
  sql +=" LIMIT ?,?";
  offset = parseInt(offset);
  pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err)throw err;
        obj.msg = result;
        progress+=50;
        if(progress==100){
           res.send(obj);
        }
  });
});

app.post("/addUser",(req,res)=>{
  req.on("data",(buf)=>{
    var str  = buff.toString();
    var obj = qs.parse(str);
  res.send({code:1,msg:"添加成功",data:obj})
  })
})
//根据id获取商品信息
app.get("/shopInfo",(req,res)=>{
  var tid = req.query.tid;
  var obj = {code:1,title:"华为v9",price:2999,shopCar:"免运费",info:"打开盒就能用",tid:tid};
  res.send(obj);
})