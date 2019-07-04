const express=require('express');
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.商品列表
router.get('/list',function(req,res){
  //获取数据
  var obj=req.query;
  var pno=obj.pno;
  var count=obj.count;
  //判断是否为空，设置默认值
  if(!pno) pno=1;
  if(!count) count=5;
  //转为整型
  pno=parseInt(pno);
  count=parseInt(count);
  //计算start
  start=(pno-1)*count;
  //执行SQL语句
  pool.query('SELECT * FROM xz_laptop LIMIT ?,?',[start,count],function(err,result){
    if(err) throw err;
	res.send(result);
  });

});

//导出路由器
module.exports=router;