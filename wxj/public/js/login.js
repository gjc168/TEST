
$("#loginPanel2").hide();
$("#pwdLogin").click(function(){
    $("#loginPanel2").hide();
    $("#loginPanel").show();
	$("#pwd").removeClass("bd-b bd-r bc");
	$("#qrcode").addClass("bd-b bd-l bc");
});
$("#qrcodeLogin").click(function(){
    $("#loginPanel2").show();
	$("#loginPanel").hide();
    $("#pwd").addClass("bd-b bd-r bc");
	$("#qrcode").removeClass("bd-b bd-l bc");
});
