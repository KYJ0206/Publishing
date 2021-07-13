// 메인 JS - main.js
console.log("연결확인");

////////////////////////////
/// 슬라이드 기능 구현하기 ///
////////////////////////////
//  일정 시간 간격 호출하기 //
// setInterval(함수,시간) -> 시간은 1/1000초
setInterval(function(){
    // 1. 호출 여부 확인
    console.log("인터발");

    // 2. 대상선정 : .slide
    var tg = document.querySelector(".slide");

    // 3. 변경내용 : 대상의 top값이 -100%로 변경
    tg.style.top = "-100%";
    tg.style.transition = ".6s";

    // 4. 이동후 작업!
    // 위의 이동설정후에 적용해야 함!(이동시간 0.6초후!)
    // 왜? top값, transition값이 변경 되므로

    // 일정 시간 후 한번 함수실행!
    setTimeout(function(){
        
        // 4-1. 첫번째 li를 잘라서 맨뒤로 이동함
        // 첫번째 li 선택
        var first = tg.querySelectorAll("li")[0];
        // 맨뒤로 이동 메서드 -> appendChild(요소)
        tg.appendChild(first);
    
        // 4-2. top값이 -100% 이므로 0 으로변경
        tg.style.top = "0";
    
        // 4-3. 이때 트렌지션 없애기
        tg.style.transition = "none";

    },600);///////// -> 600은 0.6초 타임아웃 함수 //////////
    //////////////////////////////////////////////////////

},3000); // 인터발 함수 //

// classList 객체
// - 요소에 클래스를 넣고 빼는 기능을 가진 객체
// 1) add(클래스명) - 클래스 넣기
// 2) remove(클래스명) - 클래스 지우기
// 3) toggle(클래스명) - 클래스 없으면 넣고 있으면 지우기



/*//////////////////////////// 
    [ 함수명 : chgTab ]
    기능 : 탭메뉴 변경하기
*/////////////////////////////
function chgTab(i1,i2){
    // i1 = class를 넣을 li순번
    // i2 = class를 뺄 li 순번
    // 1. 함수호출확인
    console.log("탭 변경"+i1+"/"+i2);
    
    // 2. 대상선정 : .tm>li 탭메뉴li .tc>li 탭내용 li
    // 2-1. 탭메뉴li
    var tm = document.querySelectorAll(".tm>li");
    // 2-2. 탭내용li
    var tc = document.querySelectorAll(".tc>li");

    // 3. 클래스 on 넣기, on 뺴기
    // 3-2. 클래스 넣기 : classList.add
    tm[i1].classList.add("on");
    tc[i1].classList.add("on");

    // 3-1. 클래스 빼기 : classList.remove
    tm[i2].classList.remove("on");
    tc[i2].classList.remove("on");

}//////// chgTab 함수 ////////
//////////////////////////////



/*//////////////////////////// 
    [ 함수명 : popup ]
    기능 : 팝업 열기/닫기
*/////////////////////////////
function popup(sts){ // sts 팝업상태 전달값(block.none)
    
    // 1. 함수호출확인
    console.log("팝업확인"+sts);
    
    // 2. 대상선정 : .pop
    var pop = document.querySelector(".pop");

    // 3. 변경내용 : 팝업창 보이기 / 숨기기
    pop.style.display = sts;


}//////// popup 함수 ////////
//////////////////////////////


