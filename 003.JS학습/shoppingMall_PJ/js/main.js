// 쇼핑몰 PJ 메인 JS - main.js

/////////// html로드구역 /////////////////////
// load 이벤트 / DOMContentLoaded 이벤트
window.addEventListener("load",function(){

    // 1. 로드구역 실행확인
    console.log("로딩완료!");

    // 2. 슬라이드번호
    var snum = 0;
    /* snum*-100 -> 0, -100, -200, -300, -400 */
    // -100%는 슬라이드 이동의 기본 단위임!
    // 따라서 여기에 몇배 곱하기로 슬라이드를 이동한다!
    // 0부터 시작하는 이유는 첫번째 슬라이드가 left:0 이기때문!

    // 3. 변경대상
    // 3-1.대상1 : #slide
    var slide = document.querySelector("#slide");
    // 3-2.대상2 : .indic li
    let indic = document.querySelectorAll(".indic li");
    // 순번은 .item(순번) / [순번]


    /*///////////////////////////////////////
        함수명: goSlide
        기능: 슬라이드 이동 및 블릿변경하기
    *////////////////////////////////////////
    let goSlide = function(){

        // 1.호출확인
        console.log("나야나!");

        // 2.슬라이드이동
        // 대상: #slide -> slide변수에 할당!
        slide.style.left = (snum*-100) + "%";
        slide.style.transition = "left .8s ease-in-out";

        // 3.블릿변경하기
        // 3-1.초기화(모두 on빼기)
        for(let x of indic){
            x.classList.remove("on");
            //console.log("돌아!");
        } //// for문/////////

        // for of문:
        // 배열이나 컬렉션을 변수에 담고
        // 그 개수만큼 자동으로 돌아주는 for문!
        // 형식: for(변수 of 배열/컬렉션){}
        // -> for문 앞에 선언된 변수는 배열/컬렉션 자신임(하나씩!)

        // 3-2.해당순번 블릿li에 class="on"넣기
        indic[snum].classList.add("on");

    };//////////// goSlide함수 ////////////////
    ///////////////////////////////////////////


    // 광클금지변수
    let prot = 0;//(0-허용/1-불허용)

    // 4. 슬라이드 오른쪽 이동버튼 셋업
    document.querySelector(".ab2").onclick = 
    function(){

        //// 광클금지설정 //////////////////
        if(prot) return;//돌아가!
        prot=1;//불허용상태!
        setTimeout(function(){prot=0;},800);
        // 0.8초후 허용! ////////////////////



        // 1. 호출확인
        console.log("나,오른쪽!");
        
        // 2. 변경대상 : #slide -> 바깥에 변수 slide

        // 3. 슬라이드 번호 증가하기!
        snum++;//1씩증가
        // 한계값설정(끝번호보다 커지면 처음으로 가기 또는 고정!)
        //if(snum === 5) snum = 4; // 끝번호 고정!
        if(snum === 5) snum = 0; // 처음으로 가기!

        console.log("슬번:"+snum);

        // 4. 슬라이드이동 함수호출
        goSlide();


    };/////// click이벤트 함수 ///////////////

    // 5. 슬라이드 왼쪽 이동버튼 셋업
    document.querySelector(".ab1").onclick = 
    function(){
        
        //// 광클금지설정 //////////////////
        if(prot) return;//돌아가!
        prot=1;//불허용상태!
        setTimeout(function(){prot=0;},800);
        // 0.8초후 허용! ////////////////////

        // 1. 호출확인
        console.log("나,왼쪽!");
        
        // 2. 변경대상 : #slide -> 바깥에 변수 slide

        // 3. 슬라이드 번호 감소하기!
        snum--;//1씩감소
        // 한계값설정(첫번호보다 작아지면 끝으로 가기 또는 고정!)
        //if(snum === -1) snum = 0; // 첫번호 고정!
        if(snum === -1) snum = 4; // 끝으로 가기!

        console.log("슬번:"+snum);

        // 4. 슬라이드이동 함수호출
        goSlide();


    };/////// click이벤트 함수 ///////////////




});////////// 로드구역 ////////////////////////
