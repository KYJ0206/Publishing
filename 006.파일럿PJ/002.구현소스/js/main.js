// 파일럿 PJ 메인 JS - main.js


$(function () { /// jQB ////////////////////////

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
        console.log("순번:" + idx);
        

        // 1. 하위a요소의 href값 읽어오기
        // let idnm = $("a", this).attr("href");
        // console.log("href값:" + idnm);

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
        console.log("위치값:" + pos);
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
        console.log("페이지번호:" + pno);

    }); ///////////// click ///////////////



    // 햄버거버튼 클릭시 class = "on" 토글
    $(".ham").click(function () {
        
        // 햄버거 버튼에 class="on" 넣기/빼기
        $(this).toggleClass("on");

    }); //////////// click ////////////


    //////////////////////////////////////
    /// 배너 드래그 이동하기 ///////////////
    /// 대상: .slide 
    /// 사용 메서드: draggable() -> 제이쿼리UI
    $(".slide").draggable({
        axis:"x" // x축고정
    }); ///// draggable ///////////

    ///////////////////////////////////////////
    //////// 배너이동 애니메이션 하기 //////////
    ///////////////////////////////////////////
    /// 드래그가 끝난 시점에 대한 이벤트 처리 ///
    // 1. dragstop - 드래그가 끝났을때 발생하는 이벤트
    // 2. touchend - 모바일 기기에서 터치가 끝났을때 발생하는 이벤트
    // -> 터치펀치를 쓸경우 모바일 이벤트로 자동전환하므로 touchend는
    //    사용하지 않는다!
    ///////////////////////////////////////////
    //// 드래그 슬라이드 기능 구현하기 //////////
    // 1. 드래그가 끝난 시점에 각 배너의 width 값의 10%를 기준해서
    //      처음 .slide의 left값이 -100%이므로
    // 2. -110% 보다 작으면 슬라이드를 왼쪽으로 애니메이션 이동한다.
    // 3. -90% 보다 크면 슬라이드를 오른쪽으로 애니메이션 이동한다.
    // 4. -110%와 -90%  사이 범위이면 원래위치인 -100%로 
    //      복귀 애니메이션 이동한다.
    // 단, 실제 left값을 구하면 px단위를 리턴하므로 기준값을
    //      화면의 width px값으로 하면 된다!!!

    // 이벤트 대상: .slide
    // 이벤트 종류: dragstop
    // 사용 메서드: on(이벤트명,함수)
    // 광드래그 막기 : .cover 요소를 보였다가 이동 애니후 숨기기
    let cover = $(".cover");

    $(".slide").on("dragstop",function(){

        // 광드래그 막기
        cover.show();

        // 화면의 width크기
        let winW = $(window).width();
        console.log("윈도우width:"+winW);

        // 알아야할 값! -> 슬라이드의 left값!
        let sLeft = $(this).offset().left;
        // offset().left 는 현재 선택요소의 left값 구하기
        console.log("현재left:"+sLeft);

        // 1. -110% 보다 작으면 슬라이드를 왼쪽으로 애니메이션 이동한다.
        if(sLeft < -winW * 1.1){

            $(this).stop().animate({
                left: -winW * 2 + "px"
            }, 600, "easeOutQuart",
            function(){ // 이동 후 실행
                // 맨앞 슬라이드 맨뒤로 이동!
                $(this).append($(this).find("li").first())
                // css left값을 -100%값 즉 -winW로 복귀!
                .css({
                    left: -winW + "px"
                }); //////// css ///////

                // 커버숨기기
                cover.hide();

            }); //////// animate //////////

        } /////////// if //////////////////

        // 2.-90% 보다 크면 슬라이드를 오른쪽으로 애니메이션 이동한다.
        else if(sLeft > -winW * 0.9){

            $(this).stop().animate({
                left: "0px"
            }, 600, "easeOutQuart",
            function(){ /* 이동후 실행 */
                // 맨뒤 슬라이드 맨앞으로 이동
                $(this).prepend($("li",this).last())
                // css left값은 원래값인 -100% 즉, -winW로 복귀!
                .css({
                    left: -winW + "px"
                }); ///// css /////

                // 커버숨기기
                cover.hide();

            }); ///// animate /////

        } /////////// else if //////////////////

        // 3.-110%와 -90%  사이 범위이면 원래위치인 -100%로 
        //      복귀 애니메이션 이동한다.
        else {

            $(this).stop().animate({
                left: -winW + "px"
            }, 300, "easeOutQuart",
            function(){/* 애니후 실행 */

                // 커버숨기기
                cover.hide();

            });

        } ///////////// else ////////////////



    }); //////////// dragstop 함수 ////////////////////
    ///////////////////////////////////////////////////




}); ///////////// jQB ////////////////////////