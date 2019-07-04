//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//1.ajaxdemo,无参get
router.get("/index_data",(req,res)=>{
	var sql="SELECT * FROM jm_site_info";
	pool.query(sql,(err,result)=>{
	         if(err) throw err;
			 res.json(result);
			 })
	
})
module.exports=router;