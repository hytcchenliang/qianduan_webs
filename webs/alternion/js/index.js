$(function(){
	/*search*/
	$(".headersleft").hover(function(){
		$(this).css("background-color","#9ca0a5");
		$(".headsinput").css("background-color","#9ca0a5");
	},function(){
		$(this).css("background-color","");
		$(".headsinput").css({"background-color":"","border":"0px"});
	});
	$(".headsinput").click(function(){
		$(this).css({"background-color":"#fff","border":"#fff"});
		$(".headersleft").css("background-color","#fff");
		$(".searchlogo").css("background-position","0 -17px");
	});
	$(".headrandom").hover(function(){
		$(this).css("background-position","0 -20px");
	},function(){
		$(this).css("background-position","");
	});

	/*登录注册区*/
	$(".conmorebox").hover(function(){
		$(".commoredown").show();
	},function(){
		$(".commoredown").hide();
	});
	$(".comdowmli1").click(function(){
		$(".consignin").css("background-position","-719px -16px");
		$(".consignup").css("background-position","-225px -16px");
	});
	$(".comdowmli4").click(function(){
		$(".consignin").css("background-position","-499px -14px");
		$(".consignup").css("background-position"," -13px -14px");
	});
	$(".comdowmli").hover(function(){
		$(this).css("background-color","#e9eaeb");
	},function(){
		$(this).css("background-color","");
	});
	$("input").click(function(){

		$(this).css("border","0px");
	});
	/*注册*/
	$(".consignin").click(function(){
		$(".conlul1").hide();
		$(".conrlogin").hide();
		$(".conlul2").css("display","block");
		$(".conl2li1").addClass("signupli1");
		$(".conl2li2").addClass("signli2");
		$(".conl2li3").addClass("signupli3");
		$(".conl2li4").addClass("signli4");
		$(".cionrsignup").show();
	});
	$(".signnametxt").focus(function(){
		$(".signnametxttip").hide();
	});
	$(".signnametxt").blur(function(){
		$(".signnametxttip").show();
	});
	$(".signpwdtxt").focus(function(){
		$(".signpwdtxttip").hide();
	});
	$(".signpwdtxt").blur(function(){
		$(".signpwdtxttip").show();
	});
	$(".signemailtxt").focus(function(){
		$(".signemailtxttip").hide();
	});
	$(".signemailtxt").blur(function(){
		$(".signemailtxttip").show();
	});
	/*性别*/
	$(".men").click(function(){
		$(this).css("background-image", "url('css/images/check-selected.png')");
		$(".female").css("background-image", "url('css/images/check.png')");
	});
	$(".female").click(function(){
		$(this).css("background-image", "url('css/images/check-selected.png')");
		$(".men").css("background-image", "url('css/images/check.png')");
	});
	/*登录*/
	$(".consignup").click(function(){
		$(".conlul2").hide();
		$(".cionrsignup").hide();
		$(".conlul1").css("display","block");
		$(".conlli1").addClass("loginli1animation");
		$(".conlli2").addClass("loginlitwo");
		$(".conlli3").addClass("loginlithree");
		$(".conlli4").addClass("loginlifour");
		$(".conrlogin").show();
	
	});
	$(".loginnameeps").focus(function(){
		$(".loginusername").hide();
	});
	$(".loginnameeps").blur(function(){
		$(".loginusername").show();
	});
	$(".loginpwdeps").focus(function(){
		$(".loginuserpwd").hide();
	});
	$(".loginpwdeps").blur(function(){
		$(".loginuserpwd").show();
	});

	
});