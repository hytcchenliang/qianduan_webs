$(function(){
	/*window.onscroll=function(){
		if (document.body.scrollTop>200)
		{
			$(".conleft").animate({top:"200px"},1000);
		}
		if (document.body.scrollTop<300)
		{
			$(".conleft").animate({top:"60px"},300);
		}
	}*/
	/*<!-- 左边内容 -->*/
	$(".conlsetop").click(function(){
		var show=$(this).attr("show");
		if (show=="no") {
			$(this).hide();
			$(".conlsegroup").slideDown(500);
			$(this).attr("show","yes");
		}
		else{
			$(this).attr("show","no");
		}	
	});
	$(document).on("click",".conlsebomsq",function(){
		$(".conlsegroup").slideUp(500);
		$(".conlsetop").attr("show","no");
		/*$(".conlsetop").css("transition","1s");*/
		 $(".conlsetop").toggle("slow");
	});
	/*<!-- 微博内容 -->*/
	/*发布*/
	$(".conctbrfb").click(function(){
		fabu();
	});

	/*赞*/
	/*var zanshu=$(".concwbrbrzcount").html();
	if (zanshu=="0") {
		$(".concwbrbrztxt").hide();
	}
	else{
		$(".concwbrbrztxt").show();
	}*/
	$(document).on("click",".concwbrbrlizan",function(){
		var thiszan=$(this).find(".concwbrbrlink");
		var zan=thiszan.attr("iszan");
		var count=thiszan.find(".concwbrbrztxt").find(".concwbrbrzcount").attr("count");
		/*alert(count);*/
		if (zan=="no") {
			count++;
			/*alert(count);*/
			if(count>0)
			{
				$(this).find(".concwbrbrztxt").removeClass("concwbrbrztxtzero");
			}
			thiszan.find(".concwbrbrzan").css("background-position","-100px 0");
			thiszan.attr("iszan","yes");
			thiszan.attr("title","取消赞");
			thiszan.find(".concwbrbrzcount").attr("count",count);
			thiszan.find(".concwbrbrzcount").html(count);
		}
		else{
			count--;
			if (count==0)
			{
				$(this).find(".concwbrbrztxt").addClass("concwbrbrztxtzero");
			}
			thiszan.find(".concwbrbrzan").css("background-position","");
			thiszan.attr("iszan","no");
			thiszan.attr("title","赞");
			thiszan.find(".concwbrbrzcount").attr("count",count);
			thiszan.find(".concwbrbrzcount").html(count);
		}
	});
	/*转发*/
	$(document).on("click",".concwbrbrlzf",function(){
		var zfitem=$(this).parent().parent().parent().parent().parent().parent();
		$(".menban").show();
		zfitem.find(".contrans").show();
	});
	/*转发按钮*/
	$(document).on("click",".concwbrzfbtn",function(){
		var zfbtn=$(this).parent().parent().parent().parent();
		/*var txt=zfbtn.find(".concwbrttitle").html();*/
		/*alert(zfbtn);*/
		zhuanfa(zfbtn);
		$(".menban").hide();
		$(".contrans").hide();
	});
	$(document).on("click",".contclose",function(){
		$(".menban").hide();
		$(".contrans").hide();
	});
	/*收藏*/
	$(document).on("click",".concwbrbrlisc",function(){
		var sc=$(this).find(".concwbrbrlsc").attr("issc");
		if (sc=="no") {
			$(this).find(".concwbrbrlsc").html("取消收藏");
			$(this).find(".concwbrbrlsc").attr("issc","yes");
		}
		else{
			$(this).find(".concwbrbrlsc").html("收藏");
			$(this).find(".concwbrbrlsc").attr("issc","no");
		}

	});
	/*评论*/
	$(document).on("click",".concwbrbrlipl",function(){
		var pl=$(this).parent().parent().parent().next();
		var ispl=$(this).attr("ispl");
		/*alert(ispl);*/
		if ( ispl=="no") {
			pl.show();
			$(this).attr("ispl","yes");
		}
		else{
			pl.hide();
			$(this).attr("ispl","no");
		}
		
	});
	/*评论按钮*/
	$(document).on("click",".concwbrplbtn",function(){
		var com=$(this).parent();

		comment(com);
	});
	/*回复*/
	$(document).on("click",".concwbrbrlhf",function(){
		var hfpar=$(this).parent().parent().parent().parent();
		
		/*alert(hfname);*/
		var hfitem=$(this).parent().parent().parent().parent().find(".concwbrhf");
		hfitem.show();
		/*hf(hfpar);*/
	});
	$(document).on("click",".concwbrhfbtn",function(){
		var com=$(this).parent();
		com.parent().hide();
		hf(com);
	});
});

