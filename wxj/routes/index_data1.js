//����express
const express=require('express');
//�������ӳ�ģ��
const pool=require('../pool.js');
//����·��������
var router=express.Router();
//1.ajaxdemo,�޲�get
router.get("/index_data",(req,res)=>{
	var sql="SELECT * FROM jm_site_info";
	pool.query(sql,(err,result)=>{
	         if(err) throw err;
			 res.json(result);
			 })
	
})
module.exports=router;