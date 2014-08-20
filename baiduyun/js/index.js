$(function(){
	$(".inputextR1").focus(function(){
		if($(this).val()=="手机/邮箱/用户名"){
			$(this).val("");
			$(this).css("color","#000");
		}
	});
	$(".inputextR1").blur(function(){
		if($(this).val()==""){
			$(this).val("手机/邮箱/用户名");
			$(this).css("color","");
		}
	});
	$(".inputextR2").focus(function(){
		if($(this).val()=="密码"){
			$(this).val("");
			$(this).css("color","#000");
		}
	});
	$(".inputextR2").blur(function(){
		if($(this).val()==""){
			$(this).val("密码");
			$(this).css("color","");
		}
	});


	timer=setInterval("focuse()",2000);

	
	$(".bottomLi").mouseover(function(){
		var x=$(this).attr("xsize");
		$(this).css("background-position",""+x+"px -319px");
	});
	$(".bottomLi").mouseleave(function(){
		$(this).css("background-position","");
	});

	$(".focusebtnround").click(function(){
		number=$(this).attr("rid");
		focuse();
	});


	$(".button").click(function(){
		if($(".inputextR1").val()=="手机/邮箱/用户名"){
			$(".wrong").html("请您填写手机/邮箱/用户名");
		}
		else{
			if($(".inputextR2").val()=="密码"){
			$(".wrong").html("请您填写密码！");
			}
		}	
		
	});
});
var timer;
var number=1
function focuse(){
	$(".focuseImg[fpid!="+number+"]").fadeOut();
	$(".focuseImg[fpid="+number+"]").fadeIn();
	$(".focusebtnround[rid="+number+"]").css("background-position","-1033px -72px");
	$(".focusebtnround[rid!="+number+"]").css("background-position","-1008px -72px");
	number++;
	if(number>4){
		number=1;
	}
	if(number<1){
		number=4;
	}
}