$(function () { /// jQB ////////////////////////

    // 메뉴 a요소 기본이동 막기!
    $(".gnb a,.indic a").click(function (e) {
        e.preventDefault();
    }); ///////////// click ////////////////

    //// GNB메뉴 클릭시 해당 페이지 위치로 이동 애니메이션
    // 이벤트 대상: .gnb li + .indic li
    // 변경 대상: html,body
    $(".gnb li,.indic li").click(function (e) {

        // 0. 클릭된 li순번 구해오기
        let idx = $(this).index();
        console.log("순번:" + idx);

        // 1. 하위a요소의 href값 읽어오기
        let idnm = $("a", this).attr("href");
        // console.log("href값:" + idnm);

        // 2. 아이디값에 해당하위 top값 위치구하기
        // top값을 구해서 스크롤 애니메이션 이동에 사용함!
        let pos = $(idnm).offset().top;
        // offset() 메서드 : 요소의 기본 셋팅 정보를 리턴함
        // - top,left,width,height 등 을 알수 있다!
        // console.log("위치값:" + pos);

        // 3. 스크롤 애니메이션으로 페이지 이동하기
        // 세로스크롤 이동속성: scrollTop
        // 참고: 가로스크롤 이동속성: scrollLeft
        // 스크롤 이동대상: html,body
        // -> 범용브라우저에서 사용하는 스크롤대상
        $("html,body").animate({
            scrollTop: pos + "px"
        }, 600, "easeOutQuint");
        // 애니메이션 이동후 pageAction함수 호출하기!!!

        // 4. 클릭된 a요소의 부모 li에 class="on" 넣기
        $(".gnb li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        $(".indic li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        //다른 형제 li들 class="on" 지움

        // 6. li순번과 pno와 일치하기!
        // 전역변수 페이지번호(pno)와 gnb메뉴 li순번과 같다!
        pno = idx;
        // console.log("페이지번호:" + pno);

        pageAction();


    }); ///////////// click ///////////////

}); ///////////// jQB ////////////////////////