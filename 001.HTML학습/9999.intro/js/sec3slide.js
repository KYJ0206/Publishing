// 배너순번
let bseq = 0;


$(function () { /// jQB ////////////////////////


    //////////////////////////////////////
    /// 배너 드래그 이동하기 ///////////////
    /// 대상: .slide 
    let pslide = $(".pslide");
    /// 사용 메서드: draggable() 
    pslide.draggable({
        axis: "x" // x축고정
    }); ///// draggable ///////////

    ////////////////////////////////////////////
    /////// 배너이동 함수 : goSlide /////////////
    ////////////////////////////////////////////
    let goSlide = function (dir) {
        // dir-1 왼쪽이동, dir-0 오른쪽이동
        if (dir) { // 왼쪽이동
            pslide.stop().animate({
                    left: -winW * 2 + "px"
                }, 600, "easeOutQuint",
                function () { // 이동 후 실행

                    // 맨앞 슬라이드 맨뒤로 이동!
                    $(this).append($(this).find("li").first())
                        // css left값을 -100%값 즉 -winW로 복귀!
                        .css({
                            left: -winW + "px"
                        }); //////// css ///////

                    //커버숨기기
                    cover.hide();

                    //배너타이틀등장 함수호출!
                    banTit();

                }); //////// animate //////////

            // 배너블릿변경하기 //
            bseq++;
            if (bseq === 2) bseq = 0;
            chgIndic();

        } ///////////////// if /////////////////
        else { // 오른쪽이동 ////////////////////
            pslide.stop().animate({
                    left: "0px"
                }, 600, "easeOutQuint",
                function () { // 이동 후 실행

                    // 맨뒤 슬라이드 맨앞으로 이동
                    $(this).prepend($("li", this).last())
                        // css left값은 원래값인 -100% 즉, -winW로 복귀!
                        .css({
                            left: -winW + "px"
                        }); ///////// css ////////

                    //커버숨기기
                    cover.hide();

                    //배너타이틀등장 함수호출!
                    banTit();

                }); //////////// animate ///////

            // 배너블릿변경하기 //
            bseq--;
            if (bseq === -1) bseq = 5;
            chgIndic();

        } /////////////// else //////////////////

    }; //////////////// goSlide함수 //////////////

    ///////////////////////////////////////////
    //////// 배너이동 애니메이션 하기 //////////
    ///////////////////////////////////////////

    // 이벤트 대상: .pslide
    // 이벤트 종류: dragstop
    // 사용 메서드: on(이벤트명,함수)
    // 광드래그 막기: .cover요소를 보였다가 이동 애니후 숨기기
    let cover = $(".cover");
    // 화면의 width크기
    let winW = $(window).width();
    //console.log("윈도우width:"+winW);

    pslide.on("dragstop", function () {

        // 자동넘김 지우기함수 호출!
        clearAuto();

        // 광드래그 막기 커버보이기
        cover.show();

        // 알아야할 값! -> 슬라이드의 left값!
        let sLeft = $(this).offset().left;
        // offset().left 는 현재 선택요소의 left값 구하기
        //console.log("현재left:"+sLeft);

        // 1. -110% 보다 작으면 슬라이드를 왼쪽으로 애니메이션 이동한다.
        if (sLeft < -winW * 1.1) {

            // 슬라이드 이동함수 호출!(왼쪽이동은 1번)
            goSlide(1);

        } /////////// if //////////////////

        // 2.-90% 보다 크면 슬라이드를 오른쪽으로 애니메이션 이동한다.
        else if (sLeft > -winW * 0.9) {

            // 슬라이드 이동함수 호출!(오른쪽이동은 0번)
            goSlide(0);

        } /////////// else if //////////////////

        // 3.-110%와 -90%  사이 범위이면 원래위치인 -100%로 
        //      복귀 애니메이션 이동한다.
        else {

            $(this).stop().animate({
                    left: -winW + "px"
                }, 300, "easeOutQuint",
                function () { /// 애니 후 실행

                    //커버숨기기
                    cover.hide();

                }); //////// animate ///////

        } ///////////// else ////////////////



    }); //////////// dragstop 함수 ////////////////////
    ///////////////////////////////////////////////////




}); ///////////// jQB ////////////////////////