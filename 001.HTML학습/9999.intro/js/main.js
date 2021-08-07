$(function () { /// jQB ////////////////////////


    $("html,body").animate({
        scrollTop: "0px"
    }, 1000, "easeOutQuint");

    // 메뉴 a요소 기본이동 막기!
    $(".gnb a,.indic a").click(function (e) {
        e.preventDefault();
    }); ///////////// click ////////////////

    function pageAction2() {
        if (pno === 1) {
            pFn(0, 94);
            pFn(1, 89);
            pFn(2, 79);
            pFn(3, 84);

        } else {
            $(".c1").attr("style", "");
            $(".ptxt").text("");
        }


    } /////////// pageAction2 ////////////////

    

    //// GNB메뉴 인디케이터 클릭시 해당 페이지 위치로 이동 애니메이션
    $(".gnb li,.indic li").click(function () {



        // 0. 클릭된 li순번 구해오기
        let idx = $(this).index();
        // console.log("순번:" + idx);



        // 1. 하위a요소의 href값 읽어오기
        let idnm = $("a", this).attr("href");
        // console.log("href값:" + idnm);



        // 2. 아이디값에 해당하위 top값 위치구하기
        let pos = $(idnm).offset().top;
        // console.log("위치값:" + pos);



        // 3. GNB메뉴 인디케이터 클릭시 스크롤 애니메이션으로 페이지 이동하기
        $("html,body").stop().animate({
            scrollTop: pos + "px"
        }, 1000, "easeOutQuint",pageAction2);
        // 애니메이션 이동후 pageAction함수 호출하기!!!

        



        // 4. 클릭된 a요소의 부모 li에 class="on" 넣기
        $(".gnb li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        $(".indic li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        //다른 형제 li들 class="on" 지움


        
        // 5. li순번과 pno와 일치하기!
        pno = idx;
        // console.log("페이지번호:" + pno);

        pageAction();


    }); ///////////// click ///////////////


    // 햄버거버튼 클릭시 class = "on" 토글
    $(".ham").click(function () {

    $(this).toggleClass("on");

    }); //////////// click ////////////

    // 버블링막기
    $(".ham ul").click(function (e) {

        e.stopPropagation();

    }); //////////// click ////////////


    // 스와이프
    var swiper = new Swiper(".mySwiper", {
        effect: "flip",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });


    // 폼메일
    function chkMailFrm() {

        var f = document.formmail;
       
        if (!f.title.value) {
       
         alert("제목을 입력해주세요");
       
         f.title.focus();
       
         return false;
       
        }
       
        if (!f.senduser.value) {
       
         alert("이름을 입력해주세요");
       
         f.senduser.focus();
       
         return false;
       
        }
       
        if (!f.phone.value) {
       
         alert("전화번호을 입력해주세요");
       
         f.phone.focus();
       
         return false;
       
        }
       
        if (!f.email.value) {
       
         alert("이메일을 입력해주세요");
       
         f.email.focus();
       
         return false;
       
        }
       
       }
    
}); ///////////// jQB ////////////////////////
