<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Item PJ - 게시판 페이지</title>
    <link rel="stylesheet" href="css/board.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script>
        /// 아이프레임 리사이즈 함수 //
        function autoResize(ifr){ // ifr - 아이프레임자신

            // 1. 컨텐츠가 모두 로딩된 아이프레임의 높이값 구하기
            let newH = 
            ifr.contentWindow.document.body.scrollHeight;
            // ifr - 전달된 아이프레임
            // contentWindow - 아이프레임에 가져온 내용객체
            // document - 불러온 페이지 document객체
            // body - 불러온 페이지의 body객체
            // scrollHeight - 페이지의 스크롤되는 전체높이
            console.log("새로운높이:" + newH);

            // 2. 구한 높이값을 아이프레임의 높이값으로 반영하기
            ifr.height = newH + 20;

        } /////// autoResize 함수 /////////
    </script>
</head>
<body>
    <!-- 로그인 세션 처리 인클루드 -->
    <?php include "inc/login_session.inc"?>

    <!-- 전체박스 -->
    <div class="wrap ibx">
        <!-- 1.상단영역 -->
        <?php include "inc/top.inc" ?>
        <!-- 2.컨텐츠영역 -->
        <main id="cont">
            <!-- 게시판 타이틀 -->
            <h2 class="stit">공지사항</h2>
            <!-- 게시판박스 -->
            <div class="bbox">
                <iframe src="http://tombap8.dothome.co.kr/bbs/board.php?bo_table=myitem" scrolling="no" onload="autoResize(this)"></iframe>
                <!-- 
                    아이프레임에 scrolling="no"를 설정하여
                    보이지 않는 영역에 대한 스크롤 생성을 없앤다!
                    이때 스크롤 하단영역이 안보임!
                    JS로 이것을 해결한다!!!
                 -->
            </div>
        </main>
        <!-- 3.하단영역 -->
        <?php include "inc/info.inc" ?>
    </div>
    
</body>
</html>