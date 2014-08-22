$(function(){

	$(".sosoL").focus(function(){
		$(".sosoR").css("background-position","-474px -4px");
		$(this).val("");
	});
	$(".sosoL").blur(function(){
		$(".sosoR").css("background-position","-447px -4px");
		$(this).val("大家正在热搜：自由幻想14");
	});

	$(".chazhaoSp2input").focus(function(){
		$(".chazhaoSp2").css("border","1px solid  #ffb33b");
		$(this).val("");
		$(this).css("color","#222");
	});

	$(".chazhaoSp2input").blur(function(){
		$(".chazhaoSp2").css("border","1px solid  #ccc");
		$(this).val("查找我关注的人的微博");
		$(this).css("color","");
	});


	$(".fabiao").click(function(){
		addtiezi();
	});

	$(document).on("click",".zhuanfa",function(){
		// alert();
	    zhuanfa(this);
	});

	$(document).on("click",".pinglunL1",function(){
	    pinglun(this);
	});

	$(document).on("click",".pinglunbtn",function(){
	    fabiaopinglun(this);
	});

	$(document).on("click",".huifu",function(){
	    huifu(this);
	});

	$(document).on("click",".pinglunbtnson",function(){
	    huifuhuifu(this);
	});

	$(document).on("click",".delete1",function(){
	    delete1(this);
	});

	$(document).on("click",".zan",function(){
	    zan(this);
	});

});

var TieID=1;
var zansum1=0;
function addtiezi(){
	var shuoshuo=$(".shurukuang").val();
	var shuousername=$(".myinfoname").html();
	var html="";
		html+='                  <div class="tieziwai" tiewaiId='+TieID+'>';
		html+='						<div class="tiezi" tieid='+TieID+'>';
		html+='							<div class="tieziL">';
		html+='								<div class="headpic"></div>';
		html+='							</div>';
		html+='							<div class="tieziR">';
		html+='								<div class="webname" webnameid='+TieID+'>'+shuousername+'</div>';
		html+='								<div class="tiecontent" tiecontentId='+TieID+'>';
		html+='									<div class="tiecontenttxt">'+shuoshuo+'</div>';
		html+='									<div class="tiecontentpic">';
		// html+='										<img  src="Images/weibopic/1.jpg">';
		html+='									</div>';
		html+='									<div class="tiebottom">';
		html+='										<div class="tiebottomL">';
		html+='											<a href="" class="">今天 11：45</a>';
		html+='											<span>来自</span>';
		html+='											<a href="">微博web.com</a>';
		html+='										</div>';
		html+='										<div class="tiebottomR">';
		html+='											<a class="zan" zanId='+TieID+'>';
		html+='												<span class="zanpic"></span>';
		html+='<span class="zanspan" zanspanId='+TieID+'>('+zansum1+')</span>';
		html+='											</a>';
		html+='											<span>|</span>';
		html+='											<a class="zhuanfa"  zhuanId='+TieID+'>转发</a>';
		html+='											<span>|</span>';
		html+='											<a href="">收藏</a>';
		html+='											<span>|</span>';
		html+='											<a class="pinglunL1" pingL1Id='+TieID+'>评论(2)</a>';
		html+='										</div>';
		html+='									</div>';
		html+='									<div class="pinglun" pinglunID='+TieID+'>';
		html+='										<textarea class="pingluntext" pingluntextId='+TieID+'></textarea>';
		html+='										<div class="pinglunbtn" pinglunbtnId='+TieID+'>';
		html+='											<div class="pinglunbtnIn">评论</div>';
		html+='										</div>';
		html+='									</div>';
		html+='						</div>';
		html+='					</div>';

		$(".weibomain").prepend(html);
		$(".pinglunL1").attr("pinglunopen","false");
		TieID++;
}
function zhuanfa(ele){
	var  ZhuanId=$(ele).attr("zhuanId");
	$(".weibomain").prepend($(".tieziwai[tiewaiId="+ZhuanId+"]").html());
}


function pinglun(ele){
	var  pingL1ID=$(ele).attr("pingL1Id");
	if($(ele).attr("pinglunopen")=="false"){
		$(".pinglun[pinglunID="+pingL1ID+"]").css("display","block");
		 $(ele).attr("pinglunopen","true");
	}
	else{
		$(".pinglun[pinglunID="+pingL1ID+"]").css("display","none");
		 $(ele).attr("pinglunopen","false");
	}
	
}

