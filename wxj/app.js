//1.wxj.sql导入数据库（提交给服务器），打开xampp,打开mysql服务器，点击shell按钮，输入mysql -uroot <将wxj.sql拖拽到窗口以获得wxj.sql路径，引入express模块
const express=require("express");
//9.引入user_login.js路由器,括号内为路径
const userLoginRouter=require('./routes/user_login.js');
//13.引入bodyParser中间件，没有中间件服务器不能获取页面数据
const bodyParser=require("body-parser");
//2.创建服务器，监听端口
const server=express();
server.listen(8080);
//3.托管静态资源到public下，
server.use(express.static('public'));
// server.use(express.static('images'));
//14.使用body-parser中间件
server.use(bodyParser.urlencoded({extended:false}));

//10.userLoginRouter路由器挂载到/user，访问路由时要加/user,路由成为服务器的一部分
server.use('/user',userLoginRouter);
//4.wxj下创建静态资源文件夹public,其内创建login1.html
//5.使用wxj内的路径，在cmd窗口切换成该路径，输入node app.js启动服务器
//5.在wxj在创建routes文件夹，其内创建user_login.js文件并写代码
//11.在cmd页面ctrl+c退出，再输入node app.js以重启服务器，没有报错才算成功
//12.在user_login.js中写登录接口
//15.在login1.html写入代码（包含ajax）
