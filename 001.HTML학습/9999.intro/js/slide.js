// 슬라이드 JS - slide.js
console.log("연결확인");

///////////////////////////
//  슬라이드 기능 구현하기///
///////////////////////////
// 페이드 효과 넘기기

// 슬라이드 순번변수
var snum = 0;



// 제이쿼리 코드블록 : 슬라이드 ///////////
$(function(){ // jQB /////////////////////

    // 1. 슬라잉드배너 기능구현 ////////
    // 대상1: 슬라이드박스 .slide li
    var sld = $(".slide1 li");

    var snum = 0;

    /*/////////////////////////////////////////
        함수명: goSlide
        기능: 슬라이드 이동 및 블릿변경
    *//////////////////////////////////////////
    // 할당형 익명함수!
    var goSlide = function(){
        // 1.확인
        // console.log("슬라이드함수");

        // 2. 해당순번 li 슬라이드에 클래스 "on"넣기(나머지는 빼기)
        sld.eq(snum).addClass("on").siblings().removeClass("on");

    }; ///////////// goSlide함수 ///////////////
    ////////////////////////////////////////////

    // 광클금지상태변수(버튼클릭시 사용)
    let prot = 0;// 0-허용, 1-불허용



    // 1-1. 오른쪽 버튼 클릭시 다음배너 나오기 /////////
    // 대상: .rb
    $(".rb").click(function(){


        //// 광클금지설정 //////////////////
        if(prot) return;//값이1이면 돌아가!
        prot = 1;//불허용!
        setTimeout(() => {prot = 0;}, 800);

        // 확인
        // console.log("오른쪽이동!");

        // 자동실행 지우기!
        clearAuto();

        // 1. 슬라이드 순번증가 //////////////////////////
        snum++;
        if(snum === sld.length) snum = 0;
        // console.log("슬라이드개수:"+sld.length);
        // console.log("슬라이드번호:"+snum);

        // 2. 슬라이드 이동함수 호출!
        goSlide();
        
    }); /////////// click /////////////////



    // 1-2. 왼쪽 버튼 클릭시 이전배너 나오기 /////////////
    // 대상: .lb
    $(".lb").click(function(){

        //// 광클금지설정 //////////////////
        if(prot) return;//값이1이면 돌아가!
        prot = 1;//불허용!
        setTimeout(() => {prot = 0;}, 800);

        // 확인
        // console.log("왼쪽이동!");

        // 자동실행 지우기!
        clearAuto();

        // 1. 슬라이드 순번감소 //////////////////////////
        snum--;
        if(snum === -1) snum = sld.length-1;//개수-1=마지막순번
        // console.log("슬라이드개수:"+sld.length);
        // console.log("슬라이드번호:"+snum);

        // 2. 슬라이드 이동함수 호출!
        goSlide();

    }); /////////// click ///////////////////////




    // 인터발용 변수
    var autoI;
    /*/////////////////////////////////////
        함수명: autoSlide
        기능: 슬라이드 자동호출 셋팅
    *//////////////////////////////////////
    var autoSlide = function(){
        // 1.확인
        console.log("자동호출!");

        // 2.인터발셋팅
        autoI = setInterval(function(){

            // 2-1. 기존snum값 1씩증가
            snum++;

            // 2-2. 한계수 체크(다시 처음으로)
            if(snum===sld.length) snum = 0;

            // 2-3. 슬라이드 함수 호출!
            goSlide();

        },3000); //// 인터발함수 ///////

    }; ///////// autoSlide함수 /////////////
    ////////////////////////////////////////




    // 최초 인터발실행 
    autoSlide();

    /// 타임아웃용 변수
    var autoT;
    /*/////////////////////////////////////
        함수명: clearAuto
        기능: 슬라이드 자동호출 인터발지우기
    *//////////////////////////////////////
    var clearAuto = function(){
        // 1. 확인
        // console.log("인터발지우기!");

        // 2. 인터발지우기
        clearInterval(autoI);

        // 3. 실행쓰나미 방지를 위해 타임아웃 지우기!
        clearTimeout(autoT);

        // 4. 일정시간 후 다시 인터발호출하기!
        autoT = setTimeout(autoSlide,3000);//3초후


    }; ///////// clearAuto함수 /////////////
    ////////////////////////////////////////


}); //////////// jQB /////////////////////
//////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////////////////
// sec2 slide
// 메인 JS - slide.js
console.log("연결확인");

///////////////////////////
//  슬라이드 기능 구현하기///
///////////////////////////
// 페이드 효과 넘기기

// 슬라이드 순번변수
var snum = 0;

setInterval(function(){
    // 1. 호출 여부 확인
    console.log("인터발");

    // 2. 대상선정 : .slide li
    var tg = document.querySelectorAll(".pg2slide li");

    // 3. 이전순번 슬라이드 class="on" 제거하기
    tg[snum].classList.remove("on");

    // 4. 슬라이드 순번 증가하기
    snum++;
    if(snum===3) snum=0;
    // 한계수에서 처음으로!

    // 5. 해당순번만 class="on" 주기!
    tg[snum].classList.add("on");

    

},5000); // 인터발 함수 //