function fabiaopinglun(ele){
	var pingbtnId=$(ele).attr("pinglunbtnId");
	var shuousername=$(".myinfoname").html();
	var pinglunword=$(".pingluntext[pingluntextId="+pingbtnId+"]").val();
	var html="";
	html+='									<div class="pinglunCon" pinglunConId='+pingbtnId+'>';
	html+='										<div class="pinglunConL">';
	html+='											<a class="pingConLheadpic"></a>';
	html+='										</div>';
	html+='										<div class="pinglunConR">';
	html+='											<div class="pingname" pingnameId='+pingbtnId+'>'+shuousername+'</div>';
	html+='											<div class="pingcontent">'+pinglunword+'</div>';
	html+='											<div class="pingbottom">';
	html+='												<div class="tiebottomR">';
	html+='													<a class="delete1" delete1id='+pingbtnId+'>删除</a>';
	html+='													<span>|</span>';
	html+='													<a href=""class="zan">';
	html+='														<span class="zanpic"></span>(2)';
	html+='													</a>';
	html+='													<span>|</span>';
	html+='													<a  class="huifu" huifuId='+pingbtnId+'>回复</a>';
	html+='												</div>';
	html+='											</div>';
	html+='											<div class="pinglunson" pingsonId='+pingbtnId+'>';
	html+='												<textarea class="pingluntextson" pingluntextsonId='+pingbtnId+'></textarea>';
	html+='												<div class="pinglunbtnson" pinglunbtnsonId='+pingbtnId+'>';
	html+='													<div class="pinglunbtnInson" >';
	html+='														评论';
	html+='													</div>';
	html+='												</div>';
	html+='											</div>';
	html+='										</div>';
	html+='									</div>';
	$(".tiecontent[tiecontentId="+pingbtnId+"]").append(html);
	
}


function huifu(ele){
	var huifuID=$(ele).attr("huifuId");
	if($(ele).attr("pinglunsonopen")=="false"){
		$(".pinglunson[pingsonId="+huifuID+"]").css("display","block");
		$(ele).attr("pinglunsonopen","true");
	}
	else{
		$(".pinglunson[pingsonId="+huifuID+"]").css("display","none");
		$(ele).attr("pinglunsonopen","false");
	}
	
}

function huifuhuifu(ele){
	var pinglunbtnsonID=$(ele).attr("pinglunbtnsonId");
	var name1=$(".myinfoname").html();
	var name2=$(".pingname[pingnameId="+pinglunbtnsonID+"]").html();
	var huifuhuifucon=$(".pingluntextson[pingluntextsonId="+pinglunbtnsonID+"]").val();
	var html="";
	html+='									<div class="pinglunCon">';
	html+='										<div class="pinglunConL">';
	html+='											<a class="pingConLheadpic"></a>';
	html+='										</div>';
	html+='										<div class="pinglunConR">';
	// html+='											<div class="pingname">'+name1+' 对 '+name2+' 说：</div>';
	html+='												<div class="pingname">';
	html+='													'+name1+'';
	html+='													<span class="duishuo">对</span>';
	html+='													'+name2+'';
	html+='													<span class="duishuo">说：</span>';
	html+='                                             </div>';
	html+='											<div class="pingcontent">'+huifuhuifucon+'</div>';
	html+='											<div class="pingbottom">';
	html+='												<div class="tiebottomR">';
	html+='													<a href="">删除</a>';
	html+='													<span>|</span>';
	html+='													<a href=""class="zan">';
	html+='														<span class="zanpic"></span>(2)';
	html+='													</a>';
	// html+='													<span>|</span>';
	// html+='													<a  class="huifu" >回复</a>';
	html+='												</div>';
	html+='											</div>';
	html+='											<div class="pinglunson">';
	html+='												<textarea class="pingluntextson"></textarea>';
	html+='												<div class="pinglunbtnson">';
	html+='													<div class="pinglunbtnInson" >';
	html+='														评论';
	html+='													</div>';
	html+='												</div>';
	html+='											</div>';
	html+='											<div class="pinglunson" >';
	html+='												<textarea class="pingluntextson" ></textarea>';
	html+='												<div class="pinglunbtnson">';
	html+='													<div class="pinglunbtnInson" >';
	html+='														评论';
	html+='													</div>';
	html+='												</div>';
	html+='											</div>';
	html+='										</div>';
	html+='									</div>';
	$(".tiecontent[tiecontentId="+pinglunbtnsonID+"]").append(html);
}

function delete1(ele){
	var delete1ID=$(ele).attr("delete1id");
	 $(".pinglunCon[pinglunConId="+delete1ID+"]").remove();
}

function zan(ele){
	var zanID=$(ele).attr("zanId");
	if(zansum1==0){	zansum1++;}
	else{	zansum1--;}
	$(".zanspan[zanspanId="+zanID+"]").html("("+zansum1+")");
	// alert(zansum1);
}