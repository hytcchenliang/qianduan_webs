$(function(){

	$("#sososhuru").focus(function(){
		$(this).val("");
	});
	$("#sososhuru").blur(function(){
		$(this).val("QQ");
	});
	$("#lm2Text").focus(function(){
		$(this).val("");
	});
	$("#lm2Text").blur(function(){
		$(this).val("代码/名称/拼音");
	});
	/*soso下拉菜单begin*/ 
	$("#sosoleftDiv").mouseover(function(){
		 $("#sosomenu").css("display","block");
		$(this).css("background-position", "-552px -200px");
	});	

	$("#sosoleftDiv").mouseleave(function(){
		$("#sosomenu").css("display","none");
		$(this).css("background-position", "-877px -200px");
	});

	$("#sosomenu li").mouseover(function(){
		$("#sosomenu").css("display","block");
		$(this).css("backgroundColor","#d2e1f1");
		$("#sosoleftDiv").css("background-position", "-552px -200px");
	});

	$("#sosomenu li").mouseleave(function(){
		$("#sosomenu").css("display","none");
		$(this).css("backgroundColor","");
		$("#sosoleftDiv").css("background-position", "-877px -200px");
	});	


	/*soso下拉菜单end*/ 


	$("#zuolajian").click(function(){
		$(".niebiaoR").show();
		$("#niebiao").css("left","-342");
   
	});

	$(".niebiaoR").mouseleave(function(){
		$(this).hide();
		$("#niebiao").css("left","-14");
	});

	$("#zuolajian").mouseover(function(){
		$(this).css("background-position","-85px,-80px");
   
	});
	$("#zuolajian").mouseleave(function(){
		$(this).css("background-position","");
   
	});



	/*lm2L1L下拉菜单begin*/ 
	$("#yaowen").mouseover(function(){
		$("#btn1yaowen").css("display", "block");
		$("#yaowen").css("fontWeight", "bold");
		$("#jiangsuxinwen").css("fontWeight", "normal");
		$("#btn2jiangsuxinwen").css("display", "none");
		$("#jiangsuxinwen").css("borderTop", "0px");
		$("#yaowen").css("borderTop", "2px solid rgb(69, 143, 206)");
		$("#jiangsuxinwen").css("borderRight", "0px solid rgb(189, 215, 242)");
	});		

     $("#jiangsuxinwen").mouseover(function(){
		$("#btn1yaowen").css("display", "none");
		$("#btn2jiangsuxinwen").css("display", "block");
		$("#yaowen").css("borderTop", "0px");
		$("#yaowen").css("fontWeight","normal");
		$("#jiangsuxinwen").css("fontWeight", "bold");
		$("#jiangsuxinwen").css("borderTop", "2px solid rgb(69, 143, 206)");
		$("#jiangsuxinwen").css("borderRight", "1px solid rgb(189, 215, 242)");
	});
	/*lm2L1L下拉菜单end*/  


	/*lm2L1R下拉菜单begin*/ 
	$("#jinri").mouseover(function(){
		$("#VP1").css("display", "block");
		$("#VC1").css("display", "block");
		$("#VP2").css("display", "none");
		$("#VC2").css("display", "none");

		$("#jinri").css("fontWeight", "bold");
		$("#yingshi").css("fontWeight", "normal");
		$("#yingshi").css("borderTop", "0px");
		$("#jinri").css("borderTop", "2px solid rgb(69, 143, 206)");
		$("#yingshi").css("borderRight", "0px solid rgb(189, 215, 242)");
	});		

     $("#yingshi").mouseover(function(){
		$("#VP1").css("display", "none");
		$("#VC1").css("display", "none");
		$("#VP2").css("display", "block");
		$("#VC2").css("display", "block");
		$("#jinri").css("borderTop", "0px");
		$("#jinri").css("fontWeight","normal");
		$("#yingshi").css("fontWeight", "bold");
		$("#yingshi").css("borderTop", "2px solid rgb(69, 143, 206)");
		$("#yingshi").css("borderRight", "1px solid rgb(189, 215, 242)");
	});
	/*lm2L1R下拉菜单end*/ 

	/*lmCommonLR begin*/ 
	$("#shangzheng").mouseover(function(){
 		$("#lm2L2RCPic1").css("display", "block");
		$("#lm2L2RCPic2").css("display", "none");
		$("#lm2L2RCPic3").css("display", "none");
	});
 	$("#hengzhi").mouseover(function(){
 		$("#lm2L2RCPic1").css("display", "none");
		$("#lm2L2RCPic2").css("display", "block");
		$("#lm2L2RCPic3").css("display", "none");
	});
 	$("#daozhi").mouseover(function(){
 		$("#lm2L2RCPic1").css("display", "none");
		$("#lm2L2RCPic2").css("display", "none");
		$("#lm2L2RCPic3").css("display", "block");
	});
	/*lmCommonLRend*/ 

var timer=setInterval("focuse()",1000);

var timerA=setInterval("focuseA()",1000);



$(".biaoti1").mouseover(function(){

	$(".zhongjian1").hide();
	$(this).next().show();
});


$(".biaoti2").mouseover(function(){

	$(".zhongjian2").hide();
	$(this).next().show();
});
$(".biaoti3").mouseover(function(){

	$(".zhongjian3").hide();
	$(this).next().show();
});

var N=-915;
$("#picP1jiantou").click(function(){
    
	$("#ladong").animate({left:""+N+""+""-"915"+"px"},1000);
	N=N-915;
	if(N==-1830){
		N=915;
	}
});
$("#picP3jiantou").click(function(){
	$("#ladong").animate({left:""+N+""+""-"915"+"px"},1000);
	N=N-915;
	if(N==-1830){
		N=915;
	}
});


});

var number=2;
function focuse(){
	number++;
   $("#lm9Rconpic").css("background-image",'url("Images/lm9Right/'+number+'.jpg")');
   if(number==9){
   	  number=0;
   }
}


var numberA=1;
function focuseA(){
	$(".focuseA[aid="+numberA+"]").css("backgroundColor","red");
	$(".focuseA[aid!="+numberA+"]").css("backgroundColor","");
	numberA++;
   if(numberA==17){
   	 numberA=1;
   }
   
}



var nie=1;
