$(function(){
    $.ajax({
        type:'get',
        url:'header.html',
        async:false,//默认是异步，此处改为同步，以便确认先引进表头代码后再执行下方的控制菜单代码，否则异步将导致表头还没引入完就执行控制菜单代码，菜单控制失效
        success(data){
      //console.log(data);
       $(data).replaceAll("#header"); 
       $(`<link rel="stylesheet" href="css/header.css"/>`).appendTo("head")
        }
    })


    //控制鼠标移入导航栏“公司要闻”时显示下拉菜单，移出后隐藏下拉菜单
    $("#panel").hide(); 
     $("#flip").hover(
            function(){
                 $("#panel").slideDown("slow");//show();
         },function(){
                 $("#panel").hide()});//为了鼠标可以进入下拉框
         $("#panel").hover(function() {
             $(this).show();//鼠标进入下拉框
         },function(){
             $(this).hide();
         });
    //控制导航栏“走进无限极”下拉菜单
    $("#panel2").hide(); 
    $("#flip2").hover(
                function(){
                     $("#panel2").slideDown("slow");//show();
             },function(){
                     $("#panel2").hide()});//为了鼠标可以进入下拉框
             $("#panel2").hover(function() {
                 $(this).show();//鼠标进入下拉框
             },function(){
                 $(this).hide();
             });
    //控制导航栏“健康人生”下拉菜单
    $("#panel3").hide(); 
    $("#flip3").hover(
                function(){
                    $("#panel3").slideDown("slow");//show();
            },function(){
                    $("#panel3").hide()});//为了鼠标可以进入下拉框
            $("#panel3").hover(function() {
                $(this).show();//鼠标进入下拉框
            },function(){
                $(this).hide();
            }); 
    //控制导航栏“社会责任”下拉菜单
    $("#panel4").hide(); 
    $("#flip4").hover(
                function(){
                    $("#panel4").slideDown("slow");//show();
            },function(){
                    $("#panel4").hide()});//为了鼠标可以进入下拉框
            $("#panel4").hover(function() {
                $(this).show();//鼠标进入下拉框
            },function(){
                $(this).hide();
            });  
     //控制导航栏“服务大厅”下拉菜单
     $("#panel5").hide(); 
     $("#flip5").hover(
                 function(){
                     $("#panel5").slideDown("slow");//show();
             },function(){
                     $("#panel5").hide()});//为了鼠标可以进入下拉框
             $("#panel5").hover(function() {
                 $(this).show();//鼠标进入下拉框
             },function(){
                 $(this).hide();
             }); 
    //控制导航栏“其它”下拉菜单
    $("#panel6").hide(); 
    $("#flip6").hover(
                function(){
                    $("#panel6").slideDown("slow");//show();
            },function(){
                    $("#panel6").hide()});//为了鼠标可以进入下拉框
            $("#panel6").hover(function() {
                $(this).show();//鼠标进入下拉框
            },function(){
                $(this).hide();
            });                                              
}); 