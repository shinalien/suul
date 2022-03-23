var count=3;
var current=0;
var position;
setInterval(function(){
if(current<count-1){current++;}
else{current=0;}
position=current*(-1920)+"px";
$("#total").animate({left:position},1500)
},3000);



$(document).ready(function(){
    $(".gnb").mouseenter(function(){
    $(".lnb").stop().slideDown("slow");
    $(".gnb").mouseleave(function(){
    $(".lnb").stop().slideUp("slow");
    });
    });
    });