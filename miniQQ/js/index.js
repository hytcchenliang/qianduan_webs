$(function(){
	/*好友列表上不三个按钮*/ 
	$(".qqdiv").draggable({ containment: "parent" });
	$(".fenzuIn").click(function(){
		$(".fenzuIn").removeClass("fenzudetail");
		$(this).addClass("fenzudetail");
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
var listkindnumber1=2;
	$(".list1").click(function(){

		var d=$(this).attr("kid");
		if(listkindnumber1==1){
			$(".friendlist[lid="+d+"]").show();
			listkindnumber1=2;
							}
			else{
				$(".friendlist[lid="+d+"]").hide();
				listkindnumber1=1;
			}
	});
	var listkindnumber2=1;
	$(".list2").click(function(){

		var d=$(this).attr("kid");
		if(listkindnumber2==1){
			$(".friendlist[lid="+d+"]").show();
			listkindnumber2=2;
							}
			else{
				$(".friendlist[lid="+d+"]").hide();
				listkindnumber2=1;
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
	/*点击好友出现聊天窗体*/ 
	$(".friendli").click(function(){
		var FId=$(this).attr("fid");//好友ID
		$(".miniwin[miniId="+FId+"]").fadeOut();
		$(".qqwindow[WID="+FId+"]").remove();
		$(this).attr("isopen","false");
		//先把窗体至于最上层再return结束执行语句
		$(".qqwindow[WID="+FId+"]").css("z-index","104");
	    $(".qqwindow[WID!="+FId+"]").css("z-index","100");
		if($(this).attr("isopen")=="true"){
			return;
		}

		var UserName=$(this).attr("username");//好友昵称
		$(this).attr("isopen","true");
		var winID="Wid"+FId;
		var html="";
		html+='				<div WID='+FId+' class="qqwindow" id="'+winID+'">';//此次弹出窗体Id等于点击的好友ID
		html+='					<div class="windowtop">';
		html+='						<div class="windowLbtn">';
		html+='							<span class="windowLbtnpic"></span>';
		html+='						</div>';
		html+='						<div class="windowtopname">'+UserName+'</div>';//此次弹出窗体顶部名称就是好友昵称
		html+='						<div closeId='+FId+' class="windowclosebtn">关闭</div>';//关闭按钮的ID等于聊天桌面的ID
		html+='						<div Zid='+FId+' class="windowclosebtn zuixiaohua">最小化</div>';
		html+='					</div>';
		html+='					<div class="windowbody" bid='+FId+'></div>';//窗体聊天桌面的ID等于窗体ID
		html+='					<div class="windowbottom">';
		html+='						<div class="windowbiaoqing"></div>';
		html+='						<input class="windowbottomtext" tid='+FId+'></input>';//输入文本的ID等于聊天桌面的ID
		html+='						<div class="windowbottombtn" BtnId='+FId+'>发送</div>';//发送按钮的ID等于聊天桌面的ID
		html+='					</div>';
		html+='				</div>';
		$(".bodyAR").append(html);
		$(".qqwindow[WID="+FId+"]").css("z-index","104");//将本次点击弹出的窗体至于最上层
	    $(".qqwindow[WID!="+FId+"]").css("z-index","100");
	    $( ".qqwindow").draggable({ containment: "parent" });
		var topsize=(FId%10)*50+50;
		var leftsize=(FId%10)*10+10;
		$("#"+winID).css("top",topsize+"px");
		$("#"+winID).css("left",leftsize+"px");
		$(".windowclosebtn").click(function(){
			
			var CloseID=$(this).attr("closeId");//取出关闭按钮的Id
			$(".friendli").attr("isopen","false");
			$(".qqwindow[WID="+CloseID+"]").remove();//聊天窗体的Id等于关闭按钮的关闭
		});

	});
	$(document).on("click",".windowbottombtn",function(){
		sendMessage($(this));
	});

	$(document).on("click",".qqwindow",function(){
		maxindex($(this));
	});

	$(document).on("click",".zuixiaohua",function(){
		zuixiao($(this));
	});
	$(document).on("click",".miniwin",function(){
		normalsize($(this));

	});
});


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

	$(".windowbody[bid="+btnId+"]").append(html);//id等于发送按钮Id的聊天桌面添加聊天记录
}

function maxindex(ele){
	var w=$(ele).attr("WID");
	$(".qqwindow").css("z-index","100");
	$(ele).css("z-index","104");
}

function zuixiao(ele){
	var z=$(ele).attr("Zid");
	$(".friendli[fid="+z+"]").attr("isopen","true");
	$(".qqwindow[WID="+z+"]").fadeOut();
	var html="";
	var name=$(".friendli[fid="+z+"]").attr("username");
	html+='<div class="miniwin" miniId='+z+' miniisopen="1">'+name+'</div>';
	$(".minimenu").append(html);
}

function normalsize(ele){
	var z=$(ele).attr("miniId");
	$(".qqwindow[WID="+z+"]").fadeIn();
	$(ele).hide();
}