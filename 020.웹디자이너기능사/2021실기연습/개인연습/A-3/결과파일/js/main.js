// 웹디자인 기능사 A-3_페이드형 - main.js



// 슬라이드 구현하기

// 상하용
setInterval(function(){
    var tg = document.querySelector(".slide");
    tg.style.top = "-100%",
    tg.style.transition = ".6s";
    
    setTimeout(function(){
        var first = tg.querySelectorAll("li")[0];
        tg.appendChild(first);
        tg.style.top = "0",
        tg.style.transiton = "none";
    },600);
},3000);


// 좌우용
setInterval(function(){
    var tg = document.querySelector(".slide");
    tg.style.left = "-100%",
    tg.style.transition = ".6s";

    setTimeout(function(){
        var first = tg.querySelectorAll("li")[0];
        tg.appendChild(first);
        tg.style.left = "0";
        tg.style.transition = "none";
    },600);
},3000);


// 페이드형
var snum = 0;
setInterval(function(){
    var snum = tg.querySelectorAll(".slide li");
    tg[snum].classList.remove("on");

    snum++;
    if(snum===3) snum=0;
    tg[snum].classList.add("on");
},3000);


// 공통 js

// 탭창
// 함수명 : tap
function tap(a1,a2){
    var tc = document.querySelectorAll(".tc>li");
    var tm = document.querySelectorAll(".tm>li");

    tc[a1].classList.add("on");
    tm[a1].classList.add("on");
    tc[a2].classList.remove("on");
    tm[a2].classList.remove("on");
};


// 팝업
// 함수명 : pop
function pop(sts){
    var pop = document.querySelector(".pop");

    pop.style.display = sts;
};
