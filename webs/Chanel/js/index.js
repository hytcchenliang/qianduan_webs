$(function(){
	window.onscroll=function(){
		if (document.body.scrollTop>70){
			$(".bonall").animate({top:"100px"},5000);
		}
		if (document.body.scrollTop<40){
			$(".bonall").animate({top:"507px"},5000);
		}
	}
	$(".hdpli").hover(function(){
		clearInterval(hdp);
	},function(){
		hdp=setInterval("video()",1000);
	});
	hdp=setInterval("video()",1000);
});
var index=1;
var hdp;
function video(){
	index++;
	if(index==5)
	{
		index=1;
	}
	$(".hdpli").hide();
	$(".hdpli"+""+index+"").show();
}