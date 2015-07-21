$(function(){
	/*var isshow=attr("show");
	alert(isshow);*/
	$("#searchTxt").hover(function(){
		$(this).css("border-color","#4d8eb8");
	},function(){
		$(this).css("border-color","");
	});
	$("#searchTxtwebpage").hover(function(){
		$("#searchTxtwpcontain").css("display","block");
		$("#searchTxtwebpagecon").css("background-position","-560px -204px");
	},function(){
		$("#searchTxtwpcontain").css("display","none");
		$("#searchTxtwebpagecon").css("background-position","");
	});
	$("#searchTxtwpcontain li").hover(function(){
		$(this).css("background-color","#eef2fb");
		$(".searchTxtwpcontainnorspec").css("background-color","#fff");
	},function(){
		$(this).css("background-color","");
		$(".searchTxtwpcontainnorspec").css("background-color","");
	});
	$(".searchTxtwpcontainnor").click(function(){
		var searchname=$(this).html();
		$("#searchTxtwebpagecon").html(searchname);
	});
	$(".pronavleftpic01").hover(function(){
		$(this).css("background-position","-85px -79px");
		$("#pronavleftmore").css("top","-2");
	},function(){
		$(this).css("background-position","");
		$("#pronavleftmore").css("top","");
	});
	$(".pronavleftpic01").click(function(){
		$("#pronav").css("border-left","0px");
		$("#pronavleftmoreabo").css("display","block");
	});
	$("#pronavleftmoreabo").hover(function(){
		$("#pronavleftmoreabo").css("display","block");
	},function(){
		$("#pronavleftmoreabo").css("display","");
		$("#pronav").css("border-left","");
	});
	/*要闻*/
	$(".hdTitlespc").hover(function(){
		$(this).css({"border":"2px solid #50a0df","border-left":"0px","border-right":"0px","border-bottom":"0px","margin-top":"-2px"});
		$(".hdTitlenormal").css({"border":"0px","margin-top":"0px"});
		$("")
	},function(){
		$(this).css({"border":"","border-left":"","border-right":"","border-bottom":"","margin-top":"0px"});
		$(".hdTitlenormal").css({"border":"2px solid #50a0df","border-left":"0px","border-right":"0px","border-bottom":"0px","margin-top":"-2px"});
	});
	/*今日热播*/
	$(".hdTitlespc02").hover(function(){
		$(this).css({"border":"2px solid #50a0df","border-left":"0px","border-right":"0px","border-bottom":"0px","margin-top":"-2px"});
		$(".hdTitlenor01").css({"border":"0px","margin-top":"0px"});
		$(".hdTitlespc01").css({"border":"0px","margin-top":"0px"});
		$(".undisnormal1").css("display","block");
		$(".undisActive").css("display","none");
	},function(){
		$(this).css({"border":"","border-left":"","border-right":"","border-bottom":"","margin-top":"0px"});
		$(".hdTitlenor01").css({"border":"2px solid #50a0df","border-left":"0px","border-right":"0px","border-bottom":"0px","margin-top":"-2px"});
		$(".hdTitlespc01").css({"border":"0px","margin-top":"0px"});
		$(".undisnormal1").css("display","");
		$(".undisActive").css("display","");
	});
	$(".hdTitlespc01").hover(function(){
		$(this).css({"border":"2px solid #50a0df","border-left":"0px","border-right":"0px","border-bottom":"0px","margin-top":"-2px"});
		$(".hdTitlenor01").css({"border":"0px","margin-top":"0px"});
		$(".hdTitlespc02").css({"border":"0px","margin-top":"0px"});
		$(".undisnormal2").css("display","block");
		$(".undisActive").css("display","none");
	},function(){
		$(this).css({"border":"","border-left":"","border-right":"","border-bottom":"","margin-top":"0px"});
		$(".hdTitlenor01").css({"border":"2px solid #50a0df","border-left":"0px","border-right":"0px","border-bottom":"0px","margin-top":"-2px"});
		$(".hdTitlespc02").css({"border":"0px","margin-top":"0px"});
		$(".undisnormal2").css("display","");
		$(".undisActive").css("display","");
	});
});