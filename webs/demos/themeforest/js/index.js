$(function(){
	$(".cansub").hover(function(){
		$(this).find(".cansubTitle").css({"border":"1px solid #ddd","border-top-left-radius":"5px","border-top-right-radius":"5px","color":"#fff","background-color":"#333"});
		$(this).find(".cansubdowm").show();
	},function(){
		$(this).find(".cansubTitle").css({"border":"","border-top-left-radius":"","border-top-right-radius":"","color":"","background-color":""});
		$(this).find(".cansubdowm").hide();
	});
	$(".cansubdowmcon").hover(function(){
		$(this).css("background-color","#ddd");
	},function(){
		$(this).css("background-color","");
	});
});