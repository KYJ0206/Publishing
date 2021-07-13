// 웹디기능사 개인연습 A-2 - main.js

// 슬라이드 구현
setInterval(function(){
    console.log("슬라이드 확인");
    var tg = document.querySelector(".slide");
    tg.style.top = "-100%",
    tg.style.transition = ".6s";

    setTimeout(function(){
        console.log("타임아웃 확인");
        var first = tg.querySelectorAll("li")[0];
        tg.appendChild(first);
        tg.style.top = "0",
        tg.style.transition = "none";
    },600);
},3000);

// 탭창 
// 함수명 : tap
function tap(a1,a2){
    console.log("탭창확인"+a1,a2);
    var tm = document.querySelectorAll(".tm>li");
    var tc = document.querySelectorAll(".tc>li");

    tm[a1].classList.add("on");
    tc[a1].classList.add("on");
    tm[a2].classList.remove("on");
    tc[a2].classList.remove("on");
} // 탭창 함수

// 팝업창
// 함수명 : pop
function pop(sts){
    console.log("탭창확인"+sts);
    var pop = document.querySelector(".pop");
    pop.style.display = sts;
} // 팝업창 함수