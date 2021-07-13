// 마이 아이템 링크 시스템 JS - linksys.js

///////////////// 로딩구역 //////////////////
$(function () { //////// jQB /////////////////

    console.log("링크시스템로딩!");

    // 링크 시스템이란?
    // - GNB메뉴로 각 서브페이지를 연결하는 JS파일
    // 대상: .gnb a
    // 이벤트: click
    // 변경내용: 각 메뉴에 해당되는 페이지로 이동함
    $(".gnb a").click(function (e) {

        // a요소 기본이동 막기
        e.preventDefault();

        // 1. a요소의 텍스트 읽어오기
        let txt = $(this).text();
        // console.log("메뉴명: " + txt);

        // 2. 링크분기하기

        // 이동 url
        let url;

        switch (txt) {
            case "Home":
                url = "index.html";
                break;
            case "프로필":
                url = "profile.html";
                break;
                // "Home"과 "프로필" 외에는 모두 아이템 페이지임!
            default:
                url = "item.html?itm=" + escape(txt);
                // 2type한글문자 안깨지도록 escape처리!
        } ////////// switch case문 //////////////

        // 분기 셋팅된 url확인!
        // console.log("url : " + url);

        // 3. url 이동하기
        location.href = url;
        // window.location.href = 이동할주소
        // - window객체는 보통 생략
        // - 같은 창에서 페이지 이동함
        // 참고) 새창열기는 window.open().location.href 임

    }); /////////// click //////////////////


}); ///////////////// jQB //////////////////
////////////////////////////////////////////