function fabu(){
	var fbcon=$(".concttarea").val();
	var headimg=$(".conrheadpic").attr("src");
	var username=$(".conrnicname").html();
	/*alert(fbcon);*/
	/*alert(headimg);
	alert(username);*/
	var curtime=new Date();
	var hour=curtime.getHours();
	var min=curtime.getMinutes();
	var time=hour+":"+min;
	/*alert(time);*/
	var fabuhtml="";
	fabuhtml+='							<div class="concwbitem">';
	fabuhtml+='								<div class="concwblogo">';
	fabuhtml+='									<img src="'+headimg+'" class="concwbimg">';
	fabuhtml+='								</div>';
	fabuhtml+='								<div class="concwbright">';
	fabuhtml+='									<div class="concwbrtop">';
	fabuhtml+='										<a href="" class="concwbrttitle">';
	fabuhtml+='                							'+username+'';
	fabuhtml+='	                					</a>';
	fabuhtml+='									</div>';
	fabuhtml+='									<div class="concwbrmiddle">';
	fabuhtml+='										'+fbcon+'';
	fabuhtml+='									</div>';
	fabuhtml+='									<div class="concwbrbom">';
	fabuhtml+='										<div class="concwbrbleft">';
	fabuhtml+='											<a href="" class="concwbrbltime">今天 '+time+'</a>';
	fabuhtml+='											<span class="concwbrblfrom">来自</span>';
	fabuhtml+='											<a href="" class="concwbrblftxt">微博 weibo.com</a>';
	fabuhtml+='										</div>';
	fabuhtml+='										<div class="concwbrbright">';
	fabuhtml+='											<ul class="concwbrbrul">';
	fabuhtml+='												<li class="concwbrbrli concwbrbrlipl">';
	fabuhtml+='													<a  class="concwbrbrlink concwbrbrlpl" title="评论">评论</a>';
	fabuhtml+='												</li>';
	fabuhtml+='												<li class="concwbrbrli concwbrbrliline">|</li>';
	fabuhtml+='												<li class="concwbrbrli concwbrbrlisc">';
	fabuhtml+='													<a  class="concwbrbrlink concwbrbrlsc" title="收藏">收藏</a>';
	fabuhtml+='												</li>';
	fabuhtml+='												<li class="concwbrbrli concwbrbrliline">|</li>';
	fabuhtml+='												<li class="concwbrbrli concwbrbrlizf">';
	fabuhtml+='													<a  class="concwbrbrlink concwbrbrlzf" title="转发" zfshu="">转发</a>';
	fabuhtml+='												</li>';
	fabuhtml+='												<li class="concwbrbrli concwbrbrliline">|</li>';
	fabuhtml+='												<li class="concwbrbrli concwbrbrlizan">';
	fabuhtml+='													<a  class="concwbrbrlink" iszan="no" title="赞">';
	fabuhtml+='														<i class="concwbrbrzan" ></i>';
	fabuhtml+='														<span class="concwbrbrztxt concwbrbrztxtzero">(';
	fabuhtml+='															<span class="concwbrbrztxt concwbrbrzcount " count="0">';
	fabuhtml+='															0';
	fabuhtml+='															</span>';
	fabuhtml+='															)';
	fabuhtml+='													</span>';
	fabuhtml+='													</a>';
	fabuhtml+='												</li>';
	fabuhtml+='											</ul>';
	fabuhtml+='										</div>';
	fabuhtml+='									</div>';
	fabuhtml+='									<div class="concwbrpl">';
	fabuhtml+='										<div class="WB_arrow">';
	fabuhtml+='											<em class="S_line1_c">◆</em>';
	fabuhtml+='											<span class="S_bg4_c">◆</span>';
	fabuhtml+='										</div>';
	fabuhtml+='										<div class="concwbrplinbox">';
	fabuhtml+='											<input type="text" class="concwbrplin"/>';
	fabuhtml+='										</div>';
	fabuhtml+='										<div class="concwbrplbom">';
	fabuhtml+='											<div class="concwbrplbleft">';
	fabuhtml+='												<span class="concwbrplbbq"></span>';
	fabuhtml+='												<input type="checkbox" class="concwbrplbcheck">';
	fabuhtml+='												<span class="concwbrplbtxt">同时转发到我的微博 ';
	fabuhtml+='												</span>';
	fabuhtml+='											</div>';
	fabuhtml+='											<div class="concwbrplbtn">评论</div>';
	fabuhtml+='										</div>';
	fabuhtml+='									</div>';
	fabuhtml+='								</div>';
	fabuhtml+='								<div class="contrans">';
	fabuhtml+='									<div class="contranstop">';
	fabuhtml+='										<span class="conttxt ">转发微博</span>';
	fabuhtml+='										<span class="contclose"></span>';
	fabuhtml+='									</div>';
	fabuhtml+='									<div class="contransbom">';
	fabuhtml+='										<div class="contmyan">';
	fabuhtml+='											<a href="" class="conttxt conttxtlink">@讲句良心话</a>';
	fabuhtml+='											<span class="contgeyan">';
	fabuhtml+='												每一个坚强的人，都有一颗柔软的心，摆正心态，温柔自相随。 </span>';
	fabuhtml+='										</div>';
	fabuhtml+='										<div class="conttebox">';
	fabuhtml+='											<textarea class="contte"></textarea>';
	fabuhtml+='										</div>';
	fabuhtml+='										<div class="contbom">';
	fabuhtml+='											<div class="concwbrplbleft">';
	fabuhtml+='												<span class="concwbrplbbq"></span>';
	fabuhtml+='												<input type="checkbox" class="concwbrplbcheck">';
	fabuhtml+='												<span class="concwbrplbtxt">同时转发到我的微博 ';
	fabuhtml+='												</span>';
	fabuhtml+='											</div>';
	fabuhtml+='											<div class="concwbrzfbtn">转发</div>';
	fabuhtml+='										</div>';
	fabuhtml+='									</div>';
	fabuhtml+='								</div>';
	fabuhtml+='						</div>';
	$(".concwbcox").prepend(fabuhtml);
}
function comment(ele){
	var plcon=ele.prev().find(".concwbrplin").val();
	/*alert(plcon);*/
	var headimg=$(".conrheadpic").attr("src");
	var username=$(".conrnicname").html();
	var plhtml="";
	plhtml+='										<div class="concwbrcom">';
	plhtml+='											<div class="concwbrcomheadimg">';
	plhtml+='												<img src="'+headimg+'" class="concwbrcomhi">';
	plhtml+='											</div>';
	plhtml+='											<div class="concwbrcomright">';
	plhtml+='												<div class="concwbrcomrtop">';
	plhtml+='													<a href="" class="concwbrcomname">'+username+'</a>';
	plhtml+='													<span class="concwbrcomtxt">: '+plcon+'</span>';
	plhtml+='												</div>';
	plhtml+='												<div class="concwbrcomrbom">';
	plhtml+='													<ul class="concwbrcomrul">';
	plhtml+='														<li class="concwbrbrli concwbrbrlidel">';
	plhtml+='															<a  class="concwbrbrlink concwbrbrldel" title="删除">';
	plhtml+='																删除</a>';
	plhtml+='														</li>';
	plhtml+='														<li class="concwbrbrli concwbrbrliline">|</li>';
	plhtml+='														<li class="concwbrbrli concwbrbrlizan">';
	plhtml+='															<a  class="concwbrbrlink" iszan="no" title="赞">';
	plhtml+='																<i class="concwbrbrzan" ></i>';
	plhtml+='															</a>';
	plhtml+='														</li>';
	plhtml+='														<li class="concwbrbrli concwbrbrliline">|</li>';
	plhtml+='														<li class="concwbrbrli concwbrbrlihf">';
	plhtml+='															<a  class="concwbrbrlink concwbrbrlhf" title="回复">回复';
	plhtml+='															</a>';
	plhtml+='														</li>';
	plhtml+='													</ul>';
	plhtml+='												</div>';
	plhtml+='												<div class="concwbrhf">';
	plhtml+='													<div class="hf_arrow">';
	plhtml+='														<em class="S_line1_hf">◆</em>';
	plhtml+='														<span class="S_bg4_hf">◆</span>';
	plhtml+='													</div>';
	plhtml+='													<div class="concwbrplinbox concwbrhfinbox">';
	plhtml+='														<input type="text" class="concwbrplin concwbrhfin" value="回复@'+username+'："/>';
	plhtml+='													</div>';
	plhtml+='													<div class="concwbrplbom concwbrhfbom">';
	plhtml+='														<div class="concwbrplbleft">';
	plhtml+='															<span class="concwbrplbbq"></span>';
	plhtml+='															<input type="checkbox" class="concwbrplbcheck">';
	plhtml+='															<span class="concwbrplbtxt">';
	plhtml+='																同时转发到我的微博 ';
	plhtml+='															</span>';
	plhtml+='														</div>';
	plhtml+='														<div class="concwbrplbtn concwbrhfbtn">评论</div>';
	plhtml+='													</div>';
	plhtml+='												</div>';
	plhtml+='											</div>';
	plhtml+='										</div>';
	ele.parent().append(plhtml);
}
function zhuanfa(zf){
	var curtime=new Date();
	var hour=curtime.getHours();
	var min=curtime.getMinutes();
	var t=hour+":"+min;
	var zftxt=zf.find(".contte").val();
	/*alert(zftxt);*/
	var zftitle=zf.find(".concwbrttitle").html();
	var zfmiddle=zf.find(".concwbrmiddle").html();
	// alert("zfmiddle");
	var zfbom=zf.find(".concwbrbom").html();
	/*alert(zftitle);*/
	var zfhtml="";
	zfhtml+='								<div class="concwbitem">';
	zfhtml+='									<div class="concwblogo">';
	zfhtml+='										<img src="images/headpic.jpg" class="concwbimg">';
	zfhtml+='									</div>';
	zfhtml+='									<div class="concwbright">';
	zfhtml+='										<div class="concwbrtop concwbrzftop">';
	zfhtml+='											<a href="" class="concwbrttitle">';
	zfhtml+='		                						云外遗落';
	zfhtml+='		                					</a>';
	zfhtml+='											<span class="concwbrzftxt">'+zftxt+'</span>';
	zfhtml+='										</div>';
	zfhtml+='										<div class="concwbrzfbom">';
	zfhtml+='											<div class="zf_arrow">';
	zfhtml+='												<em class="S_line1_b">◆</em>';
	zfhtml+='												<span class="S_bg4_b">◆</span>';
	zfhtml+='											</div>';
	zfhtml+='											<div class="concwbrzfbtitle">';
	zfhtml+='												<span class="concwbrzfbttxt">@'+zftitle+'</span>';
	zfhtml+='												<div class="concwbrzfbtcon"></div>';
	zfhtml+='											</div>';
	zfhtml+='											<div class="concwbrzfbmiddel">'+zfmiddle+'';
	zfhtml+='											</div>';
	zfhtml+='											<div class="concwbrzfbbom">'+zfbom+'';
	zfhtml+='											</div>';
	zfhtml+='										</div>';
	zfhtml+='									</div>';
	zfhtml+='									<div class="concwbrnewbom">';
	zfhtml+='												<div class="concwbrbleft">';
	zfhtml+='													<a href="" class="concwbrbltime">今天 '+t+'</a>';
	zfhtml+='													<span class="concwbrblfrom">来自</span>';
	zfhtml+='													<a href="" class="concwbrblftxt">百度浏览器</a>';
	zfhtml+='												</div>';
	zfhtml+='												<div class="concwbrbright">';
	zfhtml+='													<ul class="concwbrbrul">';
	zfhtml+='														<li class="concwbrbrli concwbrbrlipl">';
	zfhtml+='															<a  class="concwbrbrlink concwbrbrlpl" title="评论">评论';
	zfhtml+='															</a>';
	zfhtml+='														</li>';
	zfhtml+='														<li class="concwbrbrli concwbrbrliline">|</li>';
	zfhtml+='														<li class="concwbrbrli concwbrbrlisc">';
	zfhtml+='															<a  class="concwbrbrlink concwbrbrlsc" title="收藏" issc="no">收藏</a>';
	zfhtml+='														</li>';
	zfhtml+='														<li class="concwbrbrli concwbrbrliline">|</li>';
	zfhtml+='														<li class="concwbrbrli concwbrbrlizf">';
	zfhtml+='															<a  class="concwbrbrlink concwbrbrlzf" title="转发">转发</a>';
	zfhtml+='															<span class="concwbrbrztxt concwbrbrzftxt">(	<span class="concwbrbrztxt concwbrbrzfcount" zfshu="10">10</span>)</span>';
	zfhtml+='														</li>';
	zfhtml+='														<li class="concwbrbrli concwbrbrliline">|</li>';
	zfhtml+='														<li class="concwbrbrli concwbrbrlizan">';
	zfhtml+='															<a  class="concwbrbrlink" iszan="no" title="赞"><i class="concwbrbrzan" ></i><span class="concwbrbrztxt">(<span class="concwbrbrztxt concwbrbrzcount" count="0">0</span>)</span></a>';
	zfhtml+='														</li>';
	zfhtml+='													</ul>';
	zfhtml+='												</div>';
	zfhtml+='											</div>';
	zfhtml+='								</div>';
	zfhtml+='							</div>';
	$(".concwbcox").prepend(zfhtml);
}
function hf(ele){
	var plcon=ele.prev().find(".concwbrhfin").val();
	
	var headimg=$(".conrheadpic").attr("src");
	var username=$(".conrnicname").html();
	var plhtml="";
	plhtml+='										<div class="concwbrcom">';
	plhtml+='											<div class="concwbrcomheadimg">';
	plhtml+='												<img src="'+headimg+'" class="concwbrcomhi">';
	plhtml+='											</div>';
	plhtml+='											<div class="concwbrcomright">';
	plhtml+='												<div class="concwbrcomrtop">';
	plhtml+='													<a href="" class="concwbrcomname">'+username+'</a>';
	plhtml+='													<span class="concwbrcomtxt">: '+plcon+'</span>';
	plhtml+='												</div>';
	plhtml+='												<div class="concwbrcomrbom">';
	plhtml+='													<ul class="concwbrcomrul">';
	plhtml+='														<li class="concwbrbrli concwbrbrlidel">';
	plhtml+='															<a  class="concwbrbrlink concwbrbrldel" title="删除">';
	plhtml+='																删除</a>';
	plhtml+='														</li>';
	plhtml+='														<li class="concwbrbrli concwbrbrliline">|</li>';
	plhtml+='														<li class="concwbrbrli concwbrbrlizan">';
	plhtml+='															<a  class="concwbrbrlink" iszan="no" title="赞">';
	plhtml+='																<i class="concwbrbrzan" ></i>';
	plhtml+='															</a>';
	plhtml+='														</li>';
	plhtml+='														<li class="concwbrbrli concwbrbrliline">|</li>';
	plhtml+='														<li class="concwbrbrli concwbrbrlihf">';
	plhtml+='															<a  class="concwbrbrlink concwbrbrlhf" title="回复">回复';
	plhtml+='															</a>';
	plhtml+='														</li>';
	plhtml+='													</ul>';
	plhtml+='												</div>';
	plhtml+='												<div class="concwbrhf">';
	plhtml+='													<div class="hf_arrow">';
	plhtml+='														<em class="S_line1_hf">◆</em>';
	plhtml+='														<span class="S_bg4_hf">◆</span>';
	plhtml+='													</div>';
	plhtml+='													<div class="concwbrplinbox concwbrhfinbox">';
	plhtml+='														<input type="text" class="concwbrplin concwbrhfin" value="回复@'+username+'："/>';
	plhtml+='													</div>';
	plhtml+='													<div class="concwbrplbom concwbrhfbom">';
	plhtml+='														<div class="concwbrplbleft">';
	plhtml+='															<span class="concwbrplbbq"></span>';
	plhtml+='															<input type="checkbox" class="concwbrplbcheck">';
	plhtml+='															<span class="concwbrplbtxt">';
	plhtml+='																同时转发到我的微博 ';
	plhtml+='															</span>';
	plhtml+='														</div>';
	plhtml+='														<div class="concwbrplbtn concwbrhfbtn">评论</div>';
	plhtml+='													</div>';
	plhtml+='												</div>';
	plhtml+='											</div>';
	plhtml+='										</div>';
	ele.parent().parent().parent().parent().append(plhtml);
}

	