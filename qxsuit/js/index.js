$(function(){
	
	$(".pkindall").mouseover(function(){
		var Id=$(this).attr("pid");
    		$(".shadow1[sid="+Id+"]").css("-webkit-transform","skew(-7deg)");
    		$(".shadow2[sid="+Id+"]").css("-webkit-transform","skew(7deg)");
    		$(".shadow3[sid="+Id+"]").css("-webkit-transform","skew(7deg)");
    		$(".shadow4[sid="+Id+"]").css("-webkit-transform","skew(-7deg)");

        $(".ppicture[psid="+Id+"]").css("-webkit-transform","scale(1.1)");
	});
	$(".pkindall").mouseleave(function(){
		var Id=$(this).attr("pid");
    		$(".shadow1[sid="+Id+"]").css("-webkit-transform","");
    		$(".shadow2[sid="+Id+"]").css("-webkit-transform","");
    		$(".shadow3[sid="+Id+"]").css("-webkit-transform","");
    		$(".shadow4[sid="+Id+"]").css("-webkit-transform","");

         $(".ppicture[psid="+Id+"]").css("-webkit-transform","");
	});

  $(".pkindall").mouseover(function(){
    var Id=$(this).attr("pid");
        $(".shadow1[sid="+Id+"]").css("-moz-transform","skew(-10deg)");
        $(".shadow2[sid="+Id+"]").css("-moz-transform","skew(10deg)");
        $(".shadow3[sid="+Id+"]").css("-moz-transform","skew(10deg)");
        $(".shadow4[sid="+Id+"]").css("-moz-transform","skew(-10deg)");

        $(".ppicture[psid="+Id+"]").css("-moz-transform","scale(1.1)");
  });
  $(".pkindall").mouseleave(function(){
    var Id=$(this).attr("pid");
        $(".shadow1[sid="+Id+"]").css("-moz-transform","");
        $(".shadow2[sid="+Id+"]").css("-moz-transform","");
        $(".shadow3[sid="+Id+"]").css("-moz-transform","");
        $(".shadow4[sid="+Id+"]").css("-moz-transform","");

         $(".ppicture[psid="+Id+"]").css("-moz-transform","");
  });


	/*焦点图*/ 
  $("#focusebtn1").click(function(){
    number=number-2;
    focuse();
  });
  $("#focusebtn2").click(function(){
    focuse();
  });
  $(".focuseround").click(function(){
       number=$(this).attr("rid");
       focuse();
  });


  $("#round1").css("background-color","#ddd");
   timer=setInterval("focuse()",2000);


  $(".logo").mouseover(function(){
  	$(".logoin").animate({top:"-68px"},200);
  });
   $(".logo").mouseleave(function(){
	$(".logoin").animate({top:"0px"},200);
  });
  

   $(".topmenuLi").mouseover(function(){
  	$(this).find(".topmenuA").css("color","#fff");
  });
    $(".topmenuLi").mouseleave(function(){
  	$(this).find(".topmenuA").css("color","");
  });
   
    $(".topmenuLi").hover(function(){
    	$(this).find(".menusonul").show();
    	$(this).find(".menusonul").animate({opacity:"1"},1000);
    },function(){
    	$(this).find(".menusonul").hide();
    	$(this).find(".menusonul").animate({opacity:"0.1"},200);
    });
});

var timer
var number=2;
function focuse(){
  if(number>5){
    number=1;
   }

   if(number<1){
    number=5;
   }
	  $("#foupicture").attr("src","Images/jiaodian/"+number+".jpg");
    $(".focuseround[rid="+number+"]").css("background-color","#ddd");
    $(".focuseround[rid!="+number+"]").css("background-color","");
	 number++;


	 
}