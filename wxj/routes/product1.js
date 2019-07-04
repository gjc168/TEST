const express=require('express');
const pool=require('../pool.js');
//����·��������
var router=express.Router();
//���·��
//1.��Ʒ�б�
router.get('/list',function(req,res){
  //��ȡ����
  var obj=req.query;
  var pno=obj.pno;
  var count=obj.count;
  //�ж��Ƿ�Ϊ�գ�����Ĭ��ֵ
  if(!pno) pno=1;
  if(!count) count=5;
  //תΪ����
  pno=parseInt(pno);
  count=parseInt(count);
  //����start
  start=(pno-1)*count;
  //ִ��SQL���
  pool.query('SELECT * FROM xz_laptop LIMIT ?,?',[start,count],function(err,result){
    if(err) throw err;
	res.send(result);
  });

});

//����·����
module.exports=router;