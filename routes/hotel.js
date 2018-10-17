var express=require("express");
var router=express.Router();
var pool=require("../pool");

router.get("/",(req,res)=>{
    var sql = `SELECT * FROM hotelinfo`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        else{
            res.send(result);
            return;
        }
    })
})




module.exports=router;