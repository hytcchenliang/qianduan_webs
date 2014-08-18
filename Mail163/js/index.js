$(function(){
	// alert();
	$(".sousuop2").focus(function(){
		$(this).attr("value","");
	});
	$(".sousuop2").blur(function(){
		$(this).attr("value","支持邮件全文搜索");
	});
	$(".topmenuLi").click(function(){
		$(".topmenuLi").css("background-color","");
		$(".topmenuLi").css("border-color","");
		$(".topmenuLi").css("color","");
		$(".topmenuLi").css("font-weight","");
		$(this).css("background-color","#16659e");
		$(this).css("border-color","#16659e");
		$(this).css("color","#fff");
		$(this).css("font-weight","bold");
	});

	var number=1;
	$(".mainBoLLielse").click(function(){
		if(number==1){
			$(".elsejian").css("transform","rotate(90deg)");
			$(".elseLi").slideDown();
			number=2;

		}
		else
		{
			$(".elsejian").css("transform","rotate(0deg)");
			$(".elseLi").slideUp()
			number=1;
		}
	});
})