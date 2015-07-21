$(function(){
	setdateIn();
	setInterval("setdateIn()",1000);
});
function setdateIn(){
	var curt=new Date();
	var year=curt.getYear();
	var month=curt.getMonth()+1;
	var day=curt.getDate();
	var hour=curt.getHours();
	var min=curt.getMinutes();
	var sec=curt.getSeconds();
	if (year<314) {
		year=1900+year;
	}
	var y1=Math.floor(year/1000);
	var y2=Math.floor((year%1000)/100);
	var y3=Math.floor((year%100)/10);
	var y4=Math.floor(year%10);
	var m1=Math.floor(month/10);
	var m2=Math.floor(month%10);
	var d1=Math.floor(day/10);
	var d2=Math.floor(day%10);
	var h1=Math.floor(hour/10);
	var h2=Math.floor(hour%10);
	var min1=Math.floor(min/10);
	var min2=Math.floor(min%10);
	var s1=Math.floor(sec/10);
	var s2=Math.floor(sec%10);
	$("#y1").css("background-position","0px -"+y1*36+"px");
	$("#y2").css("background-position","0px -"+y2*36+"px");
	$("#y3").css("background-position","0px -"+y3*36+"px");
	$("#y4").css("background-position","0px -"+y4*36+"px");
	$("#m1").css("background-position","0px -"+m1*36+"px");
	$("#m2").css("background-position","0px -"+m2*36+"px");
	$("#d1").css("background-position","0px -"+d1*36+"px");
	$("#d2").css("background-position","0px -"+d2*36+"px");
	$("#h1").css("background-position","0px -"+h1*36+"px");
	$("#h2").css("background-position","0px -"+h2*36+"px");
	$("#min1").css("background-position","0px -"+min1*36+"px");
	$("#min2").css("background-position","0px -"+min2*36+"px");
	$("#s1").css("background-position","0px -"+s1*36+"px");
	$("#s2").css("background-position","0px -"+s2*36+"px");

}