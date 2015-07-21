$(function(){
	

	

	/*alert("s");*/
	$(".abouttpic").hover(function(){
		
		$(this).animate({opacity:"1",},500);
	},function(){
		$(this).animate({opacity:"0.5"},500);
	});
	$(".footlaul li a").hover(function(){
		$(this).css("color","#ddd");
	},function(){
		$(this).css("color","");
	});
	$(".footliimg").hover(function(){
		$(this).css("opacity","1");
	},function(){
		$(this).css("opacity","");
	});
	$(".footbomlink").hover(function(){
		$(this).addClass("footbomanimate");
	},function(){

		$(this).removeClass("footbomanimate");
	});
	/*幻灯片*/
	$(".slid1title").addClass("slid1titleanimate");
	$(".slid1caption").addClass("slid1captioneanimate");
	$(".slider1img1").addClass("slider1img1animate");
	$(".slider1txt1").addClass("slider1txt1animate");
	$(".slider1img2").addClass("slider1img2animate");
	$(".slider1txt2").addClass("slider1txt2animate");
	$(".slider1img3").addClass("slider1img3animate");
	$(".slider1txt3").addClass("slider1txt3animate");
	$(".slider1img4").addClass("slider1img4animate");
	$(".slider1txt4").addClass("slider1txt4animate");
	$(".slid3title").addClass("slid3titleanimate");
	$(".slid3caption").addClass("slid3captioneanimate");
	$(".slider3img").addClass("slider3imganimate");
	$(".slider2pic").addClass("slider2picanimate");
	$(".slidermodle1").addClass("slidermodle1animate");
	$(".slidermodle2").addClass("slidermodle2animate");
	$(".slidermodle3").addClass("slidermodle3animate");
	$(".slidermodle4").addClass("slidermodle4animate");
	$(".prebtn").click(function(){
		/*clearInterval(video);*/
		index=index-1;
		if (index==0) {
			index=3;
		}
		/*alert(index);*/
		/*$(".sliderall").hide();
		$(".slider"+index).show();*/
		/*$(".slid1title").addClass("slid1titleanimate");
		$(".slid1caption").addClass("slid1captioneanimate");
		$(".slider1img1").addClass("slider1img1animate");
		$(".slider1txt1").addClass("slider1txt1animate");
		$(".slider1img2").addClass("slider1img2animate");
		$(".slider1txt2").addClass("slider1txt2animate");
		$(".slider1img3").addClass("slider1img3animate");
		$(".slider1txt3").addClass("slider1txt3animate");
		$(".slider1img4").addClass("slider1img4animate");
		$(".slider1txt4").addClass("slider1txt4animate");
		$(".slid3title").addClass("slid3titleanimate");
		$(".slid3caption").addClass("slid3captioneanimate");
		$(".slider3img").addClass("slider3imganimate");
		$(".slider2pic").addClass("slider2picanimate");
		$(".slidermodle1").addClass("slidermodle1animate");
		$(".slidermodle2").addClass("slidermodle2animate");
		$(".slidermodle3").addClass("slidermodle3animate");
		$(".slidermodle4").addClass("slidermodle4animate");*/
		video=setInterval("huandengpian()",3000);
		
	});
	$(".nextbtn").click(function(){
		/*clearInterval(video);*/
		/*alert(index);*/
		index=index+1;
		if(index==4 || index==5)
		{
			index=1;
		}
		
		/*$(".sliderall").hide();
		$(".slider"+index).show();*/
		/*$(".slid1title").addClass("slid1titleanimate");
		$(".slid1caption").addClass("slid1captioneanimate");
		$(".slider1img1").addClass("slider1img1animate");
		$(".slider1txt1").addClass("slider1txt1animate");
		$(".slider1img2").addClass("slider1img2animate");
		$(".slider1txt2").addClass("slider1txt2animate");
		$(".slider1img3").addClass("slider1img3animate");
		$(".slider1txt3").addClass("slider1txt3animate");
		$(".slider1img4").addClass("slider1img4animate");
		$(".slider1txt4").addClass("slider1txt4animate");
		$(".slid3title").addClass("slid3titleanimate");
		$(".slid3caption").addClass("slid3captioneanimate");
		$(".slider3img").addClass("slider3imganimate");
		$(".slider2pic").addClass("slider2picanimate");
		$(".slidermodle1").addClass("slidermodle1animate");
		$(".slidermodle2").addClass("slidermodle2animate");
		$(".slidermodle3").addClass("slidermodle3animate");
		$(".slidermodle4").addClass("slidermodle4animate");*/
		video==setInterval("huandengpian()",3000);
	});
	video=setInterval("huandengpian()",3000);
/*<!-- Benefits -->*/

	window.onscroll=function(){
		if (document.body.scrollTop>290) {
			/*alert("d");*/
			$(".benebright").addClass("benebrightanimate");
		
		}
	}
	
	/*商品展示*/
	$(".prozoom").hover(function(){
		$(this).addClass("prozoomanimation");
		$(".fa-search").addClass("prozoomanimation");
	},function(){
		$(this).removeClass("prozoomanimation");
		$(".fa-search").removeClass("prozoomanimation");
	});
	$(".prolink").hover(function(){
		
		$(this).addClass("prozoomanimation");
		$(".fa-file-o").addClass("prozoomanimation");
	},function(){
		$(this).removeClass("prozoomanimation");
		$(".fa-file-o").removeClass("prozoomanimation");
	});
/*alert("d");*/
	$(".produce1").mouseover(function(){
		$(".promenzhao1").show();

	});
	$(".produce1").mouseout(function(){
		$(".promenzhao1").hide();
	});
	$(".produce2").mouseover(function(){
		$(".promenzhao2").show();

	});
	$(".produce2").mouseout(function(){
		$(".promenzhao2").hide();
	});
	
	$(".produce3").mouseover(function(){
		$(".promenzhao3").show();

	});
	$(".produce3").mouseout(function(){
		$(".promenzhao3").hide();
	});
	
	$(".produce4").mouseover(function(){
		$(".promenzhao4").show();

	});
	$(".produce4").mouseout(function(){
		$(".promenzhao4").hide();
	});
	
	$(".produce5").mouseover(function(){
		$(".promenzhao5").show();

	});
	$(".produce5").mouseout(function(){
		$(".promenzhao5").hide();
	});
	/*<!-- features -->*/
	
	$(".featitemv1").hover(function(){
		$(this).stop();
		$(this).animate({backgroundPositionY:"-8844px"},30000);
	},function(){
		$(this).stop();
		$(this).animate({backgroundPositionY:"0px"},15000);
	});
	$(".featitemv2").hover(function(){
		$(this).stop();
		$(this).animate({backgroundPositionY:"-8844px"},30000);
	},function(){
		$(this).stop();
		$(this).animate({backgroundPositionY:"0px"},15000);
	});
	$(".feataddli").hover(function(){
		$(this).css("background-color","#333333");
	},function(){
		$(this).css("background-color","");
	});
	$(".feataddreadmore").hover(function(){
		$(this).css("background-color","#49C35D");
	},function(){
		$(this).css("background-color","");
	});
	
	
	
	
});
var index=1;
var video;
function huandengpian(){
	if (index==4) {
		index=1;
	}
	
	$(".sliderall").hide();
	$(".slider"+index).show();	
	index++;

}
