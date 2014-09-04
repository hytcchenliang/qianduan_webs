$(window).load(function(){
	//loadBG();
	loadPlay();
	audio.volume=0.5;
	$(".musicLiP2In[songN=1]").click();
	// audio.addEventListener('timeupdate',jingdutiao,false);

});
$(function(){	
	  // var n=$(".firstline").offset().top;
	  // alert(n);
      $(".musicLiP2In").click(function(){
	      	songNa=$(this).parent().parent().find(".musicname").attr("songname");
	      	singer=$(this).parent().parent().find(".singername").attr("singer");
			palymusic();
	      	$(".findmore").css("display","none");
	      	$(this).parent().parent().parent().find(".findmore").css("display","block");
	      	$(".musicLiP2In").css("background-image","");
	      	$(this).css("background-image",'url("Images/1gif.gif")');
	      	$(".musicLiP2In").css("color","");
	      	$(this).css("color","transparent");
	      	$(".musicLiP2In").attr("isopen","false");
	      	$(this).attr("isopen","true");
	      	$(".GoOrStop").css("background-position","-34px -32px");
	      	audio.addEventListener('timeupdate',jingdutiao,false);
	      	audio.volume()=50;
      });

      

      $( ".jingdupoint").draggable({
	       axis: "x",containment: ".jingduline" ,
	       drag:function(){
			 var left=$(this).css("left");
			 var Left=parseInt(left);
			  audio.currentTime = audio.duration*(Left/600);
	       }
      });

      $(".GoOrStop").click(function(){
      	   if(audio.paused){
      	   	 audio.play();
      	   	 $(this).css("background-position","");
      	   	 $(".musicLiP2In[isopen=true]").css("background-image",'url("Images/1gif.gif")');
      	   }
      	   else{
      	   	audio.pause();
      	   	 $(this).css("background-position","-34px -2px");
      	   	 $(".musicLiP2In[isopen=true]").css("background-image",'url("Images/4.png")');
      	   }
      });

      $(".nextsong").click(function(){  	    
     //  	    var nextsongna=$(".musicLiP2In[isopen=true]").parent().parent().parent().next().find(".musicinfo").find(".musicname").attr("songname");
     //  	    $(".findmore").css("display","none");
     //  	    $(".musicLiP2In[isopen=true]").parent().parent().parent().next().find(".findmore").css("display","block");
     //  	    $(".musicLiP2In").css("background-image","");
     //  	    $(".musicLiP2In[isopen=true]").parent().parent().parent().next().find(".musicinfo").find(".musicLiP2").find(".musicLiP2In").css("background-image",'url("Images/1gif.gif")');
     //  	    $(".musicLiP2In[isopen=true]").parent().parent().parent().next().find(".musicinfo").find(".musicLiP2").find(".musicLiP2In").css("color","transparent");
	    //   	$(".musicLiP2In[isopen=true]").parent().parent().parent().next().find(".musicinfo").find(".musicLiP2").find(".musicLiP2In").attr("isopen","true");
     //        $("#myaudio").attr("src","musics/"+nextsongna+".mp3");
		  	// audio=document.getElementById("myaudio");
		  	// audio.play();
		  	var currentN=$(".musicLiP2In[isopen=true]").attr("songN");
		  	currentN++;
		  	if(currentN>10){
		  		currentN=10;
		  	}
		  	var nextsongnN=currentN;
		    var nextsongname=$(".musicLiP2In[songN="+nextsongnN+"]").parent().parent().find(".musicname").attr("songname");
		    var nextsinger=$(".musicLiP2In[songN="+nextsongnN+"]").parent().parent().find(".singername").attr("singer");
		  	songNa=nextsongname;
		  	singer=nextsinger;
			palymusic();
			$(".musicLiP2In").attr("isopen","false");
			$(".musicLiP2In[songN="+nextsongnN+"]").attr("isopen","true");
			$(".musicLiP2In").css("background-image","");
	      	$(".musicLiP2In[songN="+nextsongnN+"]").css("background-image",'url("Images/1gif.gif")');
	      	$(".musicLiP2In").css("color","");
	      	$(".musicLiP2In[songN="+nextsongnN+"]").css("color","transparent");
	      	$(".findmore").css("display","none");
	      	$(".musicLiP2In[songN="+nextsongnN+"]").parent().parent().parent().find(".findmore").css("display","block");
	      	$(".GoOrStop").css("background-position","-34px -32px");
      });

	 $(".lastsong").click(function(){  	    
		  	var currentN=$(".musicLiP2In[isopen=true]").attr("songN");
		  	currentN--;
		  	if(currentN<1){
		  		currentN=1;
		  	}
		  	var nextsongnN=currentN;
		    var nextsongname=$(".musicLiP2In[songN="+nextsongnN+"]").parent().parent().find(".musicname").attr("songname");
		    var nextsinger=$(".musicLiP2In[songN="+nextsongnN+"]").parent().parent().find(".singername").attr("singer");
		  	songNa=nextsongname;
		  	singer=nextsinger;
			palymusic();
			$(".musicLiP2In").attr("isopen","false");
			$(".musicLiP2In[songN="+nextsongnN+"]").attr("isopen","true");
			$(".musicLiP2In").css("background-image","");
	      	$(".musicLiP2In[songN="+nextsongnN+"]").css("background-image",'url("Images/1gif.gif")');
	      	$(".musicLiP2In").css("color","");
	      	$(".musicLiP2In[songN="+nextsongnN+"]").css("color","transparent");
	      	$(".findmore").css("display","none");
	      	$(".musicLiP2In[songN="+nextsongnN+"]").parent().parent().parent().find(".findmore").css("display","block");
      });

	$(".voicecrl").attr("haveopen","off");
	$(".voicecrl").click(function(){
		if($(".voicecrl").attr("haveopen")=="off"){
			$(this).css("background-position","-2px -800px");
			$(".voicecrl").attr("haveopen","on");
		}
		else{
			$(this).css("background-position","-2px -0px");
			$(".voicecrl").attr("haveopen","off");
		}
		
	});

	
	$(".voicepoint").draggable({
		axis: "x",containment: ".voiceline",
		drag:function(){
			var vpointL=$(this).css("left");
			var IntvpointL=parseInt(vpointL);
			audio.volume=(IntvpointL/100);

		}
	});
      
      var number1=1;
	 $(".voicepic").click(function(){
		
		if(number1==1){
			$(this).css("background-position","-28px -313px");
			audio.volume=0;
			$(".voicepoint").css("left","0px");
			number1=2;
		}
		else{
			$(this).css("background-position","-28px -295px");
			audio.volume=0.5;
			$(".voicepoint").css("left","50px");
			number1=1;
		}
	  });

	 	// $(".musicwordsUL").animate({top:"100"},10000);

});

