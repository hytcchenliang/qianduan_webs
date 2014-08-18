$(function(){
	$(".friendli").attr("huihuashow","false");
	/*好友列表上不三个按钮*/ 
	// $(".qqdiv").draggable({ containment: "parent" });
	$(".fenzuIn").click(function(){
		$(".fenzuIn").removeClass("fenzudetail");
		$(this).addClass("fenzudetail");
	});
	$(document).on("click",".friendli",function(){
		chatjilu($(this));
		showChatFrm($(this));
	});
/*好友列表底部按钮*/ 
	$(".qqbottomli").click(function(){
		$(".qqbottomli").removeClass("qqbottomclick");
		$(this).addClass("qqbottomclick");
	});
	$("#qqbottomli1").click(function(){
		$(".qqbottomlipic").css("background-image","");
		$(this).find("#qqbottomli1pic").css("background-image",'url("Images/b1.png")');
		$(".qqbottomspan").css("color","");
		$(this).find(".qqbottomspan1").css("color","#fff");
	});
	$("#qqbottomli2").click(function(){
		$(".qqbottomlipic").css("background-image","");
		$(this).find("#qqbottomli2pic").css("background-image",'url("Images/a1.png")');
		$(".qqbottomspan").css("color","");
		$(this).find(".qqbottomspan").css("color","#fff");
	});
	$("#qqbottomli3").click(function(){
		$(".qqbottomlipic").css("background-image","");
		$(this).find("#qqbottomli3pic").css("background-image",'url("Images/c1.png")');
		$(".qqbottomspan").css("color","");
		$(this).find(".qqbottomspan").css("color","#fff");
	});
	$("#qqbottomli4").click(function(){
		$(".qqbottomlipic").css("background-image","");
		$(this).find("#qqbottomli4pic").css("background-image",'url("Images/d1.png")');
		$(".qqbottomspan").css("color","");
		$(this).find(".qqbottomspan").css("color","#fff");

	});
	/*好友分组*/ 
// var listkindnumber1=2;
	$(".friendlistkind").attr("haveopen","false");
	$(".list1").attr("haveopen","true");
	$(".friendlistkind").click(function(){
		
		var d=$(this).attr("kid");
		if($(this).attr("haveopen")=="false"){
			$(".friendlist[lid="+d+"]").show();
			$(this).attr("haveopen","true");
							}
			else{
				$(".friendlist[lid="+d+"]").hide();
				$(this).attr("haveopen","false");
			}
	});

	// 好友列表上部三个分组
	$(".fenzuIn").click(function(){
		var f=$(this).attr("FIid");
		$(".friendbody[FBid="+f+"]").show();
		$(".friendbody[FBid!="+f+"]").hide();
	});
	// // 好友列表下部四个分组
	 $(".qqbottomli").click(function(){
	 	var f=$(this).attr("BLIid");
	 	$(".BBottom[BID="+f+"]").show();
	 	$(".BBottom[BID!="+f+"]").hide();
	 });
	 // $(".titleR").click(function(){
		// $(".Backcolorclass").css("background","linear-gradient(#fff,#d1830c)");
	 // });
	/*点击好友出现聊天窗体*/ 
	$(".friendli").attr("isshow","false");

	$(document).on("click",".windowbottombtn",function(){
		sendMessage($(this));
	});

	$(document).on("click",".qqwindow",function(){
		maxindex($(this));
	});

	$(document).on("click",".zuixiaohua",function(){
		zuixiao($(this));
		return false;
	});
	$(document).on("click",".miniwin",function(){
		normalsize($(this));

	});
	$(document).on("click",".windowclosebtn",function(){
		closewin($(this));
	});
	
});
function showChatFrm(ele){
	var FId = ele.attr("fid");//好友ID
		$(".miniwin[miniId="+FId+"]").remove();
		//先把窗体至于最上层再return结束执行语句
		$(".qqwindow[WID="+FId+"]").css("z-index","104");
	    $(".qqwindow[WID!="+FId+"]").css("z-index","100");
		var UserName = ele.attr("username");//好友昵称
		
		var winID="Wid"+FId;
		var html="";
		html+='				<div WID='+FId+' class="qqwindow" id="'+winID+'">';//此次弹出窗体Id等于点击的好友ID
		html+='					<div class="windowtop Backcolorclass">';
		html+='						<div class="windowLbtn btnstyle">';
		html+='							<span class="windowLbtnpic"></span>';
		html+='						</div>';
		html+='						<div class="windowtopname">'+UserName+'</div>';//此次弹出窗体顶部名称就是好友昵称
		html+='						<div closeId='+FId+' class="windowclosebtn btnstyle">关闭</div>';//关闭按钮的ID等于聊天桌面的ID
		html+='						<div Zid='+FId+' class="windowclosebtn zuixiaohua btnstyle">最小化</div>';
		html+='					</div>';
		html+='					<div class="windowbody" bid='+FId+'></div>';//窗体聊天桌面的ID等于窗体ID
		html+='					<div class="windowbottom Backcolorclass">';
		html+='						<div class="windowbiaoqing"></div>';
		html+='						<input class="windowbottomtext" tid='+FId+'></input>';//输入文本的ID等于聊天桌面的ID
		html+='						<div class="windowbottombtn btnborcolor btnstyle" BtnId='+FId+'>发送</div>';//发送按钮的ID等于聊天桌面的ID
		html+='					</div>';
		html+='				</div>';
		if(ele.attr("isshow")=="false"){
			$(".bodyA").append(html);
			ele.attr("isshow","true");
		}
		else{
			$(".qqwindow[WID="+FId+"]").show();
		}
		
		$(".qqwindow[WID="+FId+"]").css("z-index","104");//将本次点击弹出的窗体至于最上层
	    $(".qqwindow[WID!="+FId+"]").css("z-index","100");
	   
		var topsize=(FId%4)*50+20;
		var leftsize=(FId%10)*10+10;
		$("#"+winID).css("top",topsize+"px");
		$("#"+winID).css("left",leftsize+"px");
		$( ".qqwindow" ).draggable({containment:"parent"});
		$(".qqwindow").draggable({ handle:".windowtopname"});

}
 // $(".qqwindow").draggable({ cancel: "windowclosebtn" });
