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
})


function addtiezi(){
	var shuoshuo=$(".shurukuang").val();
	var html="";
		html+='						<div class="tiezi">';
		html+='							<div class="tieziL">';
		html+='								<div class="headpic"></div>';
		html+='							</div>';
		html+='							<div class="tieziR">';
		html+='								<div class="webname">微博客服</div>';
		html+='								<div class="tiecontent">';
		html+='									<div class="tiecontenttxt">'+shuoshuo+'</div>';
		html+='									<div class="tiecontentpic">';
		html+='										<img  src="Images/weibopic/1.jpg">';
		html+='									</div>';
		html+='									<div class="tiebottom">';
		html+='										<div class="tiebottomL">';
		html+='											<a href="" class="">今天 11：45</a>';
		html+='											<span>来自</span>';
		html+='											<a href="">微博web.com</a>';
		html+='										</div>';
		html+='										<div class="tiebottomR">';
		html+='											<a href=""class="zan">';
		html+='												<span class="zanpic"></span>(2)';
		html+='											</a>';
		html+='											<span>|</span>';
		html+='											<a href="">转发(1)</a>';
		html+='											<span>|</span>';
		html+='											<a href="">收藏</a>';
		html+='											<span>|</span>';
		html+='											<a href="">评论(2)</a>';
		html+='										</div>';
		html+='									</div>';
		html+='						</div>';

		$(".weibomain").append(html);
}