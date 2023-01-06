# My Traview
<div>
 <h2>1. Getting Started</h2>
<h3> FRONTEND Getting Started </h3>
Run the development server:
npm start<br>
<h3> BACKEND Getting Started </h3>
Run the development server:
Run Application<br><br>
</div>
<div>
<h2>2. Development Topic</h2>
 <P>여행 리뷰 커뮤니티</P>
 회원가입 및 로그인하여 이용자들의 여행 후기를 남기는 게시판으로,<br>
 여행에 관련한 모든 것에 대한 리뷰를 남길 수 있습니다.<br>
 먹거리, 교통, 숙박, 관광지, 테마별 코스 등 카테고리별로 후기가 남기도록 태그를 걸어야 작성할 수 있게 만들어<br>
 모든 이용자들이 원하는 지역과 카테고리별 후기를 쉽게 찾아볼 수 있게 만들었습니다.<br><br>
<p> My Traview : My Travel + Review 의 합성어로, 각 개개인의 리얼한 여행 리뷰만을 담았다는 의미입니다.</p><br>
</div>
<div>
<h2>3. project development period</h2>
 2022-12-14 ~ 2023-01-12<br><br>
</div>
<div>
<h2>4. Introduce team members</h2>
&nbsp;
천보라 - 프로젝트 기획, 하트 서비스 백/프론트, UI 통일/틀 구성, css 전반<br><br>
&nbsp;
문형기 - 전체적인 기능 구현 및 프론트 연동 서포트, 지도 서비스 백/프론트<br><br>
&nbsp;
이주용 - 댓글 서비스 백/프론트, UI 틀 구성, css 일부<br><br>
&nbsp;
서영석 - 유저 서비스 백/프론트, UI 틀 구성, css 일부<br><br>
&nbsp;
이동찬 - 게시글 서비스 백 전반 및 프론트 연동 일부<br><br>
</div>
<div>
<h2>5. Analysis of Requirements</h2>
0. 요구사항 정리<br><br>
1. 로그인/ 로그아웃/회원가입<br>
- 유저 인증<br>
- 아이디 중복 체크<br>
- 이메일/폰번호(비번/아이디 잊었을 때 임시비번 전송, 광고전송)<br>
- 집주소(현재 위치 기능 느낌) 있어야 할지 모르겠음<br>
- 비번 확인, 비번 보이기/안보이기, 새로고침 해도 로그인 유지<br>
- 비회원 - 회원만 읽을 수 있는 글입니다.<br><br>
2. 마이 페이지
- 내가 쓴 글 조회(수정/삭제)
- 내 정보 - 수정
- 좋아요 한 글 조회<br><br>
3. 메인 화면
- 원페이징 처리
- 홈 화면, 검색창, 추천글, 이벤트 게시판으로 구성<br><br>
4. 지도 기능
-  카카오 및 네이버 지도 api를 활용하여 마우스 및 키보드로 지도를 동적으로<br>
움직이면 해당 위치에 있는 여러 숙박 시설 및 놀거리가 나오게끔 설계할 것.<br>
지도로 해당 여행지에 대한 정보를 볼 수 있는 부분이 있어야 함.<br>
==> 해당 위치로 이동해서 내가 원하는 것을 선택했을 때 나타나도록 할 것<br><br>
- ex) 서울로 여행을 간다고 할 시, 지도를 동적으로 서울로 옮김.<br>
그 이후 신정동에서 맛집을 누르면 맛집에 대한 위치 및 리뷰를 알려주고(리뷰가 달렸을 시), <br>
숙박을 누르면 숙박에 대한 위치 및 리뷰를 알려줌(리뷰가 달렸을 시)<br>
위 사항은 지도 범위 내에서만 표시할 수 있게끔 설계할 것.<br><br>
5. 리뷰 게시판
- 숙박 정보 및 레저, 식당, 기념품샵, 관광지 리뷰
- 테마별 코스 리뷰 ( 추천 게시글에서 다녀온 코스 추천도 가능 )<br><br>
6. 게시물 작성/댓글 작성 기능(네이버 카페 참조)
- 본인이 쓴 게시글과 댓글만 수정 삭제 가능
- 글쓰기 보드 : 카테고리 선택 가능, 제목, 글내용, 사진/동영상 첨부, 파일 첨부(엑셀 등), 글꼴, 글자크기 설정, 태그 작성
- 댓글 보드 : 내용, 작성자(대댓글 기능 없음/ 배민 같이 후기에 대한 감상 정도만 남김)
- 서브 포스트 : 카테고리(누르면 해당 목록 이동), 제목, 작성자, 작성일, 조회수, 내용, 댓글, 대댓글, 작성자 등급
- 메인 포스트 : 글번호, 제목, 작성자, 작성일(작성 시간 업로드), 조회수, 왼쪽이나 오른쪽에 카테고리 나열, 작성자 등급
                         단, 작성일에 수정됨 이라는 부분이 뜨지 않도록
                         공지사항 게시글 상단 고정
- 카테고리 별로 api 다르게 해서 항목별로 뜨도록<br><br>
7. 기업체 홍보 게시판
- 광고 수익 - 몇 건 이상 몇달간 등 기준으로 해당 금액에서 이용 가능<br><br>
8. 좋아요 기능
- 좋아요가 쌓이면 추천글로 올라감<br><br>
9. 추천/검색 기능
- 여행 코스 추천 : 지역별, 기간별, 테마별 여행코스 게시글 작성<br><br>
10. 태그 기능
- 카테고리별 정해진 태그 선택해야 글 작성 가능
- 태그로 후기의 카테고리가 정해짐<br><br>
</div>
<div>
<h2>6. API Docs(with POSTMAN)</h2>
<br><br>
</div>
<h2>7. ERD</h2>
<img width="80%" src="https://user-images.githubusercontent.com/107653158/210916375-6ee28a4d-dbd9-4947-9185-1a6a00486cc5.png"/>
<br><br>
<h2>8. Stack</h2><br>
<li>JAVA - 11</li>
<li>SPRING - 4.0.0</li>
<li>ECLIPSE - 4.2</li>
<li>SPRINGBOOT - 2.7.3</li>
<li>TAILWINDCSS - 3.2.4</li>
<li>MATERIALCSS - 5.11.2</li>
<div>
<p>
<h3>Front</h3>
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=black">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white">
</p>
</div>
<div>
<p>
<h3>Backend</h3>
<img src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white">
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white">
</p>
</div>
<div>
 <p>
  <h3>Collaboration Tools</h3>
 <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
 <img src="https://img.shields.io/badge/github-589465?style=for-the-badge&logo=github&logoColor=white">
 <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
 </p>
</div>
<div>
 <p>
  <h3>IDE</h3>
 <img src="https://img.shields.io/badge/Eclipse IDE-456789?style=for-the-badge&logo=Eclipse IDE&logoColor=white">
 <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">
 <img src="https://img.shields.io/badge/IntelliJ IDEA-254685?style=for-the-badge&logo=IntelliJ IDEA&logoColor=white">
 </p>
</div>
