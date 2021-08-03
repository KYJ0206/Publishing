<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Item PJ - 오시는길 페이지</title>
    <link rel="stylesheet" href="css/map.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/map.js"></script>
</head>

<body>
    <!-- 전체박스 -->
    <div class="wrap ibx">
        <!-- 1.상단영역 -->
        <?php include "inc/top.inc" ?>
        <!-- 2.컨텐츠영역 -->
        <main id="cont">
            <!-- 타이틀 -->
            <h2 class="stit">오시는길</h2>
            <!-- 지도메뉴 -->
            <h4 class="menu">
                <a href="#" class="on">구글맵</a> |
                <a href="#">네이버맵</a> |
                <a href="#">다음맵</a>
            </h4>
            <!-- 맵박스 -->
            <div class="map">
                <!-- 구글맵 -->
                <iframe class="gmap maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.687836674906!2d127.12227431466461!3d37.538855233471935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5550ee7371f%3A0x69ad8a5d6a37123!2z7ZiE64yA67Cx7ZmU7KCQIOyynO2YuA!5e0!3m2!1sko!2skr!4v1627955894836!5m2!1sko!2skr"></iframe>
                <!-- 
                    [ 구글지도넣기 ]
                    1. maps.google.com에서 검색함
                    2. 왼쪽 햄버거 메뉴클릭 -> 지도공유 또는 퍼가기
                    3. 대화창에서 지동퍼가기탭
                    4. HTML복사 클릭!
                    5. 소스에 붙여넣기
                -->
                <!-- 네이버맵 -->
                <img class="nmap maps" src="images/nmap.png" alt="네이버지도">
                <!-- 
                    [ 네이버지도 넣기 ]
                    1. 새로운 서버스에서는 가입후 키를 받아야함
                    2. 이미지로 다운로드해서 사용
                 -->
                <!-- 다음맵 -->
                <!-- * 카카오맵 - 지도퍼가기 -->
                <!-- 1. 지도 노드 -->
                <div id="daumRoughmapContainer1627957191819" class="root_daum_roughmap root_daum_roughmap_landing dmap maps">
                </div>

                <!--
                    2. 설치 스크립트
                    * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
                -->
                <script charset="UTF-8" class="daum_roughmap_loader_script"
                    src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

                <!-- 3. 실행 스크립트 -->
                <script charset="UTF-8">
                    let dmapAct = () => {
                        new daum.roughmap.Lander({
                            "timestamp": "1627957191819",
                            "key": "26ua7",
                            "mapWidth": "700",
                            "mapHeight": "400"
                        }).render();
                    };////// dmapAct //////////
                </script>
                <!-- 
                     [ 다음지도 넣기 ]
                     1. 지도검색후 표시자 클릭
                     2. 툴팁 메뉴에서 세번째 클릭 후 메뉴에서
                     HTML태그복사 클릭
                     3. 지도크기 설정 후 소스생성하기 버튼 클릭
                     4. 코드에 붙여넣기
                  -->
            </div>
        </main>
        <!-- 3.하단영역 -->
        <?php include "inc/info.inc" ?>
    </div>

</body>

</html>