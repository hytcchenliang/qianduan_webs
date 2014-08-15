$(function(){
/*顶部*/ 

 $("#topP2").mouseover(function(){
    $("#topP2big").show();
  });
  $("#topP2").mouseleave(function(){
    $("#topP2big").hide();
  });
  $("#topP2big").mouseover(function(){
    $("#topP2big").show();
  });
  $("#topP2big").mouseleave(function(){
    $("#topP2big").hide();
  });
	/*topmenu begin*/ 
 	$(".topmenuA").mouseover(function(){
      	var xvalue=$(this).attr("topmenuAx");
        $(this).css("background-position",""+xvalue+" -40px");
     });

 	$(".topmenuA").mouseleave(function(){
        $(this).css("background-position","");
     });

// topmenuL2鼠标事件 开始
	$(".topmenuli").mouseover(function(){
      	var a=$(this).attr("Lid");
      	$(this).css("background-position","-444px -84px");
        $(".topmenusonli[sonLid="+a+"]").css("background-position","-547px -1px");
     });

 	$(".topmenuli").mouseleave(function(){
      	var b=$(this).attr("Lid");
      	$(this).css("background-position","");
        $(".topmenusonli[sonLid="+b+"]").css("background-position","");
     });

// 顶部菜单子菜单点击 开始

	$(".topmenusonli").mouseover(function(){
      	var a=$(this).attr("sonLid");
      	$(this).css("background-position","-547px -1px");
        $(".topmenuli[Lid="+a+"]").css("background-position","-444px -84px");
     });

 	$(".topmenusonli").mouseleave(function(){
      	var b=$(this).attr("sonLid");
      	$(this).css("background-position","");
        $(".topmenuli[Lid="+b+"]").css("background-position","");
     });

	// 顶部菜单子菜单点击 结束
 	 $(".MPart2RT").mouseover(function(){
      	var c=$(this).attr("MPart2RTid");
      	$(".MPart2RConInnerP[MPart2RCP!="+c+"]").hide();
      	$(".MPart2RConInnerP[MPart2RCP="+c+"]").show();
      	if(c!=1){
      	$("#MPart2RTli1").css("background-position","-385px -66px");
        }
        else $("#MPart2RTli1").css("background-position","");
      });

      $(".MPart3LCvideoA").hover(function(){
      	$(this).find(".shadow").show();
      }
      	,function(){
      		$(this).find(".shadow").hide();
      });

      $(".MPart3LbuttonLi").mouseover(function(){
      	var tid=$(this).attr("titleid");
      	$(".MPart3LcontentIn[videoid!="+tid+"]").hide();
      	$(".MPart3LcontentIn[videoid="+tid+"]").show();
      });


       $(".heroLi").mouseover(function(){
        $(this).find(".heroLiA").show();
      });
       $(".heroLi").mouseleave(function(){
        $(this).find(".heroLiA").hide();
      });

/*焦点begin*/

      $(".buttonjiao").mouseover(function(){
        number=$(this).attr("bid");
        flash();
      });

      $("#focus").mouseover(function(){
         clearInterval(timer); 
      });

      $("#focus").mouseleave(function(){      
         timer=setInterval("flash()",1000);
      });

      timer=setInterval("flash()",1000);
  /*焦点end*/


  $(".MIDLbuttonLi").mouseover(function(){
    var s=$(this).attr("saiid");
    $(".SS[sid="+s+"]").show();
    $(".SS[sid!="+s+"]").hide();
  });

  $("#MIDLXMbtn1").mouseover(function(){
     $(this).css("font-weight","bold");
     $(this).css("color","#333");
     $("#MIDLXMbtn2").css("color","#666");
     $("#MIDLXMbtn2").css("font-weight","");
     $("#M1").show();
     $("#M2").hide();
  });
  $("#MIDLXMbtn2").mouseover(function(){
     $(this).css("font-weight","bold");
     $(this).css("color","#333");
     $("#MIDLXMbtn1").css("color","#666");
     $("#MIDLXMbtn1").css("font-weight","");
     $("#MIDLXMbtn1").css("border-bottom","1px;");
     $("#M2").show();
     $("#M1").hide();
  });

  $(".chotxt").mouseover(function(){
    $(".choulli").show();
  });
  $(".chotxt").mouseleave(function(){
    $(".choulli").hide();
  });

  $("#round1").click(function(){
    $("#roundin1").css("background-color","#00A686");
    $("#roundin2").css("background-color","#fff");
    $("#CHO1").show();
    $("#CHO2").hide();
  });
  $("#round2").click(function(){
   $("#roundin2").css("background-color","#00A686");
   $("#roundin1").css("background-color","#fff");
   $("#CHO2").show();
   $("#CHO1").hide();
  });

  $("#round11").click(function(){
    $("#roundin11").css("background-color","#00A686");
    $("#roundin22").css("background-color","#fff");
    $("#CHO11").show();
    $("#CHO22").hide();
  });
  $("#round22").click(function(){
   $("#roundin22").css("background-color","#00A686");
   $("#roundin11").css("background-color","#fff");
   $("#CHO22").show();
   $("#CHO11").hide();
  });

   $("#MidBtn1").mouseover(function(){
    $("#zhanzheng1").show();
     $("#zhanzheng2").hide();
  });
  $("#MidBtn2").mouseover(function(){
    $("#zhanzheng2").show();
     $("#zhanzheng1").hide();
  });

  $("#Fshangp3txt").mouseover(function(){
    $("#Fshangp3ul").show();
  });
  $("#Fshangp3txt").mouseleave(function(){
    $("#Fshangp3ul").hide();
  });


  $("#xialeft").mouseover(function(){
    $("#dicengshadow").animate({top:"0px"},100);
    $("#xialeftbiao").animate({top:"-60px"},100);
  });
  $("#xialeft").mouseleave(function(){
    $("#dicengshadow").animate({top:"300px"},100);
    $("#xialeftbiao").animate({top:"10px"},100);
  });
});	



/*焦点begin*/
     var timer;
     var number=2;
      function flash(){
      $(".jiaodian[pid="+number+"]").css("z-index","101");
      $(".jiaodian[pid!="+number+"]").css("z-index","100");
      number++;1
      if(number==5){
        number=1
      }
}
/*焦点end*/
