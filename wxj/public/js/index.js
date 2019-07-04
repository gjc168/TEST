
$("#ctrl-prev").hide();
$("#ctrl-next").hide();
$("#ctrl-prev").hover(function(){
    $("#ctrl-next").show();
    $("#ctrl-prev").show();
});
$("#ctrl-next").hover(function(){
    $("#ctrl-next").show();
    $("#ctrl-prev").show();
});
$(".w-100").hover(function(){
 $("#ctrl-next").show();
 $("#ctrl-prev").show();

},function(){
 $("#ctrl-prev").hide();
$("#ctrl-next").hide(); 
});