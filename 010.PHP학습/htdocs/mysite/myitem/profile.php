<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Item PJ - 프로필 페이지</title>
    <link rel="stylesheet" href="css/profile.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/profile.js"></script>
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
            <!-- 3D 아이폰 -->
            <ul class="iphone">
                <li>
                    <span class="newFace">
                        <i class="ir">잘생긴 얼굴</i>
                    </span>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <!-- 자기소개글 박스 -->
            <div class="showtxt dtxt">
                <i class="ir">디자이너 자기소개글</i>
            </div>
            <div class="showtxt ctxt">
                <i class="ir">코더 자기소개글</i>
            </div>
        </main>
        <!-- 3.하단영역 -->
        <?php include "inc/info.inc" ?>
    </div>
    
</body>
</html>