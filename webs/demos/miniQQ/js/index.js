$(function(){

	/*mainpanelbottom点击*/
	$(".mainpanelbottomline").click(function(){
		$(".mainpanelbottomline").removeClass("mainpanelbottomlineclick");
		$(".mainpanelbottomicon01").css({"background":"","background-size":""});
		$(".mainpanelbottomicon02").css({"background":"","background-size":""});
		$(".mainpanelbottomicon03").css({"background":"","background-size":""});
		$(".mainpanelbottomicon04").css({"background":"","background-size":""});
	});
	$(".mainpanelbottomline1").click(function(){
		$(this).addClass("mainpanelbottomlineclick");
		$(".mainpanelbottomicon01").css({"background":"url('css/images/tab_icon_conversation_selected.png')","background-size":"34px 34px"});
	});
	$(".mainpanelbottomline2").click(function(){
		$(this).addClass("mainpanelbottomlineclick");
		$(".mainpanelbottomicon02").css({"background":"url('css/images/tab_icon_contact_selected.png')","background-size":"34px 34px"});
	});
	$(".mainpanelbottomline3").click(function(){
		$(this).addClass("mainpanelbottomlineclick");
		$(".mainpanelbottomicon03").css({"background":"url('css/images/tab_icon_plugin_selected.png')","background-size":"34px 34px"});
	});
	$(".mainpanelbottomline4").click(function(){
		$(this).addClass("mainpanelbottomlineclick");
		$(".mainpanelbottomicon04").css({"background":"url('css/images/tab_icon_setup_selected.png')","background-size":"34px 34px"});
	});
	










	/*$(".friendInfo").click(function(){
		var open=$(this).attr("isopen");
		var friendid=$(this).attr("id");
		// alert(friendid);
		var Talktop=Math.floor(Math.random()*100+10);
		// alert(Talktop);
		var Talkleft=Math.floor(Math.random()*200+400);
		// alert(Talktop);
		var html="";
		var nickname=$(this).find(".nickname").html();
	/*	alert(open);*/
		/*if (open=="true") {
			$(".talkbox").css("z-index","15");
			$("#talkbox"+friendid).css("z-index","16");
			return;
		}*/
		
		
		/*alert(nickname);*/
		
		 
	/*	html+='	<div class="talkbox" id=talkbox'+friendid+'>';
		html+='		<div class="talkboxtop">';
		html+='			<div class="talktopdropdowm">';
		html+='				<span class="talktopdropdowmpic"></span>';
		html+='			</div>';
		html+='			<div class="talktopnickname">';
		html+='				<span class="talktopnntxt">';
		html+='				'+nickname+'';
		html+='				</span>';
		html+='			</div>';
		html+='			<div class="talktopclose">';
		html+='				<span close='+friendid+' class="talktopclosetxt" >关闭</span>';
		html+='			</div>';
		html+='		</div>';
		html+='		<div class="talkboxmiddle"></div>';
		html+='		<div class="talkboxbottom"></div>';
		html+='	</div>';
		$("body").append(html);
		$(".talkbox").click(function(){
			$(".talkbox").css("z-index","15");
			$(this).css("z-index","16");
		});
		$("#talkbox"+friendid).css({"top":Talktop+"px","left":Talkleft+"px"});
		$(this).attr("isopen","true");
		$(".talktopclosetxt").click(
		function(){
			var closeid=$(this).attr("close");
			$("#"+closeid).attr("isopen","false");
			$("#talkbox"+closeid).remove();

		});
		

	});*/
});