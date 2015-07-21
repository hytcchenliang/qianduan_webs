$(window).load(function(){
	canbg();
});
$(function(){

	var audio=document.getElementById("mymusic");
	/*alert("d");*/
	/*audio.play();*/
	/*<!-- 顶部header -->*/
	//var img = document.getElementById( imageID );
	
	
	
	/*播放列表*/
	$(".sortboxnor").hover(function(){
		$(this).find(".sorttxt").html("");
		$(this).find(".sorttxt").addClass("sortbofang");
	},function(){
		var count=$(this).find(".sorttxt").attr("index");
		/*$(".conrbul").hide();
		$(".conrbul"+count).show();*/
		$(this).find(".sorttxt").html(""+count+"");
		$(this).find(".sorttxt").removeClass("sortbofang");
	});
	$(document).on("click",".sortbofang",function(){
		setTimeout('canbg()',100);
		$(".concmitem").hide();
		var bofangid=$(this).attr("index");
		$(".concminortop").show();
		$(this).parent().parent().hide();
		$(this).parent().parent().next().show();
		var thispar=$(this).parent().parent().parent().parent().parent().parent();
		var footpar=$(this).parent().parent().parent().parent().parent().parent().parent().next().find(".MainControl");
		footpar.removeClass("MainControl").addClass("StopControl");
		thispar.next().find(".conrbul").hide();
		thispar.next().find(".conrbul"+bofangid).show();
		var item=$(this).parent().parent().next();
		var name=item.find(".concmittxt").html();
		$("#mymusic").attr("src","music/"+name+".mp3");
		$("#mymusic").attr("musicid",bofangid);
		$("#conrtpic").attr("src","images/"+bofangid+".jpg");
		$(".conrbul").find(".ui-lrc-line1").removeClass("newcolor");
		$(".conrbul"+""+bofangid+"").find(".ui-lrc-line1").addClass("newcolor");
		$(".songnamelink").html(""+name+"");
		audio.play();
		TimeSpan();	
	});
	/*开始暂停*/

	$(document).on("click",".MainControl",function(){
			var musicid=$("#mymusic").attr("musicid");
			$(".conrbul").find(".ui-lrc-line1").removeClass("newcolor");
			$(".conrbul"+""+musicid+"").find(".ui-lrc-line1").addClass("newcolor");
			$(this).removeClass("MainControl").addClass("StopControl");
			audio.play();
			TimeSpan();	
	});
	$(document).on("click",".StopControl",function(){
		$(this).removeClass("StopControl").addClass("MainControl");
		audio.pause();
	});
	/*前一首*/
	$(document).on("click",".prevmusic",function(){
		setTimeout('canbg()',100);
		var next=$(this).parent().parent().parent().next();
		var songid=next.find(".Songid").html();
		var nsong=parseInt(songid)-1;
		if (nsong==0)
		{
			nsong=2;
		}
		$(".concmitem").hide();
		$(".concminortop").show();
		$(".concminortop"+""+nsong+"").hide();
		$(".concmitem"+nsong).show();
		$(".conrbul").hide();
		$(".conrbul"+nsong).show();
		var conrb=".conrbul"+nsong;
		$(".conrbul").find(".ui-lrc-line1").removeClass("newcolor");
		$(""+conrb+"").find(".ui-lrc-line1").addClass("newcolor");
		$(this).parent().next().find(".musicico").removeClass("MainControl").addClass("StopControl");
		var name=$(".concmitem"+nsong).find(".concmittxt").html();
		next.find(".Songid").html(""+nsong+"");
		$("#mymusic").attr("src","music/"+name+".mp3");
		$("#mymusic").attr("musicid",""+nsong+"");
		$("#conrtpic").attr("src","images/"+nsong+".jpg");
		$(".songnamelink").html(""+name+"");
		audio.play();
		TimeSpan();	
	});
	/*后一首*/
	$(document).on("click",".nextmusic",function(){
		setTimeout('canbg()',100);
		var next=$(this).parent().parent().parent().next();
		var songid=next.find(".Songid").html();
		var nsong=1+parseInt(songid);
		if (nsong==3) {nsong=1;}
		$(".concmitem").hide();
		$(".concminortop").show();
		$(".concminortop"+""+nsong+"").hide();
		$(".concmitem"+nsong).show();
		$(".conrbul").hide();
		$(".conrbul"+nsong).show();
		var conrb=".conrbul"+nsong;
		$(".conrbul").find(".ui-lrc-line1").removeClass("newcolor");
		$(""+conrb+"").find(".ui-lrc-line1").addClass("newcolor");
		$(this).parent().prev().find(".musicico").removeClass("MainControl").addClass("StopControl");
		var name=$(".concmitem"+nsong).find(".concmittxt").html();
		next.find(".Songid").html(""+nsong+"");
		$("#mymusic").attr("src","music/"+name+".mp3");
		$("#mymusic").attr("musicid",""+nsong+"");
		$("#conrtpic").attr("src","images/"+nsong+".jpg");
		$(".songnamelink").html(""+name+"");
		audio.play();
		TimeSpan();	
	});
	/*进度条进度增加*/
	$(document).on("click",".Process",function(e){
		var process=$(".Process").offset();
		var processstart=process.left;
		/*alert(processstart);*/
		var ProcessLength = $(".Process").width();
		// alert(ProcessLength);
		var currentprocess=e.clientX-processstart;
		/* alert(currentprocess)*/
		/*alert("d");*/
		DurationProcessRange(currentprocess / ProcessLength);
		$(".ProcessCico").css("left",""+currentprocess+"px");
		$(".ProcessControl").css("width", ""+currentprocess+"px");
		 
	});

	/*进度条进度拖动*/
	/*var dragging = false;
	var ix,iy;
	$(".ProcessCico").mousedowm(function(e){
		dragging=true;
		ix=e.clientX-332;
		return false;
	});
	document.onmouseover = function(e){
		if (dragging) {
			var ox=e.clientX-ix;
			$(".ProcessCico").css("left",""+ox+"px");
		}
	};
	$(document).mouseup(function(e){
		dragging = false;
	});*/
	/*$(".ProcessCico").mousemove(function(e){

		var process=$(".Process").offset();
		var processstart=process.left;
		var pleft=e.clientX-processstart;
		alert(pleft);
	});*/

	/*进度条进度减小*/
	$(document).on("click",".ProcessControl",function(e){
		var process=$(".Process").offset();
		var processstart=process.left;
		var ProcessLength = $(".Process").width();

		var currentprocess=e.clientX-processstart;
		DurationProcessRange(currentprocess / ProcessLength);
		 $(".ProcessControl").css("width", ""+currentprocess+"px");
		 $(".ProcessCico").css("left",""+currentprocess+"px");
	});
	/*静音*/
	$(".footrvoice").click(function(){

		var audio=document.getElementById("mymusic");
		/*var vol;
		var prevol=vol;*/
		/*alert(vol);*/
		var jy=$(this).attr("isjy");
		if (jy=="no") {
			/*vol=$(".voicecontrol").css("width");*/
			$(this).css("background-position","0px -313px");
			$(this).attr("isjy","yes");
			$(".voicecontrol").css("width","0");
			$(".voiceCico").css("left","0");
			audio.volume=0;
		}
		else{
			$(this).css("background-position","");
			$(this).attr("isjy","no");
			$(".voicecontrol").css("width","80px");
			$(".voiceCico").css("left","80px");
			audio.volume=1;
		}

		
	});
	
});
//播放进度条的转变事件
function DurationProcessRange(rangeVal){
	$(".MainControl").removeClass("MainControl").addClass("StopControl");
	var audio = document.getElementById("mymusic");
    audio.currentTime = rangeVal * audio.duration;
    /*alert(audio.currentTime);*/
    var time= timeDispose(audio.currentTime);
    /*alert(time);*/
    /* var dur=audio.duration;*/
    audio.play();
}
var video;
//时间进度处理程序
function TimeSpan(){
	/*clearInterval(video);*/
	var audio = document.getElementById("mymusic");
	var ProcessControl=0;
	var index=0;
	var musicid=$("#mymusic").attr("musicid");
	/*alert(musicid);*/
	var ulid=".conrbul"+musicid;
	/*alert(ulid);*/
	/*alert(ele);*/
	var min=00;
	var sec=00;
	min=min>= 10 ? min : "0"+min;
	setInterval(function(){
		
		sec++;
		
		sec=sec >= 10 ? sec: "0"+sec;
		if (sec==60) {
			min++;
			min=min>= 10 ? min : "0"+min;
			sec=00;	
		}
		/*alert(sec);*/
		var starttime=min+":"+sec;
		/*alert(starttime);*/
		
		var ProcessControl=(audio.currentTime/audio.duration)*664;

		$(".ProcessControl").css("width",""+ProcessControl+"px");
		$(".ProcessCico").css("left",""+ProcessControl+"px");
		
		var currentTime=timeDispose(audio.currentTime);

		$(".SongTime").html(currentTime);
		var timeAll=timeDispose(TimeAll());
		$(".SongallTime").html(timeAll);
		var st=$(".SongTime").html();
		/*for(stime=)*/
		/*alert(st);*/
		var timeline=$(".newcolor").next().attr("timeline");
		 /*alert(timeline);*/
		if(starttime==timeline){
			/*alert("d");*/
			index=index+1;
			/*alert(timeline);*/
			var scroll=(index-3)*22;
			/*alert(scroll);*/
			
			// alert(index);
			var licount=$(""+ulid+"").find(".ui-lrc-line").length;

			var mins=(scroll/(licount*22))*270;
			/*alert(mins);*/			
			$(""+ulid+" li:lt("+index+")").removeClass("newcolor");
			$(""+ulid+" li:eq("+index+")").addClass("newcolor");
			if(index>3){
				$(".conrbul").css("margin-top","-"+scroll+"px");
			}
			$(".conrbsgl").css("top",""+mins+"px");
		}
	},1000);
}
function timeDispose(number){
	/*alert("d");*/
	var minute=parseInt(number/60);
	var second=parseInt(number%60);
	minute = minute >= 10 ? minute : "0"+minute;
    second = second >= 10 ? second : "0"+second;
    return minute + ":" + second;
}
//当前歌曲的总时间
function TimeAll(){
	 var audio = document.getElementById("mymusic");
    return audio.duration;
}
function canbg(){
	var width=window.screen.width;
	var w=width+"px";
	var canvas = document.getElementById("canvas");
	canvas.style.width=w;
	canvas.style.height="640px";
	var context=canvas.getContext('2d');
	var img=document.getElementById("conrtpic");
	context.drawImage(img,45,45,139,115,0,0,1366,640);
	stackBlurCanvasRGBA('canvas',0,0,1366,640,300);
}
/*时间*/

/*var Dragging=function(validateHandle){
	var draggingObj=null;
	var diffx=0;
		function mouseHander(e)
	{
		switch(e.type){
			case 'mousedowm':
				draggingObj=validateHandle(e);
				if (draggingObj!=null) {
					diffx=e.clientX-draggingObj.offsetLeft;
				}
				break;
			case 'mousemove':
				if (draggingObj) {
					draggingObj.style.left=(e.clientX-diffX)+'px';
				}
				break;
			case 'mouseup':
				draggingObj =null;
				diffX=0;
				break;
		}
	}
}*/


