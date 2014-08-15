$(function(){

	timer=setInterval("focuse()",2000);

	
	$(".bottomLi").mouseover(function(){
		var x=$(this).attr("xsize");
		$(this).css("background-position",""+x+"px -319px");
	});
	$(".bottomLi").mouseleave(function(){
		$(this).css("background-position","");
	});

	$(".focusebtnround").click(function(){
		number=$(this).attr("rid");
		focuse();
	});
});
var timer;
var number=1
function focuse(){
	$(".focuseImg[fpid!="+number+"]").fadeOut();
	$(".focuseImg[fpid="+number+"]").fadeIn();
	$(".focusebtnround[rid="+number+"]").css("background-position","-1033px -72px");
	$(".focusebtnround[rid!="+number+"]").css("background-position","-1008px -72px");
	number++;
	if(number>4){
		number=1;
	}
	if(number<1){
		number=4;
	}
}