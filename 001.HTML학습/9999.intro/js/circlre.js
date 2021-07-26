$(function () { //////// jQB ///////////////////


    ///////////////////////////////////////
    // 여러개의 퍼센트박스를 처리할 함수 ////
    let pFn = function(ele,pct){//ele-대상요소, pct-퍼센트
        
        // 퍼센트숫자 박스
        let ptxt = $(".btns").eq(ele).find(".ptxt");
        
        // svg circle요소
        let c1 = $(".btns").eq(ele).find(".c1");
        
        
        /////////////////////////////////////
        // 퍼센트 증가 함수 //////////////////
        let prog = function (num) { //num-퍼센트값
            
            // 퍼센트값 증가
            let pers = ptxt.text();
            pers++;
            ptxt.text(pers);
            
            // svg circle 변경
            // 분할 된 값을 계산함!
            // 전체는 300%의 60%라면
            // 실제는 나머지 퍼센트를 밀어야 하므로
            // 60%는 100%-60%=40% 이다!
            // 300*0.4=120%
            
            // 계산하기
            let calc = 300 * (100 - pers) / 100;
            // 계산법 : 전체옵셋값 X (100%-현재%)/100
            
            c1.css({
                strokeDashoffset: calc + "%"
            }); ////// css //////////
            
            // 재귀호출(자기자신을 다시 호출!)
            // 자기자신을 호출하는 조건(퍼센트한계)
            if (pers < num) {
                
                setTimeout(() => {
                    prog(num);
                }, 20); /// 타임아웃 //
                
            } //////// if /////////////
            
        }; //////// prog함수 ////////////////
        /////////////////////////////////////

        // 함수를 최초호출함!
        prog(pct);//퍼센트를 전달함!
        
    } ///////////// pFn 함수 ////////////////
    /////////////////////////////////////////



    // 버튼 클릭시
    $(".act button").click(function () {
        
        // 버튼 글자읽기
        let btxt = $(this).text();
        console.log(btxt);
        
        if (btxt === "SKILL 바로보기") 
        pFn(0,95);
        pFn(1,85);
        pFn(2,75);
        pFn(3,80);
        
    }); //////////// click ///////////////
        
}); ////////////////// jQB ///////////////////