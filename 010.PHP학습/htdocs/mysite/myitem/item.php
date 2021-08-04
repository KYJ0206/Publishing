<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Item PJ - 아이템 페이지</title>
    <link rel="stylesheet" href="css/item.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/item.js"></script>
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
            <!-- 2-1.아이템 타이틀 -->
            <h2 class="stit"></h2>
            <!-- 2-2.아이템 컨텐츠 박스 -->
            <div class="itbx">
                <!-- 2-2-1.이미지박스 -->
                <figure class="imbx"></figure>
                <!-- 2-2-2.설명박스 -->
                <p class="dcbx"></p>
            </div>
        </main>
        <!-- 3.하단영역 -->
        <?php include "inc/info.inc" ?>
    </div>
    
</body>
</html>