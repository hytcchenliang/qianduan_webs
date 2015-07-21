$(function(){
	window.onscroll=function(){
		if (document.body.scrollTop>0) {
			$(".topline").show();
		}
		else{
			$(".topline").hide();
		}
		if (document.body.scrollTop>170) {
			$(".conleft").css({"position":"fixed","top":"-170px","z-index":"50"});
			$(".conMiddle").css("padding-left","143px");
		}
		else{
			$(".conleft").css({"position":"","top":"","z-index":""});
			$(".conMiddle").css("padding-left","");
		}
		if (document.body.scrollTop>1600) {
			$(".conRight").css({"position":"fixed","top":"-1600px","z-index":"50","padding-left":"800px"});
		}
		else{
			$(".conRight").css({"position":"","top":"","z-index":"","padding-left":""});
		}

	}
	
	
	$(".focusbli").hover(function(){
		/*alert("d");*/
		var index=$(this).attr("name");
		$(".focusbigpic").css("background-image","url('css/images/"+index+".jpg')");
		$(".focusbli").removeClass("selected");
		$(this).addClass("selected");
		clearInterval(picstop);
		/*alert(index);*/	
	},function(){
		index=$(this).attr("name");

		/*alert(index);*/
		picstop=setInterval("changepic()",1000);
		/*alert(index);*/
		/*$(".focusbli").removeClass("selected");
		$(".focusbli1").addClass("selected");
		$(".focustext").hide();
		$(".focustext1").show();	*/
	});
	
	picstop=setInterval("changepic()",1000);
});
var picstop;
var index=1;
function changepic(){
	/*alert("d");*/

	/*alert(index);*/
	
	/*alert(index);*/
	index++;
	if (index==6) {
		index=1;
	}
	$(".focusbigpic").css("background-image","url('css/images/"+index+".jpg')");
	$(".focusbli").removeClass("selected");
	$(".focusbli"+index).addClass("selected");
	$(".focustext").hide();
	$(".focustext"+index).show();
	
	
	
	
}