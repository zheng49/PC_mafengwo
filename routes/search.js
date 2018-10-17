var express=require("express");
var router=express.Router();
var pool=require("../pool");

router.get("/",(req,res)=>{
    var key = req.query.key;
    key = key.replace(/\s*/g,"");
    var keylist = new Array();
    keylist=key.split('');
    var sql = `SELECT * FROM mfw_strategy WHERE CONCAT(detail,title) REGEXP '`
    for(var i=0;i<=key.length;i++){
        if(i==key.length){
            sql+=`${keylist[i]}'`;
        }else{
           sql+=`${keylist[i]}|`;
        }
    }
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        else
        res.send(result);
        console.log(result)
        return;
})
})


module.exports=router;