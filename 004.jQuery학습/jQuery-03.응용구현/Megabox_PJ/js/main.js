// 메가박스 PJ 메인 JS - main.js
$(function () { //// jQB1 //////////////////

    // 메뉴 a요소 기본이동 막기!
    $(".gnb a,.indic a").click(function (e) {
        e.preventDefault();
    }); ///////////// click ////////////////

    //// GNB메뉴 클릭시 해당 페이지 위치로 이동 애니메이션
    // 이벤트 대상: .gnb li + .indic li
    // 변경 대상: html,body
    $(".gnb li,.indic li").click(function (e) {

        ////// 광스크롤막기 /////////////
        if (psts) return; //돌아가!
        psts = 1; //불허용상태변경!
        setTimeout(() => {
            psts = 0;
        }, 1200);
        // 1.2초애니시간후 허용상태변경 //

        // 0. 클릭된 li순번 구해오기
        let idx = $(this).index();
        //// console.log("순번:" + idx);


        // 1. 하위a요소의 href값 읽어오기
        // let idnm = $("a", this).attr("href");
        // //// console.log("href값:" + idnm);

        // 2. 아이디값에 해당하위 top값 위치구하기
        // top값을 구해서 스크롤 애니메이션 이동에 사용함!
        // let pos = $(idnm).offset().top;
        // offset() 메서드 : 요소의 기본 셋팅 정보를 리턴함
        // - top,left,width,height 등 을 알수 있다!

        // 아이디요소의 위치값을 구해서 이동하면 되지만
        // 최신 제이쿼리 라이브러리가 위치값을 잘못 구해오는
        // 버그가 있으므로 페이지 높이를 기준해서 위치이동을 한다!

        ////////////////////////////////////////////////////
        // 새로운 페이지 위치값 : 윈도우 높이값 * 페이지순번 //
        let pos = $(window).height() * idx;
        //// console.log("위치값:" + pos);
        ///////////////////////////////////////////////////

        // 3. 스크롤 애니메이션으로 페이지 이동하기
        // 세로스크롤 이동속성: scrollTop
        // 참고: 가로스크롤 이동속성: scrollLeft
        // 스크롤 이동대상: html,body
        // -> 범용브라우저에서 사용하는 스크롤대상
        $("html,body").animate({
            scrollTop: pos + "px"
        }, 1200, "easeOutQuint"); //// animate /////


        // 4. 클릭된 li요소에 class="on" 넣기
        $(".gnb li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        $(".indic li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        //다른 형제 li들 class="on" 지움

        // 6. li순번과 pno와 일치하기! /////////////////////
        pno = idx;
        //// console.log("페이지번호:" + pno);


    }); ///////////// click ///////////////



}); ///////////// jQB1 ///////////////////

/////////////////////////////////////////////////
///////// 포스터 네비게이션 관련 기능구현 /////////
/////////////////////////////////////////////////

$(function () { //// jQB2 //////////////////////////

    // 변경대상: .gbx
    let gbx = $(".gbx");

    // 광클금지변수
    let prot = 0; // 1-불허용, 0-허용

    // 자동호출지우기 허용변수
    let autoOK = 1; // 1-허용, 0-불허용

    // 오른쪽 이동버튼 기능을 함수로 만들고 호출
    // 왜? 자동호출도 같은 기능이므로!!!
    let goSlide = () => {
        // 첫번째 요소를 잘라서 맨뒤로 보냄
        gbx.append(gbx.find("img").first());
    }; ///////// goSlide함수 ////////////////

    /// 오른쪽 이동버튼 클릭시 ////////
    $(".rb").click(function () {

        // 광클금지 //////
        if (prot) return;
        prot = 1;
        setTimeout(() => {
            prot = 0; //해제
        }, 400);

        // 자동호출 지우기
        if (autoOK) clearAuto();

        // 이동함수 호출
        goSlide();

        // 하단일 경우 이동버튼 클릭시 동영상 재생!
        if (!autoOK) mvPlay();

        // console.log("지우기호출여부:" + autoOK);

    }); ///////////// click /////////////

    /// 왼쪽 이동버튼 클릭시 /////////
    $(".lb").click(function () {

        // 광클금지 //////
        if (prot) return;
        prot = 1;
        setTimeout(() => {
            prot = 0; //해제
        }, 400);

        // 자동호출 지우기
        if (autoOK) clearAuto();

        // 마지막 요소를 잘라서 맨앞으로 보냄
        gbx.prepend(gbx.find("img").last());

        // 만약 포스터 박스가 아래쪽으로 이동한 경우
        // 즉, autoOK===0 일경우 이미 포스터 이동후 이므로
        // 순번상 0,1,2,3,4 -> 이 중에 2번이 중앙임
        // 중앙에 있는 포스터의 동영상으로 play함!
        if (!autoOK) mvPlay();


        // console.log("지우기호출여부:" + autoOK);

    }); ///////////// click ////////////////

    //// 이동버튼 클릭시 (하단일경우) 동영상 재생하기 ////
    let mvPlay = () => {
        // 1. 가운데 오는 동영상 정보읽기
        let center =
            "mv/" + gbx.find("img").eq(2).attr("data-mv");
        // // console.log(center);
        // 2. 동영상 src 변경하기
        mv.attr("src", center);
        // 3. 동영상 재생하기
        mv.get(0).play();
    }; ////////////// mvPlay 함수 /////////////////////



    // 인터발용변수
    let autoI;

    //// 자동 인터발호출 함수 //////////
    let autoSlide = () => {
        autoI = setInterval(goSlide, 3000);
    }; ////////////// autoSlide함수 /////////

    // 자동 인터발함수 최초호출!
    autoSlide();

    // 타임아웃용변수
    let autoT;

    ///// 자동인터발 지우기 함수 //////////
    let clearAuto = () => {
        // 인터발지우기
        clearInterval(autoI);
        // 타임아웃지우기(쓰나미실행방지)
        clearTimeout(autoT);
        // 타임아웃 설정(일정시간뒤 자동재실행)
        autoT = setTimeout(autoSlide, 5000);
    }; //////////// clearAuto 함수 ///////////


    // 동영상요소
    let mv = $("#mv");

    ////////////////////////////////////////////////////
    //////// 1. 영화포스터 클릭시 영화예고편 보여주기 /////
    // 대상: .gbx img
    $(".gbx img").click(function () {

        // 0. 이미지 포스터 순번
        let idx = $(this).index();
        // console.log("포순:" + idx);

        // 0.1. 보이지 않는 0번째,4번째 포스터는 실행안되게!
        if (idx === 0 || idx === 4) return; // 돌아가!

        // 포스터 순번 1,2,3만 아래로 내려감!

        // 0.2. 위치를 중앙에 오게 하기 위해 ////////

        // 순번이 1일 경우 왼쪽버튼 클릭 트리거!
        if (idx === 1) $(".lb").trigger("click");

        // 순번이 3일 경우 오른쪽버튼 클릭 트리거!
        else if (idx === 3) $(".rb").trigger("click");
        // 트리거 메서드: 선택자.trigger(이벤트명)


        // 1. 영화포스터 네비 작아지게 하단 이동 애니메이션
        $("#gbx").css({
            width: "40%",
            Transform: "translate(-50%, 130%)",
            minWidth: "500px",
            transition: "all .6s ease-in-out"
        }); ////////////// css //////////////

        // 2. 포스터 자동넘기기 완전 지우기(다시실행안함!!!)
        clearInterval(autoI);
        // 혹시 남아 있을 수 있는 타임아웃지우기!
        clearTimeout(autoT);
        // -> 하나더! 이동버튼 클릭시 자동호출지우기 실행안되게
        // autoOK 상태값 0으로 변경하기!!!
        autoOK = 0; // 이래야 버튼 클릭시 호출하지 않는다!
        // console.log("지우기호출여부:" + autoOK);

        // 3. 동영상 재생하기!

        // 3-1. 동영상 변경하기
        // 포스터 이미지에 셋팅된 동영상 정보를 읽어와서 src에 넣는다
        // data-mv 속성명에 동영상 파일명이 셋팅됨
        let mvsrc = "mv/" + $(this).attr("data-mv");
        mv.attr("src", mvsrc);

        // 3-2. 동영상 나타나기
        $("#screen").fadeIn(300);

        // 3-3. 동영상 재생하기
        // 동영상요소.get(0) -> 미디어컬렉션 get(0) 을 꼭사용!
        // 미디어 재생은 play() 메서드
        mv.get(0).play();
        
    }); //////////////// click /////////////////////////


    ////////////////////////////////////////////////
    ////////// video태그 기능 컨트롤 ////////////////
    ////////////////////////////////////////////////

    ////////////////////////////////////////
    // 2. 동영상 컨트롤 기능구현하기 /////////

    // 2-1. 재생/멈춤 기능 //////////////////
    // 2-1-1. 마우스 오버/아웃시 이미지변경하기
    // 대상: .btnpp
    $(".btnpp img").hover(
        function () { // over - 진한 이미지로 변경
            // 이미지 경로 읽어오기
            let csrc = $(this).attr("src");
            // 이미지 경로 변경하기 : .png -> -1.png
            csrc = csrc.replace(".png", "-1.png");
            // console.log(csrc);
            // 이미지 실제로 변경하기
            $(this).attr("src", csrc);
        },
        function () { // out - 원래 이미지로 다시 변경
            // 이미지 경로 읽어오기
            let csrc = $(this).attr("src");
            // 이미지 경로 변경하기 : -1.png -> .png
            csrc = csrc.replace("-1.png", ".png");
            // console.log(csrc);
            // 이미지 실제로 변경하기
            $(this).attr("src", csrc);
        }); /////////// hover ////////////////

        // 2-1-2. 재생/멈춤 기능구현
        // 대상: .btnpp img
        // 원리: 재생상태이면 멈추고 멈춤상태이면 재생한다.
        // 핵심: 동영상 멈춤 상태를 알아낼 수 있다!
        $(".btnpp img").click(function(){
            // 동영상 멈춤상태 알아내기 - paused 속성으로 알아냄
            // 결과: true - 멈춤, false - 멈춤아님
            let paused_sts = mv.get(0).paused;
            // console.log("비디오가 멈췄냐?"+paused_sts);

            // 1. 멈춤아님(false)이면 동영상 멈추기!
            if(!paused_sts){
                // 비디오 멈추기는 pause() 메서드!
                mv.get(0).pause();
                // 멈춤상태이면 진한재생버튼으로 변경!
                $(this).attr("src","images/vbt2-1.png");

            } /////////// if문 /////////////////
            else{
                // 비디오 재생은 play() 메서드!
                mv.get(0).play();
                // 재생상태이면 진한멈춤버튼으로 변경!
                $(this).attr("src","images/vbt1-1.png");

            } ////////// else문 ////////////////

        }); /////////////// click //////////////////////
        ////////////////////////////////////////////////

    // 2-2. 소리남/안남 기능 /////////////////
    // 대상: .btnsnd img
    // 원리: 소리가 나는지 안나는지 상태에 따라 반대로 설정함
    // 핵심: 소리가 안나는지 상태를 알 수 있음!
    $(".btnsnd img").click(function(){

        // 1. 현재 소리가 안나는지 상태 알아오기
        // 동영상 소리 안남여부 속성 -> muted
        // muted는 상태값을 읽어오기 / 상태설정하기 모두 됨!
        let sound = mv.get(0).muted;
        // console.log("소리안나냐?"+sound);

        // 2. 만약 소리가 안나면 나게/ 나면 안나게하기
        mv.get(0).muted = !sound;
        // !sound -> true/false인 sound값을 반대로 넣음

        // 3. 아이콘을 현재 소리 상태로 넣기
        // sound가 true이면 반대로 했으므로 소리남 아이콘!
        if(sound) $(this).attr("src","./images/speaker_blue.png");
        else $(this).attr("src","./images/speaker-mute_blue.png");

    }); //////////// click //////////////////////////
    /////////////////////////////////////////////////

    // 2-3. 재생위치변경 기능(클릭/드래그) ////////////
    
    // 2-3-1. 비디오 현재 진행바 기능(시간경과표시) //////
    // 사용할 이벤트: timeupdate
    //              - 비디오 객체의 시간이 변경될때 발생
    // on(이벤트,함수) 메서드 사용!
    mv.on("timeupdate", function(){

        // 구현목표: 비디오가 재생중일때 진행바가 움직이게 한다
        // 구현원리: 진행바의 진행비율을 %로 나타나야 한다!
        // 계산법: 현재시간 / 전체시간 * 100 -> 백분율(%)

        // 1. 비디오 현재진행 시간 가져오기
        let ctime = mv[0].currentTime;
        // mv[0] === mv.get(0)
        // currentTime 속성 : 비디오의 현재시간
        // console.log("현재시간:"+ctime);

        // 2. 비디오 전체재생시간 가져오기
        let ftime = mv[0].duration;
        // duration 속성: 비디오 전체시간(초)
        // console.log("전체시간:"+ftime);

        // 3. 진행바 변경하기
        // 현재시간이 0일 경우 전체시간이 안나오므로
        // if문으로 이를 막아준다!(부모가 0이면 안된다!)
        // !isNaN(전체시간) -> 숫자면 들어가!
        if(!isNaN(ftime)) {
            // 우리가 구하고자 하는 것은 백분율(%)이다.
            // 계산식: 현재시간 / 전체시간 * 100
            // = ctime / ftime * 100

            // 퍼센트 진행율
            let percent = ctime / ftime * 100;
            // console.log("진행율:"+percent);

            // 진행바의 width를 %값으로 변경!
            $(".tBar").css({
                width: percent + "%"
            }); ///////// css /////////

        } /////////// if문 ////////////////////

    }); //////////////// timeupdate //////////////////
    //////////////////////////////////////////////////

    // 2-3-2. 진행바를 클릭하거나 드래그 하면 타임라인 이동함수 호출

    // 드래그 상태변수 : true는 드래그상태, false는 드래그아님
    let tDrag = false;
    /* 
        [ 드래그란 무엇인가? ]
        - 마우스 왼쪽버튼을 누르고 마우스를 움직이면 드래그다!
        mousedown + mousemove
        - 드래그의 끝은? 마우스 왼쪽버튼을 떼는것!
        mouseup
        - 보통 클릭은 "딸각" 이지만 구분할 수 있다!
        mousedown -> "딸"
        mouseup -> "각"
    */

        /////////////// 드래그시 동영상 시간이동 함수 /////////
        let updateBar = function(x){ // x - 마우스 x 좌표값

            // console.log("x:"+x+" / drag:"+tDrag);

            // 1. 넘겨준 x좌표를 백분율(%)로 변환!(타임바변경위해)
            // 백분율 = x좌표 / .pBar 의 가로 width값 * 100
            let percent  = x / pbar.width() * 100;
            // console.log("이동위치%:"+percent);

            // 2. 타임바 변경하기
            $(".tBar").css({
                width: percent + "%"
            }); //////// css /////////

            // 3. 비디오 시간 변경하기
            // 위에서 구한 백분율(%)을 활용한다!
            // 비디오현재시간(%) = 비디오현재시간/비디오전체시간*100
            // 비디오현재시간 = 비디오현재시간(%)*비디오전체시간/100
            mv[0].currentTime = 
                percent * mv[0].duration / 100;

        };/////////////// updateBar 함수 /////////////////////
        //////////////////////////////////////////////////////


        // 드래그 대상선정: .pBar(진행바 부모)
        let pbar = $(".pBar");

        ///// 마우스 왼쪽버튼을 누를때 : 드래그 시작! ///////////
        pbar.mousedown(function(e){ // e - 이벤트 전달함수

            // 마우스 다운 즉, "딸" 하는 순간 드래그 시작!
            tDrag = true; // 드래그 상태값 변경(true-드래그중)

            // 드래그함수 호출!
            updateBar(e.offsetX);
            // e.offsetX - 현재 클릭된 마우스 포인터 x좌표값!

        }); ///////////// mousedown 함수 /////////////////////

        ///// 마우스 왼쪽버튼을 땔때 : 드래그 끝! ///////////
        pbar.mouseup(function(e){ // e - 이벤트 전달함수

            // 마우스 업 즉, "각" 하는 순간 드래그 끝!
            tDrag = false; // 드래그 상태값 변경(false-드래그끝)

             // 드래그함수 호출!
             updateBar(e.offsetX);
             // e.offsetX - 현재 클릭된 마우스 포인터 x좌표값!

        }); ///////////// mousedown 함수 /////////////////////

        /////// 마우스가 .pBar 위에서 마우스 다운상태로 움직일때 ////
        pbar.mousemove(function(e){

            // 마우스 다운상태 일때만 드래그 함수를 호출!
            // 즉, tDrag가 true일때만 호출!
            if(tDrag) updateBar(e.offsetX);

        }); ////////////// mousemove 함수 /////////////////////////

        ///// 드래그 상태 오작동 막기 위해 mouseleave일때 처리////
        pbar.mouseleave(function(){
            // 드래그 상태값 변경!
            tDrag = false;
        }); ////////////////// mouseleave 함수 /////////////////





    // 2-4. 소리크기변경 기능
    // 2-5. 플레이어 축소/확대 기능
    // 2-6. 리스트 원상복귀 기능


}); ////////////// jQB2 ///////////////////////////
//////////////////////////////////////////////////