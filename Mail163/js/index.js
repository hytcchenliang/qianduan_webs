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
		$(".xiexinpic").css("background-position","");
	});

	var number1=1;
	$(".mainBoLLielse").click(function(){
		if(number1==1){
			$(".elsejian").css("transform","rotate(90deg)");
			$(".elseLi").slideDown();
			number1=2;

		}
		else
		{
			$(".elsejian").css("transform","rotate(0deg)");
			$(".elseLi").slideUp()
			number1=1;
		}
	});

	
	var number2=1;
	$(".Rtopbtnpan1").click(function(){
		if(number2==1){
			$(this).css("background-image",'url("Images/gouxuan.png")');
			$(".mailLispan").css("background-image",'url("Images/gouxuan.png")');
			$(".mailLispan").attr("spanchoose","true");	
		 	number2=2;
		}
		else{
			$(this).css("background-image",'url("Images/weigou.png")');
			$(".mailLispan").css("background-image",'url("Images/weigou.png")');
			$(".mailLispan").attr("spanchoose","false");
			number2=1;
		}
	});

	$(".mailLispan").attr("spanchoose","false");
	$(".mailLispan").click(function(){
		if($(this).attr("spanchoose")=="false"){
			$(this).css("background-image",'url("Images/gouxuan.png")');
			$(this).parent().css("background-color","#ffffd5");
			$(this).attr("spanchoose","true");
		}
		else{
			$(this).css("background-image",'url("Images/weigou.png")');
			$(this).parent().css("background-color","");
			$(this).attr("spanchoose","false");
		}
	});

	$(".topbutton").attr("btnopen","false");
	$(".topbutton").click(function(){
		var bid=$(this).attr("btnid");
		if($(this).attr("btnopen")=="false"){
			$(".buttonul[ulid!="+bid+"]").css("display","none");
			$(".buttonul[ulid="+bid+"]").css("display","block");
			$(this).attr("btnopen","true");
		}
		else{
			$(".buttonul[ulid="+bid+"]").css("display","none");
			$(this).attr("btnopen","false");
		}
		return false;
	});
	$("body").click(function(){
		$(".buttonul").css("display","none");
	});

  //删除邮件
	$(".righttopbtn2").click(function(){
		$(".mailLispan[spanchoose="+true+"]").parent().remove();
	});
 	
 	$(".notread").click(function(){
 		$(".mailLispan[spanchoose="+true+"]").next().css("background-image",'url("Images/weidu.png")');
 	});

 	$(".haveread").click(function(){
 		$(".mailLispan[spanchoose="+true+"]").next().css("background-image","");
 	});

 	$(".mailhongqi").click(function(){
 		$(".mailLispan[spanchoose="+true+"]").parent().find(".mailflag").css("background-image",' url("Images/redflag.png")');
 		$(".mailLispan[spanchoose="+true+"]").parent().find(".mailfrom").css("color","#f00");
 		$(".mailLispan[spanchoose="+true+"]").parent().find(".mailtitle").css("color","#f00");

 	});

 	$(".xiexin").click(function(){
 		$(".xiexinpic").css("background-position","-286px -380px");
 	});

 	$(".shoujianinput").focus(function(){
 		$(this).val("");
 		$(this).css("color","#000");
 		$(this).parent().css("border-bottom-color","#0F6099");
 	});
 	$(".shoujianinput").blur(function(){
 		$(this).val("输入对方手机号，就能给他发邮件");
 		$(this).css("color","#ccc");
 		$(this).parent().css("border-bottom-color","");
 	});
 	$(".shoujianinput1").focus(function(){
 		$(this).parent().css("border-bottom-color","#0F6099");
 	});
 	$(".shoujianinput1").blur(function(){
 		$(this).parent().css("border-bottom-color","");
 	});

 	$(".nameandusername").hover(function(){
 		$(".sentrenname").css("color","#fff");
 		$(".sentrenusername").css("color","#fff");
 	},function(){
 		$(".sentrenname").css("color","");
 		$(".sentrenusername").css("color","");
 	});

 	$(".sosoinput").focus(function(){
 		$(this).val("");
 	});
 	$(".sosoinput").blur(function(){
 		$(this).val("查找联系人");
 	});

 	 $(".searchall").attr("haveclick","yes");
 	$(".searchall").click(function(){
 		if($(this).attr("haveclick")==="yes"){
 			$(".allspan").css("background-position","0px -250px")
 			$(this).attr("haveclick","no");
 		}
 		else{
 			$(".allspan").css("background-position","-60px -250px")
 			$(this).attr("haveclick","yes");
 		}
 	});

 	$(".topmenuLi").click(function(){
 		var ID=$(this).attr("titleid");
 		$(".mainbody[contentid!="+ID+"]").css("display","none");
 		$(".mainbody[contentid="+ID+"]").css("display","block");
 	});
 	$(".mailLi").mouseover(function(){
 		$(this).find(".biaoqian").css("display","block");
 	});
 	$(".mailLi").mouseleave(function(){
 		$(this).find(".biaoqian").css("display","none");
 	});


})