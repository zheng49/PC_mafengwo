var express=require("express");
var router=express.Router();
var pool=require("../pool");

router.post("/regist",(req,res)=>{
    console.log(req.query)
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    if(!uname){
        res.send(401);
        return;//阻止程序继续往后执行
    }
    if(!upwd){
        res.send(402);
        return;
    }
    var sql =`SELECT * FROM mfw_user where uname=?`;
    pool.query(sql,[uname],(err,result)=>{
        if(result.length==0){
            var sql = `INSERT INTO mfw_user values(null,?,?,null,null,'http://127.0.0.1:3000/bg-image/default-img.png',null,null)`;
            pool.query(sql,[uname,upwd],(err,result)=>{
                res.send({ok:0,msg:"注册成功！"});
            })
        }else{
            res.send({ok:1,msg:"用户名已存在！"});
        }
    })
})





router.post("/signin",(req,res)=>{
    var {uname,upwd}=req.body;
    var sql="select * from mfw_user where uname=? and upwd=?";
    console.log(req.body)
    pool.query(sql,[uname,upwd],(err,result)=>{
      err&&console.log(req.result[0].uid);
      if(result.length>0){
        req.session.uid=result[0].uid;
        res.send({ok:1})
      }else{
        res.send({ok:0,msg:"用户名或密码错误!"})
      }
    })
  })
  router.get("/islogin",(req,res)=>{
    if(req.session.uid==null)
      res.send({ok:0});
    else{
      var sql="select * from mfw_user where uid=?";
      pool.query(sql,[req.session.uid],(err,result)=>{
        res.send({ok:1,uname:result[0].uname,avatar:result[0].avatar});
      })
    }
  })
  router.get("/signout",(req,res)=>{
    delete req.session.uid;
    res.send();
  })
  
  module.exports=router;


module.exports=router;