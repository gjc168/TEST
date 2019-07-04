//6.引入express模块
const express=require('express');
//6.pool.js写连接池代码，引入连接池
const pool=require('../pool.js');
//7.创建路由器对象
var router=express.Router();
//12.写登录接口
router.post('/login',(req,res)=>{
	var $cid=req.body.cid;
	var $upwd=req.body.upwd;
	if(!$cid){
		res.send("卡号为空");
		return;
	}
	if(!$upwd){
		res.send("密码为空");
		return;
	}
	var sql="SELECT * FROM wxj_user WHERE cid=? and upwd=?";
    pool.query(sql,[$cid,$upwd],(err,result)=>{
      if(err) throw err;
      if(result.length>0){
	  res.send("登录成功");
	}else{
		res.send("卡号或密码错误");
	}
  });
});
//8.导出路由器
module.exports=router;
//9.在app.js引入路由器
//13.在app.js中引入中间件