var lastmessage="";
function sendMessage(ele){
	var btnId=ele.attr("BtnId");//取出本次点击的发送按钮的Id
	var message=$(".windowbottomtext[tid="+btnId+"]").val();//取出id等于发送按钮Id输入文本的文本
	var html="";
	html+='						<div class="GotmessageAll">';
	html+='							<div class="GotmessageAllL">';
	html+='								<div class="sentname">觉思清晨</div>';
	html+='								<div class="gotmessage">'+message+'</div>';//本次发送的文本添加给本次点击弹出的聊天记录
	html+='							</div>';
	html+='							<div class="GotmessageAllR">';
	html+='							</div>';
	html+='						</div>';
	lastmessage=$(".windowbottomtext[tid="+btnId+"]").val();
	$(".jiluspan[jiluspanid="+btnId+"]").html(lastmessage);
	$(".windowbody[bid="+btnId+"]").append(html);//id等于发送按钮Id的聊天桌面添加聊天记录
	$(".windowbottomtext[tid="+btnId+"]").val("");
}

function maxindex(ele){
	var w=$(ele).attr("WID");
	$(".qqwindow").css("z-index","100");
	$(ele).css("z-index","104");
}

function zuixiao(ele){
	var z=$(ele).attr("Zid");
	$(".qqwindow[WID="+z+"]").fadeOut();
	var html="";
	var name=$(".friendli[fid="+z+"]").attr("username");
	html+='<li class="miniwin" miniId='+z+' miniisopen="1">'+name+'</li>';
	$(".minimenu").append(html);

	$( ".minimenu" ).sortable({
      revert: true
    });
    $( "ul,li" ).disableSelection();
}

function normalsize(ele){
	var z=$(ele).attr("miniId");
	$(".qqwindow[WID="+z+"]").fadeIn();
	$(ele).hide();
}

function closewin(ele){
	var CloseID=$(ele).attr("closeId");//取出关闭按钮的Id	
	$(".qqwindow[WID="+CloseID+"]").hide();//聊天窗体的Id等于关闭按钮的关闭
}

function chatjilu(ele){
	var tmp = $(ele).attr("huihuashow");
	var UserName=$(ele).attr("username");
	var FId=$(ele).attr("fid");//好友ID
	var html="";
	html+='						<li class="huihuafriendli friendli " fid='+FId+' username='+UserName+'>';
	html+='							<div class="friendLiL">';
	html+='								<a><img src="Images/head/1.jpg"> </a>';
	html+='							</div>';
	html+='							<div class="friendLiR">';
	html+='								<div class="webname">';
	html+='									'+UserName+'';
	html+='									<span>(fisher)</span>';
	html+='								</div>';
	html+='								<div class="shuoshuo">';
	html+='									<span class="jiluspan" jiluspanid='+FId+'>[在线]</span>';
	html+='								</div>';
	html+='							</div>';
	html+='						</li>';

	if($(ele).attr("huihuashow")=="false"){
		$("#huihua").append(html);
		$(ele).attr("huihuashow","true");
	}
	else{
		$(".qqwindow[WID="+FId+"]").show();
	}
}
