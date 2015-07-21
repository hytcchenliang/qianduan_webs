$(function(){
	/*alert("d");*/
	/*删除*/
	//$(document).on("click",".conreceblchicon",function(){
		/*var check=$(this).attr("ischeck");*/
		//alert("check");
		/*if (check=="no") {
			$(this).css("background-image","url('css/images/icon24.png')");
			$(this).attr("ischeck","yes");
		}
		else{
			$(this).css("background-image","url('css/images/icon2.png')");
			$(this).attr("ischeck","no");
		}*/
		
	//});
	/*收件箱*/
	$(".headerblifour").click(function(){
		$(".consyright").hide();
		$(".consyleft").show();
		$(".conreceive").show();
		$(".writemail").hide();
	});
	$(".conrecebli").hover(function(){
		/*alert("d");*/
		$(this).find(".conreceblds").show();
		$(this).find(".conrecebcdel").show();
		$(this).find(".conrecebrbq").show();
		$(this).find(".conrecebrdb").show();
	},function(){
		$(this).find(".conreceblds").hide();
		$(this).find(".conrecebcdel").hide();
		$(this).find(".conrecebrbq").hide();
		$(this).find(".conrecebrdb").hide();
	});
	$(".conrecetchbicon").click(function(){
		/*alert("d");*/
		var check=$(this).attr("ischeck");
		if(check=="no"){
			$(this).css("background-image","url('css/images/icon24.png')");
			$(".conreceblchicon").css("background-image","url('css/images/icon24.png')");
			$(this).attr("ischeck","yes");
		}
		else{
			$(this).css("background-image","");
			$(".conreceblchicon").css("background-image","");
			$(this).attr("ischeck","no");
		}
	});
	$(".conrecetdowmxz").click(function(){
		$(".conrecetfinul").show();
		return false;
	});
	$(".conrecetdowmbj").click(function(){
		$(".conrecetdul").show();
		return false;
	});
	$(".conrecetdowmyd").click(function(){
		$(".conrecetdyd").show();
		return false;
	});
	$(".conrecetdowmmore").click(function(){
		$(".conrecetdmore").show();
		return false;
	});
	
	$(document).click(function(){
		$(".conrecetfinul").hide();
		$(".conrecetdul").hide();
		$(".conrecetdyd").hide();
		$(".conrecetdmore").hide();
	});

	/*<!--  写信 -->*/
	$(".consyltlitwo").click(function(){
		$(".consyright").hide();
		$(".consyleft").hide();
		$(".conreceive").hide();
		$(".writemail").show();
	});
	var um=UM.getEditor("sendmail");
	um.setHeight(266);
	um.setWidth(1054);
	/*首页*/
	$(".headerblione").click(function(){
		$(".consyright").show();
		$(".consyleft").show();
		$(".conreceive").hide();
		$(".writemail").hide();
	});
	$(".consyrbbtxtone").click(function(){
		$(".consyrbtlookworld").hide();
		$(".consyrbtmailimg").show();
		$(".consyrbtmailico").show();
		$(".consyrbtlive").hide();
		$(".consyrbtshop").hide();
		$(".consyrbline").animate({left:"0px"},1000);
	});
	$(".consyrbbtxttwo").click(function(){
		$(".consyrbtlookworld").show();
		$(".consyrbtmailimg").hide();
		$(".consyrbtmailico").hide();
		$(".consyrbtlive").hide();
		$(".consyrbtshop").hide();
		$(".consyrbline").animate({left:"191px"},1000);
	});
	$(".consyrbbtxtthree").click(function(){
		$(".consyrbtlookworld").hide();
		$(".consyrbtmailimg").hide();
		$(".consyrbtmailico").hide();
		$(".consyrbtlive").show();
		$(".consyrbtshop").hide();
		$(".consyrbline").animate({left:"382px"},1000);
	});
	$(".consyrbbtxtfour").click(function(){
		$(".consyrbtlookworld").hide();
		$(".consyrbtmailimg").hide();
		$(".consyrbtmailico").hide();
		$(".consyrbtlive").hide();
		$(".consyrbtshop").show();
		$(".consyrbline").animate({left:"573px"},1000);
	});
	/*首页左边*/
	$(".consylbliesp").click(function(){
		var show=$(".consylbliinner").attr("isopen");
		if (show=="no") {
			$(".consylbiconfour").css({transform:"rotate(90deg)"},{duration:'slow'});
			$(".consylbliesp").css("height","110px");
			$(".consylbliinner").show();
			$(".consylbliinner").attr("isopen","yes");
		}
		else{
			$(".consylbiconfour").css({transform:""});
			/*$(".consylbiconfour").animate({rotate:"45deg"},300);*/
			$(".consylbliesp").css("height","");
			$(".consylbliinner").hide();
			$(".consylbliinner").attr("isopen","no");
		}
		
	});
	$(".consyrbtmailli").hover(
		function(){
			clearInterval(video);
			var index=$(this).attr("dateindex");
			/*alert(index);*/			
			$(".consyrbtmailpic").hide();
			$(".consyrbtmailli").removeClass("consyrbtmailliadd");
			$(".consyrbtmailpic"+index).show();
			$(".consyrbtmailli"+index).addClass("consyrbtmailliadd");
		},function(){
			index=$(this).attr("dateindex");
			video=setInterval("videochange()",2000);
		});
	video=setInterval("videochange()",2000);
	/*<!-- 懂生活 -->*/
	$(".consyrbtliveli").hover(function(){
			clearInterval(live);
			var i=$(this).attr("liveindex");
			/*alert(index);*/			
			$(".consyrbtlpic").hide();
			$(".consyrbtliveli").removeClass("consyrbtliveliadd");
			$(".consyrbtlpic"+i).show();
			$(".consyrbtliveli"+i).addClass("consyrbtliveliadd");
		},function(){
			i=$(this).attr("liveindex");
			live=setInterval("videolive()",2000);
		});
	live=setInterval("videolive()",2000);
	/*<!-- 乐购网 -->*/
	$(".consyrbtshopli").hover(function(){
			clearInterval(shop);
			var y=$(this).attr("shopindex");	
			$(".consyrbtspic").hide();
			$(".consyrbtshopli").removeClass("consyrbtshopliadd");
			$(".consyrbtspic"+y).show();
			$(".consyrbtshopli"+y).addClass("consyrbtshopliadd");
		},function(){
			y=$(this).attr("shopindex");
			shop=setInterval("videoshop()",2000);
		});
	shop=setInterval("videoshop()",2000);
});
var index=1
var i=1;
var y=1;
var video;
var live;
var shop;
function videochange(){
	index++;
	if (index==8) {
		index=1;
	}
	$(".consyrbtmailpic").hide();
	$(".consyrbtmailli").removeClass("consyrbtmailliadd");
	$(".consyrbtmailpic"+index).show();
	$(".consyrbtmailli"+index).addClass("consyrbtmailliadd");
	
}
function videolive(){
	i++;
	if (i==4) {
		i=1;
	}
	$(".consyrbtlpic").hide();
	$(".consyrbtliveli").removeClass("consyrbtliveliadd");
	$(".consyrbtlpic"+i).show();
	$(".consyrbtliveli"+i).addClass("consyrbtliveliadd");
}
function videoshop(){
	y++;
	if (y==4) {
		y=1;
	}
	$(".consyrbtspic").hide();
	$(".consyrbtshopli").removeClass("consyrbtshopliadd");
	$(".consyrbtspic"+y).show();
	$(".consyrbtshopli"+y).addClass("consyrbtshopliadd");
}