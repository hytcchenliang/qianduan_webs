$(function(){



	/*mainpanelbottom点击*/
	$(".mainpanelbottomline").click(function(){
		$(".mainpanelbottomline").removeClass("mainpanelbottomlineclick");
		$(".mainpanelbottomicon01").css({"background":"","background-size":""});
		$(".mainpanelbottomicon02").css({"background":"","background-size":""});
		$(".mainpanelbottomicon03").css({"background":"","background-size":""});
		$(".mainpanelbottomicon04").css({"background":"","background-size":""});
	});
	$(".mainpanelbottomline1").click(function(){
		$(".mainptoptilte").html("会话");
		$(".chatting").show();
		$(".find").hide();
		$(".contact").hide();
		$(".setting").hide();
		$(this).addClass("mainpanelbottomlineclick");
		$(".mainpanelbottomicon01").css({"background":"url('css/images/tab_icon_conversation_selected.png')","background-size":"34px 34px"});
	});
	$(".mainpanelbottomline2").click(function(){
		$(".mainptoptilte").html("联系人");
		$(".mainptoptilte").addClass("mainptopsetilte");
		$(".mainptopsearch").show();
		$(".chatting").hide();
		$(".find").hide();
		$(".contact").show();
		$(".setting").hide();
		$(this).addClass("mainpanelbottomlineclick");
		$(".mainpanelbottomicon02").css({"background":"url('css/images/tab_icon_contact_selected.png')","background-size":"34px 34px"});
	});
	$(".mainpanelbottomline3").click(function(){
		$(".mainptoptilte").html("发现");
		$(".chatting").hide();
		$(".find").show();
		$(".setting").hide();
		$(".contact").hide();
		$(this).addClass("mainpanelbottomlineclick");
		$(".mainpanelbottomicon03").css({"background":"url('css/images/tab_icon_plugin_selected.png')","background-size":"34px 34px"});
	});
	$(".mainpanelbottomline4").click(function(){
		$(".mainptoptilte").html("设置");
		$(".chatting").hide();
		$(".find").hide();
		$(".setting").show();
		$(".contact").hide();
		$(this).addClass("mainpanelbottomlineclick");
		$(".mainpanelbottomicon04").css({"background":"url('css/images/tab_icon_setup_selected.png')","background-size":"34px 34px"});
		$(".statemore").click(function(){
			var isopen=$(".stateul").attr("isopen");
			/*alert(isopen);*/
			if (isopen=="false") {
				$(".stateul").show();
			$(".stateul li").click(function(){
				var state=$(this).find("a");
				var classname=state.attr("class")
				/*alert(classname);*/
				$(".set1default").removeClass("state1");
				$(".set1default").removeClass("state2");
				$(".set1default").removeClass("state3");
				$(".set1default").removeClass("state4");
				$(".set1default").removeClass("state5");
				$(".set1default").removeClass("state6");
				$(".set1default").removeClass("state7");
				$(".set1default").addClass(classname);
			});
			$(".stateul").attr("isopen","true");
			}
			else{
				$(".stateul").hide();
				$(".stateul").attr("isopen","false");
			}
			
			
		});

	});
	/*联系人*/
	$("#menberTab li").click(function(){
		$("#menberTab li").removeClass("active");
		$(this).addClass("active");
	});
	$(".containline").click(function(){
	/*	alert("d");*/
		var dowm=$(this).attr("dowm");
		/*alert(dowm);*/
		if (dowm=="true") {
			$(this).attr("dowm","up");
			$(this).css("background-image","url('css/images/open_arrow_fire.png')");
		}
		else{
			$(this).css("background-image","url('css/images/open_arrow.png')");
			$(this).attr("dowm","true");
		}
		
	});
	$(".conbotline").click(function(){
		var isshow=$(this).next().attr("isshow");
		/*alert(isshow);*/
		if(isshow=="false") {
			/*alert("d");*/
			$(this).next().css("display","block");
			$(this).next().attr("isshow","true");
		}
		else
		{
			$(this).next().css("display","none");
			$(this).next().attr("isshow","false");	
		}
		
	});
	$("#goodfriend").click(function(){
		$(".groupbox").hide();
		$(".containbottom").show();
	});
	$("#group").click(function(){
		$(".groupbox").show();
		$(".containbottom").hide();

	});
	$("#taolun").click(function(){
		$(".groupbox").hide();
		$(".containbottom").hide();
		$(".taolunbot").show();
		$(".taolunbot").css("background","#808080");
	});
	/*搜索联系人*/
	/* var projects = [
      {
        value: "滄海遺珠",
        label: "滄海遺珠",
        desc: "世间女子，当如花木兰。",
        icon: "css/images/headimg1.jpg"
      },
      {
        value: "雪做的花冠",
        label: "雪做的花冠",
        desc: "你若盛开，清风自来～～",
        icon: "css/images/headimg2.jpg"
      },
      {
        value: "Ai莪9寵ωǒ",
        label: "Ai莪9寵ωǒ",
        desc: "不倾国，不倾城。",
        icon: "css/images/headimg3.jpg"
      }
    ];
	$(".seafinput").autocomplete({
		 minLength: 0,
      	source: projects,
      focus: function( event, ui ) {
        $( "#project" ).val( ui.item.label );
        return false;
      },
      select: function( event, ui ) {
        $( "#nickname" ).val( ui.item.label );
        $( "#project-id" ).val( ui.item.value );
        $( "#msgtext" ).html( ui.item.desc );
        $( "#project-icon" ).attr( "src", "css/images/" + ui.item.icon );
 
        return false;
      }
    })
    .autocomplete( "instance" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<a>" + item.label + "<br>" + item.desc + "</a>" )
        .appendTo( ul );
    };
	});*/
	/*发现*/
	$(".tenxun").click(function(){

		var url="G:/huaiweishixun/webs/QQ/index.html";
		
		window.location.href=url;
	});


	/*设置*/
	$(".settingmess").click(function(){
		$(".messageset").show();
	});

	$(document).on("click","#messtshezhi",function(){
		$(".messageset").hide();
	});
	$(".messbbtn").click(function(){
		var cir=$(this).find(".messbcir");
		cir.toggleClass("messbcirright");
	});

	$(".setaboutQQ").click(function(){
		var zhan=$(this).attr("zhankai");
		var dowmimg=$(this).find(".setmes");
		if (zhan=="no") {
			$(".aboutQQ").show();
			$(this).attr("zhankai","yes");
			dowmimg.css("background-image","url('css/images/open_arrow_fire.png')");
		}
		else{
			$(".aboutQQ").hide();
			$(this).attr("zhankai","no");
			dowmimg.css("background-image","");
		}
	});

	/*更换背景图片*/
	$(".changepre").hover(function(){
		$(this).css("background-position","-2px -42px");
	},function(){
		$(this).css("background-position","");
	});
	$(".changenext").hover(function(){
		$(this).css("background-position","-25px -41.5px");
	},function(){
		$(this).css("background-position","");
	});
	var index=2;
	$(".changepre").click(function(){

		if (index==1) {
			index=7;
			$("body").css("background-image","url('css/images/"+index+".jpg')");
		}
		else{
			index--;
			$("body").css("background-image","url('css/images/"+index+".jpg')");
			
		}
	});
	$(".changenext").click(function(){
		
		if (index==7) {
			index=1;
			$("body").css("background-image","url('css/images/"+index+".jpg')");
		}
		else{
			/*alert(index);*/
			index++;
			$("body").css("background-image","url('css/images/"+index+".jpg')");
			
		}
	});



	/*对话框*/
	$(".friendInfo").click(function(){
		var open=$(this).attr("isopen");
		var friendid=$(this).attr("id");
		/* alert(friendid);*/
		/*var suvid=friendid.substring(10);
		alert(suvid);*/
		var Talktop=Math.floor(Math.random()*100+10);
		// alert(Talktop);
		var Talkleft=Math.floor(Math.random()*200+400);
		// alert(Talktop);
		var html="";
		var nickname=$(this).find(".nickname").html();
		
		//alert(open);
		if (open=="true") {
			$(".talkbox").css("z-index","15");
			$("#talkbox"+friendid).css("z-index","16");
			return;
		}
		var headobj=$(this).find("a");
			/*alert(headobj);*/
		var headimg=headobj.css("background-image");
		$("#chatmin"+friendid).remove();
		/*alert(headimg);*/
		
		/*alert(nickname);*/
		
	/*	 talkbox*/
		

		html+='	<div class="talkbox" id=talkbox'+friendid+'>';
		html+='		<div class="talk">';
		html+='			<div class="talkboxtop">';
		html+='				<div class="talltopfriendid">'+friendid+'</div>';
		html+='				<div class="talktopdropdowm">';
		html+='					<span class="talktopdropdowmpic"></span>';
		html+='				</div>';
		html+='				<div class="talktopnickname">';
		html+='					<span class="talktopnntxt">';
		html+='					'+nickname+'';
		html+='					</span>';
		html+='				</div>';
		html+='				<div class="talktopmin">';
		html+='					<span class="talktopclosetxt">最小化</span>';
		html+='				</div>';
		html+='				<div class="talktopclose">';
		html+='					<span close='+friendid+' class="talktopclosetxt" >关闭</span>';
		html+='				</div>';
		html+='			</div>';
		html+='			<div class="talkboxmiddle">';
		html+='			</div>';
		html+='			<div class="talkboxbottom">';
		html+='				<div class="talkbottombq">';
		html+='					<span class="talkboxbpic"></span>';
		html+='				</div>';
		html+='				<div class="talktopnickname talkboxbtxtbox">';
		html+='					<input id="textarea" type="text" />';
		html+='				</div>';
		html+='				<div class="talkboxbsend">';
		html+='					<span class="sendtext">发送</span>';
		html+='				</div>';
		html+='			</div>';
		html+='	</div>';
		html+='	<div class="talkboxfaceimg" view="no">';
		html+='			<div class="faceimgtop">';
		html+='				<ul class="faceimg1">';
		html+='					<li class="faceItem item1">';
		html+='						<i title="微笑" txt="[微笑]"class="facetxt"></i>';
		html+='						<i title="撇嘴" txt="[撇嘴]"class="facetxt"></i>';
		html+='						<i title="色" txt="[色]"class="facetxt"></i>';
		html+='						<i title="发呆" txt="[发呆]"class="facetxt"></i>';
		html+='						<i title="得意"txt="[得意]"class="facetxt"></i>';
		html+='						<i title="流泪" txt="[流泪]"class="facetxt"></i>';
		html+='						<i title="害羞" txt="[害羞]"class="facetxt"></i>';
		html+='						<i title="闭嘴" txt="[闭嘴]"class="facetxt"></i>';
		html+='						<i title="睡" txt="[睡]"class="facetxt"></i>';
		html+='						<i title="大哭" txt="[大哭]"class="facetxt"></i>';
		html+='						<i title="尴尬" txt="[尴尬]"class="facetxt"></i>';
		html+='						<i title="发怒" txt="[发怒]"class="facetxt"></i>';
		html+='						<i title="调皮" txt="[调皮]"class="facetxt"></i>';
		html+='						<i title="呲牙" txt="[呲牙]"class="facetxt"></i>';
		html+='						<i title="惊讶" txt="[惊讶]"class="facetxt"></i>';
		html+='						<i title="难过" txt="[难过]"class="facetxt"></i>';
		html+='						<i title="酷" txt="[酷]"class="facetxt"></i>';
		html+='						<i title="冷汗" txt="[冷汗]"class="facetxt"></i>';
		html+='						<i title="抓狂" txt="[抓狂]"class="facetxt"></i>';
		html+='						<i title="吐" txt="[吐]"class="facetxt"></i>';
		html+='						<i title="delkey" class="del"></i>';
		html+='					</li>';
		html+='					<li class="faceItem faceItem2 item2">';
		html+='						<i title="偷笑" txt="[偷笑]"class="facetxt"></i>';
		html+='						<i title="可爱" txt="[可爱]"class="facetxt"></i>';
		html+='						<i title="白眼" txt="[白眼]"class="facetxt"></i>';
		html+='						<i title="傲慢"txt="[傲慢]"class="facetxt"></i>';
		html+='						<i title="饥饿"txt="[饥饿]"class="facetxt"></i>';
		html+='						<i title="困"txt="[困]"class="facetxt"></i>';
		html+='						<i title="惊恐"txt="[惊恐]"class="facetxt"></i>';
		html+='						<i title="流汗"txt="[流汗]"class="facetxt"></i>';
		html+='						<i title="憨笑"txt="[憨笑]"class="facetxt"></i>';
		html+='						<i title="大兵"txt="[大兵]"class="facetxt"></i>';
		html+='						<i title="奋斗"txt="[奋斗]"class="facetxt"></i>';
		html+='						<i title="咒骂"txt="[咒骂]"class="facetxt"></i>';
		html+='						<i title="疑问"txt="[疑问]"class="facetxt"></i>';
		html+='						<i title="嘘"txt="[嘘]"class="facetxt"></i>';
		html+='						<i title="晕"txt="[晕]"class="facetxt"></i>';
		html+='						<i title="折磨"txt="[折磨]"class="facetxt"></i>';
		html+='						<i title="衰"txt="[衰]"class="facetxt"></i>';
		html+='						<i title="骷髅"txt="[骷髅]"class="facetxt"></i>';
		html+='						<i title="敲打"txt="[敲打]"class="facetxt"></i>';
		html+='						<i title="再见"txt="[再见]"class="facetxt"></i>';
		html+='						<i title="delkey" class="del"></i>';
		html+='					</li>';
		html+='					<li class="faceItem faceItem2 item3">';
		html+='						<i title="擦汗" txt="[擦汗]"class="facetxt"></i>';
		html+='						<i title="抠鼻"txt="[抠鼻]"class="facetxt"></i>';
		html+='						<i title="鼓掌"txt="[鼓掌]"class="facetxt"></i>';
		html+='						<i title="糗大了"txt="[糗大了]"class="facetxt"></i>';
		html+='						<i title="坏笑"txt="[坏笑]"class="facetxt"></i>';
		html+='						<i title="左哼哼"txt="[左哼哼]"class="facetxt"></i>';
		html+='						<i title="右哼哼"txt="[右哼哼]"class="facetxt"></i>';
		html+='						<i title="哈欠"txt="[哈欠]"class="facetxt"></i>';
		html+='						<i title="鄙视"txt="[鄙视]"class="facetxt"></i>';
		html+='						<i title="委屈"txt="[委屈]"class="facetxt"></i>';
		html+='						<i title="快哭了"txt="[快哭了]"class="facetxt"></i>';
		html+='						<i title="阴险"txt="[阴险]"class="facetxt"></i>';
		html+='						<i title="亲亲"txt="[亲亲]"class="facetxt"></i>';
		html+='						<i title="吓"txt="[吓]"class="facetxt"></i>';
		html+='						<i title="可怜"txt="[可怜]"class="facetxt"></i>';
		html+='						<i title="菜刀"txt="[菜刀]"class="facetxt"></i>';
		html+='						<i title="西瓜"txt="[西瓜]"class="facetxt"></i>';
		html+='						<i title="啤酒"txt="[啤酒]"class="facetxt"></i>';
		html+='						<i title="篮球"txt="[篮球]"class="facetxt"></i>';
		html+='						<i title="乒乓"txt="[乒乓]"class="facetxt"></i>';
		html+='						<i title="delKey" class="del"></i>';
		html+='					</li>';
		html+='					<li class="faceItem faceItem2 item4">';
		html+='						<i title="咖啡"txt="[咖啡]"class="facetxt"></i>';
		html+='						<i title="饭"txt="[饭]"class="facetxt"></i>';
		html+='						<i title="猪头"txt="[猪头]"class="facetxt"></i>';
		html+='						<i title="玫瑰"txt="[玫瑰]"></i>';
		html+='						<i title="凋谢"txt="[凋谢]"class="facetxt"></i>';
		html+='						<i title="示爱"txt="[示爱]"class="facetxt"></i>';
		html+='						<i title="爱心"txt="[爱心]"class="facetxt"></i>';
		html+='						<i title="心碎"txt="[心碎]"class="facetxt"></i>';
		html+='						<i title="蛋糕"txt="[蛋糕]"class="facetxt"></i>';
		html+='						<i title="闪电"txt="[闪电]"class="facetxt"></i>';
		html+='						<i title="炸弹"txt="[炸弹]"class="facetxt"></i>';
		html+='						<i title="刀"txt="[刀]"class="facetxt"></i>';
		html+='						<i title="足球"txt="[足球]"class="facetxt"></i>';
		html+='						<i title="瓢虫"txt="[瓢虫]"class="facetxt"></i>';
		html+='						<i title="便便"txt="[便便]"class="facetxt"></i>';
		html+='						<i title="月亮"txt="[月亮]"class="facetxt"></i>';
		html+='						<i title="太阳"txt="[太阳]"class="facetxt"></i>';
		html+='						<i title="礼物"txt="[礼物]"class="facetxt"></i>';
		html+='						<i title="拥抱"txt="[拥抱]"class="facetxt"></i>';
		html+='						<i title="强"txt="[强]"class="facetxt"></i>';
		html+='						<i title="delKey" class="del"></i>';
		html+='					</li>';
		html+='					<li class="faceItem faceItem2 item5">';
		html+='						<i title="弱"txt="[弱]"class="facetxt"></i>';
		html+='						<i title="握手"txt="[握手]"class="facetxt"></i>';
		html+='						<i title="胜利"txt="[胜利]"class="facetxt"></i>';
		html+='						<i title="抱拳"txt="[抱拳]"class="facetxt"></i>';
		html+='						<i title="勾引"txt="[勾引]"class="facetxt"></i>';
		html+='						<i title="拳头"txt="[拳头]"class="facetxt"></i>';
		html+='						<i title="差劲"txt="[差劲]"class="facetxt"></i>';
		html+='						<i title="爱你"txt="[爱你]"class="facetxt"></i>';
		html+='						<i title="NO"txt="[NO]"class="facetxt"></i>';
		html+='						<i title="OK"txt="[OK]"class="facetxt"></i>';
		html+='						<i title="爱情"txt="[爱情]"class="facetxt"></i>';
		html+='						<i title="飞吻"txt="[飞吻]"class="facetxt"></i>';
		html+='						<i title="跳跳"txt="[跳跳]"class="facetxt"></i>';
		html+='						<i title="发抖"txt="[发抖]"class="facetxt"></i>';
		html+='						<i title="怄火"txt="[怄火]"class="facetxt"></i>';
		html+='						<i title="转圈"txt="[转圈]"class="facetxt"></i>';
		html+='						<i title="磕头"txt="[磕头]"class="facetxt"></i>';
		html+='						<i title="回头"txt="[回头]"class="facetxt"></i>';
		html+='						<i title="跳绳"txt="[跳绳]"class="facetxt"></i>';
		html+='						<i title="挥手"txt="[挥手]"class="facetxt"></i>';
		html+='						<i title="delKey" class="del"></i>';
		html+='					</li>';
		html+='					<li class="faceItem faceItem2 item6">';
		html+='						<i title="激动"txt="[激动]"class="facetxt"></i>';
		html+='						<i title="街舞"txt="[街舞]"class="facetxt"></i>';
		html+='						<i title="献吻"txt="[献吻]"class="facetxt"></i>';
		html+='						<i title="左太极"txt="[左太极]"class="facetxt"></i>';
		html+='						<i title="右太极"txt="[右太极]"class="facetxt"></i>';
		html+='						<i title="双喜"txt="[双喜]"class="facetxt"></i>';
		html+='						<i title="鞭炮"txt="[鞭炮]"class="facetxt"></i>';
		html+='						<i title="灯笼"txt="[灯笼]"class="facetxt"></i>';
		html+='						<i title="发财"txt="[发财]"class="facetxt"></i>';
		html+='						<i title="K歌"txt="[K歌]"class="facetxt"></i>';
		html+='						<i title="购物"txt="[购物]"class="facetxt"></i>';
		html+='						<i title="邮件"txt="[邮件]" class="facetxt"></i>';
		html+='						<i title="帅"txt="[帅]" class="facetxt"></i>';
		html+='						<i title="喝彩"txt="[喝彩]" class="facetxt"></i>';
		html+='						<i title="祈祷"txt="[祈祷]" class="facetxt"></i>';
		html+='						<i title="爆筋"txt="[爆筋]" class="facetxt"></i>';
		html+='						<i title="棒棒糖"txt="[棒棒糖]" class="facetxt"></i>';
		html+='						<i title="喝奶"txt="[喝奶]" class="facetxt"></i>';
		html+='						<i title="下面"txt="[下面]" class="facetxt"></i>';
		html+='						<i title="香蕉"txt="[香蕉]" class="facetxt"></i>';
		html+='						<i title="delKey" class="del"></i>';
		html+='					</li>';
		html+='				</ul>';
		html+='			</div>';
		html+='			<ul class="btnfwarp">';
		html+='				<li class="btnfwarpnor btnf1 btnfselected"></li>';
		html+='				<li class="btnfwarpnor btnf2"></li>';
		html+='				<li class="btnfwarpnor btnf3"></li>';
		html+='				<li class="btnfwarpnor btnf4"></li>';
		html+='				<li class="btnfwarpnor btnf5"></li>';

		html+='				<li class="btnfwarpnor btnf6"></li>';
		html+='			</ul>';

		html+='</div>';
		/*talkboxjs代码*/
		$("body").append(html);
		$(".talkbox").click(function(){
			$(".talkbox").css("z-index","15");
			$(this).css("z-index","16");
		});
		$("#talkbox"+friendid).css({"top":Talktop+"px","left":Talkleft+"px"});
		$(this).attr("isopen","true");
		
		$(".talkbox").draggable({handle:".talkboxtop"});
		
		/*发送*/
		$(".talkboxbsend").click(function(){
			
			var curtime=new Date();
			var hour=curtime.getHours();
			var min=curtime.getMinutes();
			var time=hour+":"+min;
			var thistxtarea=$(this).prev().find("#textarea");
			var txt=$(this).prev().find("#textarea").val();
			/*alert(txt);*/
			/*var txt=$("#textarea").val();*/
			var length=thistxtarea.val().length;
			
			/*alert(txt);*/
			for (var i=0;i<length;i++) {
			txt=txt.replace("[微笑]","<img src='images/14.gif' />");
			txt=txt.replace("[撇嘴]","<img src='images/1.gif' />");
			txt=txt.replace("[色]","<img src='images/2.gif' />");
			txt=txt.replace("[发呆]","<img src='images/3.gif' />");
			txt=txt.replace("[得意]","<img src='images/4.gif' />");
			txt=txt.replace("[流泪]","<img src='images/5.gif' />");
			txt=txt.replace("[害羞]","<img src='images/6.gif' />");
			txt=txt.replace("[闭嘴]","<img src='images/7.gif' />");
			txt=txt.replace("[睡]","<img src='images/8.gif' />");
			txt=txt.replace("[大哭]","<img src='images/9.gif' />");
			txt=txt.replace("[尴尬]","<img src='images/10.gif' />");
			txt=txt.replace("[发怒]","<img src='images/11.gif' />");
			txt=txt.replace("[调皮]","<img src='images/12.gif' />");
			txt=txt.replace("[呲牙]","<img src='images/13.gif' />");
			txt=txt.replace("[惊讶]","<img src='images/0.gif' />");
			txt=txt.replace("[难过]","<img src='images/15.gif' />");
			txt=txt.replace("[酷]","<img src='images/16.gif' />");
			txt=txt.replace("[冷汗]","<img src='images/96.gif' />");
			txt=txt.replace("[抓狂]","<img src='images/18.gif' />");
			txt=txt.replace("[吐]","<img src='images/19.gif' />");
			txt=txt.replace("[偷笑]","<img src='images/20.gif' />");
			txt=txt.replace("[可爱]","<img src='images/21.gif' />");
			txt=txt.replace("[白眼]","<img src='images/22.gif' />");
			txt=txt.replace("[傲慢]","<img src='images/23.gif' />");
			txt=txt.replace("[饥饿]","<img src='images/24.gif' />");
			txt=txt.replace("[困]","<img src='images/25.gif' />");
			txt=txt.replace("[惊恐]","<img src='images/26.gif' />");
			txt=txt.replace("[流汗]","<img src='images/27.gif' />");
			txt=txt.replace("[憨笑]","<img src='images/28.gif' />");
			txt=txt.replace("[大兵]","<img src='images/29.gif' />");
			txt=txt.replace("[奋斗]","<img src='images/30.gif' />");
			txt=txt.replace("[咒骂]","<img src='images/31.gif' />");
			txt=txt.replace("[疑问]","<img src='images/32.gif' />");
			txt=txt.replace("[嘘]","<img src='images/33.gif' />");
			txt=txt.replace("[晕]","<img src='images/34.gif' />");
			txt=txt.replace("[折磨]","<img src='images/35.gif' />");
			txt=txt.replace("[衰]","<img src='images/36.gif' />");
			txt=txt.replace("[骷髅]","<img src='images/37.gif' />");
			txt=txt.replace("[敲打]","<img src='images/38.gif' />");
			txt=txt.replace("[再见]","<img src='images/39.gif' />");
			txt=txt.replace("[擦汗]","<img src='images/97.gif' />");
			txt=txt.replace("[抠鼻]","<img src='images/98.gif' />");
			txt=txt.replace("[鼓掌]","<img src='images/99.gif' />");
			txt=txt.replace("[糗大了]","<img src='images/100.gif' />");
			txt=txt.replace("[坏笑]","<img src='images/101.gif' />");
			txt=txt.replace("[左哼哼]","<img src='images/102.gif' />");
			txt=txt.replace("[右哼哼]","<img src='images/103.gif' />");
			txt=txt.replace("[哈欠]","<img src='images/104.gif' />");
			txt=txt.replace("[鄙视]","<img src='images/105.gif' />");
			txt=txt.replace("[委屈]","<img src='images/106.gif' />");
			txt=txt.replace("[快哭了]","<img src='images/107.gif' />");
			txt=txt.replace("[阴险]","<img src='images/108.gif' />");
			txt=txt.replace("[亲亲]","<img src='images/109.gif' />");
			txt=txt.replace("[吓]","<img src='images/110.gif' />");
			txt=txt.replace("[可怜]","<img src='images/111.gif' />");
			txt=txt.replace("[菜刀]","<img src='images/112.gif' />");
			txt=txt.replace("[西瓜]","<img src='images/89.gif' />");
			txt=txt.replace("[啤酒]","<img src='images/113.gif' />");
			txt=txt.replace("[篮球]","<img src='images/114.gif' />");
			txt=txt.replace("[乒乓]","<img src='images/115.gif' />");
			txt=txt.replace("[咖啡]","<img src='images/60.gif' />");
			txt=txt.replace("[饭]","<img src='images/61.gif' />");
			txt=txt.replace("[猪头]","<img src='images/46.gif' />");
			txt=txt.replace("[玫瑰]","<img src='images/63.gif' />");
			txt=txt.replace("[凋谢]","<img src='images/64.gif' />");
			txt=txt.replace("[示爱]","<img src='images/116.gif' />");
			txt=txt.replace("[爱心]","<img src='images/66.gif' />");
			txt=txt.replace("[心碎]","<img src='images/67.gif' />");
			txt=txt.replace("[蛋糕]","<img src='images/53.gif' />");
			txt=txt.replace("[闪电]","<img src='images/54.gif' />");
			txt=txt.replace("[炸弹]","<img src='images/55.gif' />");
			txt=txt.replace("[刀]","<img src='images/56.gif' />");
			txt=txt.replace("[足球]","<img src='images/57.gif' />");
			txt=txt.replace("[瓢虫]","<img src='images/117.gif' />");
			txt=txt.replace("[便便]","<img src='images/59.gif' />");
			txt=txt.replace("[月亮]","<img src='images/75.gif' />");
			txt=txt.replace("[太阳]","<img src='images/74.gif' />");
			txt=txt.replace("[礼物]","<img src='images/69.gif' />");
			txt=txt.replace("[拥抱]","<img src='images/49.gif' />");
			txt=txt.replace("[强]","<img src='images/76.gif' />");
			txt=txt.replace("[弱]","<img src='images/77.gif' />");
			txt=txt.replace("[握手]","<img src='images/78.gif' />");
			txt=txt.replace("[胜利]","<img src='images/79.gif' />");
			txt=txt.replace("[抱拳]","<img src='images/118.gif' />");
			txt=txt.replace("[勾引]","<img src='images/119.gif' />");
			txt=txt.replace("[拳头]","<img src='images/120.gif' />");
			txt=txt.replace("[差劲]","<img src='images/121.gif' />");
			txt=txt.replace("[爱你]","<img src='images/122.gif' />");
			txt=txt.replace("[NO]","<img src='images/123.gif' />");
			txt=txt.replace("[OK]","<img src='images/124.gif' />");
			txt=txt.replace("[爱情]","<img src='images/42.gif' />");
			txt=txt.replace("[飞吻]","<img src='images/85.gif' />");
			txt=txt.replace("[跳跳]","<img src='images/43.gif' />");
			txt=txt.replace("[发抖]","<img src='images/41.gif' />");
			txt=txt.replace("[怄火]","<img src='images/86.gif' />");
			txt=txt.replace("[转圈]","<img src='images/125.gif' />");
			txt=txt.replace("[磕头]","<img src='images/126.gif' />");
			txt=txt.replace("[回头]","<img src='images/127.gif' />");
			txt=txt.replace("[跳绳]","<img src='images/128.gif' />");
			txt=txt.replace("[挥手]","<img src='images/129.gif' />");
			txt=txt.replace("[激动]","<img src='images/130.gif' />");
			txt=txt.replace("[街舞]","<img src='images/131.gif' />");
			txt=txt.replace("[献吻]","<img src='images/132.gif' />");
			txt=txt.replace("[左太极]","<img src='images/133.gif' />");
			txt=txt.replace("[右太极]","<img src='images/134.gif' />");
			txt=txt.replace("[双喜]","<img src='images/136.gif' />");
			txt=txt.replace("[鞭炮]","<img src='images/137.gif' />");
			txt=txt.replace("[灯笼]","<img src='images/138.gif' />");
			txt=txt.replace("[发财]","<img src='images/139.gif' />");
			txt=txt.replace("[K歌]","<img src='images/140.gif' />");
			txt=txt.replace("[购物]","<img src='images/141.gif' />");
			txt=txt.replace("[邮件]","<img src='images/142.gif' />");
			txt=txt.replace("[帅]","<img src='images/143.gif' />");
			txt=txt.replace("[喝彩]","<img src='images/144.gif' />");
			txt=txt.replace("[祈祷]","<img src='images/145.gif' />");
			txt=txt.replace("[爆筋]","<img src='images/146.gif' />");
			txt=txt.replace("[棒棒糖]","<img src='images/147.gif' />");
			txt=txt.replace("[喝奶]","<img src='images/148.gif' />");
			txt=txt.replace("[下面]","<img src='images/149.gif' />");
			txt=txt.replace("[香蕉]","<img src='images/150.gif' />");
			}
						
			var text='';
			text+='				<div class="talkcontent">';
			text+='					<div class="talktime">';
			text+='						<span id="chattime">'+time+'</span>';
			text+='					</div>';
			text+='					<a href="" class="talkclicon">';					
			text+='					</a>';
			text+='					<div class="talkcleft">';
			text+='						<span class="talkclname">'+nickname+'</span>';
			text+='						<p class="talkcltxt">'+txt+'</p>';
			text+='					</div>';
			text+='				</div>';
			/*alert(text);*/
			var boxmiddle=$(this).parent().parent().find(".talkboxmiddle");
			/*alert(boxmiddle);*/
			boxmiddle.append(text);
			/*$(".talkboxmiddle").append(text);*/
			$(".talkclicon").css("background-image",""+headimg+"");
			$(".talkboxmiddle").animate({scrollTop:5000},0);
		});
		
		/*<!-- talkbox底部 -->*/
	$(".btnf1").click(
		function(){
			$(".btnfwarpnor").removeClass("btnfselected");
			$(this).addClass("btnfselected");
			$(".faceimgtop").css("background-image","url('css/images/qqimage_01.jpg')");
			$(".item1").show();
			$(".item2").hide();
			$(".item3").hide();
			$(".item4").hide();
			$(".item5").hide();
			$(".item6").hide();

		});
	
	$(".btnf2").click(function(){
		$(".btnfwarpnor").removeClass("btnfselected");
		$(this).addClass("btnfselected");
		$(".faceimgtop").css("background-image","url('css/images/qqimage_02.jpg')");
		$(".item2").show();
		$(".item1").hide();
		$(".item3").hide();
		$(".item4").hide();
		$(".item5").hide();
		$(".item6").hide();

	});
	$(".btnf3").click(function(){
		$(".btnfwarpnor").removeClass("btnfselected");
		$(this).addClass("btnfselected");
		$(".faceimgtop").css("background-image","url('css/images/qqimage_03.jpg')");
		$(".item3").show();
		$(".item2").hide();
		$(".item1").hide();
		$(".item4").hide();
		$(".item5").hide();
		$(".item6").hide();
	});
	$(".btnf4").click(function(){
		$(".btnfwarpnor").removeClass("btnfselected");
		$(this).addClass("btnfselected");
		$(".faceimgtop").css("background-image","url('css/images/qqimage_04.jpg')");
		$(".item4").show();
		$(".item2").hide();
		$(".item3").hide();
		$(".item1").hide();
		$(".item5").hide();
		$(".item6").hide();
	});
	$(".btnf5").click(function(){
		$(".btnfwarpnor").removeClass("btnfselected");
		$(this).addClass("btnfselected");
		$(".faceimgtop").css("background-image","url('css/images/qqimage_05.jpg')");
		$(".item5").show();
		$(".item2").hide();
		$(".item3").hide();
		$(".item4").hide();
		$(".item1").hide();
		$(".item6").hide();
	});
	$(".btnf6").click(function(){
		$(".btnfwarpnor").removeClass("btnfselected");
		$(this).addClass("btnfselected");
		$(".faceimgtop").css("background-image","url('css/images/qqimage_06.jpg')");
		$(".item6").show();
		$(".item2").hide();
		$(".item3").hide();
		$(".item4").hide();
		$(".item5").hide();
		$(".item1").hide();
	});
	$(".faceItem i").hover(function(){
		$(this).css("border","1px solid #4175A6");
	},function(){
		$(this).css("border","0px");
	});
	/*var facelen=4;*/
	$(".facetxt").click(function(){
		var facetxt=$(this).attr("txt");
		var nowtxtarea=$(this).parent().parent().parent().parent().prev().find("#textarea");
		var text=nowtxtarea.val();
		var all=text+facetxt;
		var facelen=$(this).attr("txt").length;
		/*alert(facelen);*/
		/*alert(facetxt);*/
		nowtxtarea.val(all);
		
	});
	$(".del").click(function(){
		/*alert(facelen);*/
					var txt=$("#textarea").val();
					var len=$("#textarea").val().length-4;
					var subtxt=txt.substring(0,len);
					/*alert(len);*/
					/*alert(subtxt);*/
					$("#textarea").val(subtxt);
				});



	});

	$(document).on("click",".talkboxbpic",function(){
			/*var scroll=$(".talkboxmiddle").scrollTop();
			alert(scroll);*/

			var talkbox=$(this).parent().parent().parent().parent();
			var talk=$(this).parent().parent().parent();
			var bqpic=$(this).parent().parent().parent().next();
			var talkmiddle=$(this).parent().parent().prev();
			var view=bqpic.attr("view");
			/*alert("d");*/
			/*alert(view);*/
			if (view=="no") {
				bqpic.show();
				bqpic.attr("view","yes");
				talk.css("height","206px");
				talkbox.css("height","206px");
				talkmiddle.css("height","116px");
				talkmiddle.animate({scrollTop:5000},0);
				
			}
			else{
				bqpic.hide();
				bqpic.attr("view","no");
				talk.css("height","");
				talkbox.css("height","");
				talkmiddle.css("height","");
			}

	});
	/*最小化*/
		$(document).on("click",".talktopmin",function(){
			var friendminid=$(this).parent().find(".talltopfriendid").html();
			/*alert(friendminid);*/
			var addhtml="";
			var minfridendid=friendminid.substring(11);
			var minimg="friendheadimg"+minfridendid;
			addhtml+='<div class="chatminpic '+minimg+'" id="chatmin'+friendminid+'">';
			addhtml+=' <div class="chatminid">'
			addhtml+='0'+minfridendid+'';
			addhtml+='	</div>'
			addhtml+='</div>';
			$(".chatmin").append(addhtml);
			$(this).parent().parent().parent().hide();
			$("#"+friendminid).attr("isopen","false");
		});

		/*最小化变成最大化*/
		$(document).on("click",".chatminpic",function(){
			var max=$(this).find(".chatminid").html();
			/*alert("#talkboxfriendInfo"+max);*/
			$("#talkboxfriendInfo"+max).show();
			$("#chatminfriendInfo"+max).remove();
		});
		/*关闭*/
		$(document).on("click",".talktopclosetxt",function(){
			var closeid=$(this).attr("close");
			/*alert(closeid);*/
			$("#"+closeid).attr("isopen","false");
			$("#talkbox"+closeid).remove();
			/*alert("#chatmin"+closeid);*/
			$("#chatmin"+closeid).remove();

		});
});