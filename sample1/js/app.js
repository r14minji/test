import {
  $contentArea,
  $headerArea,
  $navArea,
  $contentsArea,
  $bestArea,
  $footerArea,
} from "./component.js";

function createUtilsLi() {
  const ul = document.querySelector(".utils_area ul");
  const Links = ["#", "#", "#", "#"]; // href 배열로 넣기
  const utils = ["주문조회", "회원가입", "로그인"];
  const createUtils = utils.map((util, i) => {
    const utilCoponent = `
  <li>
    <a href=${Links[i]}>${util}</a>
  </li>
  `;
    return utilCoponent;
  });
  
  ul.innerHTML = createUtils.join('');
}

function createSocialLi() {
  const ul = document.querySelector(".social_area ul");
  const links = [
    "fas fa-star",
    "fab fa-instagram",
    "fab fa-apple",
    "fab fa-google-play",
    "fab fa-facebook",
  ];
  const socialLinks = links.map((link) => {
    const socialComponent = `
      <li>
        <a href= "#"><i class="${link}"></i></a>
      </li>
    `;
    return socialComponent;
  });
  const deletcomma = socialLinks.join('');
  ul.innerHTML = deletcomma;
}

function render() {
  const wrap = document.querySelector(".wrap");
  wrap.innerHTML = $contentArea;
  const header = document.querySelector(".header");
  header.innerHTML = $headerArea;
  createUtilsLi();

  const nav = document.querySelector(".nav_area");
  nav.innerHTML = $navArea;

  const slideBanner = document.querySelector(".slide_banner");
  const url = ['http://img.just-one.co.kr/shopping_mall/mainimage/spot1111.jpg', '저스트원의 봄맞이 세일 청바지 배너광고입니다.']
  const imgcomponent = `
  <img src="${url[0]}" art="${url[1]}" />
    `
  slideBanner.innerHTML = imgcomponent


  const constents = document.querySelector(".contents_area");
  constents.innerHTML = $contentsArea;
  const banner = document.querySelector('.card_banner');
  const imgArray = [
    'http://img.just-one.co.kr/shopping_mall/mainimage/banner_four1.jpg',
    'http://img.just-one.co.kr/shopping_mall/mainimage/banner_four2.jpg',
    'http://img.just-one.co.kr/shopping_mall/mainimage/banner_four3.gif',
    'http://img.just-one.co.kr/shopping_mall/mainimage/banner_four4.jpg',
  ]
  const bannercontents = imgArray.map ((img) => {
    const contentsComponent = `
      <img src="${img}" />
    `
    return contentsComponent
  })
  banner.innerHTML = bannercontents;
  
  const weeklyBest = document.querySelector('.weekly_best');
  weeklyBest.innerHTML = $bestArea;
  const item = document.querySelector('.item_area');
  const listArray = [
    {
        ref:'http://www.justone.co.kr/shopimages/jojean/0430010011463.gif?1614675436',
        art:'데님스커트',
        title:'세뮤니 뒷밴딩 플레어 데님스커트',
        fee: '17900원',
        label: '단독주문',
        labels:'주문폭주',
        review: '리뷰: 40개'
    },
    {
        ref:'http://www.justone.co.kr/shopimages/jojean/0430010011463.gif?1614675436',
        art:'데님스커트',
        title:'세뮤니 뒷밴딩 플레어 데님스커트',
        fee: '17900원',
        label: '단독주문',
        labels:'주문폭주',
        review: '리뷰: 40개'
    },
    {
        ref:'http://www.justone.co.kr/shopimages/jojean/0430010011463.gif?1614675436',
        art:'데님스커트',
        title:'세뮤니 뒷밴딩 플레어 데님스커트',
        fee: '17900원',
        label: '단독주문',
        labels:'주문폭주',
        review: '리뷰: 40개'
    },
    {
        ref:'http://www.justone.co.kr/shopimages/jojean/0430010011463.gif?1614675436',
        title:'세뮤니 뒷밴딩 플레어 데님스커트',
        fee: '17900원',
        label: '단독주문',
        labels:'주문폭주',
        review: '리뷰: 40개'
    }
  ]
  
  const listContent = listArray.map ((list) => {
    const listComponent = `
    <div class="item_box">
      <div class="img">
        <img src="${list.ref}" />
      </div>
      <h3 class="item_title">${list.title}</h3>
      <p class="item_fee">${list.fee}</p>
      <p class="item_label">
        <sapn>${list.label}</span>
        <span>${list.labels}</span>
      </p>
      <p class="item_review">${list.review}</p>
    </div>
    `
    return listComponent;
  })
  item.innerHTML = listContent;

  const footer = document.querySelector(".footer");
  footer.innerHTML = $footerArea;
  const footInfo = document.querySelector('.footer_info');
  const data = `
    <p>COMPANY : 주식회사 제이오진 </p>
    <p>OWNER : 윤은해</p>
    <p>BUSINESS LICENSE : 204-86-00983 사업자정보확인</p>
    <p>MAIL ORDER LICENSE : 제2015-서울성동-0152호</p>
    <p>ADRESS : 서울특별시 성동구 성수일로6길 33 6층 (성수동2가,아연디지털단지)</p>
    <p>RETURN : 경기 구리시 토평동 613-13 대한통운 광진지점 BSub 자양우리대리점 (저스트원)</p>
    <p>CHIEF PRIVACY OFFICER : 강대영 (온라인사업부)</p>
    <p>MAIL : justone@justone.co.kr</p>
    <p>제휴문의 : office@justone.co.kr</p>
  `
  footInfo.innerHTML = data;

  const footMenu = document.querySelector('.footer_menu');
  const menu = `
    <ul>
      <li>저스트원</li>
      <li>이용약관</li>
      <li>채용정보</li>
      <li>개인정보처리방침</li>
      <li>이용안내</li>
    </ul>
  `
  footMenu.innerHTML = menu;
  createSocialLi();
}

render();