var songNa="";
var singer="";
function palymusic(){
	$("#myaudio").attr("src","musics/"+songNa+".mp3");
	$(".curentsong").html(songNa+"-"+singer);
  	audio=document.getElementById("myaudio");
  	audio.play();
}

function jingdutiao(){
	///*显示歌曲总长度*/
	//alert(audio.duration);
	var songTime = calcTime(Math.floor(audio.duration));
	$(".totletime").html(songTime);
	// // /*显示歌曲当前时间*/
	var curTime = calcTime(Math.floor(audio.currentTime));
	$(".currenttime").html(curTime);
	var jingduL =600*(Math.floor(audio.currentTime)/Math.floor(audio.duration));
	var pointleft = Math.floor(jingduL).toString()+"px";
	if(jingduL==600){
		$(".nextsong").click();
	}
	$(".jingdupoint").css("left",pointleft);
   
	    var n=10;
	    var MTIME=curTime.toString();
	    $(".musicwordsLi[mtime='"+MTIME+"']").css("color","red");
	    // setInterval(function(){
	    // 	n++;
	    // 	$(".musicwordsUL").css("top",n);
	    // },1000);
		// $(".musicwordsLi[mtime='"+MTIME+"']").css("position","absolute");
		$(".musicwordsLi[mtime!='"+MTIME+"']").css("color","");
	    // var n=$(".firstline").offset().top;
}

function loadPlay(){
	$("#myaudio").attr("src","musics/剑伤.mp3");
	$(".curentsong").html("剑伤-李易峰")
  	audio=document.getElementById("myaudio");
  	audio.play();
  	$(".musicLiP2In[songN=1]").attr("isopen","true");
  	$(".musicLiP2In[songN=1]").css("color","transparent");
  	$(".musicLiP2In[songN=1]").css("background-image",'url("Images/1gif.gif")');

} 

function calcTime(time){
	var hour;         	var minute;    	var second;
	hour = String ( parseInt ( time / 3600 , 10 ));
	if (hour.length ==1)   hour='0'+hour;
	minute=String(parseInt((time%3600)/60,10));
	if(minute.length==1) minute='0'+minute;
	second=String(parseInt(time%60,10));
	if(second.length==1)second='0'+second;
	if(hour==0){
		return minute+":"+second;
	}
	else{
		return hour+":"+minute+":"+second;
	}
}
// function nextsongclick(){
// 	$(".nextsong").click();
// }
// var m="";
// function ff(){
// 	$(".musicwordsLi[mtime='"+m+"']").css("color","red");
// 	function{
// 	$(".musicwordsLi[mtime!='"+m+"']").css("color","");
// 	}
// }

