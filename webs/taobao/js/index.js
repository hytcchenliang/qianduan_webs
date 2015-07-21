$(function(){
	$(".headerlidowm").hover(function(){
		$(this).css("background-color","#fff");
		$(this).find(".detailmes").show();
	},function(){
		$(this).css("background-color","");
		$(this).find(".detailmes").hide();
	});
	$(".dhmiddleliaccount").hover(function(){
		$(".dhsetcount").slideDown(500);
		return false;
	},function(){
		$(".dhsetcount").slideUp(500);
	});
	/*菜单*/
	$(".maincalbuyiconone").click(function(){
		var open=$(this).attr("isopen");
		if (open=="no") {
			$(this).parent().addClass("maincllione");
			$(this).css("background-position","0 -101px");
			$(this).next().slideDown(200);
			$(this).attr("isopen","yes");
		}
		else{
			$(this).css("background-position","0 -89px");
			$(this).next().slideUp(20);
			$(this).attr("isopen","no");
			$(this).parent().removeClass("maincllione");
		}
	});
	$(".maincalbuyicontwo").click(function(){
		var open=$(this).attr("isopen");
		if (open=="no") {
			$(this).parent().addClass("maincalbuyultwo");
			$(this).css("background-position","0 -101px");
			$(this).next().slideDown(200);
			$(this).attr("isopen","yes");
		}
		else{
			$(this).css("background-position","0 -89px");
			$(this).next().slideUp(20);
			$(this).attr("isopen","no");
			$(this).parent().removeClass("maincalbuyultwo");
		}
	});
	/*所有订单*/
	$(".maintli1").hover(function(){
		$(".maintline").animate({left:"0"},300);
	},function(){
		/*$(".maintline").animate({left:"0"},300);*/
	});
	$(".maintli2").hover(function(){
		$(".maintline").animate({left:"109px"},300);
	},function(){
		/*$(".maintline").animate({left:"0"},300);*/
	});
	$(".maintli3").hover(function(){
		$(".maintline").animate({left:"218px"},300);
	},function(){
		/*$(".maintline").animate({left:"0"},300);*/
	});
	$(".maintli4").hover(function(){
		$(".maintline").animate({left:"327px"},300);
	},function(){
		/*$(".maintline").animate({left:"0"},300);*/
	});
	$(".maintli5").hover(function(){
		$(".maintline").animate({left:"436px"},300);
	},function(){
		/*$(".maintline").animate({left:"0"},300);*/
	});
	$(".maintli6").hover(function(){
		$(".maintline").animate({left:"772px"},300);
	},function(){
	/*	$(".maintline").animate({left:"0"},300);*/
	});
	/*<!-- 已买商品 -->*/
	$(".mainorder").hover(function(){
		$(this).css("border-color","gray");
		$(this).find(".mainoaddpic").show();
	},function(){
		$(this).css("border-color","");
		$(this).find(".mainoaddpic").hide();
	});
	$(".maintul").hover(function(){},function(){
		$(".maintline").animate({left:"0px"},300);
	});
	/*<!-- 猜你喜欢 -->*/
	$(".proitemmode").hover(function(){
		$(this).css("border-color","#f40");
		$(this).find(".prolitwo").show();
	},function(){
			$(this).css("border-color","");
		$(this).find(".prolitwo").hide();
	});

	/*<!-- 商品区 -->*/
	$(".probo").hover(function(){
		$(this).find(".probopre").show();
		$(this).find(".probonext").show();
	},function(){
		$(this).find(".probopre").hide();
		$(this).find(".probonext").hide();
	});
	$(".probopre").hover(function(){
		$(this).css("background-color","#666");
	},function(){
		$(this).css("background-color","");
	});
	$(".probonext").hover(function(){
		$(this).css("background-color","#666");
	},function(){
		$(this).css("background-color","");
	});
	$(".probopre").click(function(){
		  index=index-1;
		 clearInterval(prochange);
		
		 if (index==0) {
		 	index=5;
		 }
		 $(".probo").removeClass("imgesshow");
		$(".probtni").removeClass("iconcolor");
		$(".probottom"+index).addClass("imgesshow");
		$(".probtni"+index).addClass("iconcolor");
		 prochange=setInterval("imageschange()",1500);
	});
	$(".probonext").click(function(){
		index=index+1;
		 clearInterval(prochange);
		
		 if (index==6) {
		 	index=1;
		 }
		 $(".probo").removeClass("imgesshow");
		$(".probtni").removeClass("iconcolor");
		$(".probottom"+index).addClass("imgesshow");
		$(".probtni"+index).addClass("iconcolor");
		 prochange=setInterval("imageschange()",1500);
	});
	$(".probtni1").hover(function(){
		clearInterval(prochange);
		$(".probo").removeClass("imgesshow");
		$(".probtni").removeClass("iconcolor");
		$(".probottom1").addClass("imgesshow");
		$(".probtni1").addClass("iconcolor");
	},function(){
		index=1;
		prochange=setInterval("imageschange()",1500);
	});
	$(".probtni2").hover(function(){
		clearInterval(prochange);
		$(".probo").removeClass("imgesshow");
		$(".probtni").removeClass("iconcolor");
		$(".probottom2").addClass("imgesshow");
		$(".probtni2").addClass("iconcolor");
	},function(){
		index=2;
		prochange=setInterval("imageschange()",1500);
	});
	$(".probtni3").hover(function(){
		clearInterval(prochange);
		$(".probo").removeClass("imgesshow");
		$(".probtni").removeClass("iconcolor");
		$(".probottom3").addClass("imgesshow");
		$(".probtni3").addClass("iconcolor");
	},function(){
		index=3;
		prochange=setInterval("imageschange()",1500);
	});
	$(".probtni4").hover(function(){
		clearInterval(prochange);
		$(".probo").removeClass("imgesshow");
		$(".probtni").removeClass("iconcolor");
		$(".probottom4").addClass("imgesshow");
		$(".probtni4").addClass("iconcolor");
	},function(){
		index=4;
		prochange=setInterval("imageschange()",1500);
	});
	$(".probtni5").hover(function(){
		clearInterval(prochange);
		$(".probo").removeClass("imgesshow");
		$(".probtni").removeClass("iconcolor");
		$(".probottom5").addClass("imgesshow");
		$(".probtni5").addClass("iconcolor");
	},function(){
		index=5;
		prochange=setInterval("imageschange()",1500);
	});
	prochange=setInterval("imageschange()",1500);
});
var index=1;
var prochange;
function imageschange(){
	index++;
	$(".probo").removeClass("imgesshow");
	if (index==6) {
		index=1;
	}
	$(".probottom"+index).addClass("imgesshow");
	$(".probtni").removeClass("iconcolor");
	$(".probtni"+index).addClass("iconcolor");
	
}