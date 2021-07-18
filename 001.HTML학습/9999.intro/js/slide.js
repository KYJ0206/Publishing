// 메인 JS - main.js
console.log("연결확인");

///////////////////////////
//  슬라이드 기능 구현하기///
///////////////////////////
//  일정 시간 간격 호출하기//
// setInterval(함수,시간) -> 시간은 1/1000초
// 페이드 효과 넘기기

// 슬라이드 순번변수
var snum = 0;

setInterval(function(){
    // 1. 호출 여부 확인
    console.log("인터발");

    // 2. 대상선정 : .slide li
    var tg = document.querySelectorAll(".slide1 li,.slide2 li");

    // 3. 이전순번 슬라이드 class="on" 제거하기
    tg[snum].classList.remove("on");
    // tg변수는 요소 li들을 담고 있는 컬렉션이다
    // 이들 중 특정 순번의 li를 접근할 경우 변수[순번] 또는 변수.item(순번)
    // 위의 경우 순번은 변수 snum에 할당되어 있으므로
    // tg[snum] 또는 tg.item(snum) 으로 표현할 수 있다

    // 4. 슬라이드 순번 증가하기
    snum++;
    if(snum===4) snum=0;
    // 한계수에서 처음으로!

    // 5. 해당순번만 class="on" 주기!
    tg[snum].classList.add("on");

    

},3000); // 인터발 함수 //




