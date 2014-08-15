$(function(){
  $(".ListLi").mouseover(function(){
  	var L=$(this).attr("LiID");
  	$(this).css("opacity","0.9");
  	$(this).css("box-shadow","3px 3px 2px #888888");
  	$(".ListLi[LiID!="+L+"]").css("opacity","0.2");
 	$(".ListLi[LiID!="+L+"]").css("box-shadow","");
  });
});