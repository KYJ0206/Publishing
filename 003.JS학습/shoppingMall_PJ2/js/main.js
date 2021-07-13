//// 쇼핑몰 PJ 2 메인 JS - main.js//////
/////// 무한이동 슬라이드 버전 /////////

/////////// html로드구역 /////////////////////
// load 이벤트 / DOMContentLoaded 이벤트
window.addEventListener("load", function () {

    // 1. 로드구역 실행확인
    console.log("로딩완료!");

    // 2. 슬라이드번호
    //(잘라서 슬라이드가 이동하므로 순번은 단지 
    // 현재 슬라이드 순번을 기억하여 블릿버튼 순번을 
    // 변경하는데 활용한다!)
    var snum = 0;

    // 3. 변경대상: 
    // 3-1. 슬라이드 : #slide
    var slide = document.querySelector("#slide");
    // 3-2. 슬라이드 개수
    let cnt = slide.querySelectorAll("li").length;
    //console.log("슬개수:"+cnt);
    // 3-3. 블릿대상 : .indic li
    let indic = document.querySelectorAll(".indic li");


    /*///////////////////////////////////////////////
        함수명: goSlide
        기능: 방향에 따른 슬라이드 이동하기+블릿변경
    */ ///////////////////////////////////////////////
    let goSlide = function (dir) { // dir 방향(1-오른쪽,0-왼쪽)
        // 1.호출확인
        console.log("고고!" + dir);

        // 2.방향별분기///////////////////////////////////
        if (dir) { //dir이 1이면 true-> 오른쪽방향 ///////

            // 1. 오른쪽방향 슬라이드번호 증가
            snum++;
            if (snum === cnt) snum = 0;
            // 한계수: 슬라이드개수가 되면 처음으로

            // 2. 변경대상 : #slide -> 바깥에 변수 slide

            // 3. 변경내용 : 슬라이드 left값 왼쪽이동으로 변경
            slide.style.left = "-100%";
            slide.style.transition = "left .8s ease-in-out";
            // 일단 이동했어!
            // 시간이 얼마나 걸렸지? 0.8초
            // 아~~~ 0.8초후에 첫번째 슬라이드를 잘라내자!
            // 그럼 시작하자!

            // setTimeout(함수,시간)
            // 일정시간 후 한번실행하는 타이밍함수임!

            // 0.8초후 함수구역 실행!//////////////
            setTimeout(function () {

                // 1.현재 li중 첫번째 요소를 선택!
                var first = slide.querySelectorAll("li")[0];

                // 2.첫번째 요소를 slide에서 맨뒤로 이동!
                slide.appendChild(first);
                // appendChild(선택요소) 
                // - 선택요소를 맨뒤로 이동하는 메서드 

                // 3.이때 left값을 -100%로 된것을 0으로 변경한다!
                slide.style.left = "0";

                // 4. left값을 0만들때 트랜지션을 없앤다!
                slide.style.transition = "none";

            }, 800); ///// 타임아웃 /////////////////

            // [ 왼쪽으로 이동하는 무한이동 슬라이드의 원리 ]
            // 1.일단 왼쪽으로 슬라이드 하나만큼(-100%) 이동한다!
            // 2.이동 후 첫번째 슬라이드를 맨 끝으로 보낸다!
            // 3. 2번을 실행시 동시에 left값을 0으로 만들어준다
            // 이때 주의 사항은 left의 트랜지션을 없애야함!


        } //////// if문 오른쪽 ////////////////////////////
        else { // 왼쪽방향 /////////////////////////////////
            
            // 1. 왼쪽방향 슬라이드번호 감소
            snum--;
            if (snum === -1) snum = cnt-1;
            // 한계수: 슬라이드개수-1 (마지막번호)

            // 2. 변경대상 : #slide -> 바깥에 변수 slide

            // 3.먼저 맨 뒤의 li를 맨 앞으로이동한다!
            // 마지막 li
            var last = slide.querySelectorAll("li")[4];
            // 첫번째 li
            var first = slide.querySelectorAll("li")[0];
            // [insertBefore 메서드] - 특정요소 앞에 넣기(이동하기)
            // insertBefore(넣을놈,넣을놈전놈) 넣을놈에 이동대상
            // 넣을놈전놈에 넣을 대상뒤에 올 요소를 써준다!
            slide.insertBefore(last, first);

            // 4. 이때 left값을 -100%로 만든다!
            slide.style.left = "-100%";
            // 5. 이때 트랜지션을 없앤다!
            slide.style.transition = "none";

            // 6. 변경내용 : 슬라이드 left값 왼쪽이동으로 변경
            // 주의사항!!! 변경내용을 잘 반영하려면 위의 설정과
            // 아래 변경내용의 실행시간에 차이가 있어야함!!!
            setTimeout(function () {
                slide.style.left = "0%";
                slide.style.transition = "left .8s ease-in-out";
            }, 10); //// 타임아웃함수(0.01초 시차를 줌) /////

            // [ 오른쪽으로 이동하는 무한이동 슬라이드의 원리 ]
            // 1.먼저 마지막 슬라이드를 맨 앞으로 보낸다!
            // 2. 1번을 실행시 동시에 left값을 -100%로 만들어준다
            // 이때 주의 사항은 left의 트랜지션을 없애야함!
            // 3.오른쪽으로 슬라이드를  이동한다! - left:0 
            // 슬라이드 이동시 트랜지션을 줄것!

        } ///////////// else문 왼쪽 ////////////////////////

        // 3. 블릿변경하기
        // 3-1. snum 확인
        console.log("snum:"+snum);
        // 3-2. 블릿초기화
        for(let x of indic){
            x.classList.remove("on");
        } ///////// for of 문 ////////
        // 3-3. 해당순번 블릿변경 ////
        indic[snum].classList.add("on");

    }; ////////// goSlide함수 /////////////////////////
    //////////////////////////////////////////////////

    /// 광클금지변수 ///
    let prot=0;//0-허용,1-불허용


    // 4. 슬라이드 오른쪽 이동버튼 셋업 ///////
    document.querySelector(".ab2").onclick =
        function () {

            ////////// 광클금지 ////////////
            if(prot) return;//돌아가!
            prot=1;//불허용!
            setTimeout(()=>{prot=0;},800);
            ///// 0.8초후 허용! ////////////

            // 1. 호출확인
            console.log("나,오른쪽!");

            // 2. 슬라이드 이동함수 호출
            goSlide(1);

        }; /////// click이벤트 함수 ///////////////

    // 5. 슬라이드 왼쪽 이동버튼 셋업 ////////
    document.querySelector(".ab1").onclick =
        function () {
            
             ////////// 광클금지 ////////////
             if(prot) return;//돌아가!
             prot=1;//불허용!
             setTimeout(()=>{prot=0;},800);
             ///// 0.8초후 허용! ////////////

            // 1. 호출확인
            console.log("나,왼쪽!");

            // 2. 슬라이드 이동함수 호출
            goSlide(0);

        }; /////// click이벤트 함수 ///////////////




}); ////////// 로드구역 ////////////////////////