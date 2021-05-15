export const $mainWrap = `
<div class="header_wrap"></div>
<div class="contents_wrap"></div>

`;

export const $header = `
<header class="header">
  <h1 class="logo">네이버</h1>
  <div class="utils_area">
    <ul></ul>
  </div>
  <div class="search_area">
    <form>
      <input type="text">
      <button type="submit" class=search>
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
</header>
`;
export const $gnbArea = `
<nav class="gnb_area">
  <div class="nav_wrap">
    <div class="nav">
      <ul></ul>
    </div>
    <div class="weather">
      <ul>
        <li>미세 좋음/초미세 좋음</li>
        <li>5.0° 맑음</li>
      </ul>
    </div>
  </div>
</nav>  
`;

export const $mainConentArea = `
<section class="main_contents_area">
  <div class="main_banner">
    <img src="https://ssl.pstatic.net/tveta/libs/1320/1320361/43b994d945347d63d298_20210305114149760.jpg"
      alt="두 동생과 남겨진 후 혼자서는 해결못할 가난 앞에 서있는 가은이, 후원하기">
  </div>
  <div class="newsstand_area">
    <div class="sum_news">
      <p>연합뉴스</p>
    </div>
    <ul></ul>
  </div>
  <div class="today_article">
    <h3>오늘 읽을만한 글</h3>
    <div class="topic"></div>
  </div>
</section>
`;

export const $sideContentArea = `
<side class="side_contents_area">
  <div class="login">
    <h2>로그인</h2>
    <P>네이버를 더 안전하고 편리하게 이용하세요</P>
    <button class=login_bnt>NAVER 로그인</button>
    <div class="login_bottom">
      <div class="bottom_a">
        <p>아이디</p>
        <p>비밀번호 찾기</p>
      </div>
      <div class="bottom_b">
        <p>회원가입</p>
      </div>
    </div>
  </div>
  <div class="economy">
    <p>환율 USD 1129</p>
  </div>
  <div class="side_banner">
    <img src="https://ssl.pstatic.net/tveta/libs/1326/1326180/52175985636d8f02021d_20210216181148076.jpg"alt="시지프스">
  </div>
  <div class="shopping_area">
    <section>
      <h2>trend_shopping</h2>
      <div class="shop_header">
        <ul></ul>
      </div>
      <div class="shop_contents"></div>
    </section>
  </div>
</side>
`;

export const $footerArea = `
<footer class="footer">
  <h2>footer</h2>
  <div class="f_banner_area"></div>
  <div class="f_notice_area">
    <a href="https://www.naver.com/NOTICE">공지사항</a>
  </div>
  <div class="f_aside_area">
    <div class="partner_box">
      <dl>
        <dt>Creators</dt>
        <dd>
          <ul>
            <li>크리에이터</li>
            <li>스몰비즈니스</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>Partner</dt>
        <dd>
          <ul>
            <li>비즈니스,광고</li>
            <li>스토에 개설</li>
            <li>지역업체등록</li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>Dvelopers</dt>
        <dd>
          <ul>
            <li>네이버 개발자 센터</li>
            <li>오픈 API</li>
            <li>오픈 소스</li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
  <!--f_aside_area end-->
  <div class="f_corp_area">
    <ul>
      <li>회사소개</li>
      <li>인재채용</li>
      <li>제휴제안</li>
      <li>이용약관</li>
      <li>개인정보처리방침</li>
    </ul>
  </div>
</footer>
`;
