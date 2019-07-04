const express=require("express");
var pool=require('../pool.js');
let router=express.Router();

router.get('/register',(req,res)=>{
   var uid=req.query.uid;
   var uname=req.query.uname;
   var upwd=req.query.upwd;
   var sql="INSERT INTO jm_user(uid,uname,upwd) VALUES(?,?,?)";
   pool.query(sql,[uid,uname,upwd],(err,result)=>{
      if(err) throw err;
	  if(result.affectedRow==0){
	     res.json({code:-1,msg:"×¢²áÊ§°Ü"});
	  }else{
	     res.json({code:-1,msg:"×¢²á³É¹¦"})  
	  }
   
   })
});
module.exports=router;